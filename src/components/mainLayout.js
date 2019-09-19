import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Calculator from './calculator';
import TableCurrencys from './tableCurrencys';
import { connect } from 'react-redux';
import {loadData} from '../actions/loadData';
import {selectMyCurrency} from '../actions/selectMyCurrency';


class MainLayout extends Component {

  componentDidMount() {
    this.props.loadData();
  }

  render () {
    return (
      <div>
        <nav>
          <ul>
            <li><NavLink to='/' exact>Калькулятор</NavLink></li>
            <li><NavLink to='/table'>Курс валют</NavLink></li>
          </ul>
        </nav>
        <Route exact path="/" render={props => <Calculator {...props} listCurrencys={this.props.listCurrencys} /> } />
        
        <Route path="/table" render={props => <TableCurrencys {...props} listCurrencys={this.props.listCurrencys}
                                                                         selectMyCurrency={this.props.selectMyCurrency} /> } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return ({
        listCurrencys: state.listCurrencys
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
      loadData: () => dispatch(loadData()),
      selectMyCurrency: (code) => dispatch(selectMyCurrency(code))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
