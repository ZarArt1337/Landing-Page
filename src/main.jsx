import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import App from './App.jsx'
import HeroBox from './components/HeroBox/HeroBox.jsx'
import About from './components/About/About.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <HeroBox />
    <About />
    <App />
    <Footer />
  </React.StrictMode>,
)
