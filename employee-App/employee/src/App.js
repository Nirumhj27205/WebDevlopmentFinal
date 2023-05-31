import AllEmployers from './component/AllEmployers';
import AddEmployee from './component/AddEmployee';
import EditEmployee from './component/EditEmployee';
import Navbar from "./component/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    //browserrouter => browser routing enable, url-based routing
    <BrowserRouter>
      <Navbar />

      {/* //wrap by routes */}
      <Routes>

        <Route path="/" element={<AllEmployers />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit/:id" element={<EditEmployee />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
