
import React from 'react';
import {Image} from "@nextui-org/react";
import  '../css/startPage.css';
import LogoWhite from '../img/logo/Logo-White-sf.png';


function StartPage() {
    return(
        <div class="container">
            <div class="background"></div>
            <div class="content">
                <img className="logo" src={LogoWhite} alt="" />
                <h1 className='nameCompany'>AMI</h1>
            </div>
        </div>

    )
}

export default StartPage;