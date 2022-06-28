import React from 'react';
import './Element.styles.css';

const Element=({name,symbol,group})=>
{
    return (
        <div className={`element ${group}`}>
            <h3>{name}</h3>
            <h1>{symbol}</h1>
        </div>
      );
}

export default Element;
