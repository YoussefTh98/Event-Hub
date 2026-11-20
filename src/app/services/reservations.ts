import { computed, inject, Injectable, signal } from '@angular/core';
import { Reservation } from '../modeles/reservation';
import { Session } from './session';

@Injectable({
  providedIn: 'root',
})
export class Reservations {
  private readonly session = inject(Session);
  private readonly reservationsEtat = signal<Reservation[]>([]);

  readonly reservations = this.reservationsEtat.asReadonly();

  readonly mesReservations = computed(() => {
    const email = this.session.utilisateur()?.email;

    return this.reservations().filter(
      (reservation) => reservation.email === email,
    );
  });

  readonly nombreReservations = computed(
    () => this.mesReservations().length,
  );
}