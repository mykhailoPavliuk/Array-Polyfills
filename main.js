Array.prototype.myConcat=function (arr) {
    for(let i=0;i<arr.length;i++){
        this.push(arr[i])
    }
    return this
};

Array.prototype.mySlice=function (start,end) {
    let arr=[];
    if(end){
        for(let i=start;i<end;i++){
            arr.push(this[i])
        }
        return arr
    }else{
        for(let i=start;i<this.length;i++){
            arr.push(this[i])
        }
        return arr
    }
};


let arr=[4,56,7,8,9,4,5,6,1];
let arr2=[4,875,5,487,8745,5445,89987];
arr.myConcat(arr2);
let sliceResult=arr.mySlice(2);
// console.log(sliceResult);