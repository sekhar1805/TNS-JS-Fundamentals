/*
Prepare a tax calculator using HTML and JS.

The rules of the tax is as follows:

- if income is less than ₹2,50,000 : No tax
- for income between ₹2,50,000 and 5,00,000 : 5% tax of total income
- for income between ₹5,00,000 and ₹10,00,000 : 10% tax of total income
- for income between more than ₹10,00,000 : 20% of total income

Take input from the user and output the tax that he has to paid.

- The page will have a `h1` heading of `TAX CALCULATOR`.
- Total income and tax will have `h2` heading

**Sample Output:**

```
TAX CALCULATOR

Total Income: ₹200000
Total Tax: nil
```

```
TAX CALCULATOR

Total Income: ₹600000
Total Tax: ₹60000
```

### **Write any JS code in `script.js` file.**
*/

function calculateTax() {
  const incomeInput = document.getElementById("incomeInput").value;
  const income = parseFloat(incomeInput);

  let tax = 0;
  if (income < 250000) tax = 0;
  else if (income >= 250000 && income <= 500000) tax = income * 0.05;
  else if (income > 500000 && income <= 1000000) tax = income * 0.1;
  else tax = income * 0.2;

  document.getElementById("incomeAmount").textContent = income;
  document.getElementById("taxAmount").textContent = tax.toFixed(2);
}
