import React,{useState} from "react";
import "./App.css";

const App=() => {
  const [users, setUser]= useState([]
    );

    const loadUsers= async()=>{
      const response= await fetch('https://api.github.com/users');
      const jsonResponse=await response.json();
      setUser(jsonResponse);
    }
  return <div className="App">
    <h1>hello</h1>
    <button onClick={loadUsers}>get data</button>
    <h2>users </h2>
    <ul>
      {users.map(({id,login,avatar_url})=>(
           <li key={id}>
            Name:{login}
            Avatar:{avatar_url};
           </li>
      ))}
      
    </ul>
  </div>
}

export default App;
