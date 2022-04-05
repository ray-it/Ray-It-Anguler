import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PharmacyComponent } from "./pharmacy.component";

const routes: Routes = [
  {
    path: "",
    component: PharmacyComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "prefix" },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacyRoutingModule {}
