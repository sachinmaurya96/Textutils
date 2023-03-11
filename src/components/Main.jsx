import React,{useState} from "react";

function Main(props) {
    const [text,setText] = useState("");

    const handleupclick = () => {
        setText(text.toLocaleUpperCase())
    }
    const handleonchange = (e) => {
        setText(e.target.value)
    }
    
    const handleloclick = () => {
        setText(text.toLocaleLowerCase())
    }

    const handleclear = () =>{
        setText('')
    }

    const handlecopy = (e) => {
        let innertext = e.target.innerText
       let copytext= document.getElementById("exampleFormControlTextarea1")
       copytext.select();
       navigator.clipboard.writeText(copytext.value);
      e.target.innerText="text copied"
      setTimeout(()=>{
        e.target.innerText= innertext
      }, 1000)
      console.log(document.getElementById("cars").value)

    }
    return (
    <>
   <div className="container">
   <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleonchange}
          placeholder="enter text here"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2 " onClick={handleclear}>Clear</button>
      <button className="btn btn-primary mx-2 " onClick={handlecopy} title="text copied">copy</button>
      <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2 " onClick={handleloclick}>Convert to lowercase</button>
   </div>
   <div className="container">
    <h2>Your text summery</h2>
    <p><b>{text.split(" ").length-1}</b> words <b>{text.length} </b>charectors</p>
    <p> average time to read these words <b>{(text.split(" ").length-1)*0.008}</b></p>
    <h2>Preview</h2>
    <p>{text}</p>
   </div>
    </>
  );
}

export default Main;
