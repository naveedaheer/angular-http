import { Component } from '@angular/core';
import { CrudService } from './crud.service';
import { Observable } from 'rxjs/observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:Observable<any>;
  errorMessage: string;

  constructor(private _crudService: CrudService) { }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.getAllData();
  }

  getAllData() {
    this._crudService.getData().subscribe((data) => {
      this.items = data
      console.log("data", data)

    }, error => {
      this.errorMessage = <any>error;
      console.log("error", error);
    })
  }

}
