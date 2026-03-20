import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>
            <ItemCounter name="Nintendo Switch 2" quantity={1} />
            <ItemCounter name="Pro Controller" quantity={2} />
            <ItemCounter name="Laptop" quantity={5} />
            <ItemCounter name="Super Smash" quantity={4} />
        </>
    );
}