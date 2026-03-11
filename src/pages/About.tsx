import styles from './About.module.css'
import profilePic from './4.png';


function About(){
    return(
        
        <>
        <section className={styles.about}>

            <img 
                src={profilePic} 
                alt="Amir Ketabdar - Frontend Developer - UX Designer"
                className={styles.profileImage}
            />
 

            <div className="headline">
                <h1>Hi, I'm Amir Ketabdar</h1>
                <h2>Frontend Developer | UX Designer</h2>

                <p>
                    I specialize in building scalable and high-performance
                    web applications using React, Next.js, and TypeScript.
                </p>

                <p>
                    With a strong foundation in UI/UX principles,
                    I create clean, responsive, and user-centered digital experiences.
                </p>
            </div>

        </section>

        <section className={styles.skills}>
            <h2>Technical Skills</h2>

            <p>Frontend</p>
                  <ul>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                </ul>
                <ul>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML5 / CSS3</li>
                    <li>Responsive Design</li>
                </ul>

            <b></b>

            <p>Tools</p>
                <ul>
                    <li>Git & GitHub</li>
                    <li>Vite</li>
                    <li>Figma</li>
                    <li>REST APIs</li>
                </ul>
        </section>


        <section className={styles.Biography}>
            <div>
            <p>After gaining experience in software development, I spent time enhancing my skills through hands-on projects, UX certification, and modern frontend technologies.</p>
            <p>I recently completed a Google UX Design certification and have been actively building portfolio projects.</p>
            <p>My UX background allows me to think beyond code - I design interfaces with real users in mind.</p>
        </div>
        </section>


</>
    )
}

export default About