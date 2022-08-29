import React from 'react';
import { useState } from 'react';

function Counter() {
    let [num, varnum] = useState(0);

    const plus = () => {
        varnum(num+1);
    }
    const minus = () => {
        if(num<=0?console.log('nop!'):varnum(num-1));
    }
  return (
    <div>
      <h1>{num}</h1>
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
    </div>
  );
}

export default Counter;