import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import Addstudent from './components/Addstudent';
import Viewstudent from './components/Viewstudent';
import { Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Addstudent method='post' data={{name:'',age:'',department:''}}></Addstudent>}></Route>
      <Route path='/view' element={<Viewstudent></Viewstudent>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
