let convertBtn = document.querySelector("#Convert");

let result = document.querySelector("#Result");



async function fetchvalue(from, to, amt) {

  const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;



  const responce = await fetch(url);

  const data = await responce.json();



  const rate = data[from][to];

  let convertedAmount = (amt * rate).toFixed(2);

  result.innerHTML = `${amt} ${from.toUpperCase()} = ${convertedAmount} ${to.toUpperCase()}`;

}



convertBtn.addEventListener("click", (e) => {

  e.preventDefault();

  let convertFrom = document.querySelector("#Convert-from").value;

  let convertTo = document.querySelector("#Convert-to").value;

let amount = document.querySelector("#amount").value;



  if (amount === "" || isNaN(amount)) {

    result.innerHTML = "Please enter a valid amount!";

    return;

  }

    fetchvalue(convertFrom, convertTo, amount);

});

