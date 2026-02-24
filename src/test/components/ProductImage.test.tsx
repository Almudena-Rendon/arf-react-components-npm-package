
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ProductCard, { ProductImage } from "../../components";
import { product2 } from "../data/products";

describe("ProductImage", () => {
    test("Debe mostrar el componente ProductImage", () => {
        
         const { container } = render(
            <ProductImage img="https://hola.jpg" />
        );

        expect(container).toMatchSnapshot();
    
        });

    test("Debe de mostrar el componente con la imagen del producto", () => {
        
        const { container } = render(
          <ProductCard product={product2}>
            {() => (
                <ProductImage />
            )}
          </ProductCard>
        );

       expect(container).toMatchSnapshot();
    
    });


    });