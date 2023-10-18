import './HeroBox.sass'

const HeroBox = () => {
  return (
    <>
    <div class="hero-shadow" id="home"/>
    <div class="hero-box">
      <div className="hero-info">
        <h1>Best quality food</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, sint.</p>
      </div>
      <div className="hero-contact">
          <a href="tel:+48600000000" className="hero-tel">call us</a>
      </div>
    </div>
    </>
  )
}


export default HeroBox