import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import dataInfo from '../../../files/estadia.json';


@Component({
  selector: 'app-alojamiento',
  templateUrl: './alojamiento.page.html',
  styleUrls: ['./alojamiento.page.scss'],
})
export class AlojamientoPage implements OnInit {
  infoCards = dataInfo.data;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
  }

}
