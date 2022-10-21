import './Order-summary-component.scss'
import hero from './images/illustration-hero.svg'
import music from './images/icon-music.svg'
import React from 'react'

export function OrderSummaryComponent() {
  return (
    <main className="order_bg">
      <article>
        <figure>
          <img src={hero} alt="woman with headsets on her head" />
        </figure>
        <section className='order_body'>
          <h1>Order Summary</h1>
          <p className='order_text'>
            You can now listen to millions of songs, audiobooks, and podcasts on any
            device anywhere you like!
          </p>
          <section className='order_price'>
            <ul>
              <li>
                <img src={music} alt="music icon" />
              </li>
              <li>
                <p className='plan'>Annual Plan</p>
                <span className='price'>$59.99/year</span>
              </li>
              <li> 
                <p className='order_change'>Change</p>
                </li>
            </ul>
          </section>
          <button className='order_payment'> Proceed to Payment</button>
          <span className='order_cancel'>Cancel Order</span>
        </section>
      </article>
    </main>
  )
}
