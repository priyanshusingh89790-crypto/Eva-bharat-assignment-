const RepoCard = ({ repo }) => {
  return (
    <div className="flex flex-col p-4 w-full bg-gray-50 border border-gray-200 dark:border-gray-700 dark:bg-gray-600 hover:bg-white dark:hover:bg-gray-700 rounded-lg cursor-pointer">
      
      <h1 className="lg:text-lg text-sm dark:text-white text-wrap">
        {repo.name}
      </h1>

      <p className="lg:text-sm text-xs text-gray-600 dark:text-gray-300 text-wrap">
        {repo.description}
      </p>

      <div className="flex gap-4 mt-2 text-sm">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
      </div>

    </div>
  );
};

export default RepoCard;