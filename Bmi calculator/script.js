/*
Problem Statement
---

You have been hired by a client to design a healthcare website. One of the components of the website is a BMI calculator. You need to take the weight and height of the user as input and calculate the BMI score as follows : 

`BMI = weight / (height * height)`

**Input:**

- One single number for `weight` in kg.
- One single number for `height` in m.

**Output:**

- If BMI is less than or equal to 18.4, `Underweight`.
- If BMI is between 18.5 and 24.9, `Normal`.
- If BMI is between 25 and 29.9, `Overweight`.
- If BMI is above 30, `Obese`.


**Constraints:**

- In the formula, `weight` should be in kg and `height` should be in m.
- All floating numbers should be rounded to 1 decimal.

**Sample Input:**

- The first line contains a single number for `weight`.
- The second line contains a single number for `height`.

```
100
175
```

**Sample Output:**

```
32.7 Obese
```

### **Write your code in the `index.js` file with input from the user and output to the user**
*/

const calculteBMI = (weight, height) => {
  const bmi = (weight / (height * height)).toFixed(1);
  let category;
  if (bmi <= 18.4) category = "Underweight";
  else if (bmi <= 24.9) category = "Normal";
  else if (bmi <= 29.9) category = "Overweight";
  else category = "Obese";

  return `${bmi} ${category}`;
};
const output = calculteBMI(100, 1.75);
console.log(output);
