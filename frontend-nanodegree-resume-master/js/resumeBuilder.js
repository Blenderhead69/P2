// $("#main").append("JayPee");
//var awesomeThoughts;
//awesomeThoughts = "I am JayPee and I am AWESOME!";
//console.log (awesomeThoughts);
//var funThoughts;
//funThoughts = awesomeThoughts.replace("AWESOME","FUN");
//$("#main").append(funThoughts);

var formattedRole = HTMLheaderRole.replace("%data%", "Front End Web Developer");
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", "Janusz Eisse");
$("#header").prepend(formattedName);

var bio = {
	"name": "Janusz Zylka",
	"role": "Web Developer",
	"contact": {
		"email": "j.zylka@agentur-bemberg.de",
		"phone": "+49 176 111 222 333",
		"location": "Wuppertal/Germany"
	},
	"picture": "images/me.jpg",
	"message": "Hi. It's me.",
	"skills": ["Jumping", "Turning Around", "Whistling (w & w/o fingers)", "Making the Air smell"]
};
var work = {};
work.position = "Mediengestalter Digital und Print";
work.employer = "Agentur Bemberg GmbH";
work.years = "3 Years";
work.city = "Wuppertal";

var education = {};
education["school"] = "FH Duesseldorf";
education["years"] = "2 Years";
education["city"] = "Duesseldorf";


$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contact.email);
$("#main").append(bio.contact.phone);
$("#main").append(bio.contact.location);
$("#main").append(bio.picture);
$("#main").append(bio.message);
$("#main").append(bio.skills);
$("#main").append(work.position);
$("#main").append(work.employer);
$("#main").append(work.years);
$("#main").append(work.city);
$("#main").append(education["school"]);
$("#main").append(education["years"]);
$("#main").append(education["city"]);