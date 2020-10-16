import React from "react"
import { navigate } from "gatsby"

export default function Counter({location}) {
  console.log("render page");
  return (
      <>
        <div>Counter: {location.state.counter}</div>

        <button onClick={() => navigate("/counter", { state: { counter: ++location.state.counter }})}>
            Increase counter
        </button>
    </>
  )
}