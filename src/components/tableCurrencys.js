import React, { Component } from 'react';


class TableCurrencys extends Component {
  constructor(props) {
        super(props);
        this.handleCheck = this.handleCheck.bind(this);
    }

  handleCheck(event) {
    this.props.selectMyCurrency(event.target.dataset.code);
  }

  render () {
    let date = this.props.listCurrencys[0] ? this.props.listCurrencys[0].exchangedate : '';
    return (
      <table>
        <caption>
          Курс гривні НБУ до іноземних валют станом на {date}.
        </caption>
        <thead>
          <tr>
            <th>Код</th>
            <th>Назва валюти</th>
            <th>Курс</th>
            <th>Моя валюта</th>
          </tr>
        </thead>
        <tbody>
          {this.props.listCurrencys.map(el =>
            (<tr key={el.cc}>
              <td>{el.cc}</td>
              <td>{el.txt}</td>
              <td>{el.rate}</td>
              <td><input type="checkbox" data-code={el.cc} onChange={this.handleCheck} checked={el.sortKey !== 1 && true} /></td>
            </tr>)
            )}
         </tbody>
      </table>
    )
  }
}

export default TableCurrencys;
