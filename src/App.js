import Navbar from './components/Navbarr';
import './App.css';

import Navbarr from './components/Navbarr';
import SearchBar from './components/SearchBar';
import SelectedProperties from './components/SelectedProperties';
import SearchedProperties from './components/SearchProperties';
import Data from "./Data"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function App() {
  const [query,setQuery]=useState("")
  const search=(data)=>{
return data.filter((item)=>item.Address.toLowerCase().includes(query));
  }
  return (
    <div>
<Navbarr/>
<SearchBar data={(Data)}/>
{/* <SelectedProperties/> */}
{/* <SearchedProperties data={search(Data)}/> */}

    </div>
  );
}

export default App;
