import { ParseSourceFile } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../model/database.service';
import { Pessoa } from '../model/pessoa.model';

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.css']
})
export class ListarPessoasComponent implements OnInit {
  constructor(private databaseService: DatabaseService) {}

  people: Pessoa[] = [];
  selectedPerson: Pessoa;

  getAllPeople(): void {
    this.people = this.databaseService.getAllPeople();
  }

  getPersonByName(name: string): void {
    this.selectedPerson = this.databaseService.getPersonByName(name);
  }

  clearPerson() {
    this.selectedPerson;
  }

  ngOnInit(): void {
    this.getAllPeople();
  }

}
