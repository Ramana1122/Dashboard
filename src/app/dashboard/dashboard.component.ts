import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private dashboardService: DashboardService) {}

  cardsData: any[] = [
    { title: 'Designation', iconName: 'fa fa-certificate',
    details: [] },

    { title: 'Team', iconName: 'fa fa-users',
    details: [] },


    { title: 'Release', count: 6, iconName: 'fa fa-key',
  details:[] },


    { title: 'Resigned', count: 8, iconName: 'fa fa-user-times',
  details:[] },


    { title: 'Onborded', count: 1, iconName: 'fa fa-user-plus',
  details:[] },
  ];


  ngOnInit(): void {
    this.dashboardService.getDesignationData()
      .subscribe((data: any) => {
        // Assuming the API response structure is similar to the "details" array structure
        this.cardsData[0].count = data.length;
        let checked= data.map((item: any) => ({
          label: item.Value,
          value: item.Count,
          count: item.Percentage
        }));
        this.cardsData[0].details = checked;
        console.log(checked);
      });
//Team........................
  this.dashboardService.getTeamData()
      .subscribe((data: any) => {
        // Assuming the API response structure is similar to the "details" array structure
        this.cardsData[1].count = data.length;
        let checked= data.map((item: any) => ({
          label: item.Value,
          value: item.Count,
          count: item.Percentage
        }));
        this.cardsData[1].details = checked;
        console.log(checked);
      });

      this.dashboardService.getReleaseData()
      .subscribe((data: any) => {
        // Assuming the API response structure is similar to the "details" array structure
        this.cardsData[2].count = data.length;
        let checked= data.map((item: any) => ({
          label: item.Value,
          value: item.Count,
          count: item.Percentage
        }));
        this.cardsData[2].details = checked;
        console.log(checked);
      });

      this.dashboardService.getResignedData()
      .subscribe((data: any) => {
        // Assuming the API response structure is similar to the "details" array structure
        this.cardsData[3].count = data.length;
        let checked= data.map((item: any) => ({
          label: item.Value,
          value: item.Count,
          count: item.Percentage
        }));
        this.cardsData[3].details = checked;
        console.log(checked);
      });

      this.dashboardService.getonbordData()
      .subscribe((data: any) => {
        // Assuming the API response structure is similar to the "details" array structure
        this.cardsData[4].count = data.length;
        let checked= data.map((item: any) => ({
          label: item.Value,
          value: item.Count,
          count: item.Percentage
        }));
        this.cardsData[4].details = checked;
        console.log(checked);
      });

  }
}
