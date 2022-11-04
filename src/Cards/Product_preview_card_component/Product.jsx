import React from 'react'
import './product.scss'
import mobile from './images/image-product-mobile.jpg'
import desktop from './images/image-product-desktop.jpg'
import cart from './images/icon-cart.svg'

const Product = () => {
  return (
    <main className="product_preview">
      <article>
        <figure>
          <img className='mobile-pic' src={mobile} alt="glass perfume bottle" />
          <img className='desktop-pic' src={desktop} alt="glass perfume bottle" />
        </figure>
        <section className='perfume_data'>
          <span className='perfume'>perfume</span>
          <h1>
            Gabrielle Essence Eau De Parfum
          </h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
          </p>
          <section className='perfume_prices'>
          <span className='price'>
            $149.99
          </span>
          <span className='line'>$169.99
          </span>
          </section>
          <button>
            <img src={cart} alt="" />
            Add to Cart
          </button>
        </section>
      </article>
    </main>
  )
}

export default Product