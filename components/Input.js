import React, { useState } from "react";

function Input(props) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting and reloading the page

    if (inputText.trim() !== '') {
      props.addList(inputText);
      setInputText(''); // Clear the input field
    }
  };
  
  return (
    <form className='input' onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='Enter to do' 
        value={inputText} 
        className="in-bar" 
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="button" type="submit">+</button>
    </form>
  );
}
export default Input;