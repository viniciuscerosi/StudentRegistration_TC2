
import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa.model';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  people: Pessoa[] = [
    {name: "Guilherme Trujilo",birthDate: 23 ,photo: "https://thispersondoesnotexist.com/image"},
    {name: "Vinicius Cerosi",birthDate: 18,photo: "https://thispersondoesnotexist.com/image"},
    {name: "Tiago T.",birthDate: 20,photo: "https://thispersondoesnotexist.com/image"},
    {name: "Andre D.",birthDate: 34,photo: "https://thispersondoesnotexist.com/image"}
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


}