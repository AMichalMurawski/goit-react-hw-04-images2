import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  modalOpen = src => {
    this.props.modalOpen(src);
  };

  render() {
    const { images } = this.props;
    return (
      <ul className={css.gallery}>
        {images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              srcWeb={image.webformatURL}
              srcLarge={image.largeImageURL}
              alt={image.id.toString()}
              modalOpen={src => this.modalOpen(src)}
            />
          );
        })}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
