import './NFT-preview-card.scss'
import React from 'react'
import clock from './images/icon-clock.svg'
import ethereum from './images/icon-ethereum.svg'
import person from './images/image-avatar.png'
import hero from './images/image-equilibrium.jpg'
import view from './images/icon-view.svg'

const NftPreview = () => {
  return (
    <div className='nft_bg'>

      <main className='nft_card'>
        <div className='nft_imgs'>
          <div className="nft_tint"></div>
          <div className="nft_img">
            <img src={hero} alt="#" />
          </div>
          <div className='nft_view'>
            <img src={view} alt="#" size='10' />
          </div>
        </div>
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>

        <div className='nft_icons'>
          <div>
            <img src={ethereum} alt="#" />
            <span className='nft_abrv'>0.041 ETH</span>
          </div>
          <div className='nft_time'>
            <img src={clock} alt="clock" />
            <span> 3 days left</span>
          </div>
        </div>

        <div className='hr'></div>
        <div className='nft_person'>
          <img src={person} alt="" />
          <p>
            Creation of <span className='nft_name'>Jules Wyvern</span>
          </p>
        </div>
      </main>
    </div>
  )
}

export default NftPreview
