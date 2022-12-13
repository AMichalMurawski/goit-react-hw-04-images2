import { Component } from 'react';
import css from './Button.module.css';

export class Button extends Component {
  render() {
    return (
      <button className={css.button} type="button">
        Load more
      </button>
    );
  }
}
