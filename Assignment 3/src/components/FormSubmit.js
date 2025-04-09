/* import React, { useState } from 'react';

const FormSubmit = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-10">
      <input
        type="text"
        className="border p-2 rounded mb-4"
        placeholder="Enter text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default FormSubmit; */


import React, { useState } from 'react'

const FormSubmit = () => {
    const [input, setInput] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
    }
  return (
    <div>
        <form>
            <input type='text' className='border p-2 rounded mb-4' placeholder='Enter Text' onSubmit={(e) => setInput(e.target.value)}/>
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Submit</button>
        </form>
    </div>
  )
}

export default FormSubmit