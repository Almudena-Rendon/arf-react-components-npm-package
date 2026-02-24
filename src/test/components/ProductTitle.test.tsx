
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ProductCard, { ProductTitle } from "../../components";
import { product1 } from "../data/products";

describe("ProductTitle", () => {
    test("Debe mostrar el título del producto", () => {
        
        const { container } = render(
            <ProductTitle title="Producto de prueba" />
        );

        expect(container).toMatchSnapshot();
        
    });

    test("Debe de mostrar el componente con el nombre del producto", () => {
        
        const { container } = render(
          <ProductCard product={product1}>
            {() => (
                <ProductTitle />
            )}
          </ProductCard>
        );

       expect(container).toMatchSnapshot();
    
    });
});