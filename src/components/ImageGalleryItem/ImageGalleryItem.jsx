import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { src, alt } = this.props;
    return (
      <li className={css['gallery-item']}>
        <img className={css['item-image']} src={src} alt={alt} />
      </li>
    );
  }
}
