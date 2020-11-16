import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
  now: Date;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  months: number;
  transform(posted: Date): any {
    this.now=new Date();
    this.seconds=Math.floor(this.now.getTime()/1000-posted.getTime()/1000);
    this.minutes=Math.floor(this.seconds/60);
    this.hours=Math.floor(this.minutes/60);
    this.days=Math.floor(this.hours/24);
    this.months=Math.floor(this.days/30);
    if (this.months > 0) {
      if (this.months == 1) {
        return this.months + ' month ago'
      }
      return this.months + ' months ago'
    }
    if (this.days > 0) {
      if (this.days == 1) {
        return this.days + ' day ago'
      }
      return this.days + ' days ago'
    }
    if (this.hours > 0) {
      if (this.hours == 1) {
        return this.hours + ' hour ago'
      }
      return this.hours + ' hours ago'
    }
    if (this.minutes > 0) {
      if (this.minutes == 1) {
        return this.minutes + ' minute ago'
      }
      return this.minutes + ' minutes ago'
    }
    if(this.seconds==1){
      return this.seconds+' second ago'
    }
    return this.seconds + ' seconds ago'
  }
}