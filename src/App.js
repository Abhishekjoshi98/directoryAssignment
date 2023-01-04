import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Adduser from './pages/Adduser';
import RetrieveData from './pages/RetrieveData';

function App() {
  return (
    <>
    <Main />
    <Routes>
        <Route path='/' element={<Adduser  />} />
        <Route path='/RetrieveData' element={<RetrieveData />} />    
      </Routes>
    </>
  );
}

export default App;
