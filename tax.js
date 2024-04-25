

function calculateTax() {
    var income = parseFloat(document.getElementById("income").value);
    var taxRate = parseFloat(document.getElementById("tax-rate").value);

    if (isNaN(income) || isNaN(taxRate)) {
      document.getElementById("result").value = "Invalid input";
      return;
    }

    var taxAmount = (income * taxRate) / 100;
    document.getElementById("result").value = taxAmount.toFixed(2);
  }