$(document).ready(function() {
    setInterval(() => {
        alert("Please, use me...");
    }, 30000);

    $('#calcForm').on('submit', function(e) {
        e.preventDefault();

        const leftVal = $('#left').val();
        const rightVal = $('#right').val();
        const operator = $('#operator').val();

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
});


