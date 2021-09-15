import React, { useState } from 'react'

export default function Textform(props) {
    const [text, SetText] = useState();

    const UpOnChange = (event) => {
        SetText(event.target.value);
    };

    const btnUpClick = () => {
        console.log("Converting to uppercase" + text);
        let newText = text.toUpperCase();
        SetText(newText);
        props.showAlert("Converted to uppercase !", "success");
    };

    const btnLowClick = () => {
        console.log("Converting to lowercase" + text);
        let newText = text.toLowerCase();
        SetText(newText);
        props.showAlert("Converted to lowercase !", "success");
    };

    const btnExtraSpc = () => {
        let newText = text.split(/[ ]+/);
        SetText(newText.join(" "));
    };

    const btnCopy = () => {
        let copy = document.getElementById("myText");
        copy.select();
        navigator.clipboard.writeText(copy.value);
        props.showAlert("Text Copied !", "primary");
    };

    const btnCap = () => {
        let newtext = text.toLowerCase();
        console.log(newtext);
        let lowtext = newtext.trim().replace(newtext[0], "");
        let uptext = newtext[0].toUpperCase();
        SetText(uptext + lowtext);
        props.showAlert("Text Capitalized !", "primary");
    };

    const btnClrClick = () => {
        console.log("Clearing.." + text);
        let newText = "";
        SetText(newText);
        props.showAlert("Text Cleared !", "danger");
    };

    return (
        <>
            <div>
                <div className="container my-5">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter the text here</label>
                    <textarea className="form-control" id="myText" rows="5" value={text} onChange={UpOnChange} style={props.mode === "dark" ? { backgroundColor: "gray", color: "white" } : { backgroundColor: "white", color: "black" }}></textarea>
                    <button type="submit" disabled = {text?.length > 0 ? false : true} className={`btn btn-${props.mode === "dark" ? "dark" : "primary"} m-2`} onClick={btnLowClick}>Convert to Lowercase</button>
                    <button type="submit" disabled = {text?.length > 0 ? false : true} className={`btn btn-${props.mode === "dark" ? "dark" : "primary"} m-2`} onClick={btnUpClick}>Convert to Uppercase</button>
                    <button type="submit" disabled = {text?.length > 0 ? false : true} className={`btn btn-${props.mode === "dark" ? "dark" : "primary"} m-2`} onClick={btnExtraSpc}>Remove Extra Spaces</button>
                    <button type="submit" disabled = {text?.length > 0 ? false : true} className={`btn btn-${props.mode === "dark" ? "dark" : "primary"} m-2`} onClick={btnCopy}>Copy Text</button>
                    <button type="submit" disabled = {text?.length > 0 ? false : true} className={`btn btn-${props.mode === "dark" ? "dark" : "primary"} m-2`} onClick={btnCap}>Captilize Text</button>
                    <button type="submit" disabled = {text?.length > 0 ? false : true} className={`btn btn-${props.mode === "dark" ? "dark" : "primary"} m-2`} onClick={btnClrClick}>Clear</button>
                </div>

                <div className="container my-3 text-center">
                    <h3>Your text summary</h3>
                    <p>
                        <b>{text?.length > 0 ? (text?.trim()?.split(/\s+/)?.length) : 0}</b> words,
                    </p>
                    <p>
                        <b>{text?.length > 0 ? (text?.length) - (text?.split(" ")?.length - 1) : 0}</b> no. of characters &
                    </p>
                    <p>
                        <b>{text?.length > 0 ? (text?.split(" ")?.length - 1) : 0}</b> no. of whitespace
                    </p>
                </div>

                <div className="container my-3">
                    <h3>Preview</h3>
                    <p>
                        {text?.length > 0 ? text : "Write Text To Preview"}
                    </p>
                </div>
            </div>
        </>
    )
}
