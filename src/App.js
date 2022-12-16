import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Data from './Pages/Data';
import Details from './Pages/Details';
import ToggleColorMode from './theme/Dark';

function App() {
  return (
    <div >
      <BrowserRouter>
        <ToggleColorMode>
          <Routes>
            <Route exact path="/" element={<Data />} />
            <Route exact path="/details" element={<Details />} />
          </Routes>
        </ToggleColorMode>
      </BrowserRouter>     
    </div>
  );
}

export default App;