// This is a file for different types of loopings

// Bubble sort algorithm
function bubbleSort(var arr)
{
  for(var i = 0; i < arr.length; i++)
  {
    for(var j = 0; j< arr.length - i -1; j++)
    {
      if(arr[j] > arr[j+1])
      {
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}

function main()
{
  var arr = new Array(1, 3, 5, 6, 23, 56, 2323, 45, 1, 5);
  bubbleSort(arr)
}
