/* eslint-disable react/jsx-key */

import Button from "./Button";

/* eslint-disable react/prop-types */
const FetchData = ({ userData, setPageNo, pageNos, handleSubmit }) => {
  console.log(userData);

  if (!userData || !userData.items) {
    return <p className="text-center">Search Something to Get Started!</p>;
  }

  function increasePage() {
    setPageNo((pageNos) => pageNos + 1);
    handleSubmit();
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-white w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4 place-items-center">
        {userData.items.map((user) => (
          <div className="">
            <a target="_blank" href={user.html_url}>
              <img
                src={user.avatar_url}
                className="h-[180px] md:h-[250px] rounded-full cursor-pointer"
                alt=""
              />
            </a>
            <h2 className="text-center">{user.login}</h2>
          </div>
        ))}
      </div>
      <Button
        onClick={increasePage}
        className="text-center px-12 rounded py-2 bg-blue-700"
      >
        Load More
      </Button>
    </div>
  );
};

export default FetchData;
