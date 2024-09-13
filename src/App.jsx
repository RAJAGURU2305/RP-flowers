import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Slider from './Slider'
import Home from './Home'
import Imagetag from './Imagetag'
import Floraldecor from './Floraldecor'
import Footer from './Footer'
import Login from './Login'
import Shopoccasions from './Shopoccasions'
import Homelayout from './Homelayout';
import Signup from './Signup';
import Product from './Product';

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Home />
       
        <Routes>
            <Route path='/' element={<Homelayout />} />  
            <Route path='/Shopoccasions' element={<Shopoccasions />} />
            <Route path='/Floraldecor' element={<Floraldecor />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Createone' element={<Signup />} />
            <Route path='/Product' element={<Product />} />

        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App