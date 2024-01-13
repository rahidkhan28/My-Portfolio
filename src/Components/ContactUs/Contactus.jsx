import React, { useRef } from "react";
import "./contactus.css";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook-icon.png";
import twitter from "../../assets/twitter.png";
import emailjs from "@emailjs/browser";

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3ou4xcz",
        "template_bmexwva",
        form.current,
        "a_lrGY7ZPQ0ZrcPsZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Thank You for submitting..");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact">
      <h1 className="contactPageHeader">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work oppertunities
      </span>
      <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="from_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="from_email"
        />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="Send" className="submitBtn">
          Submit
        </button>
        <div className="links">
          <img src={facebook} alt="Facebook" className="link" />
          <img src={twitter} alt="Twitter" className="link" />
          <img src={instagram} alt="Instagram" className="link" />
        </div>
      </form>
    </div>
  );
};

export default Contactus;
