import { Injectable } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  bookingListRef: AngularFireList<any>
  bookingRef: AngularFireObject<any>

  constructor(private db: AngularFireDatabase) { }
// Create
createBooking(apt:Appointment){
  return this.bookingListRef.push({
    name:apt.name,
    email:apt.email,
    number:apt.number
  })
}

// obtener el elemento

getBooking(id:String){
  this.bookingRef=this.db.object('/appointment/'+id);
  return this.bookingListRef;
} 

// obtener el Get
 getBookingList(){
   this.bookingRef=this.db.object('/appointment');
   return this.bookingListRef;
 }

 //Actualizar
 updateBooking(id, apt:Appointment){
   return this.bookingRef.update({
    name:apt.name,
    email:apt.email,
    number:apt.number
   })
 }
 // Delete
 deleteBookin(id :string){
   this.bookingRef=this.db.object('/appointment/'+id)
   this.bookingRef.remove();
 }


}
