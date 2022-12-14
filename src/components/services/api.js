import axios from 'axios';

const PIXABAY_KEY = '31382977-48057b8c379edff4cc262b675';

export const loadImagesFromPixabay = async (
  searchText,
  pageNr,
  imagesPerPage
) => {
  const response = await axios({
    method: 'get',
    url: 'https://pixabay.com/api/',
    params: {
      q: searchText,
      page: pageNr,
      key: PIXABAY_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: imagesPerPage,
    },
  })
    .then(response => {
      if (response.data.totalHits === 0) {
        return { totalHits: 0 };
      }
      const { totalHits, hits } = response.data;
      const images = { totalHits, hits };
      return images;
    })
    .catch(error => {
      alert(error);
    });
  return response;
};
