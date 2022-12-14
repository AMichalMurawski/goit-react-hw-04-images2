import { render } from '@testing-library/react';
import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { loadImages } from './services/api';

export class App extends Component {
  render() {
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
        <Searchbar />
        <div>
          <ImageGallery>
            <ImageGalleryItem />
          </ImageGallery>
          <Button />
        </div>
        <Loader />
        <Modal />
      </div>
    );
  }
}
