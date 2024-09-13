import { useState } from "react";
import Button from "./components/Button";
import FetchData from "./components/FetchData";
import Input from "./components/Input";

function App() {
  const [inputVal, setInputVal] = useState("India");
  const [userData, setUserData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [perPage, setPerPage] = useState(100);
  const [showLoadMore, setShowLoadMore] = useState(false)
  

  function inputValue(e) {
    setInputVal(e.target.value.split(" ").join("-"));
  }

  async function handleSubmit(e) {
    setUserData([])
    e.preventDefault();
    getUserData()
  }

  async function getUserData(){
    setShowLoadMore(false)
    setPageNo(pageNo => pageNo + 1)
    setPerPage(perPage + 100);

    const api = `https://api.github.com/search/users?q=location:${inputVal}&page=${pageNo}&per_page=${perPage}`;
    try {
      const response = await fetch(api);
      const data = await response.json();
      setUserData((prevData) => [...prevData, ...data.items]);
      setShowLoadMore(true)
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <div className="py-4 bg-black min-h-screen text-white flex items-center justify-center flex-col gap-4 font-josefin">
        <h1 className="font-josefin text-center bg-black text-white h-14 text-2xl">
          Github Users Based on Location
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex gap-4 flex-col items-center justify-center  max-w-[800px] w-[95%] mx-auto"
        >
          <Input inputVal={inputVal} inputValue={inputValue} />
          <Button className="px-12 rounded py-2 bg-blue-700">Search</Button>
        </form>
        <div className="max-w-full w-[96%]">
          <FetchData
            pageNo={pageNo}
            setPageNo={setPageNo}
            inputVal={inputVal}
            userData={userData}
            handleSubmit={handleSubmit}
          />
        </div>
        {!showLoadMore && <p className="text-center">What Are you waiting for !?</p>}
        {
          showLoadMore ? <Button className="px-12 py-3 bg-blue-600 rounded" onClick={getUserData}>Load More</Button> : null
        }
      </div>
    </>
  );
}

export default App;
