import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
    selector: 'app-menubar',
    template: `
    <p-menubar [model]="items" />
    `,
    imports: [Menubar]
})
export class AppMenuComponent implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Features',
                icon: 'pi pi-star'
            }
        ]
    }
}