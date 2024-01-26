import React, { useState } from "react";

const Textform = (props) => {
  const handleonchange = (e) => {
    settext(e.target.value);
  };
  const handleonupclick = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("Converted to UpperCase", "success");
  };
  const handleondownclick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showalert("Converted to LowerCase", "success");
  };
  const capitalizeletters = () => {
    let newtext = text
      .toLowerCase()
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(" ");
    settext(newtext);
    props.showalert("Capitalized ", "success");
  };
  const [text, settext] = useState("");
  return (
    <>
      <div
        className="mb-3 container"
        style={{
          color:
            props.mode === "light" || props.mode === "banana"
              ? "black"
              : "white",
        }}
      >
        <h1 for="exampleFormControlTextarea1" class="form-label">
          {props.formheading}
        </h1>
        <textarea
          style={{
            backgroundColor:
              props.mode === "light" || props.mode === "banana"
                ? "white"
                : "#272d46",
            color:
              props.mode === "light" || props.mode === "banana"
                ? "black"
                : "white",
          }}
          value={text}
          onChange={handleonchange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button
          disabled={text.length === 0}
          onClick={handleonupclick}
          className="btn btn-primary mx-1 my-1"
        >
          Click to convert into Uppercase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleondownclick}
          className="btn btn-primary mx-1 my-1"
        >
          Click to convert into Lowercase
        </button>
        <button
          disabled={text.length === 0}
          onClick={capitalizeletters}
          className="btn btn-primary mx-1 my-1"
        >
          Capitalize Letters
        </button>
      </div>
      <div
        style={{
          color:
            props.mode === "light" || props.mode === "banana"
              ? "black"
              : "white",
        }}
        className="container"
      >
        <h2 className="my-3">Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words And {text.length} Characters
        </p>
        <h3>PREVIEW</h3>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Textform;
