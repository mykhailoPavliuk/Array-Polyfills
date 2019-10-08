Array.prototype.myConcat=function (arr) {
    for(let i=0;i<arr.length;i++){
        this.push(arr[i])
    }
    return this
};
