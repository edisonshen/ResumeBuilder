

var bio = {
	"name" : "Feng Shen",
	"role" : "Web Developer",
	"contacts" : 
	{
	 "Email" : "Feng Shen",
	 "Mobile" : "505-814-9685",
	 "Github" : "https://github.com/edisonshen",
	 "location" : ["Albuquerque"],
	 "Twitter" : "@edisonshen"
	},
	"WelcomeMessage" : "Hello World",
	"skills" : ["Java" , "Python", "Javascrpit", "C", "Matlab", "HTML5", "CSS3","jQuery", "Node.js", "Ruby on rails"],
	"bioPic" : "images/photo.jpg"
};


var education = {
	"schools" : [
		{
			"name" : "Anhui University",
			"city" : "China",
			"degree" : "Bachelor",
			"majors" : "optical information and technology",
			"date" : "2008-2012",
			"url" : "http://ahu.edu.cn"
		},
		{
			"name" : "University of New Mexico",
			"city" : "Albuquerque",
			"degree" : "Master",
			"majors" : "Optical Science and Engineering",
			"date" : "2012-2014",
			"url" : "http://www.unm.edu"
		},
		{
			"name" : "University of New Mexico",
			"city" : "Albuquerque",
			"degree" : "Master",
			"majors" : "Computer Science",
			"date" : "2014-2016",
			"url" : "http://cs.unm.edu/~edisonshen"
		}
	],
	"onlineCourses" : [
	{
		"title" : "Front End Nano Degree",
		"school" : "Udacty",
		"date" : "Sep,2015 -- Present",
		"url" : "www.Udacty.com"
	}
	]
};

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
			"description": "Co-developed a dynamic, secure Web site from scratch. Launched visually appealing, user-friendly web pages with wordpress"
		}
	]

};
var projects = {
	"projects" : [
		{
			"title" : "WEB APPLICATION FOR ACADEMIC PROGRAM REVIEW (APR) OFFICE OF UNM",
			"dates" : "2015",
			"description" : " Design and development of web pages for apr office of unm based on Ruby on Rails.Developed the database model and authorization control (primarily using mysql and CAS system.)",
			"images" : ["images/apr.png"]
		},
		{
			"title" : "Exploring the relationship between topological changes in arena and their effect on foraging efficiency",
			"dates" : "2015",
			"description" : "This project simulated the behaviours ants when they hunting food. We explored the relationship between topological changes in arena and their effect on foraging efficiency. We varied the number of obstacles placed in the arena and observed its effect on efficiency of collection.",
			"images" : ["images/cs523.png"]
		}
	]

};
function displayBio()
{
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedName, formattedRole);



	// $("#main").append(HTMLcontactGeneric);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.Mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.Email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.Twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.Github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.locations);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);



	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPic);


	if (bio.skills.length > 0 )
	{
		$("#header").append(HTMLskillsStart);

		for (var skill in bio.skills)
			{
				var formattedSkill = HTMLskills.replace("%data%" , bio.skills[skill]);
				$("#skills").append(formattedSkill);
		
			}
	}
}

function displayWork() {
for (var job in work.jobs) 
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




projects.display = function () 
{
	for ( var p in projects.projects) 
	{
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[p].dates);				
		$(".project-entry:last").append(formattedDate);

		var formattedDescript = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
		$(".project-entry:last").append(formattedDescript);

		if (projects.projects[p].images.length > 0)
		{
			for (var image in projects.projects[p].images) 
			{
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[p].images[image]);
				$(".project-entry:last").append(formattedImage);

			}
		}

	}	
};

education.display = function (){
	for (var school in education.schools)
	{
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);		
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].date);
		
		$(".education-entry:last").append(formattedSchoolName, formattedSchoolDegree, formattedSchoolDate,formattedSchoolCity, formattedSchoolMajor);

	}
	for (var classes in education.onlineCourses) 
	{
		
		var formattedOnlineName = HTMLonlineTitle.replace("%data%", education.onlineCourses[classes].title);

		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[classes].school);				
		var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[classes].date);

		$(".education-entry:last").append(HTMLonlineClasses,formattedOnlineName, formattedOnlineSchool, formattedOnlineDate);
	}	
};

projects.display();
displayWork();
displayBio();
education.display();

$("#mapDiv").append(googleMap);











