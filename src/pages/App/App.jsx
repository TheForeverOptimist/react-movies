import { useState } from "react"
import LoginPage from "../LoginPage/LoginPage";
import MoviesListPage from "../MoviesListPage/MoviesListPage";
import NavBar from "../../components/NavBar/NavBar"
import './App.css';

function App() {
  const[user, setUser] = useState(null)

  const handleLogin = (username) => {setUser(username)}
  
  return (
    <main className="App">
      <h1>App</h1>
      {user ? <MoviesListPage /> : <LoginPage /> }
    </main>
  );
}

export default App;
