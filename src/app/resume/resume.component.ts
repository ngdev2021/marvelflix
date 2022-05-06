import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  contact = {
    address: "18808 Walkers Choice Rd Montgomery Village, Maryland",
    linkedin: "https://www.linkedin.com/in/reginald-brown-970b05189",
    phoneNumber: ["240-659-3932","301-658-8596"],
    email: ["ngdev21@gmail.com","reginald.brown@agapecoders.com"]
  }

  attributes = {
  skills: [
	"Front-End Development",
  "Back-End Development",
	"Angular",
	"AWS",
	"Artifact",
	"Cognito",
	"Cloud9",
	"CloudFront",
	"CloudWatch",
	"CodeBuild",
	"CodeCommit",
	"Code Deploy",
	"Code Pipeline",
	"CodeStar",
	"DynamoDB",
	"Elastic Block Store",
	"Elasticache",
	"Aurora",
	"RedShift",
	"SQS (Simple Queue Service)",
	"RDS (Relational Database Service)",
"	S3 (Simple Storage Service)",
"	Storage Gateway",
"	VPC (Virtual Private Cloud)",
"	Kinesis",
"	Elastic File System",
"	X-Ray",
"	Elastic Beanstalk",
"	Fargate",
"	Lambda",
"	EC2 (Elastic Cloud Compute)",
"	Elastic Container Service",
"	EKS (Elastic Kubernetes Service",
"	IAM (Identity Access Management",
"	RDS (Relational Database Services",
"	Cloud Formation",
	"Terraform",
	"Docker",
	"Kubernetes",
"	Google Cloud Platform",
"	Windows",
"	Mac",
	"Linux",
"	Time Management ",
	"Communication ",
	"Interpersonal Skills,"
  ],
  languages: [
  "Typescript",
  "JavaScript",
  "HTML5",
  "CSS"
  ],
  libraries: [
     "RXJS",
    "Node Package Manager",
   " Docker Hub",
    "React",
    "Angular Materials"
  ],
  repositories: [
    "Github",
    "Gitlab",
    "CodeCommit",
    "CodeArtifact"
  ]
}



  constructor() { }

  ngOnInit(): void {

  }

  getSkills() {
    of(this.attributes.skills).pipe(map(skills => {
      console.log(skills)
      return skills
    }))
  }


}
