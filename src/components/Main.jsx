import React, { useState } from "react";

function Main(props) {
  const [text, setText] = useState("");
  const [colour, setcolour] = useState("#000000");
  
  const handleupclick = () => {
    setText(text.toLocaleUpperCase());
  };
  const handleonchange = (e) => {
    setText(e.target.value);
  };

  const handleloclick = () => {
    setText(text.toLocaleLowerCase());
  };

  const handleclear = () => {
    setText("");
  };

  const handlecopy = (e) => {
    let innertext = e.target.innerText;
    let copytext = document.getElementById("exampleFormControlTextarea1");
    copytext.select();
    navigator.clipboard.writeText(copytext.value);
    e.target.innerText = "text copied";
    setTimeout(() => {
      e.target.innerText = innertext;
    }, 1000);
  };

  const handleoption = () => {
    let selectElement = document.querySelector("#select1");
    let output = selectElement.value;
    let copytext = document.getElementById("exampleFormControlTextarea1");
    let preview = document.getElementById("preview");
    copytext.style.fontFamily = output;
    preview.style.fontFamily = output;
  };

  const textcolour = (e) => {
    setcolour(e.target.value);
    let copytext = document.getElementById("exampleFormControlTextarea1");
    copytext.style.color = colour;
  };

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
        <button className="btn btn-primary m-2 " onClick={handleclear}>
          Clear
        </button>
        <button
          className="btn btn-primary m-2 "
          onClick={handlecopy}
          title="text copied"
        >
          copy
        </button>
        <button className="btn btn-primary m-2" onClick={handleupclick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary m-2 " onClick={handleloclick}>
          Convert to lowercase
        </button>
        <select
          id="select1"
          onChange={handleoption}
          title="fontfamily"
        >
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Verdana">Verdana</option>
          <option value="Geneva">Geneva</option>
          <option value="Roboto">Roboto</option>
          <option value="Lato">Lato</option>
          <option value="Tilt Neon">Tilt Neon</option>
          <option value="Ubuntu">Ubuntu</option>
          <option value="Roboto Slab">Roboto Slab</option>
          <option value="Rubik">Rubik</option>
          <option value="lobster">Lobster</option>
          <option value="Pacifico">Pacifico</option>
          <option value="Fredoka One">Fredoka One</option>
        </select>
        <span className="m-2" title="textcolor">
          <input
            type="color"
            onChange={textcolour}
            className="color"
            value={colour}
          />
        </span>
      </div>
      <div className="container">
        <h2>Your text summery</h2>
        <p>
          <b>{text.split(" ").length - 1}</b> words <b>{text.length} </b>
          charectors
        </p>
        <p>
          {" "}
          average time to read these words{" "}
          <b>{(text.split(" ").length - 1) * 0.008}</b>
        </p>
        <h2>Preview</h2>
        <p id="preview">{text}</p>
      </div>
    </>
  );
}

export default Main;
