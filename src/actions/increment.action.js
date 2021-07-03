const increment = (incrementor = 1) => {
  return {
    type: "INCREMENT",
    payload: incrementor,
  };
};

export default increment;
