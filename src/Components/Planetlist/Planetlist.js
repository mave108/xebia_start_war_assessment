import React from 'react';
import Detail from '../Detail/Detail';
import {_planetRatio} from '../../Helper/functions';

class Planetlist extends React.Component{
    constructor(props){
        super(props);
    }
    toggle(elem) {
        if (elem.style.display === "none") {
            elem.style.display = "block";
        } else {
            elem.style.display = "none";
        }
      }
     handleClick =(id) => {
        let clikedRef = this[`clickedElement${id}`];  
        this.toggle(clikedRef);      
        //clikedRef.style.display = "block";
    }
    render(){
    return(
        <div className="jumbotron">
        {this.props.planets.map((planet)=>{
          return (
          <div className="card" 
               key={planet.population} 
               style={{marginBottom:"5px"}}                
               onClick={()=>this.handleClick(planet.population)}>
            <div className="card-body">
            <h5 className="card-title" style={{fontSize: _planetRatio(planet.population)}}>{planet.name}</h5>
            <div ref={input => { this[`clickedElement${planet.population}`] = input }} style={{display: "none"}}>
            <ul className="list-group">
            <Detail name="Population" value={planet.population} />
            <Detail name="Rotation Period" value={planet.rotation_period} />
            <Detail name="Orbital Period" value={planet.orbital_period} />
            <Detail name="Diameter" value={planet.diameter} />            
            <Detail name="Climate" value={planet.climate} />
            <Detail name="Gravity" value={planet.gravity} />
            <Detail name="Terrain" value={planet.terrain} />            
            <Detail name="Surface Water" value={planet.surface_water} />            
            </ul>
                </div>
            </div>
          </div>
        )
        })}   
        </div>     
    );
}
}

export default Planetlist;