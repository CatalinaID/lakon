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

//starting alchemy
function startAlchemy() {
	var params = window.location.search.substr(1);
	var result = {};
	params.split("&").forEach(function(part) {
		var item = part.split("=");
		result[item[0]] = decodeURIComponent(item[1]);
	});
	if (result.x == 1) {
		var response = $.ajax({
			type : 'GET',
			url : "http://localhost:8080/lakon/RelasiEntitas/buildGraph",
			data : ({id: result.id, type: result.type}),
			dataType : "json",
			success : function(data) {
				return JSON.stringify(data);
			}
		});
		response.done(function(result) {
			var some_data = result;
			var config = getConfig(some_data);
			alchemy = new Alchemy(config);
		});
	} else if (result.x == 2) {
		var response = $.ajax({
			type : 'GET',
			url : "http://localhost:8080/lakon/RelasiEntitas/buildGraph2Ent",
			data : ({id1: result.id1, type1: result.type1, id2 : result.id2, type2 : result.type2}),
			dataType : "json",
			success : function(data) {
				return JSON.stringify(data);
			}
		});
		response.done(function(result) {
			var some_data = result;
			var config = getConfig(some_data);
			alchemy = new Alchemy(config);
		});
	}
}

function getConfig(some_data) {
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
    return config;
}
//autocomplete
var id, id1, id2, type, type1, type2;
$('.form-control').click(function() {
	if (this.id == "namaSatu") {
       $("#namaSatu").autocomplete({
        	source: function(request, response) {
        		$.ajax({
                    url : "http://localhost:8080/lakon/Alias/searchByAlias",
                    data : ({alias : request.term}),
        			dataType: "json",
        			jsonp : false,
                    success: function(data) {
                    	response($.map(data, function(item) {
				            return {
				               label: item.nama,
				               id: item.id,
				               type : item.type
				           	}
                    	}));
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                    	alert(jqXHR);
                    }
                });
            },
            minLength : 1,
            select : function (event, ui) {
            	id = ui.item.id;
            	type = ui.item.type;
            	$("namaSatu").val(ui.item.label);
                console.log("selected : " + ui.item.label + " " + ui.item.id);
            }
        });
    } else if (this.id == "namaPertama") {
        console.log("klik 2-1");
        $("#namaPertama").autocomplete({
            source: function(request, response) {
        		$.ajax({
                    url : "http://localhost:8080/lakon/Alias/searchByAlias",
                    data : ({alias : request.term}),
        			dataType: "json",
        			jsonp : false,
                    success: function(data) {
                    	response($.map(data, function(item) {
				            return {
				               label: item.nama,
				               id: item.id,
				               type : item.type
				           	}
                    	}));
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                    	alert(jqXHR);
                    }
                });
            },
            minLength : 1,
            select : function (event, ui) {
            	id1 = ui.item.id;
            	type1 = ui.item.type;
            	$("namaPertama").val(ui.item.label);
                console.log("selected : " + ui.item.label + " " + ui.item.id);
            }
        });
    } else if (this.id == "namaKedua") {
        console.log("klik 2-2");
        $("#namaKedua").autocomplete({
            source: function(request, response) {
        		$.ajax({
                    url : "http://localhost:8080/lakon/Alias/searchByAlias",
                    data : ({alias : request.term}),
        			dataType: "json",
        			jsonp : false,
                    success: function(data) {
                    	response($.map(data, function(item) {
				            return {
				               label: item.nama,
				               id: item.id,
				               type : item.type
				           	}
                    	}));
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                    	alert(jqXHR);
                    }
                });
            },
            minLength : 1,
            select : function (event, ui) {
            	id2 = ui.item.id;
            	type2 = ui.item.type;
            	$("namaSatu").val(ui.item.label);
                console.log("selected : " + ui.item.label + " " + ui.item.id);
            }
        });
    }
});
