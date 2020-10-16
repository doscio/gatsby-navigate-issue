import React from "react"
import { navigate } from "gatsby"

export default function Home() {
  return <> 
      <div>Hello world!</div>
      <button onClick={() => navigate("/counter", { state: { counter: 1 }})}>
            Counter
      </button>
  </>
}
