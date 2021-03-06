import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Route, RouterModule } from "@angular/router";
import { AbancaComponent } from "./abanca/abanca.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LayoutModule } from "./layout/layout.module";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Route[] = [
  { path: "", component: HomeComponent },
  { path: "abanca", component: AbancaComponent },
  { path: "not-found", component: NotFoundComponent },
  // { path: "about", loadChildren: "./about/about.module#AboutModule" },
  {
    path: "about",
    loadChildren: () => import("./about/about.module").then(m => m.AboutModule)
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./contact/contact.module").then(m => m.ContactModule)
  },

  {
    path: "customers",
    loadChildren: () =>
      import("./customers/customers.module").then(m => m.CustomersModule)
  },
  {
    path: "counter",
    loadChildren: () =>
      import("./counter/counter.module").then(m => m.CounterModule)
  },
  {
    path: "exchange",
    loadChildren: () =>
      import("./exchange/exchange.module").then(m => m.ExchangeModule)
  },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AbancaComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
