import { Component } from '@angular/core';

interface projects {
  id: string;
  title: string;
  description?: string;
  image: string;
  about: string;
  code?: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {

  
allProjects: projects[] = [
  { 
    id: 'arc.001',
    title: 'Terminal 3',
    image: '/assets/img/projects/airport.png',
    about: 'https://djh-architekten.de/referenzen/detail/marienturm'
  },
  { 
    id: 'arc.002',
    title: 'IX FRA18-22',
    image: '/assets/img/projects/datacenter.png',
    about: 'https://djh-architekten.de/referenzen/detail/marienturm'
  },
  { 
    id: 'arc.003',
    title: 'DFB Campus',
    image: '/assets/img/projects/soccer.png',
    about: 'https://github.com/example/project1'
  },
  { 
    id: 'arc.004',
    title: 'DFB Campus',
    image: '/assets/img/projects/tower.png',
    about: 'https://djh-architekten.de/referenzen/detail/dfb-campus'
  },
  { 
    id: 'dev.001',
    title: 'Portfolio',
    image: '/assets/img/projects/coding.png',
    about: 'https://github.com/example/project1',
    code: 'https://github.com/PaFunzFr'
  },
  { 
    id: 'dev.002',
    title: 'StePat',
    image: '/assets/img/projects/coding.png',
    about: 'https://github.com/example/project1'
  },
  { 
    id: 'dev.003',
    title: 'First Attempt',
    image: '/assets/img/projects/coding.png',
    about: 'https://github.com/example/project1'
  },
  { 
    id: 'dev.004',
    title: 'HulCinator',
    image: '/assets/img/projects/coding.png',
    about: 'https://github.com/example/project1'
  },
]


sortedProjects: projects[] = [];

constructor() {
  this.sortProjects();
}

sortProjects() {

  const devProjects = this.allProjects.filter(p => p.id.startsWith('dev')).sort((a, b) => a.id.localeCompare(b.id));
  const arcProjects = this.allProjects.filter(p => p.id.startsWith('arc')).sort((a, b) => a.id.localeCompare(b.id));
  
  let i = 0;

  while (i < devProjects.length || i < arcProjects.length) {

    if (i < devProjects.length) {
      this.sortedProjects.push(devProjects[i]);
    }
    if (i < arcProjects.length) {
      this.sortedProjects.push(arcProjects[i]);
    }
    i++;

  }
}

// toogle Show All / Less Button
showAll: boolean = false;

  get displayedProjects(): projects[] {
    return this.showAll ? this.sortedProjects : this.sortedProjects.slice(0, 6);
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
  }

}
