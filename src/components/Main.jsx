import React,{useState} from "react";
function Main(props) {
    const [text,setText] = useState("enter text here")
    return (
    <>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary">Convert to uppercase</button>
    </>
  );
}

export default Main;
