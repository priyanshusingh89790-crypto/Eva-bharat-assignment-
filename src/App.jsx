import React, { useState } from "react";
import Header from "./components/Header";
import useDebounce from "./components/hooks/useDebounce";
import useGithubusers from "./components/hooks/useGithubusers";
import Profile from "./components/Profile";
import useUserrepo from "./components/hooks/useUserrepo";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const debouncedSearch = useDebounce(searchTerm, 400);
  const {users} = useGithubusers(debouncedSearch);
  const [selectedUser, setSelectedUser] = useState(null);
  const {repos,loading} = useUserrepo(selectedUser?.login);
 
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        users={users}
        setSelectedUser={setSelectedUser}
      />
      <Profile selectedUser={selectedUser} repos={repos} loading={loading}/>
    </div>
  );
}

export default App;