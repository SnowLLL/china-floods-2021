import React from 'react';
import dataFloods from '../data'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export const PhotoList = () =>{
    
    function imageN (i){
        return  (
            <img className='ele rounded sliderimg' 
                src={dataFloods[i].url}
                alt='China Floods in 2021'>
            </img>
        );
    }

    return(
        <div className='card'>
            <AliceCarousel autoPlay autoPlayInterval="2000">
                {imageN (0)}
                {imageN (1)}
                {imageN (2)}
                {imageN (3)}
                {imageN (4)}
                {imageN (5)}
                {imageN (6)}
                {imageN (7)}
                {imageN (8)}
                {imageN (9)}
                {imageN (10)}
                {imageN (11)}
                {imageN (12)}
                {imageN (13)}
                {imageN (14)}
                {imageN (15)}
                {imageN (16)}
                {imageN (17)}
                {imageN (18)}
                {imageN (19)}
                {imageN (20)}
                {imageN (21)}
                {imageN (22)}
                {imageN (23)}
            </AliceCarousel>
        </div>
    );
}