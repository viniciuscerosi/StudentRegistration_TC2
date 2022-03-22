import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pessoa } from '../model/pessoa.model';

@Component({
  selector: 'app-detalhes-pessoa',
  templateUrl: './detalhes-pessoa.component.html',
  styleUrls: ['./detalhes-pessoa.component.css']
})
export class DetalhesPessoaComponent {

  @Input() person : Pessoa;
  @Input() show: boolean;
  @Output() clearPerson = new EventEmitter<string>();

  closeModal(): void {
    this.show = false;
    this.clearPerson.emit("null");
  }

}
