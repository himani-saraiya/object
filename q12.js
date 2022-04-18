var dict = {

    'Alex': ['subj1', 'subj2', 'subj3'],
    
    'David': ['subj1', 'subj2']
    
    }
let c=0
for (i in dict){
    for(j in dict[i]){
        c++
    }
}console.log(c)
    
    