import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Reservation } from './reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseURL = "http://localhost:8081/rooms";

  constructor(private httpClient: HttpClient) { }

  getReservationsList(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(`${this.baseURL}`);
  }

  createReservation(reservation: Reservation): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, reservation);
  }

  getReservationById(roomno: string): Observable<Reservation> {
    return this.httpClient.get<Reservation>(`${this.baseURL}/${roomno}`);
  }
}
