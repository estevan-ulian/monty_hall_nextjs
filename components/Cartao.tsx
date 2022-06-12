import styles from '../styles/Cartao.module.css';

interface CartaoProps {
    bgcolor?: string
}

export default function Cartao(CartaoProps) {
    return (
        <div className={styles.cartao} 
            style={{
                backgroundColor: CartaoProps.bgcolor ?? '#fff'
            }}>
                {CartaoProps.children}
        </div>
    )
}