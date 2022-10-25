import styles from './styles.module.css'
import {Button} from '../../Components'


const Link = () => {
    return ( 
        <div className={styles.links}>
            <Button text = "Twitter Link" address = "https://twitter.com/EbubePrisca" idName = "twitter__name"/>
            <Button text = "Zuri Team" address = "https://training.zuri.team/" idName = "btn__zuri"/>
            <Button text = "Zuri Books" address = "http://books.zuri.team/" idName = "books"/>
            <Button text = "Python Books" address = "https://books.zuri.team/" idName = "book__python"/>
            <Button text = "Background Check for Coders" address = " https://background.zuri.team" idName = "pitch"/>
            <Button text = "Design Books" address = "https://books.zuri.team/design-rules" idName = "book__design"/>
        </div>
     );
}
 
export{  Link};