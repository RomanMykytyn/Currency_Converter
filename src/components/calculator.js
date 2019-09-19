import React, { Component } from 'react';


class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      rateSell: 1,
      rateBay: 1,
      quantity: 0,
      defaultCurrencyBuy: localStorage.getItem('defaultCurrencyBuy') || 'Українська гривня',
      defaultCurrencySell: localStorage.getItem('defaultCurrencySell') || 'Українська гривня',
    };
    this.handleSelectSell = this.handleSelectSell.bind(this);
    this.handleSelectBuy = this.handleSelectBuy.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleButtonSell = this.handleButtonSell.bind(this);
    this.handleButtonBuy = this.handleButtonBuy.bind(this);
  }

  componentDidMount() {
    if (this.props.listCurrencys.length) {
      let elemSell = document.getElementById('selectSell');
      let elemBuy = document.getElementById('selectBuy');
      this.setState({
        rateSell: elemSell.options[elemSell.selectedIndex].dataset.rate,
        rateBay: elemBuy.options[elemBuy.selectedIndex].dataset.rate,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.listCurrencys !== prevProps.listCurrencys) {
      let elemSell = document.getElementById('selectSell');
      let elemBuy = document.getElementById('selectBuy');
      this.setState({
        rateSell: elemSell.options[elemSell.selectedIndex].dataset.rate,
        rateBay: elemBuy.options[elemBuy.selectedIndex].dataset.rate,
      });
    }
  }

  handleSelectSell(event) {
    this.setState({
      rateSell: event.target.options[event.target.selectedIndex].dataset.rate,
      defaultCurrencySell: event.target.value,
    });
  }

  handleSelectBuy(event) {
    this.setState({
      rateBay: event.target.options[event.target.selectedIndex].dataset.rate,
      defaultCurrencyBuy: event.target.value,
    });
  }

  handleInput(event) {
    this.setState({
      quantity: event.target.value
    });
  }

  handleButtonSell() {
    let elem = document.getElementById('selectSell');
    localStorage.setItem('defaultCurrencySell', elem.value);
  }

  handleButtonBuy() {
    let elem = document.getElementById('selectBuy');
    localStorage.setItem('defaultCurrencyBuy', elem.value);
  }

  render () {
    if (!this.props.listCurrencys.length) {
      return(
        <div className='calculator'>
          <h1>Завантаження даних</h1>
        </div>
      )
    }

    var result = this.state.rateSell / this.state.rateBay * this.state.quantity;

    return (
      <div className='calculator'>

        <div>
          <p>Віддаю:</p>
          <select id='selectSell' value={this.state.defaultCurrencySell} onChange={this.handleSelectSell}>
            <option data-rate='1'>Українська гривня</option>
            {this.props.listCurrencys.map(el =>
              (<option key={el.cc} data-rate={el.rate}>
                {el.txt}
               </option>))}
          </select>
          <input type='button' className='button' value='За замовчуванням' onClick={this.handleButtonSell} /> <br />
          <input type='number' className='input' onChange={this.handleInput} placeholder='Введіть суму' />
        </div>

        <div>
          <p>Отримую:</p>
          <select id='selectBuy' value={this.state.defaultCurrencyBuy} onChange={this.handleSelectBuy}>
            <option data-rate='1'>Українська гривня</option>
            {this.props.listCurrencys.map(el =>
              (<option key={el.cc} data-rate={el.rate}>
                {el.txt}
               </option>))}
          </select>
          <input type='button' className='button' value='За замовчуванням' onClick={this.handleButtonBuy} /> <br />
          <input type='number'className='input' value={result} readOnly />
        </div>
      </div>
    )
  }
}

export default Calculator;
