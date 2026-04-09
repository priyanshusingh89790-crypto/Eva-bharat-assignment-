import RepoCard from "./Repocard";
const Profile = ({
  selectedUser,
  repos,
  loading,
  setLanguage,
  sortBy,
  language,
  error,
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
  if (!selectedUser)
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
      <div className="flex flex-col bg-white dark:bg-gray-800 lg:p-8 p-4 rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-700 items-center gap-4">
        <img
          src={selectedUser.avatar_url}
          className="lg:w-40 lg:h-40 w-20 h-20 rounded-full"
        />
        <h1 className="lg:text-2xl text-xl font-bold dark:text-white">
          {selectedUser.login}
        </h1>
      </div>
      <div className="w-full">
        <div className="flex justify-end items-end w-full flex-col gap-4">
          <select
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
          </select>
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
