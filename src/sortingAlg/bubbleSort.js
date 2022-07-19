import { sleep } from "./sortingAlg";
export function wrapper_bubble(array){
    if(array.length<=1)return array;
    bubbleSort(array);
}
const  bubbleSort=async(array)=>{
    let n=array.length;
    let ANIMATION_SPEED = document.getElementById("DELAY").value;                 
      var blocks = document.querySelectorAll(".array-bar"); 
 
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          if (array[j] > array[j + 1]) {
            let temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp
              let bar1 = blocks[j].style
              let h=bar1.height;
              blocks[j].style.height=blocks[j+1].style.height;
              blocks[j+1].style.height=h;
              blocks[j].style.backgroundColor = 'blue'
              blocks[j+1].style.backgroundColor = 'red';
  
              await sleep(ANIMATION_SPEED);

                blocks[j].style.backgroundColor = '#069A8E'
                blocks[j+1].style.backgroundColor = '#069A8E'
          }
      }
    }
}
    
  