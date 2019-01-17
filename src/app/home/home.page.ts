import { Component, OnInit } from '@angular/core';
import { FullCalendarOptions, EventObject } from 'ngx-fullcalendar';

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
  


   ngOnInit() {
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
    
    this.events = [
      {
        title: 'All Day Event',
        start: '2018-12-01'
      },
      {
        title: 'Long Event',
        start: '2018-12-07',
        end: '2018-12-10'
      },
      {
        title: 'Repeating Event',
        start: '2018-12-09T16:00:00'
      },
      {
        title: 'Repeating Event',
        start: '2018-12-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2018-12-11',
        end: '2018-12-13'
      },
      {
        title: 'Meeting',
        start: '2018-12-12T10:30:00',
        end: '2018-12-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2018-12-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2018-12-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2018-12-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2018-12-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2018-12-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2018-12-28'
      }
    ];
  }

}
