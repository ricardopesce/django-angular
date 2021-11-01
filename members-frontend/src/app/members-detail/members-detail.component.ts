import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  constructor( private route: ActivatedRoute, private api: ApiService ) { }

  //selected_member: any;
  selected_member = { name:'', surname:'', address:''};

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("members-detail.components - id: " + id);

    this.api.getMember(id).subscribe(
      data => {
        console.log(data);
        this.selected_member = data;
      },
      error => {
        console.log("Erro em members-detail.component: " + error.message);
      }
    );
  }

}
