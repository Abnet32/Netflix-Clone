import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import Four04 from "./pages/NotFound404/NotFound404";
import Player from './pages/Player/Player';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="*" element={<Four04 />} />
      </Routes>
    </div>
  );
}

export default App

