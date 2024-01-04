import "./App.css";
import Letter from "./Letter";
import useFetch from "./fetchdata/useFetch";

function App() {
  const {
    data: blog,
    err,
    isPending
  } = useFetch("http://localhost:3000/Blogs");
  return (
    <div>
      {err && <div>{err}</div>}
      {isPending && <div>is pending...</div>}
      {blog && <Letter blog={blog} title="students Info" />}
    </div>
  );
}

export default App;
