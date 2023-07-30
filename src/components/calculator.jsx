import OutPut from "./outPut";
import Buttons from "./buttons";

const Calculator = () => {
  return(
      <div className={"flex flex-col h-[485px] w-80 bg-black rounded-lg overflow-hidden"}>
          <div className={"basis-3/12 bg-[#3C4048] "}>
              <OutPut/>
          </div>
          <div className={"basis-9/12"}>
              <Buttons/>
          </div>
      </div>
  )
}
export default Calculator;