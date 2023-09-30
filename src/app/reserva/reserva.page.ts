import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators"

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {
  id: any;
  travels: any = [];
  finalId: number = 0;
  name: string = '';
  image: string = '';


  constructor(private route: ActivatedRoute,
    private http: HttpClient) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.finalId = this.id - 1;
    console.log('id: ', this.id);

    this.getTravels().subscribe(res=>{
      this.travels = res;
      this.name = this.travels[this.finalId].name;
      this.image = this.travels[this.finalId].image;     
    })
  }

  getTravels(){
    return this.http
    .get("files/travels.json")
    .pipe(
      map((res: any)=>{
        return res.data
      })
    )}
}
