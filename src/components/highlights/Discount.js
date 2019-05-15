import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import MyButton from '../utils/MyButton';


class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 25,
    }

    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
               discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.percentage()
        },30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade onReveal={() => this.percentage()}>
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Zoom delay={500}>
                        <div className="discount_description">
                            <h3>Purchase tickets before June 20th </h3>
                            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                            <MyButton link='#' title="Purchase Tickets" border='#ff4800' color="#ff4800"/>
                        </div>
                    </Zoom>
                </div>
            </div>
        );
    }
}

export default Discount;