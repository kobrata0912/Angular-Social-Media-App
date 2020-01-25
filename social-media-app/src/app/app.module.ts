import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FirebaseModule } from './firebase.module';

import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { SidenavListComponent } from './components/shared/sidenav-list/sidenav-list.component';


import { HomeComponent } from './components/home/home.component';

import { FormsModule } from '@angular/forms';

import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FriendsComponent } from './components/friends/friends.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavListComponent,
    HomeComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    SignInComponent,
    MyPostsComponent,
    AllPostsComponent,
    CreatePostComponent,
    FooterComponent,
    FriendsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FirebaseModule,
    FlexLayoutModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
