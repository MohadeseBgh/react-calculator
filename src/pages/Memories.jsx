import {useState} from "react";
import Memory from "../components/memory";

const Memories = () => {
    const [mem , setmem]=useState(["466" , "888" , "45754"])
  return(
      <div className={"flex flex-col gap-5 justify-center content-center items-center"}>
          <div className={"text-2xl font-bold basis-1/12 italic mt-2 text-white drop-shadow-2xl shadow-color7"}>
              Memory
          </div>
          <div className={"basis-11/12"}>
              {mem.map((mem)=>(
                  <Memory memory={mem}/>
              ))}
          </div>

      </div>
  )
}
export default Memories