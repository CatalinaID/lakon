
//responsive tabs
(function() {

	'use strict';

	var tabs = function(options) {
		var el = document.querySelector(options.el);
	    var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
	    var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
	    var activeIndex = 0;
	    var initCalled = false;

	    var init = function() {
	    	if (!initCalled) {
			    initCalled = true;
			    el.classList.remove('no-js');

			    for (var i = 0; i < tabNavigationLinks.length; i++) {
			      var link = tabNavigationLinks[i];
			      handleClick(link, i);
			    }
			}
	    };

	    var handleClick = function(link, index) {
	    	link.addEventListener('click', function(e) {
			    e.preventDefault();
			    goToTab(index);
			});
	    };

	    var goToTab = function(index) {
	    	if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
			    tabNavigationLinks[activeIndex].classList.remove('is-active');
			    tabNavigationLinks[index].classList.add('is-active');
			    tabContentContainers[activeIndex].classList.remove('is-active');
			    tabContentContainers[index].classList.add('is-active');
			    activeIndex = index;
			}
		};

	    return {
	      init: init,
	      goToTab: goToTab
	    };


	};

	window.tabs = tabs;
})();

//alchemy configuration
function startAlchemy() {
	var some_data = {
        "nodes" : [
			{
				"id" : 1,
				"name" : "Setya Novanto",
				root: true,
				"type" : "main"
			},
			{
				"id" : 3,
				"name" : "Maroef Sjamsoeddin",
				"type" : "tokoh"
			},
			{
				"id" : 4,
				"name" : "Kejaksaan Agung",
				"type" : "organisasi"
			}, 
			{
				"id" : 8,
				"name" : "HM Prasetyo",
				"type" : "main"
			}
		],
		"edges" : [
			{
				"source" : 1,
				"target" : 3,
				"keterangan" : "saksi kasus Setya Novanto",
				"type" : "event"
			}, 
			{
				"source" : 1,
				"target" : 4,
				"keterangan" : "penyelidikan",
				"type" : "event"
			},
			{
				"source" : 4,
				"target" : 3,
				"keterangan" : "pemanggilan dini hari",
				"type" : "jabatan"
			},
			{
				"source" : 4,
				"target" : 8,
				"keterangan" : "Jaksa Agung",
				"type" : "jabatan"
			}
		]
    };
    var config = {
    	dataSource : some_data,
        fixRootNodes : true,
        nodeTypes : {
        	"type": ["tokoh","organisasi","main"]
        },
        edgeTypes : {
        	"type" : ["event","jabatan","hubungan"]
        },
        nodeCaption : 'name',
        edgeCaption : 'keterangan',
        forcedLocked : false,
        nodeStyle : {
        	"tokoh" : {
        		"color" : "#ffff00",
        		"borderColor" : "#ffbf00",
        		"radius" : 15,
        		"borderWidth" : 3
        	},
        	"organisasi" : {
        		"radius" : 10,

        	},
        	"main" : {
        		"radius" : 20,
        		"color" : "#ff0000",
        		"borderColor" : "#cc0000"
        	}
        },
        edgeStyle : {
        	"all" : {
        		"width" : 7,
        		"opacity" : 0.5
        	},
        	"event" : {
        		"color" : "rgb(0, 204, 0)"
        	},
        	"jabatan" : {
        		"color" : "rgb(204, 0, 0)"
        	},
        	"hubungan" : {
        		"color" : "rgb(0, 153, 204)"
        	}
        },
        captionsToogle : true

    };
    alchemy = new Alchemy(config);
}