export class Customer {
  constructor() {}

  createCustomer(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.email = customer.email;
    console.log(
      `Customer: ${this.id}, ${this.name}, ${this.email} has been created`
    );
  }

  loadDataFromDb(newCustomer) {
    this.id = newCustomer.id;
    this.name = newCustomer.name;
    this.email = newCustomer.email;
  }

  destroyCustomer() {
    console.log(
      `Customer: ${this.id}, ${this.name}, ${this.email} has been deleted`
    );
  }

  editCustomer(newCustomer) {
    this.id = newCustomer.id;
    this.name = newCustomer.name;
    this.email = newCustomer.email;
    console.log(
      `Customer: ${this.id}, ${this.name}, ${this.email} has been updated`
    );
  }
  getCustomer() {
    console.log(`Customer: ${this.id}, ${this.name}, ${this.email}`);
  }
}
