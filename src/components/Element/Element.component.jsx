import React from 'react';
import './Element.styles.css';

const Element=({name,symbol,group,masa,num})=>
{
    return (
        <div className={`element ${group}`}>
            <div className="top-element">
                <p>{num}</p>
                <p>{masa}</p>
            </div>
            <h3>{symbol}</h3>
            <p>{name}</p>
        </div>
      );
}

export default Element;
