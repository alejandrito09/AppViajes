import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import dataInfo from '../../../files/home.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  infoCards = dataInfo.data;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
  }

}
