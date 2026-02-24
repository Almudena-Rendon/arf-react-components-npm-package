
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import userEvent from '@testing-library/user-event';
import ProductCard from "../../components";
import { product1 } from "../data/products";

describe("ProductCard", () => {

    test("Debe de mostrar el componente correctamente", () => {

        const { container } = render(
            <ProductCard product={product1}>
                {() => (
                    <h1>Product Card</h1>
                )}
            </ProductCard>
        );

        expect(container).toMatchSnapshot();

    });

    test("Debe incrementar el contador al hacer click en el botón de incrementar", async () => {

        const { getByText, getByRole } = render(
            <ProductCard product={product1}>
                {({ count, increaseBy }) => (
                    <>
                        <h1>Product Card</h1>
                        <span>{count}</span>
                        <button onClick={() => increaseBy(1)}>Incrementar</button>
                    </>
                )}
            </ProductCard>
        );

        expect(getByText('0')).toBeDefined();

        const button = getByRole('button', { name: 'Incrementar' });
        await userEvent.click(button);

        expect(getByText('1')).toBeDefined();
        
    })

});