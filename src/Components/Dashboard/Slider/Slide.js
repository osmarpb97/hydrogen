import React from 'react'

const Slide = ({sliders}) => {
    const slidec = sliders.map((nslide) => {
        if(nslide.side==='1'){
        return(
            <li className="nslide" key={nslide.id}>
                <img alt="slider" src={nslide.url} className="center-align"></img> 
                <div className="caption left-align">
                    <h3>{nslide.tagline}</h3>
                    <h5 className="light grey-text text-lighten-3">{nslide.smslogan}</h5>
                </div>
            </li>
        )}
        else if(nslide.side==='3'){
        return(
            <li className="nslide" key={nslide.id}>
                <img alt="slider" src={nslide.url} className="center-align"></img> 
                <div className="caption right-align ">
                <h3>{nslide.tagline}</h3>
                <h5 className="light grey-text text-lighten-3">{nslide.smslogan}</h5>
                </div>
             </li>)
        }else{
        return(
            <li className="nslide" key={nslide.id}>
                <img alt="slider" src={nslide.url} className="center-align"></img> 
                <div className="caption center-align ">
                <h3 className=" black">{nslide.tagline}</h3>
                <h5 className="light grey-text text-lighten-3">{nslide.smslogan}</h5>
                </div>
            </li>)
        }
    })
    return (<ul className="slides">{slidec}</ul>)
}

export default Slide;