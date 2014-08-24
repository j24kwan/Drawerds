

$(document).ready(function(){  
	var closed =true;  
	$("#drawer-trigger").click(function(){
		if(closed){
			$( "#current-werd" ).animate({"margin-top": "-70px"}, 500, "linear"); 
			$( "#drawer-trigger").animate({"margin-top": "-70px"}, 500, "linear");
			$( "#current-werd" ).html( "<div class='name'><b>"+ getWord() +"</b></div>" ); 
			closed=false;
		}else{
			$( "#current-werd" ).animate({"margin-top": "-100px"}, 500, "linear"); 
			$( "#drawer-trigger").animate({"margin-top": "-100px"}, 500, "linear");
			$( "#current-werd" ).html( "" );
			closed=true;			
		}
	})	  
}); 

var seenWords=0;
function getWord(){
	var random = Math.floor(Math.random()*wordList.length);
	while(wordList[random].count==1){
		random = Math.floor(Math.random()*wordList.length);
	}
	var word = wordList[random].word;
	wordList[random].count = 1;
	seenWords++;
	if(seenWords==wordList.length){
		for(var i= 0; i<wordList.length; i++){
			wordList[i].count=0;
		}
		seenWords=0;
	}
	return word;
}

var wordList =[
	{word:"cat", count:0},
	{word:"cow", count:0},
	{word:"dog", count:0},
	{word:"rat", count:0},
	{word:"pig", count:0},
	{word:"chicken", count:0},
	{word:"wedding", count:0},
	{word:"ring", count:0},
	{word:"telephone", count:0},
	{word:"remote control", count:0},
	{word:"cereal", count:0},
	{word:"egg", count:0},
	{word:"avocado", count:0},
	{word:"paint", count:0},
	{word:"lime", count:0},
	{word:"clock", count:0},
	{word:"shoe", count:0},
	{word:"shower", count:0},
	{word:"card", count:0},
	{word:"pill", count:0},
	{word:"valley", count:0},
	{word:"trip", count:0},
	{word:"vote", count:0},
	{word:"cream", count:0},
	{word:"lawnmower", count:0},
	{word:"grandparents", count:0},
	{word:"sing", count:0},
	{word:"dance", count:0},
	{word:"tree", count:0},
	{word:"flower", count:0},
	{word:"mug", count:0},
	{word:"restaurant", count:0},
	{word:"hotel", count:0},
	{word:"hospital", count:0}
]