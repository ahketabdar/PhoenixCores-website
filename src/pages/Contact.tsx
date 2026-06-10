import styles from './Contact.module.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef<HTMLFormElement>(null);

 const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  emailjs.send(
    'service_07x17fi',
    'template_jkdc1ko',
    {
      user_name: formData.get('user_name'),
      user_contact: formData.get('user_contact'),
      message: formData.get('message'),
    },
    'YOUR_PUBLIC_KEY'
  )
  .then((res) => {
    console.log("SUCCESS:", res.status);
    alert("Message Sent!");
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });

  e.currentTarget.reset();
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