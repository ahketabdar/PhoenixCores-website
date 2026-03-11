import styles from './Contact.module.css';

function Contact() {
    return(
        <form className={styles.contactForm}>
            <div>
                <label>Your Name:</label>
                <input type="text" placeholder="Enter Your Name Here..." />
            </div>

            <div>
                <label>Your Phone Number or Email:</label>
                <input type="text" placeholder="Enter Your Contact Info" />
            </div>

            <div>
                <label>Project Description:</label>
                <textarea placeholder="Your Website Description"></textarea>
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Contact;