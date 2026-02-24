import React from "react";
import styles from "../styles/styles.module.css"
import { useProduct } from "../hooks/useProduct"
import { createContext } from "react";
import { type InitialValues, type onChangeArgs, type Product, type ProductCardHandlers, type ProductContextProps } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext;
export interface ProductCardProps {
    product: Product;
    children: ( args: ProductCardHandlers ) => React.JSX.Element;
    // children: () => React.JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: ProductCardProps) => {

    const { increaseBy, counter, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >
                { children({
                    count: counter,
                    maxCount: initialValues?.maxCount,
                    isMaxCountReached,
                    product,
                    increaseBy,
                    reset
                })}
            </div>
        </Provider>

    )
}