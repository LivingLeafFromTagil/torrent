import { observer } from 'mobx-react-lite';
import './App.css';
import {MainPage} from './client/pages/MainPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { About } from './client/pages/About';
import { GamePage } from './client/pages/GamePage';



const App = observer(()=> {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage></MainPage>}>
      </Route>
      <Route path='/about' element={<About></About>}>
      </Route>
      <Route path='/game/:id' element={<GamePage></GamePage>}>
      </Route>
      <Route path='*' element={<h1 style={{fontSize:'32px', margin:'7px'}}>404</h1>}>
      </Route>
    </Routes>
    </BrowserRouter>
  );
})

export default App;
