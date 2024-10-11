import { Link, Route, Routes } from "react-router-dom"
import Todo from "./Todo"
import Pokemon from "./Pokemon"

function App() {


  return (
    <>
    {/* we are going to put links here        */}
      <Link to='/'>Go to home page</Link>
      <br/>
      <Link to='/todo'>Go to todo page</Link>
      <br/>
      <Link to='/pokemon'>Go to pokemon page</Link>

    {/* we are going to put our Routes here        */}
      <Routes>
          <Route path="/" element={<h1>Hello from /</h1>}/>
          <Route path="/todo" element={<Todo/>}/>
          <Route path="/pokemon" element={<Pokemon/>}/>
          <Route path="/*" element={<h1>Hello from a page isnt specified from above</h1>}/>
      </Routes>
    </>
  )
}

export default App
