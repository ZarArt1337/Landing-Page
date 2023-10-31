import './Contact.sass';

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="hero-shadow"/>
      <h1 className="section-name" >Contact</h1>
      <div className="contact-content">

          <div className="contact-address">
            <div className="logo"><img src="../../src/assets/logo-nav.png" alt="logo" /></div>
            <p>123 Example Street, City 00-000</p>
            <p>Phone: 123-456-789</p>
            <p>Email: contact@restaurant.com</p>
          </div>

          <div className="contact-hours-box">
            <div>
              <h3>Working hours:</h3>
              <p className="contact-days">Monday-Thursday:</p> 
              <p className="contact-hours">12:00 am - 09:00 pm</p>
              <p className="contact-days">Friday-Saturday:</p>
              <p className="contact-hours">12:00 am - 11:00 pm</p>
              <p className="contact-days">Sunday:</p>
              <p className="contact-hours">11:00 am - 10:00 pm</p>
            </div>
          </div>

          <div className="contact-mail">
            <h3>Send us message:</h3>
            <form action="">
              <input type="text" name="name" placeholder="Name.."/>
              <input type="mail" name="mail" placeholder="Email.."/>
              <textarea name="content" id="" cols="30" rows="6" placeholder="Write your message here.."></textarea>
              <button type="submit">Send</button>
            </form>
          </div>

      </div>
    </div>
  );
};

export default Contact;
