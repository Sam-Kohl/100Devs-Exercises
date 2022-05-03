class Account{
    constructor(name,balance){
        this.name = name;
        this.balance = balance;
    }
    credit(amt){
        this.balance += amt;
    }
    describe(){
        console.log(`Account Name: ${this.name}. Balance: ${this.balance}.`)
    }
}

let accounts = [];

function accountCreate(...names){
    for (let i = 0; i < names.length; i++) {
        accounts.push(new Account(names[i], 0));
        accounts[i].credit(1000);
        accounts[i].describe();
        
    }
    return accounts
}
