import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
cadastrar() {
throw new Error('Method not implemented.');
}
atualizar() {
throw new Error('Method not implemented.');
}
deletar(arg0: any) {
throw new Error('Method not implemented.');
}
selecionarPostagem(_t11: any) {
throw new Error('Method not implemented.');
}

  barChartConfig: ChartConfiguration<'bar'> = {
    type: 'bar',
    data: {
      labels: ['Tema A', 'Tema B', 'Tema C'],
      datasets: [
        { data: [10, 20, 30], label: 'Quantidade de Postagens' }
      ]
    }
  };
post: any;

}
