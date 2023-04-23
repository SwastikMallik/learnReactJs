class Student{
    #cardNumber;
    constructor(firstName, lastName, cardNumber){
        this.x = firstName;
        this.y = lastName;
        this.#cardNumber = cardNumber;
    }

    list(){
        //console.log(`My name is ${this.x} ${this.y} and his card number is ${this.#cardNumber}`);
    }

    get myCardNumber(){
        return `My new card number is ${this.#cardNumber}`;
    }

    set myCardNumber(newNumber){
        this.#cardNumber = newNumber;
        
    }
}

let obj = new Student('Swastik', 'Mallik', '453687630975');
obj.list()
//obj.myCardNumber = '88888888888888';

//console.log(obj.myCardNumber)


// var coun = 2;
// //console.log(this.coun);
// function total(){
//     alert(this.coun);
// }
// total();

// const show = () => {
//     console.log(this);
// }
// show();

const open = {
    name : 'swastik',
    age : 22,
    cars : function(){
        console.log(this)
    }
}

open.cars();
