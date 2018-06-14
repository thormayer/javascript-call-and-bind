/*
This is an example for js call method.
its very core idea is to get the scope and prop of the OBJECT to other FUNCTION.
*/

let Animal = function(sound, color){
    this.sound = sound;
    this.color = color;
}

let Lion = function(sound, color, name){
    Animal.apply(this, [sound, color]);
    this.name = name;
}

let l = new Lion("Roar", "beige", "jack");
let lam = new Lion("laaambert", "any", "lambert");

console.log("lion", l);
console.log("lion", lam);
