import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css"

export interface ProductButtonsProps {
    className?: string;
    style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {

    const { increaseBy, counter, maxCount } = useContext(ProductContext);

    const isMaxReached = useCallback(() => {
        if (maxCount === undefined) return false;
        return counter >= maxCount;
    }, [counter, maxCount]);

    return (
        <div 
            className={ `${styles.buttonsContainer} ${className}` }
            style={style}
        >
            <button onClick={() => increaseBy(-1)} className={ styles.buttonMinus }>-</button>
            <div className={ styles.countLabel }>{counter}</div>
            <button 
                onClick={() => increaseBy(+1)} 
                className={ `${styles.buttonAdd} ${isMaxReached() ? styles.disabled : ''}` }
            >
                +
            </button>
        </div>
    )
}