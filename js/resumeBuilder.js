//All of the information needed to compile and replace the existing %data% in the html all in JSON format
var bio = {
	"name": "James van Arkel",
	"role": "User Experience Designer/ Front-end Developer ",
	"contacts": [
		{
			"mobile": "+31 (06) 292 00 442",
			"email": "James.van.arkel@gmail.com ",
			"github": "@jamesvanarkel",
			"twitter": "@jamesvanarkel",
			"location": "Amsterdam"
		}
	],
	"welcomeMessage": "Welcome to my interactive resume",
	"skills":[
		"Being AWESOME",
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
	"biopic": "images/fry.jpg",
	"display": "function taking no parameters"
}

var education = {
	"schools":[
		{
			"name": "Regio College Zaandam",
			"location": "Zaandam, the Netherlands",
			"degree": "HAVO",
			"majors": [
				" ",
				" ",
				" "
			],
			"dates": "Complete 2010 ",
			"url" : "http://www.regiocollege.nl/opleidingen/vavo-havo-vwo"
		},
		{
			"name": "Communication and Multimedia Design Amsterdam",
			"location": "Amsterdam, the Netherlands",
			"degree": "HBO",
			"majors": [
				" ",
				" ",
				" "
			],
			"dates": "Complete 2014",
			"url" : "www.cmd-amsterdam.nl"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "2015 - recent",
			"url": "https://www.udacity.com/course/nd001"
		},
	],
	"display": "function taking no parameters"
}

var work = {
	"jobs" : [
		{
			"employer" : "Yellowbrick International",
			"title" : "Application Front-End Developer",
			"location" : "Amsterdam, the Netherlands",
			"dates": "02-03-2015 | Current ",
			"description": "The company Brickparking changed it's name to Yellowbrick International. From now on I started a online course so I can fufill my new title as a Application Front-End developer. I will be working with Javascript, jQuery, HTML, CSS, SASS, Coffee and other Front-end languages."
		},
		{
			"employer" : "Brick Parking",
			"title" : "UI/UX DESIGNER",
			"location" : "Amsterdam, the Netherlands",
			"dates": "01-08-2014 | 01-03-2015 ",
			"description": "After my graduation I started working at Brickparking which is a sister company of Yellowbrick. Brickparking does most of the development for them. as a UI/UX designer at Brickparking i helped with several projects like the Banksy (Yellowbrick parking application) and Jon Snow(management tool for customers Yellowbrick). the role I played was mostly prototyping and design of the products. "
		},
		{
			"employer" : "Gorealya",
			"title" : "Co-Founder, Visual- and UX/UI designer",
			"location" : "Amsterdam, the Netherlands",
			"dates": " 01-01-2012 | Current",
			"description": "Gorealya Amsterdam Tribe. A clothing line started by three students. As a UI/UX designer I work on the webshop, service design of getting the product to the customer, the designs for the shirts, branding, storytelling and building the experience around the brand."
		},
		{
			"employer" : "Yellowbrick",
			"title" : "Thesis/Final project UX design",
			"location" : "Amsterdam, the Netherlands",
			"dates": " 01-02-2014 | 01-08-2014",
			"description": "Gorealya Amsterdam Tribe. A clothing line started by three students. As a UI/UX designer I work on the webshop, service design of getting the product to the customer, the designs for the shirts, branding, storytelling and building the experience around the brand."
		}
	],
	"display": "function taking no parameters"
}

var projects ={
	"projects": [
		{
			"title": "Bibendum",
			"dates": "Vulputate",
			"description": "Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
			"images" : "asdasd"
		},
		{
			"title": " asdjiasd",
			"dates": "asdjiasd",
			"description": "asdjiasd",
			"images" : "asdjiasd"
		}
	],
	"display": "function taking no parameters"
}

//Starting imports from top to bottom
function displayBio(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

	var headerInfo = formattedName + formattedRole + formattedBioPic;

	$("#header").append(headerInfo);


}
displayBio();

function displayWork(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedJobContent = formattedLocation + formattedDates + formattedDescription;

		$(".work-entry:last").append(formattedJobContent);

	}
}
displayWork()

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