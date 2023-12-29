import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import Detail from './views/Detail';
import AddPost from './views/AddPost';
import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";
import DetailAdd from './views/DetailAdd';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/add' element={< AddPost />}/>
          <Route path='/detail/:id' element={ <Detail />} />
          <Route path='/added' element= {< DetailAdd /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
