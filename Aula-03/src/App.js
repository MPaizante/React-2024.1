
import './App.css';
import Header from "../components/Header.js"
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

export default function App(){
  return (
    <div className ="App">
      <Header/>
      <div>
        <Main userName="Mack" num={5}/>
        <Sidebar/>
      </div>
    </div>
  )
}


