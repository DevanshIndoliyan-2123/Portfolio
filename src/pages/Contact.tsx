import { FiSend } from "react-icons/fi";
import Heading from "../components/Heading";

export default function Contact() {
  return (
    <section className="contact">
      <Heading>Contact</Heading>
      <div className="map">
  <iframe
    title="My location on Google Maps"
    src="https://www.google.com/maps?q=Haridwar,+Uttarakhand,+India&output=embed"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
      <h3 className="h3">Contact Form</h3>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input name="name" placeholder="Full Name" aria-label="Full name" autoComplete="name" required />
        <input name="email" type="email" placeholder="Email Address" aria-label="Email address" autoComplete="email" required />
        <textarea name="message" placeholder="Your Message" aria-label="Your message" required />
        <button className="btn"><FiSend aria-hidden="true" /> Send Message</button>
      </form>
    </section>
  );
}
