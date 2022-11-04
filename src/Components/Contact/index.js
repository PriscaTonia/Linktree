import styles from './styles.module.css'

const Contact = () => {
    return ( 
        <div className={styles.contact}>
            <div className={styles.mainContent}>
                <header>
                    <h1>Contact Me</h1>
                    <p>Hi there, Contact me to ask me anything you have in mind.</p>
                </header>
                <form action="">
                    <div className={styles.nameGroup}>
                        <div className={styles.firstname}>
                            <label htmlFor="firstname">First Name</label> 
                            <input type="text" name='firstname' placeholder='Enter your first name'/>
                        </div>
                        <div className={styles.lastname}>
                            <label htmlFor="lastname">Last Name</label> 
                            <input type="text" name='lastname' placeholder='Enter your last name' />
                        </div>
                    </div>
                    <div className={styles.email}>
                        <label htmlFor="email">Email</label> 
                        <input type="email" name="email" placeholder='yourname@email.com' />
                    </div>
                    <div className={styles.message}>
                        <label htmlFor="message">Message</label> 
                        <textarea name="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible "></textarea>
                    </div>
                    <div className={styles.checkbox}>
                        <input type="checkbox" name="check"  />
                        <label htmlFor="check">You agree to providing your data to Onwudebelu Prisca Ebubechukwu who may contact you.</label>
                    </div>
                    <div className={styles.submitbtn}>
                        <input type="submit" value="Send Message" />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export  { Contact };