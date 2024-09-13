/* eslint-disable react/jsx-key */

/* eslint-disable react/prop-types */
const FetchData = ({ userData }) => {
 

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-white w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4 place-items-center">
        {userData.map((user) => (
          <div key={user.id} className="">
            <a target="_blank" href={user.html_url}>
              <img
                src={user.avatar_url}
                className="sm:h-[180px] md:h-[250px] rounded-full cursor-pointer"
                alt=""
              />
            </a>
            <h2 className="text-center">{user.login}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchData;
