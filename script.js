function checkTriangle() {
    const side1 = parseFloat(document.getElementById("side1").value);
    const side2 = parseFloat(document.getElementById("side2").value);
    const side3 = parseFloat(document.getElementById("side3").value);
  
    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
      document.getElementById("result").textContent = "Vui lòng nhập đầy đủ các cạnh của tam giác.";
      return;
    }
  
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
      document.getElementById("result").textContent = "Đây không phải là một tam giác hợp lệ.";
    } else if (side1 === side2 && side2 === side3) {
      document.getElementById("result").textContent = "Đây là một tam giác đều.";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      document.getElementById("result").textContent = "Đây là một tam giác cân.";
    } else if (
      (side1 * side1 === side2 * side2 + side3 * side3) ||
      (side2 * side2 === side1 * side1 + side3 * side3) ||
      (side3 * side3 === side1 * side1 + side2 * side2)
    ) {
      document.getElementById("result").textContent = "Đây là một tam giác vuông.";
    } else {
      document.getElementById("result").textContent = "Đây là một tam giác thường.";
    }
  }
  