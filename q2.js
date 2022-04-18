var num=require("readline-sync")
var n=num.questionInt("enter a number::")
let dic={}
for (var i=0;i<=n;i++){
    dic[i]=i*i
}
console.log(dic)

