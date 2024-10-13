import axios from 'axios';

const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchCampers = async (filters) => {
  try {
    const response = await axios.get(BASE_URL, { params: filters });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('No campers found with the specified filters.');
    }
    throw new Error('Something went wrong.');
  }
};

export const fetchCamperById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};
