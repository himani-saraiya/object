const list = [{ "first": "1", "second": "2", "third": "1", "four": "5", "five": "5", "six": "9", "seven": "7" }]
let li=[]
for(i of list){
    for (j in i){
        if (!li.includes(i[j])){
            li.push(i[j])
        }
    }
}console.log(li)