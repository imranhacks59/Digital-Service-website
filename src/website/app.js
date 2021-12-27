import React from "react";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Navbar from "./navbar";
import Service from "./service";
import {Routes , Route} from 'react-router-dom'
import Footer from "./footer";


const App =()=>{
     
    return(
        <>
        {/* <Home />
        <About />
        <Contact />
        <Service /> */}
         <Navbar />
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Service' element={<Service />} />
          

        </Routes>
        <Footer />
        </>
    )
}

export default App;