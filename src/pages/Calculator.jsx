import OutPut from "../components/outPut";
import Buttons from "../components/buttons";
import InPut from "../components/inPut";

const Calculator = () => {
  return(
      <div className={""}>
          <div className={"flex flex-col w-72 h-[460px] bg-black rounded-lg overflow-hidden "}>
              <div className={"basis-2/12 bg-[#3C4048] "}>
                  <InPut/>
              </div>
              <div className={"basis-1/12 bg-[#3C4048] "}>
                  <OutPut/>
              </div>
              <div className={"basis-9/12"}>
                  <Buttons/>
              </div>
          </div>
      </div>
  )
}
export default Calculator;