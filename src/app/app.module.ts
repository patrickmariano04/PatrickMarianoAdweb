import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ReferencesComponent } from './references/references.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'about', component: AboutComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
];
//Step 5 - use RouterModule
@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
