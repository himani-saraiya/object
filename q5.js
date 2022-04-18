let dict={"name":"raju","marks":56}
var name=require("readline-sync")
var nam=name.question("enter name::")
for(i in dict){
    if (nam==i){
        console.log("exist")
        break
    }
    else{
        console.log("not exist")
        break
    }
}

