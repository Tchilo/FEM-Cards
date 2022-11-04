import './Profile-card-component.scss'
import hero from './images/image-victor.jpg'
import React from 'react'

export function ProfileCardComponent() {
  return (
    <main className='profile-card'>
      <article>
        <figure>
          <img src={hero} alt="man in an open speace " />
        </figure>
        <section>
          <h1>Victor Crest</h1>
          <span> 26</span>
          <p>London</p>
        </section>
        <div className='hr'></div>
        <ul>
          <li>80K
            <span>Followers</span>
          </li>
          <li>
            803K
            <span>Likes</span>
          </li>
          <li>
            1.4K
            <span>Photos</span>
          </li>
        </ul>
      </article>
    </main>
  )
}
