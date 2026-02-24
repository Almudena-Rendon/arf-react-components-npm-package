import React from 'react';
import type { ProductCardProps } from '../components/ProductCard';
import type { ProductTitleProps } from '../components/ProductTitle';
import type { ProductImageProps } from '../components/ProductImage';
import type { ProductButtonsProps } from '../components/ProductButtons';

export interface Product {
    id: string;
    img?: string;
    title: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: (value: number) => void;
    maxCount?: number;
}

export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps): React.JSX.Element;
    Title: (Props: ProductTitleProps) => React.JSX.Element;
    Image: (Props: ProductImageProps) => React.JSX.Element;
    Buttons: (Props: ProductButtonsProps) => React.JSX.Element;
}

export interface onChangeArgs {
    product: Product;
    count: number;
}   

export interface ProductInCart extends Product {
    count: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
    reset: () => void;
}