import { Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';
import { ContactComponent } from '../components/contact/contact.component';
import { SubmitResultComponent } from '../components/submit-result/submit-result.component';

export const routes: Routes = [

    {
        path: "",
        component: HomeComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "contact-us",
        component: ContactComponent
    },
    {
        path: "contact-result",
        component: SubmitResultComponent
    },
    { 
        path: '**',
        redirectTo: 'contact-us',
        pathMatch:'full'
    }

];