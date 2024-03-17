import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
import Separator from '../components/Separator';

const LandingPage = () => {
    return (
        <>
            <Header/>
            <Separator/>
            <Reviews/>
            <Footer/>
        </>
    )
}

export default LandingPage