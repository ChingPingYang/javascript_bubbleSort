
let leftText = document.getElementsByName("textarea")[0];
let rightText = document.getElementsByName("textarea")[1];
let leftBtn = document.getElementById("btn1")
let rightBtn = document.getElementById("btn2")

let numCount = 2000;
let min = 1;
let max = 1000;
let unsortArray = arrayMaker(numCount, min, max);
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
    let tempArray = arrayName.slice(0);
   
    for(let i = 0; i < tempArray.length; i++){
        for(let j = 0; j < tempArray.length - 1; j++){
            if(tempArray[j] > tempArray[j+1]){
                let temp = tempArray[j];
                tempArray[j] = tempArray[j+1];
                tempArray[j+1] = temp;
            }
        }
    }
    return tempArray;
}



//assign Unsorted array to left-textarea when clicking the button
leftBtn.onclick = function(){leftText.value = unsortArray;};







rightBtn.onclick = function(){

    //Creating oldTime
    oldTime = new Date().getTime();
    console.log(oldTime);

    //assign Sorted array to right-textarea when clicking the button
    sortedArray = bubbleSort(unsortArray);
    rightText.value = sortedArray;

    //Creating newTime and count the time
    newTime = new Date().getTime();
    console.log(newTime);
    totalTime = newTime - oldTime;
    console.log("Total spent " + totalTime + " ms");
    
   console.log(unsortArray);
};
