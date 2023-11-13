
import Inventory from './inventory';
import Login from './login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/stock" element={<Inventory />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
