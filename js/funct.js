/**
 * @author jcfuseli
 */

$(function(){
				$('#sortlist').jqmts({
					useNativeMenu: false,
					showCounts: false,
					attributes: {placeholder: "Sort by...", firstname: 'Name(A-Z)', lastname: 'Wait time(Low-High)' }
				});
});	

			
	


//assuming this comes from an ajax call
var info = [{
    
        "img": '"img/nimbeaux.jpg"',
        "Name": "Nimbeaux's",
        "WaitTime": 5,
        "link":'infoPage.html',
        "isFav": 1,
        
     
}, {
    
    	"img": '"img/eddies.jpg"',
        "Name": "Eddie's BBQ",
        "WaitTime": 20,
        "link":'#',
        "isFav": 0,
        

}];

//pageinit event for first page
//triggers only once
//write all your on-load functions and event handlers pertaining to page1
$(document).on("pageinit", "#favpage", function () {


    //set up string for adding <li/>
    var li = "";
    //container for $li to be added
    $.each(info, function (i, name) {
        //add the <li> to "li" variable
        //note the use of += in the variable
        //meaning I'm adding to the existing data. not replacing it.
        //store index value in array as id of the <a> tag
       //li += '<li><a href="#" id="' + i + '" class="info-go">' + name.Name + '</a></li>';
       //li += '<li><a href="#" id="' + i + '" class= "info-go"><img src='+ name.img +'><h2 class ="rName">'+ name.Name +'</h2><h5 class="wait-time">'+ name.WaitTime+'</h5></a></li>';
       if(name.isFav === 1){ 
       		li += '<li data-sort-firstname= ' + name.Name + ' data-sort-lastname='+ name.WaitTime + '><a href="' + name.link + '"id = ' + i + '" class = "info-go"><img src='+ name.img +'><h2 class ="rName">'+ name.Name +'</h2><h5 class="wait-time">'+ name.WaitTime+'</h5></a></li>';
    	}
    });
    //append list to ul
    $(".listAdd").append(li).promise().done(function () {
        //wait for append to finish - thats why you use a promise()
        //done() will run after append is done
        //add the click event for the redirection to happen to #details-page
        $(this).on("click", ".info-go", function (e) {
            //e.preventDefault();
            //store the information in the next page's data
            //$("#details-page").data("info", info[this.id]);
            //change the page # to second page. 
            //Now the URL in the address bar will read index.html#details-page
            //where #details-page is the "id" of the second page
            //we're gonna redirect to that now using changePage() method
            //$.mobile.changePage("#details-page");
        });

        //refresh list to enhance its styling.
        $(this).listview("refresh");
    });
});

