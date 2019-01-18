import { DataObject } from './home.page';
import { Component, OnInit } from '@angular/core';
import { FullCalendarOptions, EventObject } from 'ngx-fullcalendar';
import { RestApiService } from '../rest-api.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  title = ' مرحبا بسعادتكم ';
  options: FullCalendarOptions;
  events: EventObject[];
   initialLocaleCode = 'ar-sa';
  public TheEvents:any=[];
   constructor(public api: RestApiService,
    public loadingController: LoadingController,
    public router: Router) {

     
     }


    // async getEvents() {
    //   const loading = await this.loadingController.create({
    //     message:'الرجاء '
    //   });
    //   await loading.present();
    //   await this.api.getEvents()
    //     .subscribe(res => {
    //       console.log(res);
    //       this.TheEvents = res;
    //       loading.dismiss();
    //     }, err => {
    //       console.log(err);
    //       loading.dismiss();
    //     });
    // }
   ngOnInit() {
    //this.loadevents();
   
    this.options = {
      
      header: {       
        left: 'prev,next today',
        center: 'title',
        right: 'month,listMonth,listWeek,listDay', 
        views:{
          month:'Month'
        }
      },
     dir:'rtl',
     height: 'parent',
      defaultDate: '2018-12-12',
      locale: this.initialLocaleCode,
      weekNumbers: true,
      editable: true,
      droppable: true,
      eventStartEditable: true,
    eventDurationEditable: true,
      
    };
    this.api.getEvents().subscribe((data: Array<EventObject>) =>{
      this.TheEvents = data;
      console.log( this.TheEvents)
    }, err => {
            console.log(err);
            
          });
          this.events = [
            { id: 'a', title: 'My Birthday', allDay: true },
            { id: 'b', title: 'Friends coming round', start: '2018-07-26T18:00:00', end: '2018-07-26T23:00:00' }
          ]
    console.log( this.events)
    
  }
  async loadevents() {
    const loading = await this.loadingController.create({
          message:'الرجاء '
        });
        await loading.present();
        this.events = [
          { id: 'a', title: 'My Birthday', allDay: true },
          { id: 'b', title: 'Friends coming round', start: '2018-07-26T18:00:00', end: '2018-07-26T23:00:00' }
        ]
      loading.dismiss();
   
         
  }
}
export interface DataObject {
  allDay: boolean;

color: string;

description: string;

end: Date;

id: number;

location: string;

start: Date;

title: string;
}

// [
//   {
//     title: 'All Day Event',
//     start: '2018-12-01'
//   },
//   {
//     title: 'Long Event',
//     start: '2018-12-07',
//     end: '2018-12-10'
//   },
//   {
//     title: 'Repeating Event',
//     start: '2018-12-09T16:00:00'
//   },
//   {
//     title: 'Repeating Event',
//     start: '2018-12-16T16:00:00'
//   },
//   {
//     title: 'Conference',
//     start: '2018-12-11',
//     end: '2018-12-13'
//   },
//   {
//     title: 'Meeting',
//     start: '2018-12-12T10:30:00',
//     end: '2018-12-12T12:30:00'
//   },
//   {
//     title: 'Lunch',
//     start: '2018-12-12T12:00:00'
//   },
//   {
//     title: 'Meeting',
//     start: '2018-12-12T14:30:00'
//   },
//   {
//     title: 'Happy Hour',
//     start: '2018-12-12T17:30:00'
//   },
//   {
//     title: 'Dinner',
//     start: '2018-12-12T20:00:00'
//   },
//   {
//     title: 'Birthday Party',
//     start: '2018-12-13T07:00:00'
//   },
//   {
//     title: 'Click for Google',
//     url: 'http://google.com/',
//     start: '2018-12-28'
//   }
// ];