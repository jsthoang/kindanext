import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/ProdCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProdCard = (props) => {
    let prod = props.data;
    return (
        <Link href={"#"} className={styles.prod_card}>
            <div className={styles.thumb}>
                <Image src={prod.image} width={100} height={50} />
            </div>
            <h2 className={styles.title}>{prod.title}</h2>
            <p className={styles.txtDesc}>{prod.description}</p>
            <div className={styles.wrapper}>
                <div className={styles.prices}>
                    <p className={styles.price}>{prod.price} VND</p>
                    <p className={styles.oldPrice}>200 VND</p>
                </div>
                <button className={styles.addToCard}>
                    <FontAwesomeIcon icon="fa-regular fa-cart-shopping" />
                </button>
            </div>
        </Link>
    );
};

export default ProdCard;
