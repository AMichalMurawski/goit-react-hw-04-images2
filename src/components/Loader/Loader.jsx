import { Component } from 'react';
import { Blocks } from 'react-loader-spinner';
import css from './Loader.module.css';

export class Loader extends Component {
  render() {
    return (
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    );
  }
}
