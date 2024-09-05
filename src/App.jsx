import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [inputVal, setInputVal] = useState("");

  function inputValue(e) {
    setInputVal(e.target.value.split(" ").join("-"));
  }

  function handleSubmit(e) {
    e.preventDefault();
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
          <Button />
        </form>
      </div>
    </>
  );
}

export default App;
