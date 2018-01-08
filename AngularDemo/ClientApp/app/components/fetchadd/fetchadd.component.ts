import { Component, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
    selector: 'fetchadd',
    templateUrl: './fetchadd.component.html'
})
export class FetchAddComponent {
    private base_url: string;

    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.base_url = baseUrl;
    }

    addWeatherForecast() {
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });
        var request = this.http
            .post(this.base_url + 'api/SampleData/AddWeatherForecast', '', options)
            .subscribe();
    }
}
