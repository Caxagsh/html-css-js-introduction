function getDeteilTitle (string){
    let str = string.split('');
    // for(let i = 0; i < str.length; i++){
    //     if(i > 50 && str[i] === " "){
    //         let res = str.slice(0, i);
    //         return res.join('');
    //     }
        
    // }

   
    let res;
    return res = str.filter((elm, index) => 
        (index < 5 || elm === " ")
    ).join('');
}
let a = getDeteilTitle("aaa bbb ccc ddd");
console.log(a);