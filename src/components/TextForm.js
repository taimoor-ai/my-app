import React, { useState, useRef } from "react";

export default function TextForm({ heading = "i am heading",Alert,mode={theme:'light',
  backgroundColor:'white',
  color:'black',
  display:'enable DarkMode'}}) {
  const [text, updateText] = useState("");
  const [originalText, originaTextChange] = useState("");
  const listRef = useRef(null);
  function uppHandleClick() {
    let temp = text;
    temp = temp.toUpperCase();
    updateText(temp);
    if(text.length>0){
    Alert('success','convert to upperCase')}else{
      Alert('warning','please Write Something in TextArea')
    }
  }
  const handleonclick = (event) => {
    updateText(event.target.value);
  };
  const lowerHandleClick = () => {
    let temp = text;
    temp = temp.toLowerCase();
    updateText(temp);
    if(text.length>0){
    Alert('success','convert to lowerCase')}
    else{
      Alert('warning','please Write Something in TextArea')
    }
  };
  function copyText() {
    // Select the text field
    // inputElement.select();
    // inputElement.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the input field to the clipboard
    try{
    navigator.clipboard
      .writeText(text)
      .then(() => {
        if(text.length>0){
          Alert('success','copy ToClipBoard')}else{
            Alert('warning','please Write Something in TextArea')
          }
      })
      .catch((err) => {
        Alert('danger',`${err}`)
      });}catch(err){
        Alert('danger','something Went Wrong')
      }
  }
  function clearHandleClick() {
    let newText = "";
    updateText(newText);
    if(text.length>0){
      Alert('success','clear Text')}else{
        Alert('warning','please Write Something in TextArea')
      }
  }
  function extractEmails() {
    const text1 = text;
    // Regular expression pattern for extracting emails
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

    // Find all email addresses in the text
    const emails = text1.match(emailPattern);
  

    // Display the extracted emails or a message if no emails are found
    while (listRef.current.firstChild) {
      listRef.current.removeChild(listRef.current.firstChild);
    }
    if (emails) {
      emails.forEach((email) => {
        if (listRef.current) {
          // Create a new <li> element
          const newItem = document.createElement("li");
          newItem.textContent = email;
          newItem.setAttribute("class", "list-group-item");
          // Append the new <li> to the <ul>
          listRef.current.appendChild(newItem);
        }
      });
    } else {
      const newItem = document.createElement("li");
      newItem.textContent = "no emails founds";
      newItem.setAttribute("class", "list-group-item");
      // Append the new <li> to the <ul>
      listRef.current.appendChild(newItem);
    }
  }
  function removeExtraSpaces() {
    let temp = text.split(/[ ]+/);
    updateText(temp.join(" "));
    if(text.length>0){
      Alert('success','ExtraSpaces Removed')}else{
        Alert('warning','please writeSomething in TextBox')
      }
  }
  let handlePaste = (event) => {
  
    
    // Get the pasted text from the clipboard
    const pastedText = (event.clipboardData || window.clipboardData).getData(
      "text");

  
    originaTextChange(pastedText);
  };
  function getOrignal() {
    
    updateText(originalText);
    if(text.length>0){
      
      Alert('success','originalText')}else{
        Alert('warning','please writeSomething in TextBox')
      }
  }
  return (
    <>
      <div className="mb-3">
        <h1>{heading}</h1>
        <textarea
          placeholder="Enter or paste text here"
          className="form-control"
          onChange={handleonclick}
          onPaste={handlePaste}
          id="myBox"
          rows="8"
          value={text}
          style={mode.theme==='light'?{backgroundColor:'white',color:'black'}:{backgroundColor:'transparent',color:'white'}}
        ></textarea>
      </div>
      <button className="btn btn-primary my-2 mx-2" onClick={uppHandleClick}>
        ToUppercase
      </button>
      <button className="btn btn-primary my-2 mx-2" onClick={lowerHandleClick}>
        ToLowerCase
      </button>
      <button className="btn btn-primary my-2 mx-2" onClick={clearHandleClick}>
        Clear
      </button>
      <button className="btn btn-primary my-2 mx-2" onClick={extractEmails}>
        extractEmails
      </button>
      <button className="btn btn-primary my-2 mx-2" onClick={removeExtraSpaces}>
        removeExtraSpaces
      </button>
      <button className="btn btn-primary my-2 mx-2" onClick={getOrignal}>
        originalText
      </button>

      <div className="container my-3">
        <h2>your Text Summary Here</h2>
        <p>
          <strong>
            {text.endsWith(" ") || text.length === 0
              ? text.split(" ").length - 1
              : text.split(" ").length}
          </strong>{" "}
          words and <strong>{text.length}</strong> characters
        </p>
        <p>
          read in <strong>{text.split(" ").length * 0.008}</strong> minutes
        </p>
        <h2>
          Preview{" "}
          <i
            className="fa-regular fa-clipboard copyToclipBoard mx-3"
            onClick={copyText}
          ></i>
        </h2>

        <p>{text.length>0?text:'please write something in the textArea above to previewHere'}</p>
      </div>
      <h2>Email founds</h2>
      <ul className="list-group" ref={listRef}></ul>
    </>
  );
}
