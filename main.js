const options = {
  enableHighAccuracy: true,
  timeout: 10000,
};

const successCallback = (position) => {
  console.log(position);
};

const errorCallback = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(
  successCallback, errorCallback, options);
