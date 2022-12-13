import { Component } from 'react';
import css from './Loader.module.css';

export class Loader extends Component {
  render() {
    return <p className={css.loader}>Loading</p>;
  }
}
