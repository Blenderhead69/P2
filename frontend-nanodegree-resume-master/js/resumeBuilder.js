// $("#main").append("JayPee");
//var awesomeThoughts;
//awesomeThoughts = "I am JayPee and I am AWESOME!";
//console.log (awesomeThoughts);
//var funThoughts;
//funThoughts = awesomeThoughts.replace("AWESOME","FUN");
//$("#main").append(funThoughts);

var data = '%data%';
var $header = $('#header');

var work = {
    "jobs": [{
        "employer": "Agentur Bemberg GmbH",
        "title": "Mediengestalter Digital und Print",
        "location": "Wuppertal, Germany",
        "dates": "2012 - today",
        "description": "Design, Developing, Final Artwork, Adobe Creative Suite, TYPO3, Git, PHPStorm: HTML, CSS, LESS, JavaScript"
    },
        {
            "employer": "NBC Europe",
            "title": "Internship for Television Broadcaster (Production)",
            "location": "Duesseldorf, Germany",
            "dates": "November 2004 - Mai 2005",
            "description": "Technical Support during a daily five hours live show"
        },
    ],
    display: function () {
        for (var job in work.jobs) {
            if (work.jobs.hasOwnProperty(job)) {
                var currentJob = work.jobs[job];
                $("#workExperience").append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace("%data%", currentJob.employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", currentJob.title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                $(".work-entry:last").append(formattedEmployerTitle);
                var formattedDates = HTMLworkDates.replace("%data%", currentJob.dates);
                $(".work-entry:last").append(formattedDates);
                var formattedLocation = HTMLworkLocation.replace("%data%", currentJob.location);
                $(".work-entry:last").append(formattedLocation);
                var formattedDescription = HTMLworkDescription.replace("%data%", currentJob.description);
                $(".work-entry:last").append(formattedDescription);
            }
        }
    }
};
work.display();

var projects = {
    "projects": [{
        "title": "Fun In The Sun",
        "dates": "Summer of '69",
        "description": "Series of photographs during Trip through Europe",
        "images": ["/firstjpgurl.jpg", "/secondjpgurl.jpg", "/ohwowevenapng.png"]
    },
        {
            "title": "Friends Will Be Friends",
            "dates": "1990 - 2012",
            "description": "Playin' the drums at any kind of jams with my friends",
            "images": ["/firstjpgurl.jpg", "/secondjpgurl.jpg", "/ohwowevenapng.png"]
        }
    ],
    display: function () {
        $("#projects").append(HTMLprojectStart);
        for (var data in projects.projects) {
            var myProject = projects.projects[data];
            var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", myProject.title);
            $(".project-entry").append(formattedHTMLprojectTitle);
            var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", myProject.dates);
            $(".project-entry").append(formattedHTMLprojectDates);
            var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", myProject.description);
            $(".project-entry").append(formattedHTMLprojectDescription);
        }
    }
};
projects.display();

var bio = {
    "name": "Janusz Zylka",
    "role": "Mediengestalter Digital and Print",
    "contacts": {
        "mobile": "+49 176 341 222 333",
        "email": "j.zylka@agentur-bemberg.de",
        "github": "Blenderhead69",
        "twitter": "none",
        "location": "Wuppertal, Germany"
    },
    "biopic": "src='images/tgif.gif'",
    "welcomeMessage": "Hi. It's me.",
    "skills": ["Jumping", "Turning Around", "Whistling (w & w/o fingers)", "Making the Air smell"],
    display: function () {
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        $header.prepend(formattedRole);
        var formattedName = HTMLheaderName.replace(data, bio.name);
        $header.prepend(formattedName);
        var formattedContacts = HTMLmobile.replace(data, bio.contacts.mobile) + HTMLemail.replace(data, bio.contacts.email) + HTMLgithub.replace(data, bio.contacts.github) + HTMLlocation.replace(data, bio.contacts.location);
        $header.append(formattedContacts);
        var formattedbioPic = HTMLbioPic.replace(data, bio.biopic);
        $header.append(formattedbioPic);
        var formattedMessage = HTMLWelcomeMsg.replace(data, bio.welcomeMessage);
        $header.append(formattedMessage);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            var formattedHTMLskills = HTMLskills.replace(data, bio.skills[0]);
            $("#skills").append(formattedHTMLskills);
            formattedHTMLskills = HTMLskills.replace(data, bio.skills[1]);
            $("#skills").append(formattedHTMLskills);
            formattedHTMLskills = HTMLskills.replace(data, bio.skills[2]);
            $("#skills").append(formattedHTMLskills);
            formattedHTMLskills = HTMLskills.replace(data, bio.skills[3]);
            $("#skills").append(formattedHTMLskills);
        } else {
            alert("Doesnt work!");
        }
    }
};
bio.display();

var education = {
    "schools": [{
        "name": "Carl-Duisberg-Gymnasium",
        "location": "Wuppertal, Germany",
        "degree": "Abitur - A level, High School Diploma",
        "majors": ["Mathematics ", "Geographie "],
        "dates": "1990 - 2003",
        "url": "http://www.cdg.wtal.de/"
    },
        {
            "name": "RWTH Aachen, Geographie B.Sc.",
            "location": "Aachen, Germany",
            "degree": "none",
            "majors": ["Klimatologie ", "Geomorphologie ", "Industriegeografie ", "Agrargeografie "],
            "dates": "2005 - 2007",
            "url": "https://www.rwth-aachen.de"
        },
        {
            "name": "Berufskolleg am Kothen",
            "location": "Wuppertal, Germany",
            "degree": "staatl. geprüfter gestaltungstechnischer Assistent",
            "majors": ["Typografie ", "Fotografie ", "Gestaltungslehre ", "Kunstgeschichte "],
            "dates": "2007 - 2009",
            "url": "http://www.bk-kothen.de"
        },
        {
            "name": "FH Duesseldorf Media-Techniqe B.Eng.",
            "location": "Duesseldorf, Germany",
            "degree": "none",
            "majors": ["Mathematik ", "Physik ", "Praktische Informatik ", "Medienrecht "],
            "dates": "2009 - 2012",
            "url": "http://old.fh-duesseldorf.de/"
        },
        {
            "name": "Mediengestalter Digital and Print",
            "location": "Solingen, Germany",
            "degree": "Mediengestalter/-in Digital und Print (IHK)",
            "majors": ["Tanzen ", "Singen ", "Malen ", "Gucken "],
            "dates": "2013 - 2015",
            "url": "http://www.tbk-solingen.de/"
        }

    ],
    "onlineCourses": [{
        "title": "Front End Nano Developer Programm",
        "school": "udacity",
        "date": "2015 - now",
        "url": "http://www.udacity.com"
    },
        {
            "title": ["Make a Website ", "HTML & CSS"],
            "school": "codecademy",
            "date": "2015",
            "url": "http://www.codecademy.com"
        }
    ],
    display: function () {
        $("#education").append(HTMLschoolStart);
        for (var data in education.schools) {
            var myEducation = education.schools[data];
            var formattedschoolName = HTMLschoolName.replace("%data%", myEducation.name);
            $(".education-entry").append(formattedschoolName);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", myEducation.degree);
            $(".education-entry").append(formattedschoolDegree);
            var formattedschoolDates = HTMLschoolDates.replace("%data%", myEducation.dates);
            $(".education-entry").append(formattedschoolDates);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", myEducation.location);
            $(".education-entry").append(formattedschoolLocation);
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", myEducation.majors);
            $(".education-entry").append(formattedschoolMajor);
        }
        $(".education-entry").append(HTMLonlineClasses);
        for (data in education.onlineCourses) {
            var myCourses = education.onlineCourses[data];
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", myCourses.title);
            $(".education-entry").append(formattedonlineTitle);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", myCourses.school);
            $(".education-entry").append(formattedonlineSchool);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", myCourses.date);
            $(".education-entry").append(formattedonlineDates);
            var formattedonlineURL = HTMLonlineURL.replace("%data%", myCourses.url);
            $(".education-entry").append(formattedonlineURL);
        }
    }
};
education.display();


$("#mapDiv").append(googleMap);