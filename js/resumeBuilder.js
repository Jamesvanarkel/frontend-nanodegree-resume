//All of the information needed to compile and replace the existing %data% in the html all in JSON format
var model = {
  bio: {
    "name": "James van Arkel",
    "role": "User Experience Designer/ Front-end Developer ",
    "contacts": [
      {
        "mobile": "+31 (06) 292 00 442",
        "email": "James.van.arkel@gmail.com",
        "github": "@jamesvanarkel",
        "twitter": "@jamesvanarkel",
        "location": "Purmerend"
      }
    ],
    "welcomeMessage": "Curriculum Vitae",
    "skills": [
      "Awesomeness",
      "Photoshop",
      "Indesign",
      "Illustrator",
      "HTML5",
      "CSS3",
      "PHP",
      "SQL",
      "jQuery",
      "Javascript",
      "Fireworks",
      "Aftereffects",
      "Premiere",
      "Ducth",
      "English"
    ],
    "biopic": "images/fry.png",
  },
  education: {
    "schools": [
      {
        "name": "Regio College Zaandam",
        "location": "Zaandam, the Netherlands",
        "degree": "HAVO",
        "majors": [
          "some",
          "thing",
          "here"
        ],
        "dates": "Complete 2010 ",
        "url": "http://www.regiocollege.nl/opleidingen/vavo-havo-vwo"
      },
      {
        "name": "Communication and Multimedia Design Amsterdam",
        "location": "Weesperplein, Amsterdam, the Netherlands",
        "degree": "HBO",
        "majors": [
          "and",
          "here",
          "major"
        ],
        "dates": "Complete 2014",
        "url": "http://www.cmd-amsterdam.nl"
      }
    ],
    "onlineCourses": [
      {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2015 - recent",
        "url": "https://www.udacity.com/course/nd001"
      },
    ]
  },
  work: {
    "jobs": [
      {
        "employer": "Yellowbrick International",
        "title": "Application Front-End Developer",
        "location": "H.J.E wenckebachweg, Amsterdam, the Netherlands",
        "dates": "02-03-2015 | Current ",
        "description": "The company Brickparking changed it's name to Yellowbrick International. From now on I started a online course so I can fufill my new title as a Application Front-End developer. I will be working with Javascript, jQuery, HTML, CSS, SASS, Coffee and other Front-end languages."
      },
      {
        "employer": "Brick Parking",
        "title": "UI/UX DESIGNER",
        "location": "H.J.E wenckebachweg,Amsterdam, the Netherlands",
        "dates": "01-08-2014 | 01-03-2015 ",
        "description": "After my graduation I started working at Brickparking which is a sister company of Yellowbrick. Brickparking does most of the development for them. as a UI/UX designer at Brickparking i helped with several projects like the Banksy (Yellowbrick parking application) and Jon Snow(management tool for customers Yellowbrick). the role I played was mostly prototyping and design of the products. "
      },
      {
        "employer": "Gorealya",
        "title": "Co-Founder, Visual- and UX/UI designer",
        "location": "Nieuwemarkt, Amsterdam, the Netherlands",
        "dates": " 01-01-2012 | Current",
        "description": "Gorealya Amsterdam Tribe. A clothing line started by three students. As a UI/UX designer I work on the webshop, service design of getting the product to the customer, the designs for the shirts, branding, storytelling and building the experience around the brand."
      },
      {
        "employer": "Yellowbrick",
        "title": "Thesis/Final project UX design",
        "location": "Amsterdam, the Netherlands",
        "dates": " 01-02-2014 | 01-08-2014",
        "description": "Gorealya Amsterdam Tribe. A clothing line started by three students. As a UI/UX designer I work on the webshop, service design of getting the product to the customer, the designs for the shirts, branding, storytelling and building the experience around the brand."
      }
    ]
  },
  projects: {
    "projects": [
      {
        "title": "Bibendum",
        "dates": "Vulputate",
        "description": "Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
        "images": " "
      },
      {
        "title": " asdjiasd",
        "dates": "asdjiasd",
        "description": "asdjiasd",
        "images": " "
      }
    ]
  }
}

var view = {
  init: function() {
    
  },
  render: function() {
    
  }
}
var controller = {
  
}

function displayBio(){//Starting imports from top to bottom
	var formattedRole = HTMLheaderRole.replace("%data%", model.bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", model.bio.biopic);
	var formattedName = HTMLheaderName.replace("%data%", model.bio.name);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%", model.bio.welcomeMessage);

	var headerInfo = formattedRole;
	var firstHeaderInfo = formattedBioPic + formattedName;
	$("#header").append(headerInfo);
	$("#header").prepend(firstHeaderInfo);
	$("#header").append(HTMLskillsStart);
	$("#workExperience").prepend(formattedMessage);

	for (skill in model.skills){
		var formattedSkills = HTMLskills.replace("%data%", model.bio.skills[skill]);

		$("#skills").append(formattedSkills);
	}

	function displayContact(){

		var formattedMobile	= HTMLmobile.replace("%data%", model.bio.contacts[0].mobile);
		var formattedEmail = HTMLemail.replace("%data%", model.bio.contacts[0].email);
		var formattedGithub = HTMLgithub.replace("%data%", model.bio.contacts[0].github);
		var formattedTwitter = HTMLtwitter.replace("%data%", model.bio.contacts[0].twitter);
		var formattedLocation = HTMLlocation.replace("%data%", model.bio.contacts[0].location);

		var formattedContact = formattedEmail + formattedMobile + formattedTwitter + formattedGithub  + formattedLocation;
		$("#topContacts,#footerContacts").append(formattedContact);

	}
	displayContact();
}


displayBio(); // prints 'all in Bio function'


function displayEducation(){
		for (school in education.schools){
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", model.education.schools[school].name);
			var formattedSchoolLocation  = HTMLschoolLocation.replace("%data%", model.education.schools[school].location);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", model.education.schools[school].dates);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", model.education.schools[school].degree);
			var formattedMajors = HTMLschoolMajor.replace("%data%", model.education.schools[school].majors);

			var formattedSchool = formattedSchoolName + formattedSchoolLocation + formattedSchoolDegree + formattedSchoolDates +formattedMajors;

			$(".education-entry:last").append(formattedSchool);

			var formattedUrl = $(".education-entry:last").find("a");
			formattedUrl.attr("href", education.schools[school].url);

		}
	}
function displayOnline(){
		for(online in education.onlineCourses){
			$("#education:last").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);


			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);

			var formattedOnline = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates;

			$(".education-entry:last").append(formattedOnline);

			var formattedOnlineUrl = $(".education-entry:last").find("a");
			formattedOnlineUrl.attr("href", education.onlineCourses[online].url);
		}

	}

displayEducation();
displayOnline();

function displayWork(){
		for(job in model.work.jobs){
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", model.work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", model.work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", model.work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", model.work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", model.work.jobs[job].description);
			var formattedJobContent = formattedLocation + formattedDates + formattedDescription;

			$(".work-entry:last").append(formattedJobContent);
		}
	}

displayWork();

function displayProjects() {
		for (project in projects.projects){
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images){
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}


displayProjects();

function inName(){
	var name = bio.name;
	name = name.split(" ");
	name[0] = name[0].slice(0 , 1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toLowerCase();
	name[2] = name[2].toUpperCase();

	return name[0] + " " + name[1] + " " + name[2];
}

$("#header").append(internationalizeButton);

$("#mapDiv").append(googleMap);

function appendIcons(){
	//Finding and adding the icon building to the H2 of workexperience
	var iconWorkExperienceHeader = $("#workExperience").children("h2");
	iconWorkExperienceHeader.prepend('<i class="fa fa-building-o"></i> ');

	//Finding and adding the icon building to the H2 of Projects
	var iconProjectHeader = $("#projects").children("h2");
	iconProjectHeader.prepend('<i class="fa fa-briefcase"></i> ');

	//Finding and adding the icon building to the H2 of Education
	var iconEducationHeader = $("#education").children("h2");
	iconEducationHeader.prepend('<i class="fa fa-book"></i> ');

	//Finding and adding the icon building to the H2 of where i worked and lived
	var iconMapHeader = $("#mapDiv").children("h2");
	iconMapHeader.prepend('<i class="fa fa-compass"></i> ');
}
appendIcons();

function appendRatings(){
	//for every item in the array "Skills" there should be a circle rating from 0 -> 5 of how the experience is in this function
	skillItem = $("#skills").children(".flex-item");
	console.log(skillItem);

	function giveRatings(){
		var skillArray = $("#skills").find("li:first-child");
		//being awesome
		skillArray = skillArray.attr("class", "fiveRating");
		//"Photoshop",
		skillArray = skillArray.next().attr("class", "fourRating");
		//"Indesign",
		skillArray = skillArray.next().attr("class", "threeRating");
		//"Illustrator",
		skillArray = skillArray.next().attr("class", "oneRating");
		//"HTML5",
		skillArray = skillArray.next().attr("class", "twoRating");
		//"CSS3",
		skillArray = skillArray.next().attr("class", "fourRating");
		//"PHP",
		skillArray = skillArray.next().attr("class", "oneRating");
		//"SQL",
		skillArray = skillArray.next().attr("class", "fourRating");
		//"jQuery",
		skillArray = skillArray.next().attr("class", "fourRating");
		//"Javascript",
		skillArray = skillArray.next().attr("class", "fourRating");
		//"Fireworks",
		skillArray = skillArray.next().attr("class", "fourRating");
		//"Aftereffects",
		skillArray = skillArray.next().attr("class", "threeRating");
		//"Premiere",
		skillArray = skillArray.next().attr("class", "fiveRating");
		//"Ducth",
		skillArray = skillArray.next().attr("class", "fiveRating");
		//"English"
		skillArray = skillArray.next().attr("class", "fiveRating");


		$('.fiveRating').each( function (index, data) {
   			 $(this).append('<span class="rating"><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i></span>');
		});
		$('.fourRating').each( function (index, data) {
   			 $(this).append('<span class="rating"><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle-o"></i></span>');
		});
		$('.threeRating').each( function (index, data) {
   			 $(this).append('<span class="rating"><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle-o"></i><i class="fa fa-circle-o"></i></span>');
		});
		$('.twoRating').each( function (index, data) {
   			 $(this).append('<span class="rating"><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle-o"></i><i class="fa fa-circle-o"></i><i class="fa fa-circle-o"></i></span>');
		});
		$('.oneRating').each( function (index, data) {
   			 $(this).append('<span class="rating"><i class="fa fa-circle"></i><i class="fa fa-circle-o"></i><i class="fa fa-circle-o"></i><i class="fa fa-circle-o"></i><i class="fa fa-circle-o"></i></span>');
		});
	}
	giveRatings();
}
appendRatings();
