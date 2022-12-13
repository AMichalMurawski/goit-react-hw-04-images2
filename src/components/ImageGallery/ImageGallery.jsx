import { Component } from 'react';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    const { children } = this.props;
    return <ul className={css.gallery}>{children}</ul>;
  }
}
