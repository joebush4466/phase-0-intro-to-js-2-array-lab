// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){cats.push(name);return cats}
function destructivelyPrependCat(name){cats.unshift(name); return cats};
function destructivelyRemoveLastCat(){
    cats.pop(); return cats}
function destructivelyRemoveFirstCat(){ cats.shift(); return cats}
function prependCat(name){ 
    let newCats=[...cats];
    newCats.unshift(name); return newCats;
}
function appendCat(name){
    let newCats=[...cats]; newCats.push(name); return newCats;
}
function removeLastCat(){
    let newCats = cats.slice(0,-1)
    return newCats
}

function removeFirstCat(){
    let newCats= cats.slice(1)
    return newCats
}

