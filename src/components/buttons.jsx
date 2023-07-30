import {useState} from "react";
import Button from "./button";

const Buttons = () => {
    const [butt, setButt] = useState([
        {icon: "C", type: "operator"}, {icon: "DEL", type: "operator"}, {icon: "%", type: "operator"},
        {icon: "/", type: "operator"}, {icon: "7", type: "operand"}, {icon: "8", type: "operand"},
        {icon: "9", type: "operand"}, {icon: "*", type: "operator"}, {icon: "4", type: "operand"},
        {icon: "5", type: "operand"}, {icon: "6", type: "operand"}, {icon: "-", type: "operator"},
        {icon: "1", type: "operand"}, {icon: "2", type: "operand"}, {icon: "3", type: "operand"},
        {icon: "+", type: "operator"}, {icon: ".", type: "operator"}, {icon: "0", type: "operand"},
        {icon: "=", type: "result"}
    ]);

    return (
        <div className={"grid grid-cols-4 gap-3 flex justify-center content-center items-center m-2 "}>
            {butt.map((item) => (
                <Button icon={item.icon} type={item.type}/>
            ))}
        </div>
    )
}
export default Buttons;