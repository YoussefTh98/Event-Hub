import { Component, inject, signal } from '@angular/core';
import {FormControl,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Session } from '../../services/session';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './connexion.html',
  styleUrl: './connexion.css',
})
export class Connexion {
  private readonly session = inject(Session);
  private readonly router = inject(Router);

  readonly erreur = signal('');

  readonly formulaire = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    motDePasse: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  connecter(): void {
    this.erreur.set('');

    if (this.formulaire.invalid) {
      this.formulaire.markAllAsTouched();
      return;
    }

    const { email, motDePasse } = this.formulaire.getRawValue();

    if (this.session.connecter(email, motDePasse)) {
      void this.router.navigateByUrl('/evenements');
    } else {
      this.erreur.set('Identifiants incorrects.');
    }
  }
}