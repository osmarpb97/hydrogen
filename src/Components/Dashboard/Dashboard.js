import React from 'react'
import Slider from './Slider/Slider'
import M from  'materialize-css'
import lifecycle from 'react-pure-lifecycle'
import ReactFullpage from '@fullpage/react-fullpage';
import './Dashboard.css'

const Dashboard_method = {
    componentDidMount() {
        let elems = document.querySelectorAll('.slider');
        M.Slider.init(elems, {});
    }
}

export const ScrollSections = () => (
    <ReactFullpage
        anchors={['firstPage', 'secondPage', 'thirdPage','fourthPage']}
        sectionsColor={['#282c34', '#ff5f45', '#0798ec','#0798ec']}
        navigation={['false']}    
        showActiveTooltip={['true']}    
        fitToSection={['true']}    
        touchSensitivity={['15']}
        lockAnchors={['false']}  
        
        
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section ">
                <p>Section 1</p>
            </div>
            <div className="section ">
                <p>Section 2</p>
            </div>
            <div className="section">
                <p>Section 3</p>
            </div>
            <div className="section">
            section 4</div>    
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );


const Dashboard = () => {
    return(
        <div>
        <div className="full-screen">
            <Slider />
        </div>
        <div>

            <ScrollSections />
        </div>
        </div>
    )

}


export default lifecycle(Dashboard_method)(Dashboard);
