import { FiSearch, FiMoon, FiSun } from "react-icons/fi";
import {useState} from "react";
const Header = ({ searchTerm, setSearchTerm, toggleDarkMode, isDarkMode,users,setSelectedUser}) => {
    const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-10 py-5 border-b border-gray-300">
      <div className="text-2xl font-bold dark:text-white">GitHub Explorer</div>
       <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        {!showSearch &&<FiSearch onClick={() => setShowSearch(true)} className="text-gray-900 dark:text-white" size={20} />}
        {showSearch && (
            <div className="flex items-center bg-white rounded-lg w-80 dark:bg-gray-800">
        <input
          type="text"
          placeholder="Search GitHub users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-none outline-none placeholder:text-gray-500 p-1 w-full dark:text-white dark:bg-gray-800"
        />
        {showSearch && searchTerm && users.length > 0 && (
  <div className="absolute top-14 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 z-20">
    {users.slice(0, 5).map((user) => (
      <div 
        key={user.id}
        onClick={() => {setSelectedUser(user); setShowSearch(false); setSearchTerm("")}}
        className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer"
      >
        <img
          src={user.avatar_url}
          className="w-8 h-8 rounded-full"
        />
        <span className="text-gray-900 dark:text-white">
          {user.login}
        </span>
      </div>
    ))}
  </div>
)}
        </div>
        )}
        
      </div>

      <button onClick={toggleDarkMode} className="bg-black text-white border-none dark:bg-white dark:text-black p-2 rounded-lg cursor-pointer" >
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </button>
      </div>
    </header>
  );
};

export default Header;