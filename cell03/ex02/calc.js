setInterval(() => {
    alert("Please, use me...");
}, 30000);

document.getElementById("calcForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const leftVal = document.getElementById("left").value;
    const rightVal = document.getElementById("right").value;
    const operator = document.getElementById("operator").value;

    // ตรวจสอบว่าเป็นตัวเลขจำนวนเต็มบวก
    if (!/^\d+$/.test(leftVal) || !/^\d+$/.test(rightVal)) {
        alert("Error :(");
        return;
    }

    const left = parseInt(leftVal, 10);
    const right = parseInt(rightVal, 10);
    let result;

    if ((operator === "/" || operator === "%") && right === 0) {
        alert("It’s over 9000!");
        console.log("It’s over 9000!");
        return;
    }

    switch(operator) {
        case "+": result = left + right; break;
        case "-": result = left - right; break;
        case "*": result = left * right; break;
        case "/": result = left / right; break;
        case "%": result = left % right; break;
    }

    alert(result);
    console.log(result);
});
