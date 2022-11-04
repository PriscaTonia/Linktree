import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";

const Contact = () => {
    // Setting React Hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
//   Settng State
  const [name, setName] = useState("Onwudebelu Prisca Ebubechukwu ");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [value, setValue] = useState(false);

  const handleChange = (e) => {
    if (e.target.checked === true) {
      setValue(true);
    } else {
      setValue(false);
    }
  };

  return (
    <div className={styles.contact}>
      <div className={styles.mainContent}>
        <header>
          <h1>Contact Me</h1>
          <p>Hi there, Contact me to ask me about anything you have in mind.</p>
        </header>

        <form
          onSubmit={handleSubmit((data) => {
            // console.log(data)
            setFormSubmitted(true);
            setTimeout(() => {
              reset();
              setFormSubmitted(false);
              setValue(false);
            }, 5000);
          })}
        >
          {/* Name */}
          <div className={styles.nameGroup}>
            <div className={styles.firstname}>
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                {...register("firstname", {
                  required: "This is a required field",
                })} //Error Message
                name="firstname"
                id="first_name"
                placeholder="Enter your first name"
              />
              <p className={styles.errorMessage}>{errors.firstname?.message}</p>
            </div>
            <div className={styles.lastname}>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                {...register("lastname", {
                  required: "This is a required field",
                })} //Error Mesage
                name="lastname"
                id="last_name"
                placeholder="Enter your last name"
              />
              <p className={styles.errorMessage}>{errors.lastname?.message}</p>
            </div>
          </div>

          {/* Email */}
          <div className={styles.email}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email")}
              name="email"
              id="email"
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
              {...register("message", { required: "Please Enter a Message" })} //Error Mesage
              placeholder="Send me a message and I'll reply you as soon as possible... "
            ></textarea>
            <p className={styles.errorMessage}>{errors.message?.message}</p>
          </div>

          {/* Checkbox */}
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              name="check"
              checked={value}
              {...register("check", { required: "This is required" })} //Error Mesage
              onChange={handleChange}
            />
            <label htmlFor="check">
              You agree to providing your data to {name}
              who may contact you.
            </label>
            <br />
          </div>

          {/* Submit Button */}
          <div className={styles.submitbtn}>
            <button disabled={value ? false : true} id="btn__submit">
              Send Message
            </button>
          </div>

                {/* Success Message */}
          <p className={styles.successMessage}>
            {formSubmitted
              ? "Your Response has been submitted successfully"
              : ""}
          </p>
        </form>
      </div>
    </div>
  );
};

export { Contact };
