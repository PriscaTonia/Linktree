import styles from './styles.module.css'

const Contact = () => {
    return ( 
        <div className={styles.contact}>
            <div className={styles.mainContent}>
                <header>
                    <h1>Contact Me</h1>
                    <p>Hi there, Contact me to ask me anything you have in mind.</p>
                </header>
            </div>
        </div>
     );
}
 
export  { Contact };