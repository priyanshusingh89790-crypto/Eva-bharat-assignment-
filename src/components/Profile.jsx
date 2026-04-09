import RepoCard from "./Repocard";
import UserProfile from "./UserProfile";
const Profile = ({
  selectedUser,
  repos,
  loading,
  setLanguage,
  sortBy,
  language,
  error,
  users,
  setSelectedUser,
  isSearchSubmitted,
  setSearchSubmitted,
}) => {
  let displayRepos = [...repos];

  if (language) {
    displayRepos = displayRepos.filter((repo) => repo.language === language);
  }

  if (sortBy === "stars") {
    displayRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
  }

  if (sortBy === "forks") {
    displayRepos.sort((a, b) => b.forks_count - a.forks_count);
  }
  if (!selectedUser && !isSearchSubmitted)
    return (
      <div className="flex items-center justify-center absolute top-1/3 text-gray-700 dark:text-gray-400">
        <p className="lg:text-lg md:text-md text-sm dark:text-white"> 🔍 Search for a GitHub user to get started</p>
      </div>
    );

  const languages = [
    ...new Set(repos.map((repo) => repo.language).filter(Boolean)),
  ].sort();

  return (
    <div className="lg:p-8 p-4 lg:max-w-7xl w-full flex flex-col items-center lg:gap-8 gap-4 justify-center ">
      {error && (
        <p className="text-red-500">Something went wrong. Please try again.</p>
      )}
      {isSearchSubmitted && !selectedUser && users.length > 0 && (
  <div className="p-6 flex flex-col w-full gap-4">
    {users.map((user) => (
      <div
        key={user.id}
        onClick={() => {setSelectedUser(user); setSearchSubmitted(false);}}
        className="bg-white dark:bg-gray-800 p-4 flex items-center gap-4 rounded-lg shadow cursor-pointer"
      >
        <img src={user.avatar_url} className="w-16 h-16 rounded-full" />
        <p className="text-gray-900 dark:text-white">
          {user.login}
        </p>
      </div>
    ))}
  </div>
)}
     {selectedUser && <UserProfile selectedUser={selectedUser}/>}
      <div className="w-full lg:gap-8 gap-4 flex flex-col">
        <div className="flex justify-end items-end w-full flex-col gap-4">
         {selectedUser && (<select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="lg:p-2 p-1 rounded border dark:bg-gray-600 bg-white border-gray-300 dark:border-gray-700 dark:text-white"
          >
            <option value="">All Languages</option>

            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>)}
          </div>
          <>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : displayRepos.length === 0 ? (
            <p className="text-center text-gray-500">
              No repositories found for this filter
            </p>
          ) : (
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 w-full gap-4 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
              {displayRepos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          )}
        </>
      </div>

    </div>
  );
};

export default Profile;
