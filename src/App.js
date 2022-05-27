import './Components/style.css'
import Nav from "./Components/Nav";
import {Outlet} from 'react-router-dom'




function App() {
  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  );
}

export default App;
