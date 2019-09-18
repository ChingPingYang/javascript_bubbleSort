
let leftText = document.getElementsByName("textarea")[0];
let rightText = document.getElementsByName("textarea")[1];
let leftBtn = document.getElementById("btn1")
let rightBtn = document.getElementById("btn2")

let numCount = 20000;
let min = 1;
let max = 1000;
const unsortArray = arrayMaker(numCount, min, max);
let x = unsortArray;
let hasArray = false;
let sortedArray;

let oldTime;
let newTime;
let totalTime;


// global functions
function ranNum(min, max){
    return parseInt(Math.random()*(max-min) + min);
}

function arrayMaker(numCount, min, max){
    let array = [];
    for(let i = 0; i < numCount; i++){
        array.push(ranNum(min, max));
    }
    return array;
}


// bubble sort function
function bubbleSort(arrayName) {
    let x = arrayName;
    for(let i = 0; i < x.length; i++){
        for(let j = 0; j < x.length - 1; j++){
            if(x[j] > x[j+1]){
                let temp = x[j];
                x[j] = x[j+1];
                x[j+1] = temp;
            }
        }
    }
    return x;
}



//assign Unsorted array to left-textarea when clicking the button
leftBtn.onclick = function(){leftText.value = unsortArray; hasArray = true;};
console.log(unsortArray);
console.log(hasArray);


//creating sortedArray


//assign Sorted array to right-textarea when clicking the button
rightBtn.onclick = function(){

    oldTime = new Date().getTime();
    console.log(oldTime);

    sortedArray = bubbleSort(x);
    console.log(unsortArray);
    rightText.value = sortedArray;


    newTime = new Date().getTime();
    console.log(newTime);
    totalTime = newTime - oldTime;
    console.log("Total spent " + totalTime + " ms");
    
};
