var bio = {
	"name" : "Feng Shen",
	"role" : "Web Developer",
	"contacts" : 
	{
	 "email" : "Feng Shen",
	 "mobile" : "505-814-9685",
	 "github" : "edisonshen",
	 "location" : "Albuquerque",
	 "twitter" : "@edisonshen"
	},
	"welcomeMessage" : "Hello World",
	"skills" : ["Java" , "Python", "Javascrpit", "C"],
	"bioPic" : "not availiable"
}


var education = {
	"schools" : [
		{
			"name" : "Anhui University",
			"city" : "China",
			"degree" : "Bachelor",
			"majors" : "optical information and technology",
			"data" : "2012",
			"url" : "http://ahu.edu.cn"
		},
		{
			"name" : "University of New Mexico",
			"city" : "Albuquerque",
			"degree" : "Master",
			"majors" : "Optical Science and Engineering",
			"date" : "2014",
			"url" : "http://www.unm.edu"
		},
		{
			"name" : "University of New Mexico",
			"city" : "Albuquerque",
			"degree" : "Master",
			"majors" : "Computer Science",
			"date" : "2013-2016",
			"url" : "http://cs.unm.edu/~edisonshen"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "University of New Mexico",
			"title" : "Research assistant",
			"date" : "Aug,2012 - Dec, 2014",
			"description": "Research on microstruture fiber fabrication"
		},
		{
			"employer" : "University of New Mexico",
			"title" : "Project Assistant",
			"date" : "Jan, 2014 - Dec, 2014",
			"description": "Manage the study plan of football team of university of new mexico"
		},
		{
			"employer" : "DTM",
			"title" : "Web Developer",
			"date" : "Nov, 2015 - Dec, present",
			"description": "Manage the study plan of football team of university of new mexico"
		}
	]

}
var projects = {
	"projects" : [
		{
			"title" : "Udacity",
			"dates" : "2015",
			"description" : "web developer"
		}
	]

}


if (bio.skills.length > 0 )
{
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%" , bio.skills[0]);

	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%" , bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%" , bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%" , bio.skills[3]);

	$("#skills").append(formattedSkill);

}

function displayWork() {
for (job in work.jobs) 
{
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

	var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedworkEmployerTitle = formattedEmployer + formattedworkTitle ;

	$(".work-entry:last").append(formattedworkEmployerTitle);


	var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
	$(".work-entry:last").append(formattedDate);

	var formattedDescript = HTMLprojectDescription.replace("%data%", work.jobs[job].description);

	$(".work-entry:last").append(formattedDescript);
	
 }

}

displayWork();

function inName(name) {
	nameArray = name.slice(" ");
	
	nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
	nameArray[1]= nameArray[1].toUpperCase();
	return nameArray[0] + " " + nameArray[1];
}

$("#main").append(internationalizeButton);


projects.display = function () 
{
	for ( p in projects.projects) 
	{
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[p].dates);				
		$(".project-entry:last").append(formattedDate);

		var formattedDescript = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
		$(".project-entry:last").append(formattedDescript);

		// if (projects.projects[p].image.length > 0)
		// {
		// 	for (image in projects.projects[p].images) 
		// 	{
		// 		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[p].images[image]);
		// 		$("#project-entry:last").append(formattedImage);

		// 	}
		// }

	}	
}

projects.display();


$("#mapDiv").append(googleMap);











