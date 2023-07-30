import React from "react";
import Calculator from "./pages/Calculator";
import Memories from "./pages/Memories";
const App = () => {
    return (
        <div className={"flex items-center justify-center  h-screen w-screen"}>
            <div className={"flex items-center  justify-center place-items-center justify-self-center md:bg-gray-700 md:rounded-l-lg"}>
                <Calculator/>
            </div>
            <div className={"w-56 h-[460px] bg-color11 hidden md:block md:rounded-r-lg border-l-2 border-black"}>
                <Memories/>
            </div>
        </div>
    );
};
export default App;