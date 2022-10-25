import styles from './styles.module.css'

const Button = ({text, address}) => {
    return ( 
        <div className={styles.btn}>
            <a href={address} >{text}</a>
        </div>
     );
}
 
export  {Button};