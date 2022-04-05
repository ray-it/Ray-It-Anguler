import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PharmacyRoutingModule } from "./pharmacy-routing.module";
import { PharmacyComponent } from "./pharmacy.component";
import { LayoutModule } from "src/app/layout/layout.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@NgModule({
  declarations: [PharmacyComponent],
  imports: [CommonModule, PharmacyRoutingModule, LayoutModule],
})
export class PharmacyModule {}
