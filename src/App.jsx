import { useState } from "react";
import Button from "./components/Button";
import FetchData from "./components/FetchData";
import Input from "./components/input";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [userData, setUserData] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  function inputValue(e) {
    setInputVal(e.target.value.split(" ").join("-"));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const api = `https://api.github.com/search/users?q=location:${inputVal}&page=${pageNo}&per_page=200`;
    try {
      const response = await fetch(api);
      const data = await response.json();
      setUserData(data); // Store the fetched data in the state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <h1 className="font-josefin text-center bg-black text-white h-14 text-2xl">
        Github Users Based on Location
      </h1>
      <div className="bg-black min-h-screen text-white flex items-center justify-center flex-col gap-4 font-josefin">
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
      </div>
    </>
  );
}

export default App;
