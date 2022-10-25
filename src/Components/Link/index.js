import styles from './styles.module.css'
import {Button} from '../../Components'


const Link = () => {
    return ( 
        <div className={styles.links}>
            <Button text = "Twitter Link" address = "https://twitter.com/EbubePrisca"/>
        </div>
     );
}
 
export{  Link};