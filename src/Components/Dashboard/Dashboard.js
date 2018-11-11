import React from 'react'
import Slider from './Slider/Slider'
import M from  'materialize-css'
import lifecycle from 'react-pure-lifecycle'

export const Dashboard_method = {
    componentDidMount() {
        let elems = document.querySelectorAll('.slider');
        M.Slider.init(elems, {});
    }
}

const Dashboard = () => {
        return(
            <div className="dashboard">
                <Slider />
            </div>
        )
}

export default lifecycle(Dashboard_method)(Dashboard);
