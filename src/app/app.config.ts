import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { MyPreset } from '@angular-nx-primeng/design-system';
export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: MyPreset
            }
        }),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
};
