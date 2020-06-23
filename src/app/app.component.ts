import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chart';
  name = 'Angular   6';
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    let myChart = new Chart(this.ctx, {
      type: 'line',
      
      data: {
        datasets: [{
          label: 'Height',
          backgroundColor: "rgba(255, 99, 132,0.4)",
          borderColor: "rgb(255, 99, 132)",
          fill: true,
          data: [
            { x: 0, y: 8 },
            { x: 1000, y: 0 },
            { x: 2000, y: 6 },
            { x: 3000, y: 0 },
            { x: 4000, y: 4 },
            { x: 5000, y: 0 },
            { x: 6000, y: 2 },
            { x: 7000, y: 0 },
          ],
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Graph'
        },
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom',
            ticks: {
              userCallback: function (tick) {
                if (tick >= 1000) {
                  return (tick / 1000).toString() + 'sec';
                }
                return tick.toString() + 'm';
              }
            },
            scaleLabel: {
              labelString: 'Time',
              display: true,
            }
          }],
          yAxes: [{
            type: 'linear',
            ticks: {
              userCallback: function (tick) {
                return tick.toString() + 'm';
              }
            },
            scaleLabel: {
              labelString: 'Height',
              display: true
            }
          }]
        }
      }
    });
  }
}
