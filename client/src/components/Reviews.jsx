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
                <div className='review'>
                    <h3>Matt Hathorn</h3>
                    <p>
                        <FontAwesomeIcon icon={faQuoteLeft} className='mr-2'/>
                        Fantastic work. Jim was very easy to work with and went above and beyond to make sure we were happy with his work. 
                        VERY reasonable price. We couldn't ask for more.
                        <FontAwesomeIcon icon={faQuoteRight} className='ml-2' />
                    </p>
                </div>
                <div className='review'>
                    <h3>Gary Hagensen</h3>
                    <p>
                        <FontAwesomeIcon icon={faQuoteLeft} className='mr-2'/>
                        I was looking for some one to install a new water heater in a confined space in my basement and a man I have a lot of respect for, Jeff Lally
                        of Unlimited Property Improvements, recommended Jim Hone of
                        Redpoint Welding LLC.  As I figured with Jeff's recommendation,  Jim
                        had the same integrity and attention to detail that I was hoping for.
                        Jim quoted me a price to do the job and spent several hours getting the
                        water heater into the available space and making sure it was installed
                        properly and leak free.  He checked back the next day to make sure I was
                        satisfied with the installation.  Thanks for the quality work Jim.
                        <FontAwesomeIcon icon={faQuoteRight} className='ml-2' />
                    </p>
                </div>
                <div className='review'>
                    <h3>Brent Heintz</h3>
                    <p>
                        <FontAwesomeIcon icon={faQuoteLeft} className='mr-2'/>
                        We hired Jim Hone to install a new water heater in our residence.  Jim communicated promptly, 
                        arriving when he said he would—that was a nice start 
                        He was professional, worked quickly and efficiently, and did the job we needed at a resonable price. Recommended!
                        <FontAwesomeIcon icon={faQuoteRight} className='ml-2' />
                    </p>
                </div>
                <div className='review'>
                    <h3>Marcia Kramer</h3>
                    <p>
                        <FontAwesomeIcon icon={faQuoteLeft} className='mr-2'/>
                        Fantastic business! I have used Jim/ Redpoint welding several times and find the service to be exceptional. 
                        He is efficient and very thorough. I completely trust and rely on the high quality of his work. 
                        If you are in need of welding services you could not pick a better company. He is one of the "good guys" !
                        <FontAwesomeIcon icon={faQuoteRight} className='ml-2' />
                    </p>
                </div>
                <div className='review'>
                    <h3>Dan Glusman</h3>
                    <p>
                        <FontAwesomeIcon icon={faQuoteLeft} className='mr-2'/>
                        After working with Jim of Redpoint Welding at our brewery, I have been consistently amazed at both the quality of the work preformed, and enormous scope of work he was able to do.  
                        In the past 8 months, he has handled boiler piping redesigns, municipal water heater installs and piping, water purification systems, carbon dioxide systems, compressed air piping, cooling systems, 
                        and custom fabrication of both mild and stainless steels, rigging, part repair, and the occasional odds and ends we needed...Most of this work occurred under spatial constraints which were extremely 
                        difficult on the best of days and terrible on the worst of them.  He was willing to work around our breweries production schedule where others were not, saving us considerable time and money in the process.  
                        I would highly recommend him to anyone in the food & beverage space, or anyone else needing a fantastic welder and fabricator.  
                        The depth of knowledge and understanding for what would work for us and what wouldn't, has been priceless, and is why we continue to work with him continuously.
                        <FontAwesomeIcon icon={faQuoteRight} className='ml-2' />
                    </p>
                </div>
                <div className='review'>
                    <h3>Dan Bradley</h3>
                    <p>
                        <FontAwesomeIcon icon={faQuoteLeft} className='mr-2'/>
                        Jim Hone, Owner of Redpoint Welding LLC, has been doing a welding project off and on regarding two overhead cranes for about a year.  
                        He is reliable and does a good job with his welds.  He works well by himself or with others.  
                        I would highly recommend Jim for any project that involves welding.
                        <FontAwesomeIcon icon={faQuoteRight} className='ml-2' />
                    </p>
                </div>
                <div className='review'>
                    <h3>Whit Carman</h3>
                    <p>
                        <FontAwesomeIcon icon={faQuoteLeft} className='mr-2'/>
                        Jim did a great job installing a new pressure reduction valve in our house. He was knowledgeable,
                        prompt, and easy to work with. The price was pretty reasonable too. Thanx Jim.
                        <FontAwesomeIcon icon={faQuoteRight} className='ml-2' />
                    </p>
                </div>
                <div className='review'>
                    <h3>Cole Bartlett</h3>
                    <p>
                        <FontAwesomeIcon icon={faQuoteLeft} className='mr-2'/>
                        Jim did a great job installing a new gas line at our new house. He was efficient, friendly, and did a fantastic job.
                        <FontAwesomeIcon icon={faQuoteRight} className='ml-2' />
                    </p>
                </div>
            </Slider>
        </div>
    );
}

export default Reviews