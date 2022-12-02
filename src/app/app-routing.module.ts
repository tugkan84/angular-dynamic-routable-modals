import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstModalComponent } from './first-modal/first-modal.component';
import { FirstParentComponent } from './first-parent/first-parent.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ModalWrapperComponent } from './modal-wrapper/modal-wrapper.component';
import { SecondModalComponent } from './second-modal/second-modal.component';
import { SecondParentComponent } from './second-parent/second-parent.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'first', component: FirstParentComponent, children:[
    {path:'modal',component:ModalWrapperComponent,data:{component:FirstModalComponent}},
    {path:'secondmodal',component:ModalWrapperComponent,data:{component:SecondModalComponent}},
  ]},
  {path:'second', component: SecondParentComponent, children:[
    {path:'modal',component:ModalWrapperComponent,data:{component:FirstModalComponent}},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
