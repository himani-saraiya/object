var nam=require("readline-sync")
dic={}
for(var i=0;i<10;i++){
    var name=nam.question("enter name::")
    var marks=nam.questionInt("enter number::")
    dic[name]=marks
}
console.log(dic)
