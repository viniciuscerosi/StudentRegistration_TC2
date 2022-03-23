import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../model/database.service';
import { Pessoa } from '../model/pessoa.model';

@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.css']
})
export class CadastrarPessoaComponent  {
  @Output() showType = new EventEmitter<string>();
	@Output() sucessCadastro = new EventEmitter<string>();

	constructor(private databaseService: DatabaseService) { }

	registerForm = new FormGroup({
		name: new FormControl('', Validators.required),
		birthDate: new FormControl('', Validators.required),
		photo: new FormControl(''),
	});

	existenteBanco: boolean;
	nomeCadastrado: boolean;
	erroCampos: string;
	sucessMsg: string;
	validador: number;
	person: Pessoa;

	onSubmit() {
		if (!this.registerForm.invalid) {
			this.person = this.registerForm.value;
			this.validador = 0

			if (this.databaseService.getPersonByName(this.person.name)) {
				this.existenteBanco = true; 
				this.validador++;

			} else {
				this.existenteBanco = false;
			}
		

			if (this.validador === 0) {
				if (!this.person.photo) { this.person.photo = 'https://thispersondoesnotexist.com/image'; }
				this.databaseService.addPerson(this.person);
				this.registerForm.reset();
				this.showType.emit('listar');
				this.sucessCadastro.emit();
			} else {
				this.erroCampos = 'Os seguintes campos estão incorretos: ';
				if(this.existenteBanco){ this.erroCampos += 'Nome (Já existente)'; }
				
				document.getElementsByClassName('errorNotification')[0].classList.add('errorCadastro');
				setTimeout(() => { document.getElementsByClassName('errorNotification')[0].classList.remove('errorCadastro'); }, 4000);
			}
		} else {
			this.existenteBanco = true;
			this.erroCampos = 'Campos preenchidos incorretamente!';

			document.getElementsByClassName('errorNotification')[0].classList.add('errorCadastro');
			setTimeout(() => { document.getElementsByClassName('errorNotification')[0].classList.remove('errorCadastro'); }, 4000);
		}
	}

}
