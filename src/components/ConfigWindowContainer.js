import React from 'react';
import { connect } from 'react-redux';
import { addCity, removeCity, changeCity } from '../store/clocks/actions';

import ConfigWindow from './ConfigWindow';

class ConfigWindowContainer extends React.Component {
  render() {
    return (
      <ConfigWindow
        timezones={this.props.timezones}
        hideConfigureWindow={this.props.hideConfigureWindow}
        addCity={this.props.addCity}
        removeCity={this.props.removeCity}
        changeCity={this.props.changeCity}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    city: state.citiesReducer.city,
  };
};

export const mapDispatchToProps = {
  addCity: addCity,
  removeCity: removeCity,
  changeCity: changeCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfigWindowContainer);
