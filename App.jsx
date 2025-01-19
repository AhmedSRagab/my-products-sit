import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import './Component/Home/Home.css'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Products from './Component/Products/products'
import Contact from './Component/Contact/Contact'
import CustomerOpinion from './Component/CustomerOpinion/CustomerOpinion'



function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "",
  //     element: <Layout />,
  //     children: [
  //       { path: "home", element: <Home /> },
  //       { path: "about", element: <About /> },
  //       { path: "products", element: <Products /> },
  //       { path: "contact", element: <Contact /> },
  //       { path: "customerOpinion", element: <CustomerOpinion /> },
       
  //     ],
  //   },
  return (
    <>
     {/* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/CustomerOpinion" element={<CustomerOpinion />} />
      </Routes>
    </Router> */}

      {/* <Home/>
      <About/>
      <Products/>
      <Contact/>
      <CustomerOpinion/> */}
    </>
  )
}

export default App
