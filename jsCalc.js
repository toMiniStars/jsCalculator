			let result = 0;
			let operation = ['add', 'subtract', 'divide', 'multiply'];
			let working = "";

			function updateDisplay(input) {
					let display = document.getElementById("display");
					let secondDisplay = document.getElementById("secondDisplay");

					if (display.innerHTML === "0" && operation.indexOf(input) === -1) {
							display.innerHTML = input;
					} else if (operation.indexOf(input) >= 0) {
						if (input === 'subtract' && display.innerHTML === "0") {
								// Handle negative numbers
						display.innerHTML = "-";
						} else if (operation.indexOf(display.innerHTML.slice(-1)) >= 0) {
						// Replace the last operator with the current operator
						display.innerHTML = display.innerHTML.slice(0, -1) + input;
						} else {
								if (working === "") {
									working = input;
									result = display.innerHTML;
									display.innerHTML = 0;
							}   else {
									result = calculate(result, display.innerHTML, working);
									secondDisplay.innerHTML = result;
									display.innerHTML = 0;
									working = input;
							}
						}
					} else if (input === "equals") {
							display.innerHTML = calculate(result, display.innerHTML, working);
							result = display.innerHTML;
							working = "";
					} else {
						display.innerHTML += input;
					}
			}

			function clearDisplay() {
					let display = document.getElementById("display");
					display.innerHTML = 0;
			}

			function calculate(firstNumber, secondNumber, operation) {
					let result;
					firstNumber = parseFloat(firstNumber);
					secondNumber = parseFloat(secondNumber);

					switch(operation) {
							case "add":
									result = firstNumber + secondNumber;
								break;
							case "subtract":
									result = firstNumber - secondNumber;
								break;
							case "multiply":
									result = firstNumber * secondNumber;
								break;
							case "divide":
									result = firstNumber / secondNumber;
							default:
								break;
					}
					return result.toString();
			}

			function appendDecimal() {
				let display = document.getElementById("display");
					if (display.innerHTML === "0" || display.innerHTML === "") {
						display.innerHTML = "0.";
					} else if (!display.innerHTML.includes(".")) {
							display.innerHTML += ".";
					}
		}
