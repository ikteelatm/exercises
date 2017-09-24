 //angular module
var myApp = angular.module('MyApp', []);

// my service
myApp.service('ContactService', function() {
	this.contacts = [
	    {
	        id:1,
	        name: "Friends",
	        type: "Group",
	        contacts: [
	            {id:2, name: "Udi", type: "Contact"},
	            {id:3, name: "Tommy", type: "Contact"},
	            {
	                id:6,
	                name: "Old Friends",
	                type: "Group",
	                contacts: [
	                    {id:7, name: "Itay", type: "Contact"},
	                ]
	            },
	        ]
	    },
	    {
	        id:4,
	        name: "Family",
	        type: "Group",
	        contacts: [
	            {id:5, name: "Roni", type: "Contact"},
	        ]
	    },
	    {id: 8, name: "Ori", type: "Contact"},
		];
    

	    this.getContacts = function () {
	    	return this.contacts;
	    }

});
  
myApp.controller('myController', function(ContactService) {
	this.contacts = ContactService.getContacts();
	for (contactElem in this.contacts) {
		contactElem.isVisible = false;
	}

});
	
myApp.directive("contactDir", function() {
    return {
    	scope: {contact: "="},
        template : '<div>'+
				    	  '<div ng-click="contact.isVisible = !contact.isVisible" class="highlight" >{{contact.name}}</div>'+
					      '<ul ng-show="contact.isVisible">'+
					        '<li ng-repeat="iContact in contact.contacts track by iContact.id"><contact-dir contact="iContact"></contact-dir></li>'+
					      '</ul>'+
				  '</div>',
    	controller: function($scope) {
			var addclass = 'color';
			var $cols = $('.highlight').click(function(e) {
			    $cols.removeClass(addclass);
			    $(this).addClass(addclass);
});
    	}
    };
});


  