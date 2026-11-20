import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Session } from '../../services/session';
import { Reservations } from '../../services/reservations';

@Component({
  selector: 'app-en-tete',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './en-tete.html',
  styleUrl: './en-tete.css',
})
export class EnTete {
  readonly session = inject(Session);
  readonly reservations = inject(Reservations);

  private readonly router = inject(Router);

  deconnecter(): void {
    this.session.deconnecter();
    void this.router.navigateByUrl('/evenements');
  }
}