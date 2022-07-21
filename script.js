'use strict';
//Creating parent class
//Encapsulation & Abstraction
class SoftwareEngineer {
  constructor(name, role, position, experience) {
    this._name = name;
    this._role = role;
    this._position = position;
    this._experience = experience;
  }
  //create getter for static properties
  get name() {
    return this._name;
  }
  get role() {
    return this._role;
  }

  //Method to greet user
  //Polymorphism
  sayHello() {
    return `Hello user. This is ${this.name}, a ${this.role} startup with ${this._position} with ${this._experience} years of experience in the tech industry.`;
  }
}

let company = new SoftwareEngineer(
  'Ana & Co.',
  'Full Stack',
  'junior and senior devs working on Html, css, js, php and react native',
  10
);

//Create first child class
//Inheritance
class FrontEndDev extends SoftwareEngineer {
  constructor(name, role, position, languages, experience) {
    super(name, role, position);
    this._languages = languages;
    this._experience = experience;
  }
  //Getter for static properties
  get languages() {
    return this._languages;
  }
  get experience() {
    return this._experience;
  }
  //Polymorphism
  sayHello() {
    return `Hello user. I am ${this._name}, a ${this._role} ${this._position} with ${this.experience} years experience and specializing in ${this.languages}.`;
  }
}
//Creating user wit front end dev child class
let oscar = new FrontEndDev(
  'Oscar',
  'Front End Developer',
  'Junior Dev',
  'React, Angular, Vue',
  4
);

//Create second child class
class backEndDev extends SoftwareEngineer {
  constructor(name, role, position, experience, language, previousCo) {
    super(name, role, position, experience);
    this._language = language;
    this._previousCo = previousCo;
  }
  //getter
  get language() {
    return this._language;
  }
  get previousCo() {
    return this._previousCo;
  }
  //sayHello to user
  sayHello() {
    return `Hello user. I am ${this._name}, a ${this._role} ${this._position} with ${this._experience} years experience in ${this._language} having previously worked at ${this._previousCo}.`;
  }
}

let muringo = new backEndDev(
  'Muringo',
  'back end developer',
  'senior dev',
  5,
  'Php and React Native',
  'Netflix'
);

//Accessing sayHello from each class

let staff = [company, oscar, muringo];
for (let devs of staff) {
  devs.sayHello();
}
//Display information on dom
document.getElementById('co').addEventListener('click', companyCv);
document.getElementById('front-end').addEventListener('click', frontEndDevCv);
document.getElementById('back-end').addEventListener('click', backEndDevCv);

//Button event listener
function companyCv() {
  document.getElementById('company').innerText = company.sayHello();
}
function frontEndDevCv() {
  document.getElementById('frontend-dev').innerText = oscar.sayHello();
}
function backEndDevCv() {
  document.getElementById('backend-dev').innerText = muringo.sayHello();
}
