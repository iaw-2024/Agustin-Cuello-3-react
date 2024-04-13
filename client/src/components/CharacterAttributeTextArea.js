import React from 'react';

class Character extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <textarea readOnly cols="20" name="characterBackground" rows="5" placeholder="Inserte su historia..." className = "form-control" value = {this.props.tagline}>
            </textarea>
        )
    }
}

export default Character;
