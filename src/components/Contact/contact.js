import "./contact.css";
import TwitterIcon from "../../assets/twitter.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wc99fzp",
        "template_bwe15bj",
        form.current,
        "XraAWQNA_p3Ir57jL"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Email Sent')
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" name="your_name"></input>
        <input type="email" className="email" placeholder="Your Email" name="your_email"></input>
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button className="submitBtn" type="submit" value="send">
          Submit
        </button>
        <div className="links">
          <img src={InstagramIcon} alt="instagram" className="link" />
          <img src={TwitterIcon} alt="twitter" className="link" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
