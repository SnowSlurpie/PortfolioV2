// project.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectComponent {
  projects = [
    {title: 'Buddy By Daylight',
      description: 'A web-based program inspired by the game Dead By Daylight that allows you to connect with your friends and have fun. ',
      link: 'https://github.com/SnowSlurpie/Frontend_SBA'},

    // {title: 'Project 2', description: 'Description for Project 2', link: 'https://link-to-project-2.com'},
// add more projects here
  ];
}
