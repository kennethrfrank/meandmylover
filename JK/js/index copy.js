var arrSections = ['love', 'wisdom', 'passion'];
var arrIMG = ['JL', 'K', 'JK'];
var arrTitles = ['Jolee Speaks On...', 
	"When We Talk About Running", 
	"Working Hard Or Hardly Working?"];
var numbers = ['One', 'Two', 'Three'];
var months = ["March'17","April'17","May'17",
"June'17","July'17","Aug'17",
"September'17","October'17","November'17",
"December'17","January'17","February'17",];
var icons = ['hrt', 'wsm', 'psn'];
var backgrounds = ['#824E4E', '#4A5F70', '#7F825F' ];//D33762
var backgrounds0 = ['#D9CECE', '#CDD2D6', '#DADAD2' ];
var backgrounds1 = ['#A48786','#85919B','#A7A791'];
var numerical = ['0', '1','2'];
var generals = ['ABOUT', 'CONTACT', 'MEDIA'];
var socials= ['Instagram','Twitter','Facebook','Youtube'];
var carousels = ['Kennolee','Date Night Dos','Comfortablity','Packin\' a Mac', 'Eye Catching'];
var videos = [];
var contents = [];
var quotes = ['', '"Pain is Inevitable Suffering is Optional" - Haruki Murakami', ''];


var count = [];

$(function(){


	mainButtons();


	
	
	

});





function mainButtons(){
	//Logo
	logoButton();
	var id = "lwp";
	lwpButton(id);
	id = "navButtons";
	lwpButton(id);
	calButton();
	genButtons();


}


		function logoButton(){

			buildNav();
			buildBox();
			buildFooter();
			buildCarousel();
				

			/* INTRO ANIMATION Click function */
				var clix = 0;

				$('#logoButton').on('click', function(){
					var ndx = $(this).val();
					clix = clix + 1;
					mainAnime();
					console.log("Logo Button Clicks: " + clix);
					$('.genBut').css('color', 'initial');


				});


		}

		function lwpButton(x) {

			var clix = 0; 
			var ndx;
			



					$('#' + x).on('click', '.btn', function(button){

						 ndx = $(this).val();

							buildMeat(ndx, clix);
							lwpAnime();

							clix = clix + 1;
							console.log('id: '+ x + ' value: ' + ndx + ' LWPclicks: ' + clix);
							var darkBackground = backgrounds[ndx];
							var lightBackground = backgrounds0[ndx];

							var topLWP = numerical[ndx];
							$('#topLButtons'+topLWP).css('color', darkBackground);
							$('#cntnt').css('color', darkBackground);
							
							$('#titleBar').css('border-color', lightBackground);
							$('#sideBar').css('border', '2px solid ' + darkBackground);
							$('.but').css('border-bottom', '2px solid ' + darkBackground);
							

							$('#footer').css('color', darkBackground);
							$('.genBut').css('color', darkBackground);

							
							
							


							
					});

					$('#' + x).on('mouseenter', '.btn', function(button){
						ndx = $(this).val();
						console.log('Changing Color NDX = '+ ndx);
						var darkBackground = backgrounds[ndx];
						var lightBackground = backgrounds0[ndx];
						var LWP = numerical[ndx];
							$('#topLButtons'+LWP).css('color', darkBackground);
							$('#boxButtons'+LWP).css('background', lightBackground);


													
					});

					
					$('#' + x).on('mouseleave', '.btn', function(button){
						ndx = $(this).val();
						var darkBackground = backgrounds[ndx];
						var lightBackground = backgrounds0[ndx];
						var initialBackground = '#FAFAFA';
						var LWP = numerical[ndx];
						$('#topLButtons'+LWP).css('color', 'black');
						$('#boxButtons'+LWP).css('background', darkBackground);


							
					});


		}

		function calButton(){
			var calClick = 2;
			$('#meat').on('click', '.calButton', function(button){
				if ((calClick % 2) == 0){
					console.log("we in this bitch");
					$('#sideBar').slideDown(2000);
				}else if((calClick%2) == 1){
					console.log("we out this bitch");
					$('#sideBar').slideUp(2000);
				}
				calClick = calClick +1 ;
			});
		}
 
		function genButtons(){
			$('#nav').on('click', '.genBut', function(button){
				console.log("we in this bitch");
				var ndx = $(this).val();
				buildGen(ndx);
					$('#genPg').show();
					$('#meat').hide();
					$('#box').hide();
					$('#carousel').hide();	

			});

			$('#contactFormBtn').click(function(event){
				event.preventDefault();

			});
		}

		

function buildNav(){
	var string = "";

	for(var a = 0; a < generals.length; a++){
		string += "<button class ='genBut lwp' value = '"+a+"'>";
				string += ""+generals[a];
		string += "</button>";
	}
	$('#generalNavButtons').html(string);


	var string  = "";

	for (var i = 0; i < icons.length; i++){

		var bg = backgrounds0[i];
		string +=	'<button id="topLButtons'+i+'" value="'+i+'" class="btn lwp topI">';
		var buttonId = arrSections[i];
		buttonId = buttonId.toUpperCase(0);
		string +=	buttonId;
		
		string +=	'</button>';
	}
	$('#navButtons').html(string);
}

function buildCarousel(){
	var string = ' ';

		string += '<ol class="carousel-indicators">';


		string +='<li id="indicator_0" data-target="#carousel" data-slide-to="0" class="active" style = "border: 2px solid #fafafa; border-radius: 20px; height: 20px; width: 20px; background: black;"></li>';

	for (var i = 1; i<carousels.length; i++){
	
		string += '<li id="indicator_'+i+'" data-target="#carousel" data-slide-to="'+i+'" style = "border: 2px solid #fafafa; border-radius: 20px; height: 20px; width: 20px; background: black; "></li>';

		string += `<style>
			li#indicator_`+i+`{
				margin-right: 3px;
			}

			</style>`

	}

		string += '</ol>';

	$('#indicators').append(string);

	
	var string = ' ';

	string += `<div class="item active carouselLogo col-xs-12">
        		  <img id="galleryItem" src="./imgs/carousel/photo_0.jpg" alt="`+carousels[0]+`" style = "width: 100%; height: 480px">
         		 	<div class="carousel-caption" style = "border-bottom: 2px solid #fafafa">
           			 <div id ="caption">
           			 `+carousels[0]+`
           			 </div>
         			 </div>
         			 </div>`;

	

	for (var i = 1; i<carousels.length; i++){
		string += `<div class="item brow col-xs-12">
         			<img class = "galleryItem" src="./imgs/carousel/photo_`+i+`.jpg" alt="`+carousels[i]+`" style = "width: 100%; height: 470px">
          				<div class="carousel-caption" style = "border-bottom: 2px solid #fafafa ">
          					<div id ="caption">
           					 `+carousels[i]+`
           					</div>
          				</div>
        		</div>
        		`
		
	}
	$('#gPics').append(string);
}

function buildBox(){

	for(var i = 0; i < arrSections.length; i++){
        	var string = " ";
        
        // once we have a product design we like, "templatize" it here

        var image = arrIMG[i] || 'default';
 	
   	 string += '<div class ="col-xs-4">';
                
      
		string +=	 ' <div class = "row">';
		string +=	 '     <div id="luvWsmPsn">';
		string +=	 '        <div class = "col-xs-12">';

		var darkBackground = backgrounds[i];
		var lightBackground = backgrounds0[i];
		var lnBackground = backgrounds1[i];
		
		string +=`<style>
			#boxButtons`+i+`{ 
							background-color: `+darkBackground+`;
							border-radius: 0px; 
							opacity: 0.9; 
							position: relative;
							height: 86px; 
							width: 100%;
							top:0px;`;
							if(i == 0){
							string += 'left:3.5%;'; }
							if(i == 2){
							string += 'right:3.5%;'; 
							}
							if(i == 1){
							string += 'right:3.5%;'; 
							string += 'width:107.25%;'; 

							}

							
		string +='}</style>';

			string +=	 '          <button value = "'+ i +'" id = "boxButtons'+i+'" class = "btn lwp '+ arrSections[i]+'">';
			string +=	 '                <img class="columnTitleImg" src = "./badges/'+arrSections[i]+'.png">';

							string +=`<style>
									#ln`+i+`{ 
													background-color: `+lnBackground+`;
													opacity: 1.0;
													position: relative; 
													width: 99%; 
													top: 0px;
													height: 7px;
													`;

												if(i == 0){
												string += 'top:17px;'; 
												string += 'left :0.5%;'; }
												if(i == 1){
												string += 'top:2px;'; 
												string += 'left :0.5%;'; }
												if(i == 2){
												string += 'top:9px;';
												string += 'right :-0.5%;'; }
							
							string +='}</style>';

										string +=	 ' <div class = "row">';
										string +=	 '     <div id="ln'+i+'">';
										string +=	 '        <div class = "col-xs-12">';

										string +=	'			</div>';
										string +=	'		</div>';
										string +=	' </div>';

			string +=	 '         </button>';




		string +=	'		</div>';
		string +=	'	</div>';
		string +=	' </div>';






		var articleBox = arrSections[i];

		string +=`<style>
			#`+articleBox+`{ 
							background-color: `+lightBackground+`; 
							height: 550px;						
							position: relative;
							top: 6px;
							width: 100%;
							`;
							if(i == 0){
							string += 'left:3.5%;'; }
							if(i == 2){
							string += 'right:3.5%;'; 
							}
							if(i == 1){
							string += 'right:3.5%;'; 
							string += 'width:107.25%;'; 

							}
							
		string +='}</style>';

    

		string +=   '<div id = "'+arrSections[i]+'" class = "articleContainer">';

		string +=   '           <div class = "row">';
		string +=   '           <div class = "col-xs-12">';
		string += '<h2 style = "margin-top: 25px; font-size: 30px; font-weight: bold; color: black">';
		string +=   arrTitles[i];
		string += '</h2>';

		var heights = ['175','185','175'];
		var height = heights[i];
	        string +=   '<iframe style="margin-top:20px; width: 92%; height: '+height+'px" src="https://www.youtube.com/embed/cN1mAgI48wI" frameborder="0" allowfullscreen></iframe>';

	        string += '<h2 style = "margin-left: 6%; text-align: left; font-size: 20px; text-indent: 30px; width: 85%">';
	        string += 'Any man who knows a thing knows he knows not a damn thing at all.';
	        string += 'Although I\'d be the first to admit that I feel as if I know a lot';
	        string += 'which makes knowing and unknowing that much more or less terrifying';
	        string += '</h2>';

		string +=   '              </div>';
		string +=   '          	 </div>';


			

		string +=   '      <div class = "row">';
		string +=   '        <div class = "col-xs-10 col-xs-offset-1">';

		string +=   '        </div>';
		string +=   '    </div>';


		string +='</div>';

		string +='</div>';
    	
    

       		 $('#lwp').append(string);

        //Set the cart counter to 0 for that this index
      			  count.push(0);
  }
}


function buildMeat(ndx, clix){
		console.log(ndx);

	
		destination = arrSections[ndx];

		

			destination = destination.toUpperCase();
		var string = '';

		// TITLE BAR 
		string += `<style>
			.pgDestination`+ndx+`{
				font-family: 'Sacramento', serif;
				font-size: 70px;
				font-weight: bold;
				position: absolute;
				bottom: 15px;
				`;

				if (ndx == 0){
				string +=`
					left: 26.5%;`
				}
				if (ndx == 1){
				string +=`
					left: 15%;`
				}
				if (ndx == 2){
				string +=`
					left: 15%;`
				}
		string += `</style>`;
			string += '<h1 class = "pgDestination'+ndx+'">';
			string +=  destination;
			string += '  </h1>';
			$('#titleBar').html(string);
			//TITLES 

			destination = arrTitles[ndx];
					var string = '';

				string += destination ;
						$('#titles').html(string);
				


		//Cal
		var string = '';

			string += `<button class="calButton">
                            <img src="./badges/cal.png" class ="calendarImg">
                        </button>`;

                 $('#calendarButton').html(string);

		// MEDIA 
			/*destination = arrIMG[ndx];
			var string = '';
			string += '<img id = "secImg" src ="./imgs/'+ destination +'.png"> ' ;
					$('#media').html(string);
					$('#secImg').addClass('second');*/

		//INFO 
			destination = numbers[ndx];
				var string = '';		
				string += destination + ' of these days we are going to post a bunch ';
				string += ' of stuff of this vernacular. '; 
				string += destination + ' of these days this stuff is going to be dope. ';
				string += destination +' of these days I\'m gunna ';
				string += 'ski down a mountain. ';
				string += destination +' of these I\'m gunna ';
				string +=  'fix dis button. ' ;

			$('#info').html(string); 




			destination = quotes[ndx];
				var string = '';	
							
				string += destination;

			$('#quote').html(string); 

		//SIDEBAR

		var string = '';

		string += '<div id="calendar">';

			for(var i = 0; i < months.length; i++){
						
				 string += ' <div class = "row">';
				  string +=  ' <div class = "col-xs-12">';
                    

            string +=  '     	<button id ="calBut'+i+'" class = "but" >';
            			destination = months[i];
            string += destination;			
            string +=  '  		</button>';


            string +=  ' 		</div>';
            string +=  ' 	</div>';

             }

            string +=  '  </div>';
             $('#sideBar').html(string);    
}

function buildGen(ndx){
	var string = '';
	var destination = generals[ndx];

	string += destination;

	$('.pgDestination3').html(string);

	
	if(ndx == 0){
		var string = '';
		string += `

				<div class = "row">
					<div class = "col-xs-5">
						<div class = "statements">
							<h1 class = "loveStatement" style="color: #824E4E">
					“Falling in love is kind of like a form of socially acceptable insanity.” - Spike Jonze
							</h1>
							<h1 class = "wisdomStatement" style="color: #4A5F70">
				“Knowing yourself is the beginning of all wisdom.” ― Aristotle
							
							</h1>
							<h1 class = "passionStatement" style="color: #7F825F">
		<p>“Passion has little to do with 
euphoria and everything to do with patience. 
It is not about feeling good. It is about endurance. 
Like patience, passion comes from the same Latin root: pati. 
It does not mean to flow with exuberance. It means to suffer.” 
 ― Mark Z. Danielewski</p>
							</h1>
						</div>
					</div>
					<div class = "col-xs-7">
						<div class ="aboutImg">
							<img id ="aboutImg" src="./imgs/default.png">
						</div>
					</div>
				</div>`;

                

	}
	if(ndx == 1){
		var string = '';

string += `<div class = "row">
                <!-- Form-->
                    <div class = "col-xs-6">
                    <form>
                        <div class = "row">
                            <div class = "col-xs-12">
                                <div class = "name">
                                    Name: <input type ="text" name="name" style="width: 60%">
                                </div>
                            </div>
                        </div>
                        <div class = "row">
                            <div class = "col-xs-12">
                                <div class = "adressee">
                                Addressee(s): <select class = "adresseeSlct"> 
                                            <option id="jAndK" value = "0">Jolee &amp; Kenny </option>
                                            <option id="J" value = "1"> Jolee </option>
                                            <option id="K" value = "2"> Kenny </option>
                                    </select>
                                    <!-- DROPDOWN K/J-->
                                </div>
                            </div>
                        </div>
                        <div class = "row">
                            <div class = "col-xs-12">
                                <div class = "submission">

                                    <!-- 300 word minimum-->
                                    Submission: <input type="text" name ="submission" style= "height: 200px; text-align: left; width: 90%">
                                </div>
                            </div>
                        </div>
                        <div class = "row">
                            <div class = "col-xs-12">
                             <div class ="optional">
                             Optional Information: 

                                <select class = "optionalSlct">
                                    <option id ="question" value="0">Where are you from?</option> 
                                <!-- DROPDOWN Optional-->
                                </select>
                            </div>
                            </div>
                        </div>
                        <div class = "row">
                            <div class = "col-xs-3 col-xs-offset-8">
                                <button id = "contactFormBtn" style="background: #fafafa; width: 100%;">
                                        Submit
                                </button>
                            </div>
                        </div>

                        </form>
                    </div>
                <!-- Links-->
                    <div class = "col-xs-6">
                        <div class ="row">
                            <div class = "col-xs-6 border genSocials">
                            Insta
                            </div>
                             <div class = "col-xs-6 border genSocials">
                             Youtube
                            </div>
                        </div>
                        <div class ="row">
                            <div class = "col-xs-6 border genSocials">
                            Facebook
                            </div>
                             <div class = "col-xs-6 border genSocials">
                             Twitter
                            </div>
                        </div>
                    </div>

                </div>`; 
		
		console.log("building" + ndx);
	}
	if(ndx == 2){
		var string = '';

		string += `<div class = "row">
                    <div class ="col-xs-6 border" style = "height: 430px">
                        <div class= "row">
                            <div class = "col-xs-12 border" style = "height: 350px" >

                            </div>
                        </div>
                        <div class= "row">
                            <div class = "col-xs-10 col-xs-offset-1" style="font-size: 50px" >
                                    Videos
                            </div>
                        </div>
                    </div>
                    <div class ="col-xs-5 col-xs-offset-1 border" style = "height: 430px">
                        <div class= "row">
                            <div class = "col-xs-12 border" style = "height: 350px">
                            
                            </div>
                        </div>
                        <div class= "row">
                            <div class = "col-xs-10 col-xs-offset-1" style="font-size: 50px">
                            Photos
                            </div>
                        </div>
                    </div>
                </div>`;
                console.log("building" + ndx);

		
	}
		$('#genCntnt').html(string);

}

function buildFooter(){
	var string = " "
	 string +=	'<div class = "row">';


     		string +=	'          <div class = "col-xs-6" style="font-weight: bold; font-size: 20px; margin-top: 15px">';
  			string += '&copy; Jolee Maupin &amp; Kenneth Frank';
			string +=	'               </div>';

		string +=	'               <div class = "col-xs-6">';
		for (var a = 0; a < socials.length; a++){
			var soc = socials[a];
		string +=	'               <button class = "footR pull-right" style ="font-weight: bold; font-size: 20px;">';
		/*string +=	'       <img id = "socialMediaButtons" src = "./badges/footer/'+soc+'.png">';*/
			string +=	soc;
		string +=	'</button> ';}

		string +=	'  </div>';
		string +=	' </div>';

		$('#footer').html(string);

}


function mainAnime(){

	
		//$('#logoContainer').css('height', '500px');

		$('#nav').slideDown(3000);
		

		
			$('#logoButton').animate({
				width: '24%',
				height: '35%',
				left: '38%',
				top: '-40px'
				},2500);

			$('#logoIMG').animate({
				height: '240px',
				width: '110%',
				left: '-5%'
															
						},2500);



			
			//$('#logoIMG').css('left', '174%');
			//$('#logoIMG').css('right', '250%');
			//$('#logoIMG').css('height', '250px');
			//$('#logoIMG').css('width', '300px');

		//$('#logoIMG').slideUp(3000);

		
		$('#carousel').fadeIn(3000);
		$('#box').slideDown(3000);
		$('#lwp').slideDown(3000);

		$('#footer').slideDown(3000);



		$('#meat').slideUp(3000);
		$('.calButton').slideUp(3000);
		$('#genPg').slideUp(3000);
}

	
function lwpAnime(){

		$('.calButton').slideDown(3000);
		$('#carousel').slideUp(3000);
		$('#meat').slideDown(2000);
		$('#lwp').slideUp(1000);
		$('#genPg').slideUp(3000);
}

function scrollAnime(){

	$('#errythang').scroll(function() {
		var y = $(this).scrollTop();
    if (y == 80) { // this refers to window
        console.log("You've scrolled 100 pixels.");

        		$('#logoIMG').animate({
				width: '150px',
				height: '150px',
				left: '38%',
				top: '-25px'
				},2500);
    }
 });
}










