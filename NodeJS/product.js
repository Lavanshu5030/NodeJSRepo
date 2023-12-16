class Product{
    pid;
    pname;
    pprice;
    pcompany;

    // Constructor
    constructor(id,name,price,company){
        this.pid = id;
        this.pprice = price;
        this.pname = name;
        this.pcompany = company;
    }
    display(){
        // console.log(pid,pname,pprice,pcompany);
        console.log(`Id:${this.pid} Name:${this.pname} Price:${this.pprice} Company:${this.pcompany}`);
    }
}

// Creating object
// let productObj = new Product(101,"MSI",12009,"GEEK");
// productObj.display();

// Exporting Product class of product file into module file
module.exports={
    Product
};