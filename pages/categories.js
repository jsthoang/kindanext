import { useState, useEffect } from "react";

import Link from "next/link";
import ProdCard from "@/components/ProdCard";
import styles from "@/styles/pages/Categories.module.scss";
import axios from "axios";
const categories = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then(function (res) {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch(function (err) {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <Link href={"/"}>Home</Link>
            <h2 className={styles.pageTitle}>This is categories</h2>
            <ul className={styles.listProd}>
                {products.map((item, index) => (
                    <ProdCard data={item} key={index}></ProdCard>
                ))}
            </ul>
        </div>
    );
};

export default categories;
