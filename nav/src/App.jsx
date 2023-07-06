import { useState } from 'react';
import Home from './home';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Car from './blog';

function App() {
  const [count, setCount] = useState(0);

  

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Car />} />
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
