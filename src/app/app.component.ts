import { Component } from "@angular/core";
import { studentApiService } from "../app/service/studentapi.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "basic-api";

  studentsList: any;

  constructor(private _studentApiService: studentApiService) {}

  //calling api get service
  getData() {
    this._studentApiService.getData().subscribe(
      (response) => {
        this.studentsList = response;
        console.log(this.studentsList);
      },
      (error) => {
        console.error("Error retrieving student properties ", error);
      }
    );
  }

  ngOnInit(): void {
    this.getData();
  }
}
