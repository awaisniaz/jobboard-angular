import { Component, OnInit } from '@angular/core';
import { headerMenu } from 'src/configuration/header';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    var Menu: headerMenu[] = [{
      name: "Home",
      link: "#",

    },
    {
      name: "Find a Job",
      link: "#",

    },
    {
      name: "Employer",
      link: "#",

    },
    {
      name: "Candidate",
      link: "#",

    },
    {
      name: "Blog",
      link: "#",

    },
    {
      name: "Pages",
      link: "#",

    }]

  }

  ngOnInit(): void {
  }

}
