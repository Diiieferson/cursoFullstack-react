import React from 'react';
import GrayImg from '../../shared/gray_img';

const Planet = (props) => {
    return(
        <div onClick={() => props.clickOnPlanet(props.name)} >

            <h4>{props.name}</h4>
            <a href={props.link}>{props.link}</a>
            <GrayImg img_url={props.img_url}/>
        </div>

    )

}

export default Planet