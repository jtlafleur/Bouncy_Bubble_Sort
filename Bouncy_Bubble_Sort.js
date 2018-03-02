//Anthony Rusignuolo, Michael Macari, Jon Lafleur
//Bouncy Bubble Sort Lab

function bouncyBubbleSort(arr){
    var start = 0;                  //Starting indices
    var stop = arr.length-1;        //Array length is stop indices
    var swapped;                    //If need to swap
    var temp;                       //Temp variable
    for(var i = 0; i < arr.length-1; i++){      //Initial loop for length of array
        swapped = false;                        //No swap on first pass
        if(i % 2 === 0){                        //We iterate forward for first bubble sort
            for(var j = start; j < stop-1; j++){
                if(arr[j] > arr[j+1]){          //Sorting method
                    temp = arr[j];              //Moves number indices based on value
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    swapped = true;             //Swap direction becomes true
                }
            }
            stop--;                             //Indicates we passed once, stop decrements, no need to check already sorted
        }
        else {
            for(var j = stop; j > start; j--){      //We now iterate through from back to front
                if(arr[j-1] > arr[j]){              //Sorting mechanism from back to front
                    temp = arr[j];
                    arr[j] = arr[j-1];
                    arr[j-1] = temp;
                    swapped = true;                 //We again swap
                }
            }
            start++;                                //Starting indices increased for next iteration, no need to check already sorted
        }
        if(!swapped)                                //If no swap break out
            break;
    }
    return arr;                                     //Returns our array sorted
};

var test_arr = [64, 34, 25, 12, 22, 11, 90];        //Test array
console.log("Unsorted Array:",test_arr);            //Shows unsorted array
var sorted_arr = bouncyBubbleSort(test_arr);        //Calls bouncy bubble sort function
console.log("Bouncy Bubble Sorted array:",sorted_arr);      //Displays the sorted array

