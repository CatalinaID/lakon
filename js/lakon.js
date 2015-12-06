
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
				"name" : "Susilo Bambang Yudhoyono",
				root: true,
				"type" : "main"
			},
			{
				"id" : 2,
				"name" : "Demokrat",
				"type" : "organisasi"
			}, 
			{
				"id" : 3,
				"name" : "Khoirunisa Afifah",
				"type" : "tokoh"
			},
			{
				"id" : 4,
				"name" : "Hatta Rajasa",
				"type" : "tokoh"
			}, 
			{
				"id" : 5,
				"name" : "Edhie Baskoro",
				"type" : "tokoh"
			}
		],
		"edges" : [
			{
				"source" : 1,
				"target" : 3,
				"keterangan" : "makan malam bersama",
				"type" : "event"
			},
			{
				"source" : 1,
				"target" : 2,
				"keterangan" : "ketua dewan pembina partai",
				"type" : "jabatan"
			},
			{
				"source" : 1,
				"target" : 4,
				"keterangan" : "besan",
				"type" : "hubungan"
			}, 
			{
				"source" : 1,
				"target" : 5,
				"keterangan" : "anak",
				"type" : "hubungan"
			},
			{
				"source" : 2,
				"target" : 5,
				"keterangan" : "anggota",
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

//Form submit
// $('#buttonOne').click(function(event){
//     var query = $('#namaSatu').val();
//     console.log(query);

//     location.href='result.php';
//     var result = getData(query);
//     console.log($('#temp').text());
//     console.log(query);
// });

// function getData(query) {
// 	var url = "http://194.135.81.36:8080/lakon-0.1/relasi/list";
//     $.ajax({
//         type: 'GET',
//         url: "http://194.135.81.36:8080/lakon-0.1/relasi/list",
//         dataType: 'json',
//         success: function(data) {
//             for (var i = 0; i < data.length; i++) {
//                 console.log(data[i]);
//             }
//             return data;
//         }
//     });
// }

// $('.form-control').click(function() {
//     if (this.id == "namaSatu") {
//         console.log("klik 1");
//         $("#namaSatu").autocomplete({
//         	source: function(request, response) {
//         		console.log("get");
//         		$.ajax({
//                     url : "http://194.135.81.36:8080/lakon-0.1/Alias/SearchByAlias?alias=" + request.term,
//         			dataType: "json",
//                     success: function(data) {
//                         console.log("sukses");
//                         response($.map(data.language, function(item) {
//                         	return {
//                                 label : item.value,
//                                 value : item.value
//                             }
//                         }));
//                     },
//                     error: function(jqXHR, textStatus, errorThrown) {
//                     	alert(jqXHR);
//                     }
//                 });
//             },
//             minLength : 1,
//             select : function (event, ui) {
//                 console.log("selected : " + ui.item.label);
//             }
//         });
//     } else if (this.id == "namaPertama") {
//         console.log("klik 2-1");
//         $("#namaPertama").autocomplete({
//             source: function(request, response) {
//                 $.ajax({
//                     url : "http://194.135.81.36:8080/lakon-0.1/Alias/SearchByAlias?alias=" + request.term,
//                     dataType: "json",
//                     success: function(data) {
//                         console.log("sukses");
//                         response($.map(data.language, function(item) {
//                             return {
//                                 label : item.value,
//                                 value : item.value
//                             }
//                         }));
//                     }
//                 });
//             },
//             minLength : 1,
//             select : function (event, ui) {
//                 console.log("selected : " + ui.item.label);
//             }
//         });
//     } else if (this.id == "namaKedua") {
//         console.log("klik 2-2");
//         $("#namaKedua").autocomplete({
//             source: function(request, response) {
//                 $.ajax({
//                     // url : "https://raw.githubusercontent.com/afik/dummy/master/aliasdummy.txt",
//                     dataType: "json",
//                     success: function(data) {
//                         console.log("sukses");
//                         response($.map(data.language, function(item) {
//                             return {
//                                 label : item.value,
//                                 value : item.value
//                             }
//                         }));
//                     }
//                 });
//             },
//             minLength : 1,
//             select : function (event, ui) {
//                 console.log("selected : " + ui.item.label);
//             }
//         });
//     }
// });
