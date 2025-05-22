import { Routes } from '@angular/router';


import { PostComponent } from './components/post/post.component';
import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
    selector: 'app-dashboard',
    template: `
        <div>
            <h2>Dashboard</h2>
        </div>
    `,
  
})
export class DashboardComponent {


    barChartConfig: ChartConfiguration<'bar'> = {
        type: 'bar',
        data: {
            labels: ['Tema A', 'Tema B', 'Tema C'],
            datasets: [
                { data: [10, 20, 30], label: 'Quantidade de Postagens' }
            ]
        }
    };

}

export const routes: Routes = [
  { path: '', redirectTo: 'postagens', pathMatch: 'full' },
  { path: 'postagens', component: PostComponent },
  { path: 'dashboard', component: DashboardComponent }
];

