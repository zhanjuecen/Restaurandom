export class Profile {
  name:String;
  email:String;
  phone_number:String;
  city:String;
  state:String;
  price: number;
  constructor(name:string, email:string, phone_number:string, city:string, state:string,price:number) {
    this.name = name;
    this.email = email;
    this.phone_number = phone_number;
    this.city = city;
    this.state = state;
    this.price = price;
  }
  setName(name:string) {
    this.name = name;
  }
  setEmail(email:string) {
    this.email = email;
  }
  setNumber(phone_number:string) {
    this.phone_number = phone_number;
  }
  setCity(city:string) {
    this.city = city;
  }
  setState(state:string) {
    this.state = state;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getPhone() {
    return this.phone_number;
  }
  getCity() {
    return this.city;
  }
  getState() {
    return this.state;
  }

}
