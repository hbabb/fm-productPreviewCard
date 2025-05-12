import "./App.scss";
import CartIcon from "./assets/images/icon-cart.svg";
import DesktopProduct from "./assets/images/image-product-desktop.jpg";
import MobileProduct from "./assets/images/image-product-mobile.jpg";

function App() {
    return (
        <main className="container">
            <section className="product-card">
                <picture className="product-card__image">
                    <source srcSet={DesktopProduct} media="(min-width: 40rem)" />
                    <img src={MobileProduct} alt="Product" />
                </picture>
                <div className="product-card__content">
                    <p className="product-card__category text-preset-4">Perfume</p>
                    <h1 className="product-card__title text-preset-1">Gabrielle Essence Eau De Parfum</h1>
                    <p className="product-card__description text-preset-3">
                        A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for
                        the house of CHANEL.
                    </p>
                    <div className="product-card__price">
                        <p className="product-card__current-price text-preset-1">$149.99</p>
                        <p className="product-card__previous-price text-preset-5">$169.99</p>
                    </div>
                    <button className="product-card__button" type="button">
                        <img src={CartIcon} alt="" aria-hidden="true" />
                        <p className="text-preset-2">Add to Cart</p>
                    </button>
                </div>
            </section>
        </main>
    );
}

export default App;
