const word="MISSISSIPPI"
let list=[]
var dic={}
for (var i in word){
    if(list.includes(i)){
        dic[i]=dic[i]+1
    }
    else{
        list.push(i)
        dic[i]=1
    }
}console.log(dic)
