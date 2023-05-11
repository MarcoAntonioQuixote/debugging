var expect = chai.expect;

const users = [
    { id: 0, cash: 250 },
    { id: 1, cash: 75 },
    { id: 2, cash: 1000 },
    { id: 3, cash: 500 },
]

function cubeANumber(num) {
    if (typeof num !== 'number') {
        throw new Error('Number must be a string, received: ', num);
    }
    return Math.pow(num,3);
}

const createUser = (name,input) => {
    let user = {
        name: name,
        PIN: input,
    }
}

const sortUsers = (users) => {
    users.sort( function( a , b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });

    return users;
    //borrowed from https://www.javascripttutorial.net/javascript-array-sort/
}

