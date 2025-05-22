import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { HttpClientModule } from "@angular/common/http"
import { ReactiveFormsModule, FormsModule } from "@angular/forms"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./components/header/app.component"
import { HeaderComponent } from "./components/header/header.component"
import { SidenavComponent } from "./components/sidenav/sidenav.component"
import { PostListComponent } from "./components/post-list/post-list.component"
import { PostFormComponent } from "./components/post-form/post-form.component"
import { DashboardComponent } from "./components/dashboard/dashboard.component"
import { PostsChartComponent } from "./components/posts-chart/posts-chart.component"
import { PostsStatsComponent } from "./components/posts-stats/posts-stats.component"
import { RecentPostsComponent } from "./components/recent-posts/recent-posts.component"
import { DeleteConfirmDialogComponent } from "./components/delete-confirm-dialog/delete-confirm-dialog.component"

// Angular Material Imports
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { MatListModule } from "@angular/material/list"
import { MatCardModule } from "@angular/material/card"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatNativeDateModule } from "@angular/material/core"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { MatSnackBarModule } from "@angular/material/snack-bar"
import { MatDialogModule } from "@angular/material/dialog"
import { MatGridListModule } from "@angular/material/grid-list"
import { MatChipsModule } from "@angular/material/chips"
import { MatMenuModule } from "@angular/material/menu"
import { MatDividerModule } from "@angular/material/divider"
import { MatTooltipModule } from "@angular/material/tooltip"
import { MatBadgeModule } from "@angular/material/badge"

// Chart Module
import { NgChartsModule } from "ng2-charts"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    PostListComponent,
    PostFormComponent,
    DashboardComponent,
    PostsChartComponent,
    PostsStatsComponent,
    RecentPostsComponent,
    DeleteConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatGridListModule,
    MatChipsModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
    MatBadgeModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
