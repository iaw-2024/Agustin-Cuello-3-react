import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/datos')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>  
        <div className ="col-sm-11 mx-auto text-center p-1 m-2">
            <h3>Listado de personajes de DND</h3>    
        </div>   
        <div className="row mx-3" id = "list-container">     
            {posts.map( (post, index) => (
                <Character key = {index} information={post}/>
            ))}
        </div>
    </div>
  );
}

export default App;