import { sleep } from "./sortingAlg";
export function heapSortFunction(array,n,ANIMATION_SPEED){
    if (n <= 1) return array;
    heapSort(array, n, ANIMATION_SPEED);
}

const heapSort = async (arr,n,ANIMATION_SPEED) => {
    let length = n
    let index = Math.floor(length / 2 - 1)
    let lastChild = length - 1
    var arrayBars = document.querySelectorAll(".array-bar"); 

    while (index >= 0) {
      await heapify(arr, length, index,ANIMATION_SPEED)
      index--
      if (index >= 0) {
        const barOneStyle = arrayBars[index].style;
        const barTwoStyle=arrayBars[index+1].style;
        barOneStyle.backgroundColor = 'red'
        barTwoStyle.backgroundColor = 'red'

        await sleep(ANIMATION_SPEED)
        
        barOneStyle.backgroundColor = '#069A8E'
        barTwoStyle.backgroundColor = '#069A8E'
      } else {
        await sleep(ANIMATION_SPEED)
      }
    }

    while (lastChild >= 0) {
      let swap1 = arr[0];
      let swap2 = arr[lastChild];
      let height=arrayBars[0].style.height;
      arr[0] = swap2
      arr[lastChild] = swap1
      arrayBars[0].style.height=arrayBars[lastChild].style.height;
      arrayBars[lastChild].style.height=height;
      await heapify(arr, lastChild, 0,ANIMATION_SPEED)
      lastChild--

      if (index >= 0) {
    
        let bar1 = arrayBars[lastChild].style
        let bar2 = arrayBars[0].style
        bar1.backgroundColor = 'red'
        bar2.backgroundColor = 'red'

        bar1.backgroundColor = '#069A8E'
        bar2.backgroundColor = '#069A8E'
      } else {
        await sleep(ANIMATION_SPEED)
      }
    }

  }

  const heapify = async (arr, length, index,ANIMATION_SPEED) => {
    const arrayBars=document.getElementsByClassName('array-bar');
    let largest = index
    let leftNode = index * 2 + 1
    let rightNode = leftNode + 1

    if (arr[leftNode] > arr[largest] && leftNode < length) {
      largest = leftNode
    }

    if (arr[rightNode] > arr[largest] && rightNode < length) {
      largest = rightNode
    }

    if (largest !== index) {
      let swap1 = arr[index]
      let swap2 = arr[largest]
      arr[index] = swap2
      arr[largest] = swap1
      let h=arrayBars[index].style.height;
      arrayBars[index].style.height=arrayBars[largest].style.height;
      arrayBars[largest].style.height=h;
      let bar1 = arrayBars[index].style
      let bar2 = arrayBars[largest].style
      bar1.backgroundColor = 'red'
      bar2.backgroundColor = 'red'

      await sleep(ANIMATION_SPEED)

      bar1.backgroundColor = '#069A8E'
      bar2.backgroundColor = '#069A8E'


      await heapify(arr, length, largest,ANIMATION_SPEED)
    }

    return arr
  }
