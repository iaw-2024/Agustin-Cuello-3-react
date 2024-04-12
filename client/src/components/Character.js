import React from 'react';
import CharacterAttribute from './CharacterAttribute';
import CharacterAttributeTextArea from './CharacterAttributeTextArea';

class Character extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="col-sm-3 mx-auto border p-3 m-3 raised-block">
                <CharacterAttribute tagline = {"Nombre: " + this.props.information.name}/>
                <CharacterAttribute tagline = {"Edad: " + this.props.information.age}/>
                <CharacterAttribute tagline = {"Nivel: " + this.props.information.level}/>
                <CharacterAttribute tagline = {"Raza: " + this.props.information.race}/>
                <CharacterAttribute tagline = {"Clase: " + this.props.information.class}/>
                <CharacterAttribute tagline = {"Trasfondo del personaje: "}/> 
                <CharacterAttributeTextArea tagline = {this.props.information.background}/>
            </div>
        )
    }
}

export default Character;
