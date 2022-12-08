import React from 'react'
import sedans from './images/icon-sedans.svg'
import suv from './images/icon-suvs.svg'
import luxury from './images/icon-luxury.svg'
import './column.scss'


const ColumnPreview = () => {
  return (
    <main className='columns_cards'>
      <article>
        <section className='sedans'>
          <figure>
            <img src={sedans} a alt="" />
          </figure>
          <h1>Sedans</h1>
          <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
            or on your next road trip.</p>
          <button>Learn more</button>
        </section>

        <section className='suvs'>
          <figure>
            <img src={suv} alt="" />
          </figure>
          <h2>SUVs</h2>
          <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
            and off-road adventures.</p>
          <button>Learn more</button>
        </section>

        <section className='luxury'>
          <figure>
            <img src={luxury} alt="" />
          </figure>
          <h2>Luxury</h2>
          <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
            rental and arrive in style.</p>
          <button>Learn more</button>
        </section>
      </article>
    </main>
  )
}

export default ColumnPreview








