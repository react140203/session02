import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// website -> tailwind
// webapp -> ant design
import { Counter } from "./components/Counter";
import { TaskList } from "./components/task/TaskList";
import { PostList } from "./components/post/PostList";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="container">
        <button onClick={() => setToggle(!toggle)}>toggle posts</button>
        {toggle && <PostList></PostList>}

        <Counter />
        <TaskList></TaskList>
      </div>
    </>
  );
}

export default App;
