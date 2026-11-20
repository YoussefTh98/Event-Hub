import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnTete } from './composants/en-tete/en-tete';
import { PiedPage } from './composants/pied-page/pied-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EnTete, PiedPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}