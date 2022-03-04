import React from 'react'
import { HeroCollage } from './HeroCollage'
import { HeroFooter } from './HeroFooter'
import { HeroHeader } from './HeroHeader'
import { HeroPhoneBlock } from './HeroPhoneBlock'
import HeroUsedBy from './HeroUsedBy'

export const Hero = () => {
  return (
    <div className="hero-container">
      <HeroHeader />
      <div className="hero-media">
        <HeroCollage />
        <HeroPhoneBlock />
      </div>
      <HeroUsedBy/>
      <HeroFooter/>
    </div>
  )
}
