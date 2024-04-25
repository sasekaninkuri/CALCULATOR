

function calculatePercentage() {
    var number = parseFloat(document.getElementById("number").value);
    var percentage = parseFloat(document.getElementById("percentage").value);

    if (isNaN(number) || isNaN(percentage)) {
      document.getElementById("result").value = "Invalid input";
      return;
    }

    var result = (number * percentage) / 100;
    document.getElementById("result").value = result.toFixed(2);
  }