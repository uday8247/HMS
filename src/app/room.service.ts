import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseURL = "http://localhost:8078/rooms";

  constructor(private httpClient: HttpClient) { }

  getRoomsList(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(`${this.baseURL}`);
  }

  createRoom(room: Room): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, room);
  }

  getRoomById(roomno: string): Observable<Room> {
    return this.httpClient.get<Room>(`${this.baseURL}/${roomno}`);
  }

  deleteRoom(roomno: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${roomno}`);
  }
}
