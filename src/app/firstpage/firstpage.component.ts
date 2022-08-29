import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendConnService } from '../backend-conn.service';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  title='firstpage';
  constructor(private bes : BackendConnService, private router:Router) { }


  ngOnInit(): void {}

  onSubmit() {
      this.router.navigate(['Login']);

}
}
