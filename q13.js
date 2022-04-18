var my_dict = {
    'a':50,
    'b':58,
    'c':56,
    'd':40,
    'e':100,
    'f':20
    }
var max=0
var smax=0
var tmax=0
li=[]
for (i in my_dict){
    if(my_dict[i]>max){
        max=my_dict[i]
    }
}
// console.log(max)
for (i in my_dict){
    if(my_dict[i]<max && my_dict[i]>smax){
        smax=my_dict[i]
    }
}
// console.log(smax)
for (i in my_dict){
    if(my_dict[i]>tmax && my_dict[i]<smax){
        tmax=my_dict[i]
    }
}
li.push(max)
li.push(smax)
li.push(tmax)
console.log(li)
