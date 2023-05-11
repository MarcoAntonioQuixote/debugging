const WW = {
    name: 'Wonder Woman',
    score: 820,
    credit: {
        amex: 1000,
    }
}

const SM = {
    name: 'Superman',
    credit: {}
}

const BM = {
    name: 'Batman',
    score: 530,
    credit: {
        gothamEx: 9999999992
    }
}

//********* ONLY CHANGE CODE BELOW HERE **************//

function applyForCredit(user,cardToAdjust,amount) {
    if (!user.credit) {
        throw new Error(`${user.name} has no credit info.`);  
    }
    
    user.credit.cardToAdjust = amount;

    // console.table(user); <-- You can use this!
    return user;
}
