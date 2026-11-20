import { Routes } from '@angular/router';
import { Liste } from './pages/liste/liste';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'evenements',
    pathMatch: 'full',
  },
  {
    path: 'evenements',
    component: Liste,
  },
  {
    path: 'connexion',
    loadComponent: () =>
      import('./pages/connexion/connexion').then(
        (m) => m.Connexion,
      ),
  },
  {
    path: 'mes-reservations',
    loadComponent: () =>
      import('./pages/mes-reservations/mes-reservations').then(
        (m) => m.MesReservations,
      ),
  },
  {
    path: 'organisateur/nouveau',
    loadComponent: () =>
      import('./pages/nouvel-evenement/nouvel-evenement').then(
        (m) => m.NouvelEvenement,
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/introuvable/introuvable').then(
        (m) => m.Introuvable,
      ),
  },
];