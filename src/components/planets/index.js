import React from 'react';
import Planet from './planet'

const clickOnPlanet = (name) => {
    console.log(`clique no planeta: ${name} `)
}

const Planets = (props) => {
    return(
        <div>
            <h3>Planets List</h3>
            <button >Show Msg</button>
            <Planet name="Mercúrio"
                    img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/600px-Mercury_in_color_-_Prockter07-edit1.jpg"
                    link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                    clickOnPlanet={clickOnPlanet}/>
            <Planet name="Plutão"
                    img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
                    link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
                    clickOnPlanet={clickOnPlanet}/>
        </div>

    )

}

export default Planets