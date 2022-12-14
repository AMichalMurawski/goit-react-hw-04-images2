import { render } from '@testing-library/react';
import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { loadImagesFromPixabay } from './services/api';

const IMAGES_PER_PAGE = 12;

export class App extends Component {
  state = {
    totalHits: 0,
    pageNr: 1,
    images: [],
  };

  searchImages = async (searchText, pageNr, imagesPerPage) => {
    const response = await loadImagesFromPixabay(
      searchText,
      pageNr,
      imagesPerPage
    );
    let images = [];
    response.hits.forEach(image => {
      images.push({
        id: image.id,
        webformatURL: image.webformatURL,
        largeImageURL: image.largeImageURL,
      });
    });
    if (pageNr === 1) {
      this.setState({ images: [] });
    }
    this.setState(prevState => {
      let newState = [];
      pageNr > 1
        ? (newState = [...this.state.images, ...images])
        : (newState = [...images]);
      return {
        images: newState,
        pageNr,
      };
    });
  };

  render() {
    const { images, pageNr, totalHits } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar
          searchImages={text => this.searchImages(text, 1, IMAGES_PER_PAGE)}
        />
        <div>
          <ImageGallery>
            {images.map(image => {
              <ImageGalleryItem />;
            })}
          </ImageGallery>
          <Button />
        </div>
        <Loader />
        <Modal />
      </div>
    );
  }
}
