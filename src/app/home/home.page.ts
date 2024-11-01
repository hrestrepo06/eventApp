import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonItem,
  IonIcon,
  IonText,
  IonFabButton,
  IonBadge,
  IonRow,
  IonButton,
  IonCol,
  IonSearchbar,
  IonicSlides,
  IonList,
  IonListHeader,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowForwardOutline,
  locateOutline,
  locationOutline,
  notificationsOutline,
  optionsOutline,
} from 'ionicons/icons';
import { Category } from '../interfaces/category.interface';
import { Event } from '../interfaces/event.interface';
import { events } from '../data/events';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonListHeader,
    IonList,
    IonSearchbar,
    IonCol,
    IonButton,
    IonRow,
    IonBadge,
    IonFabButton,
    IonText,
    IonIcon,
    IonItem,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    RouterLink,
    DatePipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
  swiperModules = [IonicSlides];
  upcomingEvents: Event[] = [];
  currentEvents: Event[] = [];
  categories: Category[] = [];

  constructor() {
    addIcons({
      locateOutline,
      notificationsOutline,
      optionsOutline,
      locationOutline,
      arrowForwardOutline
    });
  }
  
  ngOnInit(): void {
    this.currentEvents = [...events];
    this.upcomingEvents = events.sort((a, b) => {
      // Convert id to number for comparision
      const idA = parseInt(a.id, 10);
      const idB = parseInt(b.id, 10);
      return idB - idA; // descending order
    });
    this.categories = [...this.categories];
  }
}
