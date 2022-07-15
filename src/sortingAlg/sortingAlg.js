export function mergeSortAnimation(array){
const animation=[];
if(array.length<=1)return array;
const helper=array.slice();
mergeSortHelper(array,0,array.length-1,helper,animation);
return animation;
}

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    helper,
    animation,
){
    if(startIdx===endIdx)return;
    const midIdx=Math.floor((startIdx+endIdx)/2);
    mergeSortHelper(helper,startIdx,midIdx,mainArray,animation);
    mergeSortHelper(helper,midIdx+1,endIdx,mainArray,animation);
    doMerge(mainArray,startIdx,midIdx,endIdx,helper,animation);
}
function doMerge(
    mainArray,
    startIdx,
    midIdx,
    endIdx,
    helper,
    animation,
){
    let k=startIdx;
    let i=startIdx;
    let j=midIdx+1;
    while(i<=midIdx && j<=endIdx){
      animation.push([i,j]);
      animation.push([i,j]);

      if(helper[i]<=helper[j]){
        animation.push([k,helper[i]]);
        mainArray[k++]=helper[i++];
      }
      else{
        animation.push([k,helper[j]]);
        mainArray[k++]=helper[j++];
      }
}
    while(i<=midIdx){
        animation.push([i,i]);
        animation.push([i,i]);

        animation.push([k,helper[i]]);
        mainArray[k++]=helper[i++];
    }
    while(j<=endIdx){
        animation.push([j,j]);
        animation.push([j,j]);

        animation.push([k,helper[j]]);
        mainArray[k++]=helper[j++];
    }
}