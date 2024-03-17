import About from "./components/about"
import Banner from "./components/banner"
import Contact from "./components/contact"
import Navbar from "./components/navbar"
import Projects from "./components/projects"
import Technology from "./components/technology"
import Footer from './components/footer'
import { useEffect, useState } from "react"
import { FidgetSpinner } from "react-loader-spinner"


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1000)

  },[])

  return (
    <>
      {
        loading ?
        <div className="app h-[100vh] flex justify-center items-center">
          <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ballColors={["#5b2fe0", "#ffffff", "#000000"]}
            backgroundColor=" #FF00FF"
            ariaLabel="fidget-spinner-loading"
            wrapperStyle={{}}
            wrapperClass="fidget-spinner-wrapper"
            />
        </div>
        :
        <div className="">
        <Navbar />
        <Banner />
        <About />
        <Technology />
        <Projects />
        <Contact />
        <Footer />
      </div>
      }
    </>
  )
}

export default App
