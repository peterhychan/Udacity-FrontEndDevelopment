var quotesArray=[
	'I walk slowly, but I never walk backward --Abraham Lincoln',
	'Life is the sum of all your choices -- Albert Camus',
	'The faster you go, the shorter you are --Albert Einstein',
	'Half a truth is often a great lie -- Benjamin Franklin',
	'When you are through changing, you are trough --Bruce Barton',
	'If you stop struggling, then you stop life --Huey Newton',
	'Life is too important to be taken seriously -- Oscar Wilde',
	'Character develops itself in the stream of life -- Goethe',
	'Work is a necessary evil to be avoided -- Mark Twain',
	'Do or Do Not. There is no Try -- Yoda',
	'If you can dream it, you can do it --Walt Disney'
]

function quotesGenerate(){
	var randomNum = Math.floor(Math.random()*quotesArray.length);
	document.getElementById("quotes").innerHTML = '"'+quotesArray[randomNum]+'"' ;
}