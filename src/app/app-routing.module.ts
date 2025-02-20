import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MemberFormComponent } from './member-form/member-form.component';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleComponent } from './article/article.component';
import { EventComponent } from './event/event.component';
import { ToolComponent } from './tool/tool.component';
//cte cont un tab que je vais l animer avec mes routes
const routes: Routes = [
  {
    path: 'create',
    pathMatch: 'full',
    component: MemberFormComponent
  }, //correspondance entre le path et component
  {
    path: '',
    pathMatch: 'full',
    component: MemberComponent
  },

  {
    path: "edit/:id",
    pathMatch: 'full',
    component: MemberFormComponent
  }
  ,

  {
    path: "dashboard",
    pathMatch: 'full',
    component: DashboardComponent
  }
  ,
  {
    path: "member",
    pathMatch: 'full',
    component: MemberComponent
  }
  ,
  {
    path: "events",
    pathMatch: 'full',
    component: EventComponent
  }
  ,

  {
    path: "articles",
    pathMatch: 'full',
    component: ArticleComponent
  },

  {
    path: "tools",
    pathMatch: 'full',
    component: ToolComponent
  }
  ,


  {
    path: '**',  //quelque soit different de au dessus
    pathMatch: 'full',
    component: MemberComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
