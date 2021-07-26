import React, { useState, useEffect } from 'react';
import GradientButton from 'react-linear-gradient-button';

export const Music = (url) => {
    const [audio] = useState( new Audio(url))
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing,audio])

    const toggle = () =>{
        setPlaying (!playing);
    }

    useEffect(() => {
        audio.addEventListener('end', ()=>{
            setPlaying(false)
        })
        return () => {
            audio.addEventListener('end', ()=>{
                setPlaying(false)
            })
        };
    }, [audio])

    return [playing, toggle];
}

export const BackgroundMusic = ({url}) =>{
    const [playing, toggle] = Music(url)
    return(
        <div>
            <GradientButton 
                className='button' 
                onClick={toggle}       
        > 
                { playing ? 'PAUSE' : 'PLAY'} 
            </GradientButton>
        </div>
    );
}