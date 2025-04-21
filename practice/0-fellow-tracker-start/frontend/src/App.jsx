import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FellowDetails from './pages/FellowDetails';
import StaffDetails from './pages/StaffDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/fellows/:id" element={<FellowDetails />}></Route>
      <Route path="/staff/:id" element={<StaffDetails />}></Route>
    </Routes>
  )
}

export default App
