import './App.css'
import Header from './Header'
import borcelle from './assets/borcelle.png'
import cashio from './assets/cashio.png'
import cashioIos from './assets/cashioio.png'
import winebar from './assets/winebar.png'
import apple from './assets/apple.png'
import Scroll from './scroll'
import Services from './Services'
import Languages from './Languages'
import Footer from './Footer'
import Work from './Work'
import About from './About'
import Contact from './Contact'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


function App(){
  function cashio1(){
    window.location.href='https://cashiobank.vercel.app/index.html'
  }
  function borcelle1(){
    window.location.href='https://borcelle-clothing-store.vercel.app/'
  }
  function macbook(){
    window.location.href='https://ocho-apple.vercel.app/'
  }
  function wine(){
    window.location.href='https://wine-bar-project.vercel.app/'
  }
  return(
    <>
    <Header/>
    <Routes>
      <Route path="/" element={
        <>
    <br />
    <br />
    <br />
    <br />
    <Scroll>
    <div className="smallText">
      <p>Full Stack Development · IOS Development · Designs</p>
    </div>
    <br />
    <br />
    <div className="text">
      <p>Discover the creativity and collaboration behind our projects. <span id='gray'>
        Let's shape your brand into a masterpiece together.</span></p>
        <br />
        <Link to='/contact'><button><p>Contact Us 🡥</p></button></Link>
    </div>
    </Scroll>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Scroll>
    <div className="background">
      <img src={borcelle} alt="" />
    </div>
    <div className="smallText">
      <p id='ppp'>Clothes.</p>
      <p id='big'>BORCELLE Clothing Store</p> 
      <br />
      <button onClick={borcelle1}><p>Visit Website 🡥</p></button>
    </div>
    </Scroll>
    <br />
    <br />
    <Scroll>
    <div className="container">
      <div className="first">
        <img src={cashio} alt="" />
      </div>
      <div className="second">
        <img id='ios' src={cashioIos} alt="" />
      </div>
    </div>
    <div className="smallText">
      <p id='ppp'>Bank Application.</p>
      <p id='big'>Cashio Bank Website</p>
      <br />
      <button onClick={cashio1}><p>Visit Website 🡥</p></button>
    </div>
    </Scroll>
    <br />
    <br />
    <Scroll>
    <div className="container">
      <div className="column">
        <div className="firstt">
          <img id='apple' src={apple} alt="" />
        </div>
        <div className="smallTextt">
          <p id='ppp'>Apple Store.</p>
          <p id='big'>Macbook Pro Apple Website</p>
          <br />
          <button onClick={macbook}><p>Visit Website 🡥</p></button>
        </div>
      </div>
      <div className="column">
        <div className="second">
          <img id='wine' src={winebar} alt="" />
        </div>
        <div className="smallTextt">
          <p id='ppp'>Wine Bar.</p>
          <p id='big'>Wine Bar Website</p>
          <br />
          <button onClick={wine}><p>Visit Website 🡥</p></button>
        </div>
      </div>
    </div>
    </Scroll>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Scroll>
    <div className="didi">
      <div className="smallTex">
        <p>Website Success</p>
      </div>
      <div className="shuatana">
        <p>See how we've turned ideas into reality. Dive into the stories of <span id='gray'>successful products that make a difference.</span></p>
      </div>
      <div className="bolo">
        <Link to='/work'><button>Our Work 🡥</button></Link>
      </div>
    </div>
    </Scroll>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="smallText">
        <p>Services</p>
    </div>
    <br />
    <Services/>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="smallText">
        <p>Programming Languages</p>
    </div>
    <br />
    <br />
    <Languages/>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
        </>
      } />
      <Route path="/work" element={<Work />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App