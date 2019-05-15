import React from 'react';
import Fade from 'react-reveal/Fade';


const Footer = () => {
    return (
        <footer className='bck_red'>
            <Fade delay={500}>
                <div className='font_righteous footer_logo_venue'>
                    The Venue
                </div>
                <div className="footer_copyright"> Made with 
                <a style={{color:'#FFF',textDecoration:'none'}} target="_blank" rel="noopener noreferrer" href="https://reactjs.org"> ReactJS </a>
                and 
                <a style={{color:'#FFF',textDecoration:'none'}} target="_blank" rel="noopener noreferrer" href="https://material-ui.com/"> Material UI.</a>
                </div>
                <div className="footer_copyright">
                All the images used are available for free in  
                <a style={{color:'#FFF',textDecoration:'none'}} target="_blank" rel="noopener noreferrer" href="https://pexels.com"> Pexels.</a>
                </div>
                <div className="footer_copyright">
                     This project was made for learning purpose only. 
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;