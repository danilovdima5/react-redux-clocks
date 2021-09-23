import React from 'react';

const CityToActivate = (props) => {
  return (
    <button id={props.name} className="cityButton notActive" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default CityToActivate;
