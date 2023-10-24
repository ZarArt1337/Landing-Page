import './Contact.sass';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="section-name" id="contact">Contact</h1>
      <div className="contact-content">
        <div className="logo"><img src="../src/assets/logo-nav.png" alt="logo" /></div>
        <p>123 Example Street, City 00-000</p>
        <p>Phone: 123-456-789</p>
        <p>Email: contact@restaurant.com</p>
      </div>
    </div>
  );
};

export default Contact;
