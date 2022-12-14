import { Component } from 'react';
import css from './Button.module.css';

export class Button extends Component {
  handleClick = () => {
    const { pageNr } = this.props;
    const nextPage = pageNr + 1;
    this.props.onClick(nextPage);
  };

  render() {
    return (
      <button className={css.button} type="button" onClick={this.handleClick}>
        Load more
      </button>
    );
  }
}
