import './Hero.sass'

const Hero = () => {
  return (
    <>
    <div className="hero-shadow" id="home"/>
    <div className="hero-box">
      <div className="hero-info">
        <h1>Best quality food</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus error quo sapiente obcaecati dolores consequatur pariatur cumque ad perferendis ut?</p>
      </div>
      <div className="hero-contact">
          <a href="tel:+48600000000" className="hero-tel">Order</a>
      </div>
    </div>
    </>
  )
}


export default Hero