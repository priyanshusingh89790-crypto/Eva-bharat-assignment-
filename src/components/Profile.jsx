const Profile = ({ selectedUser, repos, loading }) => {
  console.log(selectedUser);
  console.log(repos);
  if (!selectedUser) return null;

  return (
    <div className="p-8 w-[70%] flex flex-col items-center gap-8 justify-center ">
      <div className="flex flex-col bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-700 items-center gap-4">
        <img src={selectedUser.avatar_url} className="w-40 h-40 rounded-full" />
        <h1 className="text-2xl font-bold dark:text-white">
          {selectedUser.login}
        </h1>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
            <div className="grid grid-cols-3 w-full gap-4 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="flex flex-col w-full p-4 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer"
            >
              <h1 className="text-lg w-full dark:text-white">
                {repo.name}
              </h1>
              
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {repo.description}
      </p>

      <div className="flex gap-4 mt-2 text-sm">
        ⭐ {repo.stargazers_count}
        🍴 {repo.forks_count}
      </div>
            </div>
          ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
