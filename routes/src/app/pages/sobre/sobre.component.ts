import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor(
    private ActivedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
   /*  this.ActivedRoute.params.subscribe(
      res => console.log(res['id'], res['username'], res )
    )
    this.ActivedRoute.queryParams.subscribe(
      res => console.log()
    ) */
    setInterval( () =>{
      this.router.navigate(['404']);
      //this.router.navigateByUrl(['404]);
    }, 5000)
  }

}
