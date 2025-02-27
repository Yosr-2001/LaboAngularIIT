import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MemberFormComponent } from './member-form/member-form.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { TemplateComponent } from './template/template.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { ArticleComponent } from './article/article.component';
import { ToolComponent } from './tool/tool.component';
import { MatSortModule } from '@angular/material/sort';

/*** */
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ModalEvtComponent } from './modal-evt/modal-evt.component';
/*** */
@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberFormComponent,
    ConfirmDialogComponent,
    TemplateComponent,
    DashboardComponent,
    EventComponent,
    ArticleComponent,
    ToolComponent,
    ModalEvtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    //  FlexLayoutModule
    HttpClientModule, MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatMenuModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    /** */
    MatSortModule, MatPaginatorModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
