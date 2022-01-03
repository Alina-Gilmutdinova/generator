
//Используйте следующую заготовку для организации перебора класса Team
//остаётся лишь правильно написать yield
export default class Team {
  constructor(persons) {
    this.persons = persons;
  }

  * gen() {
    yield this.persons.shift();
  }
}