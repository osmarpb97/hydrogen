import React,{Component} from 'react';
import Slide from './Slide';
import AddSlide from './AddSlide';
import Dashboard_method from '../Dashboard'
import M from  'materialize-css'

class Slider extends Component {


    state = {
        sliders : [
            { url : 'https://images.pexels.com/photos/705164/computer-laptop-work-place-camera-705164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' ,tagline : 'Hi :D' , smslogan: 'This is a test.',side: '1', id: 1 },
            { url : 'https://images.pexels.com/photos/872958/pexels-photo-872958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' ,tagline : 'Hi :D' , smslogan: 'This is a test.', side: '2', id: 2 }
        ]
    }

    componentDidUpdate() {
        let elems = document.querySelectorAll('.slider');
        M.Slider.init(elems, {});
    }

    addSlide = (slide) =>{
        slide.id= Math.random();
        let sliders=[...this.state.sliders,slide];
        this.setState({
            sliders:sliders
        })
        this.componentDidUpdate();
    }



    render() {
        return (
        <div className="slider-adjustment ">
            <div className="slider fullscreen">
                 <Slide sliders = {this.state.sliders} />
            </div>
        </div>
    );}
}

export default Slider;
