/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const FetchData = ({ userData }) => {
  console.log(userData);

  if (!userData || !userData.items) {
    return <p className="text-center">Search Something to Get Started!</p>;
  }

  return (
    <div className="text-white w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4 place-items-center">
      {userData.items.map((user) => (
        <div className="">
          <img
            src={user.avatar_url}
            className="h-[180px] md:h-[250px] rounded-full"
            alt=""
          />
          <h2 className="text-center">{user.login}</h2>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
