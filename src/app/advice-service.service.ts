import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRequest } from './models/RequestModel';
import { ResponseModel } from './models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AdviceServiceService {

  FASTAPI_URL = "http://127.0.0.1:8001/getphilosophy/";
  AWS_URL = "https://7lbesjd6eg.execute-api.us-east-1.amazonaws.com/getphilosophy";

  constructor(private http:HttpClient){}

  getPhilosophicalResponse(userRequest:UserRequest){

    return this.http.post<ResponseModel>(this.AWS_URL,userRequest);

  }
}
