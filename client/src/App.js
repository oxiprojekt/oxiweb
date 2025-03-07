import './App.css';
import axios from "axios";
import {useEffect, useState} from "react" ;

function App() {

  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() =>{
    axios.get("http://localhost:3001/posts").then((response)=>{
      setListOfPosts(response.data);
    });
  }, []);
  return (
    <div className="App">Data:
      {listOfPosts.map((value, key) =>{
        return <div>{value.title}</div>;
      })}
    </div>
  );
}

export default App;
