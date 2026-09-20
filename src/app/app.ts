import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  novemberDays = (() => {
    let result: number[] = [];

    for (let i = 1; i <= 30; i++) {
      result.push(i);
    }

    return result;
  })();

  decemberDays = (() => {
    let result: number[] = [];

    for (let i = 1; i <= 6; i++) {
      result.push(i);
    }

    return result;
  })();
}
