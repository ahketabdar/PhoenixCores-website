import styles from './Articles.module.css';

function Articles() {
    return (
        <div className={styles.articles}>
            <div className={styles.card}>
                <h1>Amazon Flex Delivery Navigation</h1>
                <p>A UX redesign addressing inefficient delivery routing in Amazon Flex.</p>
                <p>The solution improves route transparency, restores driver control, and reduces stress through clearer navigation and decision cues.</p>
                <a href="https://zesty-thorn-919.notion.site/Case-Study-01-Amazon-Flex-Delivery-Navigation-2eeedf2c8492800d9484c35164ad7a49" target="_blank" rel="noopener noreferrer">
                    View Case Study →
                </a>
            </div>

            <div className={styles.card}>
                <h1>Design a Food Menu For Modern Pub</h1>
                <p>A UX/UI redesign of traditional restaurant menus using visual categories and icons instead of text-heavy layouts.</p>
                <p>The solution improves navigation, reduces decision time, and enhances the overall ordering experience through smart category organization and user-centered design.</p>
                <a href="https://zesty-thorn-919.notion.site/Case-Study-02-Design-a-Food-Menu-For-Modern-Pub-2fdedf2c8492801cab2ac1852eb13b75" target="_blank" rel="noopener noreferrer">
                    View Case Study →
                </a>
            </div>
        </div>
    )
}

export default Articles;