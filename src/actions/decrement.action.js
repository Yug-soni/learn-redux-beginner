const decrement = (decremental = 1) => {
  return {
    type: "DECREMENT",
    payload: decremental,
  };
};

export default decrement;
