import { MdOutlineMailOutline, MdPhone } from "react-icons/md";
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© 2026 Amir Ketabdar. All rights reserved.</p>
            <p>Built with React.</p>

            <div className={styles['footer-links']}>
                <a 
                    href="https://zesty-thorn-919.notion.site/Portfolio-2e6edf2c849280bba503c5a1922a388d"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Portfolio
                </a>

                <a 
                    href="https://github.com/ahketabdar"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

                <a 
                    href="https://www.linkedin.com/in/amir-ketabdar-37164863"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>

                <a href="mailto:kh.amir1024@gmail.com">
                    <MdOutlineMailOutline /> Email
                </a>

                <a href="tel:+16262571044">
                    <MdPhone /> +1 626-257-1044
                </a>
            </div>
        </footer>
    )
}

export default Footer;