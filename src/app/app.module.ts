import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { CategoryComponent } from './category/category.component';
import { JobsearchComponent } from './jobsearch/jobsearch.component';
import { WayToUseComponent } from './way-to-use/way-to-use.component';
import { TopCompaniesComponent } from './top-companies/top-companies.component';
import { WhychooseComponent } from './whychoose/whychoose.component';
import { JoblookingComponent } from './joblooking/joblooking.component';
import { PricesectionComponent } from './pricesection/pricesection.component';
import { CanidateSectionComponent } from './canidate-section/canidate-section.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationBtnComponent } from './navigation-btn/navigation-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CategoryComponent,
    JobsearchComponent,
    WayToUseComponent,
    TopCompaniesComponent,
    WhychooseComponent,
    JoblookingComponent,
    PricesectionComponent,
    CanidateSectionComponent,
    TestimonialComponent,
    BlogComponent,
    FooterComponent,
    NavigationBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
