import React from 'react';
import Anime from 'react-anime'
import anime from 'animejs/lib/anime.es.js'
import { BackgroundMusic } from '../components'
import sound from '../assets/rain.mp3'
import AnimatedNumber from 'react-animated-number'
import dataFloods from '../data'

export const Title =() =>{

    let animeProps = {
        scale: [
            {value: .1, easing: 'easeOutSine', duration: 500},
            {value: 1, easing: 'easeInOutQuad', duration: 1200}
          ],
        delay: anime.stagger(500),
    }

    return(
        <div class="titlePage">
            <Anime {...animeProps}>
                <span class="letters">C&nbsp;H&nbsp;I&nbsp;N&nbsp;A &nbsp; &nbsp;F&nbsp;L&nbsp;O&nbsp;O&nbsp;D&nbsp;S</span>
                <span class="letters">2021</span>
            </Anime>
            
            <AnimatedNumber 
                value= {dataFloods[26].number} 
                duration={1000}
                id='number'
            /> 
            <h1>People Affected</h1>

            <BackgroundMusic url={sound} />
        </div>
    );
}