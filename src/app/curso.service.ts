import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./curso.model";
import { Persona } from "./persona.model";

@Injectable({
    providedIn: "root"
})
export class CourseService {


    constructor(private http: HttpClient){}

    getCourses(): Observable<Course[]>{
        //http://127.0.0.1:8080/profesoresplatzi-0.0.1-SNAPSHOT/v1/socialMedia
        //http://127.0.0.1:8080/profesoresplatzi-0.0.1-SNAPSHOT/v1/socialMedia
        //http://127.0.0.1:8085/v1/socialMedia
        return this.http.get<Course[]>("http://127.0.0.1:8085/v1/socialMedia");
    }

    getPersonas():Observable<Persona[]>{
        return this.http.get<Persona[]>("http://localhost:8090/personas");
    }

}