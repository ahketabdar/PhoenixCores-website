import styles from './Contact.module.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef<HTMLFormElement>(null);

  // این تابع وقتی فرم submit میشه اجرا میشه
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // تست اینکه تابع اجرا شده
    alert("FORM IS WORKING");
    console.log("FORM IS WORKING");

    // اگر ref هنوز آماده نیست، ادامه نده
    if (!form.current) return;

    // ارسال ایمیل با EmailJS
    emailjs
      .sendForm(
        "service_07x17fi",
        "template_jkdc1ko",
        form.current,
        "tmAyFilXBVhscetSr"
      )
      .then((result) => {
        console.log("SUCCESS", result.text);
      })
      .catch((error) => {
        console.log("ERROR", error.text);
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