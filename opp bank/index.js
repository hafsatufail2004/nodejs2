class Customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    bankAccount;
    constructor(firstName, lastName, gender, age, mobileNumber, bankAccount) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.bankAccount = bankAccount;
    }
}
;
class BankAccount {
    debit;
    credit;
    AccountBalanc;
    constructor() {
        this.debit = "debit";
        this.credit = "credit";
        this.AccountBalanc = 100;
    }
    debitAmount(amount) {
        let statement = "Sorry, you have insufficient balance.";
        if (amount > 0) {
            if (this.AccountBalanc > amount) {
                this.AccountBalanc -= amount;
                statement = 'Transaction Successfully! Your new balance is :' + this.AccountBalanc;
            }
            else {
                statement = "You don't have enough money to make this transaction.";
            }
        }
        else {
            statement = "The amount you entered is invalid.";
        }
        return statement;
    }
    creditAmount(amount) {
        let statement = "Transaction Failed!";
        if (amount > 0) {
            this.AccountBalanc += amount;
            if (amount > 100) {
                this.AccountBalanc -= 1;
            }
            statement = "Your account has been credited successfully!";
        }
        else {
            statement = "The amount you entered is invalid.";
        }
        return statement;
    }
}
const customer = new Customer("Haider", "Ali", "Male", 23, 0o3315, "123ee");
const bankAccounts = new BankAccount();
console.log(`Account Balance:` + bankAccounts.AccountBalanc);
console.log(bankAccounts.debitAmount(50));
console.log(`Account Balance:` + bankAccounts.AccountBalanc);
console.log(bankAccounts.creditAmount(200));
console.log(`Account Balance:` + bankAccounts.AccountBalanc);
export {};
