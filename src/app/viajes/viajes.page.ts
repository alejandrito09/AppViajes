import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import dataInfo from '../../../files/travels.json';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {
  infoCards = dataInfo.data
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
  }
}
