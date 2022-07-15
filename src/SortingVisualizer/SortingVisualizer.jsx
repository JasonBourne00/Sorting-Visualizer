import React from "react";
import './SortingVisualizer.css';
import { mergeSortAnimation } from "../sortingAlg/sortingAlg";
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
        let i=0;
        while(i<310){
          array.push(randomIntFromInterval(5,730));
            i+=1;
        }
        this.setState({array});
    }
    mergeSort(){
     const animations=mergeSortAnimation(this.state.array);
     for(let i=0; i<animations.length;i++){   
        const arrayBars=document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if(isColorChange){
            const[barOneIdx,barTwoIdx]=animations[i];
            const barOneStyle=arrayBars[barOneIdx].style;
            const barTwoStyle=arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'red' : 'turquoise';
            setTimeout(()=>{
                barOneStyle.backgroundColor=color;
                barTwoStyle.backgroundColor=color;
            },i*5);
        }else{
            setTimeout(()=>{
                const[barOneIdx,newHeight]=animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height=`${newHeight}px`;
            },i*5)
        }
    }
    
    }
    quickSort(){

    }
    bubbleSort(){

    }
    heapSort(){

    }
    render(){
    const {array}=this.state;
    
    return(
        <div className="array-container">
        {array.map((value,idx) => (
            <div className="array-bar" key={idx}
            style={{height: `${value}px`}}>
             </div>
        ))}
        <button color="primary" onClick={()=>this.resetArray()}>
            Generate New Array
        </button>
        <button onClick={()=>this.quickSort()}>Quick sort</button>
        <button onClick={()=>this.mergeSort()}>Merge sort</button>
        <button onClick={()=>this.bubbleSort()}>Bubble sort</button>
        <button onClick={()=>this.heapSort()}>Heap sort</button>

    </div>
    );
  }
}
//from https://www.codegrepper.com/code-examples/javascript/how+to+get+random+number+between+two+numbers+react+js
function randomIntFromInterval(min,max){
    //both min and max are included
    return Math.floor(Math.random()*(max-min+1)+min);
}