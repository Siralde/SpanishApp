import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule'},
  { path: 'teacher-info', loadChildren: './pages/teacher-info/teacher-info.module#TeacherInfoPageModule' },
  { path: 'lessons', loadChildren: './pages/lessons/lessons.module#LessonsPageModule' },
  { path: 'testimonials', loadChildren: './pages/testimonials/testimonials.module#TestimonialsPageModule' },
  { path: 'buy-lessons', loadChildren: './pages/buy-lessons/buy-lessons.module#BuyLessonsPageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
