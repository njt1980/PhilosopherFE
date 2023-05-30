import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserRequest } from '../models/RequestModel';
import { AdviceServiceService } from '../advice-service.service';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/ResponseModel';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  userRequest = new UserRequest();
  philResponse = new ResponseModel();
  responseReceived: boolean = false;
  loading: boolean = false;
  philosophicalResponseObs?: Observable<ResponseModel>;
  constructor(private adviceService: AdviceServiceService){}
  userInputForm = new FormGroup({
    userInput: new FormControl()
  })
  onSubmit(){
    this.userRequest.userinput = this.userInputForm.value.userInput;
    console.log(this.userRequest);
    this.loading = true;
    // this.philosophicalResponseObs = this.adviceService.getPhilosophicalResponse(this.userRequest);
    this.adviceService.getPhilosophicalResponse(this.userRequest).subscribe(
      (response) => {
        this.philResponse = response;
        this.loading = false;
        this.responseReceived = true}
    )
    this.userInputForm.reset();
  }
}
