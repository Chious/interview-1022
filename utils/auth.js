export const setToken = (name, token) => {
  localStorage.setItem(name, token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};
