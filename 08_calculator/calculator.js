const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const sum = (nums) => {
  let total = 0;
  nums.forEach(num => total += +num);
  return total;
};

const multiply = (...nums) => {
  let product = nums[0];
  for (let i = 1; i < nums.length; i++)
    product *= nums[i];
  return product;
};

const power = (num, exp) => Math.pow(num, exp);

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
