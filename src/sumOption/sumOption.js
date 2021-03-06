import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
const sum  =(props) => {
    const feature =props.feature
    const idx =props.idx
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selectOption[feature];
    

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
        {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  };


export default sum;