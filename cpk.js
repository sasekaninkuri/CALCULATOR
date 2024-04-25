

function calculateCPK() {
    var totalCost = parseFloat(document.getElementById("total-cost").value);
    var totalDistance = parseFloat(document.getElementById("total-distance").value);

    if (isNaN(totalCost) || isNaN(totalDistance) || totalDistance === 0) {
      document.getElementById("result").value = "Invalid input";
      return;
    }

    var cpk = totalCost / totalDistance;
    document.getElementById("result").value = cpk.toFixed(2);
  }