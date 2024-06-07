import {RouterModule, Routes} from '@angular/router';
import {UserModule} from "./user/user.module";
import {AdminModule} from "./admin/admin.module";
import {IndexComponent} from "./index/index.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: 'admin', loadChildren: () => AdminModule},
  { path: 'user', loadChildren: () => UserModule},
  {path: '', redirectTo: '/index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes { }
