var funStr = "Emma shreds on her electric cello";
//console.log(funStr[4])
var array = funStr.split(" ");
//console.log(array[0]);
//console.log(array.join("_"))
/*array = funStr.split(" ");
console.log(array);
console.log(array.join(" "))

const words = [{ "name": "hamza", "age": 28 }];
words.forEach((word) => {
console.log(word.age)
});
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
user = new Person("anis", 24);
console.log(user.getAge())
age = 14;
name = "hamza";
//&& and  cond1 et cond2 true  => 1
//|| and  cond1 ou cond2 true alt gr + 6
/*if (age == 10 || name == "hamza") {
    console.log("ok ");
}

switch (true) {
    case age > 10 && age < 15:
        console.log("yes i'm 10");
        break;
    case age >= 15:
        console.log("yes i'm 15 ");
        break;
    case age >= 20:
        console.log("yes i'm  20");
        break;
}
const words = [{ "name": "hamza", "age": 28 }, { "name": "anis", "age": 24 }];
//console.log(word[0])
words.forEach((word) => {

    console.log(word.name)
});
var array = ["hamza", 24, "test@gmail.com"]
array["name"]

var myAssocArr = { fName: "Kaitemma", lName: "Claiben" };

//console.log(myAssocArr.fName)*/
var index = 10;

function changeindex() {
    index = 20;
}
changeindex();
console.log("new " + index);