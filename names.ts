export interface Name {
  name: string;
  surname: string;
}

const names: Name[] = [
  {
    name: "Pippo",
    surname: "Baudo",
  },
  {
    name: "Giulio",
    surname: "Baistrocchi",
  },
];

const person = {
  name: "Porco",
};

module.exports.names = names;

module.exports.singlePerson = person;
