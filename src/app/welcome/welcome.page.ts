import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import {
  IonContent,
  IonToolbar,
  IonFooter,
  IonButton,
  IonIcon,
  IonLabel,
  IonText,
  IonicSlides,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [
    IonText,
    IonLabel,
    IonIcon,
    IonButton,
    IonFooter,
    IonContent,
    IonToolbar,
    RouterLink,
    NgStyle,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WelcomePage implements OnInit {
  onboardingScreens = [
    { image: '1.jpg' },
    { image: '2.jpg' },
    { image: '3.jpg' },
  ];
  swiperModules = [IonicSlides];

  constructor() {}

  ngOnInit(): void {

  }
}
