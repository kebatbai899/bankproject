import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applycreditcomp',
  templateUrl: './applycreditcomp.component.html',
  styleUrls: ['./applycreditcomp.component.css']
})
export class ApplycreditcompComponent implements OnInit {

  constructor(private router: Router) {}

  decision(): void {
      this.router.navigateByUrl('instantdecision');
  }

  ngOnInit() {
  }

}
