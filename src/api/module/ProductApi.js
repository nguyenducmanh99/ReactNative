import Api from '../index';

const url = '/products';

const getAll = () => {
  return Api.get(`${url}`);
};

const api = {getAll};
export default api;
