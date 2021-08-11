import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import sampleBurgers from '../sample-burgers';
import Burger from './Burger';

class App extends Component {
  state = {
    burgers: {},
    order: {},
  };

  addBurger = burger => {
    // Сделали копию объекта
    const burgers = { ...this.state.burgers };
    burgers[`burger${Date.now()}`] = burger;
    this.setState({ burgers });
  };

  sampleBurgers = () => {
    this.setState({ burgers: sampleBurgers });
  };

  addToOrder = key => {
    const order = { ...this.state.order };
    // Добавление в объект по ключу
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  render() {
    return (
      <div className="burger-paradise">
        <div className="menu">
          <Header title="Very Hot Burger" />
          <ul className="burgers">
            {Object.keys(this.state.burgers).map(key => {
              return (
                <Burger
                  key={key}
                  index={key}
                  details={this.state.burgers[key]}
                  addToOrder={this.addToOrder}
                />
              );
            })}
          </ul>
        </div>
        <Order {...this.state} />
        <MenuAdmin addBurger={this.addBurger} sampleBurgers={this.sampleBurgers} />
      </div>
    );
  }
}

export default App;
