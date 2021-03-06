import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  public myCustomer: string;

  constructor(activatedRoute: ActivatedRoute) {
    this.myCustomer = activatedRoute.snapshot.params["customerId"];
  }

  ngOnInit() {}
}
