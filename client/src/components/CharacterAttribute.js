import React from 'react';

class Character extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = "form-label"> {this.props.tagline} </div> 
        )
    }
}

export default Character;
