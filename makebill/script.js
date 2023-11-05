/*
Make a bill using the html code. The format of the bill will be as follows:

- `h2` heading of `BILL`
- `h4` heading of all the items' price
- `h3` heading of the total price.

Take total no. of item from user and all other items as 
` <item_name> <item_price>`.

**Sample Input:**

```
3
Notebook 90
Pen 10
Book 250
```

**Sample Output**

```
BILL
Notebook: 90
Pen: 10
Book: 250
--------------
TOTAL: 350
```

Use only JavaScript to complete this assignment. Do not modify `index.html` file. Insert `BILL` under a `h1` header tag and rest all html code inside
```
*/
const generateBill = () => {
  const totalItems = parseInt(prompt("Enter the totalnumber of items:"));

  let billText = "Bill<br>";
  let totalAmount = 0;
  for (let i = 0; i < totalItems; i++) {
    const input = prompt("Enter Item name and Price (e.g., Notebook 90:)");
    const [itemName, itemPrice] = input.split(" ");
    const itemPriceFloat = parseFloat(itemPrice);
    if (!isNaN(itemPriceFloat)) {
      billText += `${itemName} : ${itemPriceFloat} <br>`;
      totalAmount += itemPriceFloat;
    } else {
      alert(
        "Invalid input.Please enter item name and price separated by a space."
      );
      i--;
    }
  }

  billText += "-------<br>";
  billText += `Total:${totalAmount}`;
  document.getElementById("solution").innerHTML = billText;
};
generateBill();
