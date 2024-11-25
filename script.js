//your JS code here. If required.
document.getElementById('btn').addEventListener('click', function() {
const inputValue = document.getElementById('ip').value;
const number = parseFloat(inputValue);

if (isNaN(number)) {
	document.getElementById('output').textContent = 'Please enter a valid number.';
	return;
}

// Start the promise chain
new Promise((resolve) => {
	setTimeout(() => {
		resolve(number);
	}, 2000);
})
.then((result) => {
	// First promise: Display result after 2 seconds
	document.getElementById('output').textContent = `Result: ${result}`;
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(result * 2);  // Multiply by 2
		}, 1000);
	});
})
.then((result) => {
	// Second promise: Multiply by 2 after 1 second
	document.getElementById('output').textContent = `Result: ${result}`;
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(result - 3);  // Subtract 3
		}, 1000);
	});
})
.then((result) => {
	// Third promise: Subtract 3 after 1 second
	document.getElementById('output').textContent = `Result: ${result}`;
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(result / 2);  // Divide by 2
		}, 1000);
	});
})
.then((result) => {
	// Fourth promise: Divide by 2 after 1 second
	document.getElementById('output').textContent = `Result: ${result}`;
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(result + 10);  // Add 10
		}, 1000);
	});
})
.then((result) => {
	// Fifth promise: Add 10 after 1 second
	document.getElementById('output').textContent = `Result: ${result}`;
	return result;  // Final result
})
.then((finalResult) => {
	// Update final result in the output div
	document.getElementById('output').textContent = `Final Result: ${finalResult}`;
})
.catch((error) => {
	// Handle any errors
	document.getElementById('output').textContent = `Error: ${error.message}`;
});
});