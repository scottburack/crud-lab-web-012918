import React, { Component } from 'react';
import  ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleDelete = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }

  render() {
    return (
      <div>
        <li>{this.props.restaurant.text}</li>
        <button onClick={() => this.handleDelete()}>X</button>
        <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id}/>
      </div>
    );
  }
};

export default Restaurant;
