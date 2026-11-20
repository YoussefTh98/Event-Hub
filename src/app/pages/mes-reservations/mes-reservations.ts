import { Component, inject } from '@angular/core';
import { Reservations } from '../../services/reservations';

@Component({
  selector: 'app-mes-reservations',
  standalone: true,
  imports: [],
  templateUrl: './mes-reservations.html',
  styleUrl: './mes-reservations.css',
})
export class MesReservations {
  readonly reservations = inject(Reservations);
}
