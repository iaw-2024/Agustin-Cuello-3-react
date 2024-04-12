import React, {useState} from 'react';
import axios from 'axios';
import Character from './Character'

class ListOfCharacters extends React.Component{
    constructor(){
        super();
        this.state = {
            apiResponse: [],
        };
    }

    callApi(){

        fetch('http://localhost:3001/datos')
        .then(response => response.json())
        .then(data => {
            this.setState({
                apiResponse: data
            })
            console.log("Datos de respuesta de la API: " + data);
            {data.map((rta, index) => {
                console.log(data.name);
            })}
            console.log("Estado del componente luego de llamar a la api: " + this.state.apiResponse);
        })
        .catch( error => {
            console.log(error)
        });
    }

    componentDidMount(){
        this.callApi();
    }

    render(){
        return(
            <div>  
                <div className ="col-sm-11 mx-auto text-center  p-1 m-2">
                    <h3>Listado de personajes de DND</h3>    
                </div>   
                <div className="row mx-3" id = "list-container">
                    {this.state.apiResponse.map((data, index) => {
                        <Character information={data}/>
                    })}
                </div>
            </div>
        )
    }
}

export default ListOfCharacters;

///En servidor, buscar forma de devolver la página ya creada en express, usar engine de template con render
//