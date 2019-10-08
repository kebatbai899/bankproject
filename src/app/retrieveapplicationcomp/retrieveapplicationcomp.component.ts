import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retrieveapplicationcomp',
  templateUrl: './retrieveapplicationcomp.component.html',
  styleUrls: ['./retrieveapplicationcomp.component.css']
})
export class RetrieveapplicationcompComponent implements OnInit {

  constructor(private router: Router) {}
  find(): void {
    this.router.navigateByUrl('applycredit');
}


  ngOnInit() {
  }

}
