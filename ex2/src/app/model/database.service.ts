
import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa.model';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {

  people: Pessoa[] = [
    {name: "Vincius", birthDate: 	"2020-01-10", photo: "https://engenharia360.com/wp-content/uploads/2019/05/esta-pessoa-nao-existe-engenharia-360-2.png"},
    {name: "Paula", birthDate: "2020-01-10", photo: "https://engenharia360.com/wp-content/uploads/2019/05/esta-pessoa-nao-existe-engenharia360-4.png"},
  ];

  constructor() {}

  addPerson(person: Pessoa): DatabaseService {
    this.people.push(person);
    return this;
  }

  getAllPeople(): Pessoa[] {
    return this.people;
  }

  getPersonByName(name: string): Pessoa {
    return this.people.filter((todo) => todo.name=== name).pop()!;
  }

  removePersonByName(name: string): Pessoa {
    return this.people.pop()!;
  }


}