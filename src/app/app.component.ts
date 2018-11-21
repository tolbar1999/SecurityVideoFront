import { URL_API } from './_service/util/_var.constant';
import { VideoService } from './_service/video.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  urlVideo: string = "";

  constructor(private servicioVideo: VideoService) {
  }

  ngOnInit() {
    this.servicioVideo.generarClave().subscribe(data => {
      this.urlVideo = `${URL_API}/video/obtener?clave=${data}`;
    })
  }

}
