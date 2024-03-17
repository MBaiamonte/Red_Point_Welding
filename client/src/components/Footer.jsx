import React from 'react'

const Footer = () => {
    return (
        <div id='footer'>
            <div className='d-flex flex-column justify-content-center align-items-center my-2'>
                <h5>
                Copyright 2024 <span>&copy;</span> Redpoint Welding, LLC
                </h5>
            </div>
            <div className='d-flex justify-content-around flex-wrap'>
                <div>
                    <p>7614 Nikau Dr, Niwot, CO 80503</p>
                </div>
                <div>
                    <h6> (303) 652-8222</h6>
                </div>
                <div>
                    <p>Servicing Greater Colorado Front Range</p>
                </div>
            </div>
        </div>
    )
}

export default Footer