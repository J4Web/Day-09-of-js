

const click=document.querySelector('.click-me');
//so remember about  click on dom element> select the ele > right click on it ? break on > attribute modification > it will open a debugger pointing to where its happening
click.addEventListener('click',()=>{
    console.log("added");
    click.classList.add('clicked');
    setTimeout(() => {
        console.log("tiip");
        click.classList.remove('clicked')
    }, 2000);
})




const dogs=[{
    name:"hugo",
    age:2
},{
    name:"tableu",
    age:5
}]


//reg
console.log('Absure normal stuff');


//interpolated //js transaltion to sth other lang code
console.log('hey this is the %s java i hate ','🙌');
//output hey this is the 🙌 java i hate 


//style our text in clg

console.log('%c I\'m the text to style','font-size:50px;background-color:red');

//warn

console.warn("warning here...")


//error

console.error("beep boop beep boop error...!!")


//info

console.info("Crocs etc 3-4 ppl every year")



//assert //testing

console.assert(false,'BOOP BOOP')


//clearing

console.clear();


//viewing dom elements

console.dir(click)


//grouping things togther 

dogs.forEach(e=>{
console.groupCollapsed(`${e.name}`)
    console.info(`Dog's name is ${e.name}`);
    console.info(`And age is ${e.age}`)
    console.info(`and their human age is ${e.age*7}`)
    console.groupEnd(`${e.name}`)
})


//console.count


console.count('wes')//could be anything dom node, element , class , id etc


console.time('fetching...')

fetch('https://api.github.com/users/j4web').then(data=> data.json()).then(jsonData=> {
    console.timeEnd("fetching...");
    console.log(jsonData);
})



//table 
//you had array of objects with prop you can display them in a table

console.table(dogs)
