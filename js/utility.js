//Example
// calc1 = 850 / 100
// calc2 = 850 % 100
// Result: calc2 - calc1
function calculateAndRoundDown(n, LE) {
    let calc1 = n / LE;
    let calc2 = calc1 % 1;
    let res = calc1 - calc2;

    return res;
}

function deleteParent(element) {
    element.parentElement.remove();
}