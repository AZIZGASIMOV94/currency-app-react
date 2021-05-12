import React, { useState } from 'react';


const CounterExample = () => {
    const [count, setCount] = useState(0);

    return (  
        <div>
            {count}

            <button onClick={() => setCount(count + 1)}>click meee</button>
        </div>
    );
}
 
export default CounterExample;