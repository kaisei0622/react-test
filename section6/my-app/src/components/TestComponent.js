import React, { useState } from "react" //importする

const TestComponent = () => {
	const [ count, setCount ] = useState(0)
		return ( <>
			{ count } <br />
			<button onClick={() => setCount(count + 1)}>+1</button>
			</>)
		}

		export default TestComponent //他から使えるようにする
