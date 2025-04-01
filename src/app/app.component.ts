import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AppMenuComponent } from '@angular-nx-primeng/ui-components';

@Component({
  imports: [NxWelcomeComponent, RouterModule, AppMenuComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-nx-primeng';
}
