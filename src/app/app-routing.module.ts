import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path:'skills',component:SkillsComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'education',component:EducationComponent},
  {path:'certifications',component:CertificationsComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
