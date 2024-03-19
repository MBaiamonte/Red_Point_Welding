import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Separator from '../components/Separator'

const ContactUsPage = () => {
    return (
        <>
            <Header/>
            <Separator/>
            <div className='d-flex justify-content-around'>
                <div>
                    <div>
                        <p>phone number</p>
                        <p>email</p>
                        <p>address</p>
                    </div>
                    
                    <div>
                        appointment booking
                    </div>
                </div>
                <div>
                    <div>maps api</div>
                </div>
            </div>
            <Footer/>

        </>
    )
}

export default ContactUsPage