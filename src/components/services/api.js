import axios from 'axios';

const PIXABAY_KEY = '31382977-48057b8c379edff4cc262b675';

export const loadImagesFromPixabay = async (
  searchImages,
  pageNr,
  imagePerPage
) => {
  const response = await axios({
    method: 'get',
    url: 'https://pixabay.com/api/',
    params: {
      q: searchImages,
      page: pageNr,
      key: PIXABAY_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: imagePerPage,
    },
  })
    .then(response => {
      console.log(response);
      if (response.data.totalHits === 0) {
        return { totalHits: 0 };
      }
      const { totalHits, hits } = response.data;
      return { totalHits, hits };
    })
    .catch(error => {
      alert(error);
    });
};
