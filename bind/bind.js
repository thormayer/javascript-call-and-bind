
var person = {
    name: 'gilad',
    height : 161,
    getHeight(cb) {
        cb();
    },
    makeTaller(){
        this.getHeight(function(){
           console.log(`the height of ${this.name} is ${this.height + 1} after he got taller`);
        }.bind(this));
    }
}

person.makeTaller();