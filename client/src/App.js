import axios from 'axios';
import './App.css';
import ListOfCharacters from './components/ListOfCharactersv2';

//data will be the string we send from our server
const apiCall = () => {
  axios.get('http://localhost:3001/datos').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}

function App() {
  return (
    <div className="App">
      <header>
        <ListOfCharacters />
      </header>
    </div>
  );
}

export default App;
