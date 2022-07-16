import React from "react";
import './SortingVisualizer.css';
import { mergeSortAnimation } from "../sortingAlg/sortingAlg";
import { insertionSortAlgorithm } from "../sortingAlg/insertionalgorithm";

const PRIMARY_COLOUR = "#069A8E";
const SECONDARY_COLOUR = "red";


export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);
        //constructor is called before the component is mounted
        this.state={
            array:[]
        };
    }
    //when app loads for the first time this method triggers
    componentDidMount(){
        this.resetArray();
    }
    resetArray(){
        const array=[];
        let NUMBER_OF_ARRAY = document.getElementById("ARRAY_SIZE").value;
        for (let i = 0; i < NUMBER_OF_ARRAY; i++) {
          array.push(randomIntFromInterval(5,450));
        }
        this.setState({array});
    }
    mergeSort(){
    let ANIMATION_SPEED = document.getElementById("DELAY").value; //animation technique starting
     const animations=mergeSortAnimation(this.state.array);
     for(let i=0; i<animations.length;i++){   
        const arrayBars=document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if(isColorChange){
            const[barOneIdx,barTwoIdx]=animations[i];
            const barOneStyle=arrayBars[barOneIdx].style;
            const barTwoStyle=arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;
            setTimeout(()=>{
                barOneStyle.backgroundColor=color;
                barTwoStyle.backgroundColor=color;
            },i*ANIMATION_SPEED);
        }else{
            setTimeout(()=>{
                const[barOneIdx,newHeight]=animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height=`${newHeight}px`;
            },i*ANIMATION_SPEED)
        }
    }
         heapSort(){
        let ANIMATION_SPEED = document.getElementById("DELAY").value;                 
        const n = this.state.array.length;
        heapSortFunction(this.state.array,n,ANIMATION_SPEED);
         console.log(this.state.array);
    }
    
    }
    quickSort(){

    }
    bubbleSort(){

    }
    insertionSort(){
        let ANIMATION_SPEED = document.getElementById("DELAY").value;                 
        var blocks = document.querySelectorAll(".array-bar"); 
        const n = this.state.array.length;
        insertionSortAlgorithm(this.state.array,n,blocks,ANIMATION_SPEED);
          
    }
    render(){
    const { array } = this.state;
    return (
      <div>
        <div className="array-container">
          {array.map(
            (
              value,
              ids //mapping bars
            ) => (
              <div
                className="array-bar"
                key={ids}
                style={{
                  backgroundColor: PRIMARY_COLOUR,
                  height: `${value}px`,
                }}
              ></div>
            )
          )}
        </div>

        <div className="footer">
          <label for="array-size">Size</label>
          <input
            id="ARRAY_SIZE"
            name="array-size"
            type="range"
            min="5"
            max="99"
          ></input>
          <label for="delay">Delay</label>
          <input id="DELAY" name="delay" type="range" min="3" max="100"></input>
          <button onClick={() => this.resetArray()}>Generate Array</button>
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
          <button onClick={() => this.insertionSort()}>Insertion Sort</button>
        </div>
      </div>
    );
  }
}
//from https://www.codegrepper.com/code-examples/javascript/how+to+get+random+number+between+two+numbers+react+js
function randomIntFromInterval(min,max){
    //both min and max are included
    return Math.floor(Math.random()*(max-min+1)+min);
}
