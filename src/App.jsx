

import {
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom"
import MainComponent from "./Component/MainComponent"
import Mens from "./Component/Mens"
import Sales from "./Component/NavCompo/Sales"
import Login from "./Component/Login"
import Kids from "./Component/NavCompo/Kids"



function App() {


  return (
    <>
{/* <Navbar/>
<NavLinks/>
 */}


<BrowserRouter>
   <Routes>

   <Route path="/" element={<MainComponent/>} />
    <Route path="/sale" element={<Sales/>} />
<Route path="/Logon" element={<Login/>}/>
<Route path="/sun" element={<Mens/>}/>
<Route path="/kidss" element={<Kids/>}/>





   
   </Routes>
   
   </BrowserRouter>





    </>
  )
}

export default App
