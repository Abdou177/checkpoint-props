
import './App.css';
import Name from './components/FullName';
import Bio from './components/Bio';
import Prof from './components/Profession';

function App() {
  
  return (
    <div className="App">
      
      <Name name="Touis Abdelbasset"></Name>
    <hr/>
      <Bio name="dev web">
       <div>
         <img src="./avatar.png" alt="Italian Trulli"/>
       </div>
      </Bio>
      <hr/>
      <Prof name="devloppeur informatique front-end reactjs"></Prof>
      
     
      
    </div>
  );
}

export default App;
