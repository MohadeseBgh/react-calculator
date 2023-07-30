const Button = (props) => {
  return(
      <button className={`flex text-white justify-center items-center content-center py-4 border border-gray-700 rounded-full shadow-inner shadow-color7
      ${props.type === "operator" ? "bg-color8" : props.type === "operand" ? "bg-gray-700" : props.type === "result" ? "bg-gray-700 col-span-2" : ""}`}>
          {props.icon}
      </button>
  )
}
export default Button;