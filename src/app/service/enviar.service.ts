import { EnviarDTO } from './../../models/Enviar.dto';
import { API_CONFIG } from './../../config/api.config';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
 @Injectable()
export class EnviarService{
    constructor(
        public http: HttpClient
    ){}
     public findAll(): Observable<EnviarDTO[]>{
        return this.http.get<EnviarDTO[]>(`${API_CONFIG.baseUrl}/ensino/calculadora/calculo.php`);
    }
}
