import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-dashboard',
  templateUrl: './skill-dashboard.component.html',
  styleUrls: ['./skill-dashboard.component.scss']
})
export class SkillDashboardComponent implements OnInit {

    widgets = {
        employees: {
            count: 10
        }
    };

  constructor() { }

  ngOnInit() {
  }

}
