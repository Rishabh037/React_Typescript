// 2 Create a Greet Component
//   Create a new file called Greet.jsx and inside that file, write a Greet component using the function declaration syntax.
//   Afterward, refactor the Greet component to use the arrow function syntax.
//   Finally, register the Greet component in your App.jsx file so that you can see the result when running the app.

import React from 'react'

function Greet(){
  return <h1>Hello World from function decleration syntax</h1>
}



const Greet1 = () => {
  return (
    <h1>Hello World from arrow function</h1>
  )
}

export default Greet1