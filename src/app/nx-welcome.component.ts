import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, ButtonModule],
  template: `
  <div>
    <h1>Welcome angular-nx-primeng</h1>
    <p-button label="Check" />
  </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
