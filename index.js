// const calculator = document.getElementById('calculator');
// const result = document.getElementById('result').value;

function insert(num) {
    const nums = document.getElementById('result').value += num;
    // console.log(nums)

}


function clearResult() {
    // console.log('clear')
}

// to clear a value from the calculator we can use any variable functions below.


function clearResult() {
    const clear = document.getElementById('result')
    const clears = null
    document.getElementById('result').value = clears;
}

// function clearResult() {
//     document.getElementById('result').value = null
// }


// for calculating this the fuction we use below


function calculate() {
    const result = document.getElementById('result').value
    const calculateResult = eval(result);
    document.getElementById('result').value = calculateResult;
}

