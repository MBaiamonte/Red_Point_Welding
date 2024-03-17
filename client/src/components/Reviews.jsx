import React from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Reviews = () => {
    var settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
    };

    return (
        <div id='slider'>
            <Slider {...settings}>
                <div className='review'>
                    <h3>Pamela Stone</h3>
                    <p>
                        <FontAwesomeIcon icon={faQuoteLeft} className='mr-2'/>
                        Of 5 different plumbers that I contacted, Jim was by far the most responsive. 
                        He was quick to come by my place to assess the issue with the hot water heater, and even 
                        delayed other projects as he was quick to determine which issues were considered more "critical." 
                        He worked tirelessly for 6 hours, well into the eve, to be sure everything was complete. 
                        The following day he came by again to check his work and make sure there was nothing amiss. 
                        His price was by far better than any of the others, and the work was perfect. I highly recommend him! 
                        <FontAwesomeIcon icon={faQuoteRight} className='ml-2' />
                    </p>
                </div>
                <div className='review'>
                    <h3>Julia Rechter</h3>
                    <p>
                        <FontAwesomeIcon icon={faQuoteLeft} className='mr-2'/>
                        Jim Hone is a professional, responsible and fair contractor, who gets the job done! 
                        We've had him over for several plumbing issues and he has always been prompt, and responsive. 
                        Also, when an issue seems like it could be addressed without his intervention, 
                        he will offer us a way to fix the problem first,  and save us the trouble and expense of a visit to the house. 
                        Have had only good experiences with Jim.
                        <FontAwesomeIcon icon={faQuoteRight} className='ml-2' />
                    </p>
                </div>
                <div className='review'>
                    <h3>Mark McIntyre</h3>
                    <p>
                        <FontAwesomeIcon icon={faQuoteLeft} className='mr-2'/>
                        I was able to give James a sketch of my thoughts about how to repair and improve an old steel water tank. 
                        James took my sketch and used a combination of off-the-shelf products, welding, and custom assembly to make a perfect product for me.
                        Great work and highly recommended.
                        <FontAwesomeIcon icon={faQuoteRight} className='ml-2' />
                    </p>
                </div>
                <div className='review'>
                    <h3>Willyn Webb</h3>
                    <p>
                        <FontAwesomeIcon icon={faQuoteLeft} className='mr-2'/>
                        Best service ever! Knowledgeable, honest, and efficient-this is the only place I would ever trust. 
                        Jim could have charged me the quotes $200 but he figured out how to fix my bed-fame without welding it and 
                        didn't charge! That's rare! I can't say enough good things!
                        <FontAwesomeIcon icon={faQuoteRight} className='ml-2' />
                    </p>
                </div>
                <div className='review'>
                    <h3>Joni Severson</h3>
                    <p>
                        <FontAwesomeIcon icon={faQuoteLeft} className='mr-2'/>
                        The work Jim did for us was top notch.  The quality of his work and his eye for detail are impressive.  
                        He had to adjust VERY old sink plumbing for one job and he got the job done without issue.  
                        He also installed an exterior hot/cold spigot for us.  
                        We would recommend him for sure and will use him for any future projects we have in our home.
                        <FontAwesomeIcon icon={faQuoteRight} className='ml-2' />
                    </p>
                </div>
            </Slider>
        </div>
    );
}

export default Reviews