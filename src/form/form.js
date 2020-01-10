import React from 'react';
import './form.css'


const form = (props)=>{

    return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {props.name}
            </form>
  )


}

export default form;
