//I am doing this to: logthe action in the console
//goal is to use middlewarein a way that redux likes
//notice: redux is "function heavy" aka it favors functions and I can curry info using multiple functions

const logger = (store) => (next) => (action) => {
  //thing can be done
  console.log("___action___", action);
  next(action);
};

export default logger;
