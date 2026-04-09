const UserProfile = ({selectedUser}) => {
  if(!selectedUser) return null;
    return(
<div className="flex flex-col bg-white dark:bg-gray-800 lg:p-8 p-4 rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-700 items-center gap-4">
        <img
          src={selectedUser.avatar_url}
          className="lg:w-40 lg:h-40 w-20 h-20 rounded-full"
        />
        <h1 className="lg:text-2xl text-xl font-bold dark:text-white">
          {selectedUser.login}
        </h1>
      </div>
    )
}
export default UserProfile;