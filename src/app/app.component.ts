import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie';


  // switchTheme(): void {
  //   document.body.classList.toggle('theme-dark')
  // }

  setTheme(theme: any) {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }

  switchTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
      this.setTheme('theme-light');
    } else {
      this.setTheme('theme-dark');
    }
  }
}
