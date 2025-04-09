/* import React, { useState } from 'react';

const TextUpdater = () => {
  const [text, setText] = useState('');

  return (
    <div className="flex flex-col items-center mt-10">
      <input
        type="text"
        className="border p-2 rounded"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-4 text-lg font-semibold">{text}</p>
    </div>
  );
};

export default TextUpdater; */

import React, { useState } from 'react'


const TextUpdater = () => {
    const [text, setText] = useState(' ');
  return (
    <div>
        <input type='text' className='border p-2 rounded' placeholder='Type something...' value={text} onChange={(e) => setText(e.target.value)}/>
        <p className='mt-4 text-lg font-semibold'>Text will appear here: {text}</p>
    </div>
  )
}

export default TextUpdater