export const mySum = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0);
};
