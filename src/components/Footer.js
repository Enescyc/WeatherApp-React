import React from 'react';

function Footer() {
    return <div>

        <hr/>
        <div className='h-10 bg-transparent flex w-auto justify-center m-5'>
            <span className='flex items-center justify-center m-3'>
                <img className="h-8 w-8 m-1 p-1" src="github.png" alt="github"></img>
                <h5><a className="text-white"href="https://github.com/Enescyc">Github</a></h5>
            </span>
            <span className='flex items-center justify-center m-3'>
                <img className="h-8 w-8 m-1 p-1" src="linkedin-logo.png" alt="linkedIn"></img>
                <h5><a className='text-white ' href="https://www.linkedin.com/in/muhammed-enes-%C5%9Fahin-8a882717b/">LinkedIn</a></h5>
            </span>
            

        </div>
        <hr/>

    </div>

        ;
}

export default Footer;
