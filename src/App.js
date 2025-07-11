import logo from './logo.svg';
import './App.css';
import AddVehicle from './component/AddVehicle';
import Search from './component/Search';
import Delete from './component/Delete';
import View from './component/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <AddVehicle/> }/>
      <Route path="/search" element={ <Search/> }/>
      <Route path="/delete" element={ <Delete/> }/>
      <Route path="/view" element={ <View/> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
