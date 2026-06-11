import styles from './Contact.module.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("We will respond to your request whithin 72 hours");
    console.log("FORM IS WORKING");

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_07x17fi",
        "template_t2dnbpd",
        form.current,
        "tmAyFilXBVhscetSr"
      )
      .then((res) => {
        console.log("SUCCESS:", res);
      })
      .catch((err) => {
        console.log("ERROR FULL:", err);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className={styles.contactForm}
    >
      <div>
        <label>Your Name:</label>
        <input name="user_name" type="text" required />
      </div>

      <div>
        <label>Your Phone Number or Email:</label>
        <input name="user_contact" type="text" required />
      </div>

      <div>
        <label>Project Description:</label>
        <textarea name="message" required></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Contact;