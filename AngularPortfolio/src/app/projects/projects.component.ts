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
      link: 'https://github.com/SnowSlurpie/Frontend_SBA',
      imageUrl:'https://deadbydaylight.com/static/a5cdc5db3804f817df112184c81f5ead/93f85/dbd-gallery-background.jpg',
      color: 'white'
    },
    {title: 'Jessie\'s List',
      description: 'An app that allows parents to teach their children the value of working hard and learning responsibility by creating a to-do list. ',
      link: 'https://github.com/thetinaest/chores-app',
       //imageUrl:test.com
    },

// add more projects here
  ];
}
