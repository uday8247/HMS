import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  room: Room = new Room();
  constructor(private roomService: RoomService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveRoom() {
    console.log(this.room)
    this.roomService.createRoom(this.room).subscribe(data => {
      console.log(data);
      this.goToRoomList();
    },
      error => console.log(error));
  }

  goToRoomList() {
    this.router.navigate(['/rooms']);
  }

  onSubmit() {
    console.log(this.room);
    this.saveRoom();
  }
}
