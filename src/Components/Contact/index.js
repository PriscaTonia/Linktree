import styles from "./styles.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.mainContent}>
        <header>
          <h1>Contact Me</h1>
          <p>Hi there, Contact me to ask me about anything you have in mind.</p>
        </header>
        <form action="">
          {/* Name */}
          <div className={styles.nameGroup}>
            <div className={styles.firstname}>
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                id="first_name"
                required
                placeholder="Enter your first name"
              />
            </div>
            <div className={styles.lastname}>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                id="last_name"
                required
                placeholder="Enter your last name"
              />
            </div>
          </div>

          {/* Email */}
          <div className={styles.email}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="yourname@email.com"
            />
          </div>
          {/* Message */}
          <div className={styles.message}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              id="message"
              required
              placeholder="Send me a message and I'll reply you as soon as possible... "
            ></textarea>
          </div>
          {/* Checkbox */}
          <div className={styles.checkbox}>
            <input type="checkbox" name="check" required />
            <label htmlFor="check">
              You agree to providing your data to Onwudebelu Prisca Ebubechukwu
              who may contact you.
            </label>
          </div>
          {/* Submit Button */}
          <div className={styles.submitbtn}>
            <button id="btn__submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Contact };
