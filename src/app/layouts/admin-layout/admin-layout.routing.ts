import { Routes } from "@angular/router";
import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { TableListComponent } from "../../table-list/table-list.component";
import { TypographyComponent } from "../../typography/typography.component";
import { IconsComponent } from "../../icons/icons.component";
import { MapsComponent } from "../../maps/maps.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { UpgradeComponent } from "../../upgrade/upgrade.component";
import { AuthGuard } from "app/common/auth.guard";

export const AdminLayoutRoutes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },

  { path: "upgrade", component: UpgradeComponent },
  {
    path: "home",
    loadChildren: () =>
      import("../../home/home.module").then((m) => m.HomeModule),
  },
];
