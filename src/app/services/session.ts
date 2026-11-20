import { computed, Injectable, signal } from '@angular/core';
import { Utilisateur } from '../modeles/utilisateur';

@Injectable({
  providedIn: 'root',
})
export class Session {
  private readonly utilisateurEtat = signal<Utilisateur | null>(null);

  readonly utilisateur = this.utilisateurEtat.asReadonly();

  readonly connecte = computed(() => this.utilisateur() !== null);

  readonly role = computed(() => this.utilisateur()?.role ?? null);

  connecter(email: string, motDePasse: string): boolean {
    const adresse = email.trim().toLowerCase();

    if (adresse === 'etudiant@iset.tn' && motDePasse === 'etudiant123') {
      this.utilisateurEtat.set({
        email: adresse,
        nom: 'Amine Etudiant',
        role: 'etudiant',
      });

      return true;
    }

    if (adresse === 'club@iset.tn' && motDePasse === 'club123') {
      this.utilisateurEtat.set({
        email: adresse,
        nom: 'Sarra Organisatrice',
        role: 'organisateur',
      });

      return true;
    }

    return false;
  }

  deconnecter(): void {
    this.utilisateurEtat.set(null);
  }
}