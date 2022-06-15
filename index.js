 let milk= 1.20
 let cocoa= 2
 let salad= 2
 let carrots= 2
 let tomatos= 2.50
 let meals= 5

let items= ['milk', 'cocoa', 'salad', 'carrots', 'toamtos', 'meals']

let whatitem= prompt('what item is it')
let howmany= prompt('how many iems are there')

for (let item of items){
    if (whatitem === 'milk'){
       console.log(item[0] + howmany)
    }
    else if (whatitem === 'cocoa'){
        console.log(item[1] * howmany)
    }
    else if (whatitem === 'salad'){
        console.log(item[2] * howmany)
    }
    else if (whatitem === 'carrots'){
        console.log(item[3] * howmany)
    }
    else if (whatitem === 'tomatos'){
        console.log(item[4] * howmany)
    }
    else if (whatitem === 'meals'){
        console.log(item[5])
    }

}