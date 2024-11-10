import React, {useState} from 'react';

const CounterComponent = () => {
   const [count, setCount] = useState(12); 
   
   return (
      <div>
         <p>Count Component :- {count}</p>
         <h5>Number is {count % 2 === 0 ? 'Even' : 'Odd'}</h5>

         <button onClick={() => setCount(count + 1)}>Increment</button>
         <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
   )
};

export default CounterComponent;