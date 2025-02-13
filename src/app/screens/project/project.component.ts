import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})


export class ProjectComponent implements OnInit {

      

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService) {}


    item: any;

    ngOnInit(){

      const id = +this.route.snapshot.paramMap.get('id')!;
      this.apiService.getItem(id).subscribe(data => {
        this.item = data;
        console.log(this.item);
      });

    }

    getLanguageName(className: string): string {
      const langMap: { [key: string]: string } = {
        "devicon-java-plain": "Java",
        "devicon-python-plain": "Python",
        "devicon-angular-plain": "Angular",
        "devicon-cplusplus-plain": "C++",
        "devicon-csharp-plain": "C#",
        "devicon-c-plain": "C",
        "devicon-typescript-plain": "TypeScript",
        "devicon-javascript-plain": "JavaScript",
        "devicon-html5-plain": "HTML5",
        "devicon-css3-plain": "CSS3",

        "devicon-angularjs-plain ": "AngularJS",
        "devicon-djangorest-plain": "DjangoRest",
        "devicon-django-plain": "Django",
        "devicon-bootstrap-plain": "Bootstrap",
        "devicon-opencv-plain": "OpenCV",
        "devicon-tensorflow-original": "TensorFlow",

        "devicon-unity-plain": "Unity",
        "devicon-visualstudio-plain": "Visual Studio",
        "devicon-androidstudio-plain": "Android Studio",
        "devicon-git-plain": "Git",
        "devicon-github-plain": "GitHub",
        "devicon-amazonwebservices-plain-wordmark": "AWS",

      };
  
      return langMap[className] || "Desconocido";
    }

}