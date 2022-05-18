
// select to select
function findPlayerSelect(selection){
  var players= document.getElementById('players');
	var currentValue = selection.value;
  console.log(players)
  console.log(currentValue)


	var Hawks = ["De'Andre Hunter", 'John Collins', 'Clint Capela', 'Kevin Huerter',
    'Trae Young', 'Bogdan Bogdanovic', 'Danilo Gallinari',
    'Lou Williams', 'Onyeka Okongwu', 'Delon Wright', 'Jalen Johnson',
    'Timothe Luwawu-Cabarrot', 'Gorgui Dieng', 'Kevin Knox II',
    'Skylar Mays', 'Sharife Cooper', 'Cam Reddish']
	var Celtics= ['Jayson Tatum', 'Al Horford', 'Robert Williams III',
    'Jaylen Brown', 'Marcus Smart', 'Grant Williams', 'Derrick White',
    'Daniel Theis', 'Payton Pritchard', 'Sam Hauser', 'Nik Stauskas',
    'Malik Fitts', 'Kelan Martin', 'Luke Kornet', 'Aaron Nesmith',
    'Brodric Thomas', 'Josh Richardson', 'Dennis Schroder',
    'Enes Freedom', 'Romeo Langford', 'Bruno Fernando',
    'Juancho Hernangomez', 'Jabari Parker']
    var Nets= ['Kevin Durant', 'Bruce Brown', 'Andre Drummond', 'Seth Curry',
    'Kyrie Irving', 'Patty Mills', 'Goran Dragic', 'Nic Claxton',
    'James Johnson', 'Cam Thomas', 'Kessler Edwards',
    'LaMarcus Aldridge', 'Blake Griffin', 'David Duke Jr.',
    "Day'Ron Sharpe", 'Jevon Carter', "DeAndre' Bembry",
    'James Harden', 'Paul Millsap']
    var Hornets= ['Miles Bridges', 'P.J. Washington', 'Mason Plumlee',
    'Terry Rozier', 'LaMelo Ball', 'Montrezl Harrell', 'Cody Martin',
    'Kelly Oubre Jr.', 'Jalen McDaniels', 'Isaiah Thomas',
    'Nick Richards', 'JT Thor', 'Kai Jones', 'James Bouknight',
    'Ish Smith', 'Gordon Hayward', 'Vernon Carey Jr.']
    var Bulls= ['Javonte Green', 'DeMar DeRozan', 'Nikola Vucevic', 'Coby White',
    'Ayo Dosunmu', 'Alex Caruso', 'Troy Brown Jr.',
    'Derrick Jones Jr.', 'Tristan Thompson', 'Zach LaVine',
    'Tony Bradley', 'Matt Thomas', 'Malcolm Hill', 'Tyler Cook',
    'Alfonzo McKinnie', 'Marko Simonovic', 'Lonzo Ball',
    'Devon Dotson', 'Jordan Bell']
    var Cavaliers= ['Dean Wade', 'Kevin Love', 'Evan Mobley', 'Isaac Okoro',
    'Darius Garland', 'Lamar Stevens', 'Cedi Osman', 'Rajon Rondo',
    'Ed Davis', 'Brandon Goodwin', 'Lauri Markkanen',
    'RJ Nembhard Jr.', 'Moses Brown', 'Jarrett Allen', 'Tim Frazier',
    'Dylan Windler', 'Caris LeVert', 'Kevin Pangos']
    var Mavericks= ['Reggie Bullock', 'Josh Green', 'Dwight Powell',
    'Spencer Dinwiddie', 'Luka Doncic', 'Davis Bertans', 'Maxi Kleber',
    'Sterling Brown', 'Trey Burke', 'Boban Marjanovic',
    'Dorian Finney-Smith', 'Jalen Brunson', 'Frank Ntilikina',
    'Marquese Chriss', 'Theo Pinson', 'Moses Brown',
    'Kristaps Porzingis', 'Tim Hardaway Jr.']
    var Nuggets= ['Davon Reed', 'Jeff Green', 'Nikola Jokic', 'Will Barton',
    'Monte Morris', 'Austin Rivers', 'Bones Hyland', 'JaMychal Green',
    'Bryn Forbes', 'DeMarcus Cousins', 'Markus Howard',
    'Facundo Campazzo', 'Aaron Gordon', 'Zeke Nnaji',
    'James Ennis III', 'Rayjon Tucker', 'Bol Bol', 'Vlatko Cancar',
    'Petr Cornelie', 'Carlik Jones']
    var Pistons= ['Saddiq Bey', 'Jerami Grant', 'Marvin Bagley III', 'Cory Joseph',
    'Cade Cunningham', 'Saben Lee', 'Kelly Olynyk', 'Isaiah Livers',
    'Jamorko Pickett', 'Luka Garza', 'Hamidou Diallo',
    'Rodney McGruder', 'Isaiah Stewart', 'Killian Hayes',
    'Frank Jackson', 'Trey Lyles', 'Josh Jackson', 'Cassius Stanley',
    'Justin Robinson', 'Micah Potter', 'Derrick Walton Jr.',
    'Jaysean Paige', 'Deividas Sirvydis']
    var Warriors= ['Jordan Poole', 'Andrew Wiggins', 'Kevon Looney', 'Klay Thompson',
    'Stephen Curry', 'Jonathan Kuminga', 'Moses Moody',
    'Nemanja Bjelica', 'Juan Toscano-Anderson', 'Damion Lee',
    'Chris Chiozza', 'Quinndary Weatherspoon', 'Otto Porter Jr.',
    'Gary Payton II', 'Andre Iguodala', 'Draymond Green']
    var Rockets= ['Eric Gordon', 'Kenyon Martin Jr.', 'Alperen Sengun',
    'Kevin Porter Jr.', 'Jalen Green', 'Garrison Mathews',
    'Dennis Schroder', 'Josh Christopher', 'David Nwaba',
    'Bruno Fernando', 'Daishen Nix', "Jae'Sean Tate", 'Trevelin Queen',
    'Christian Wood', 'Armoni Brooks', 'D.J. Augustin', 'Daniel Theis',
    'Usman Garuba']
    var Pacers= ['Buddy Hield', 'Oshae Brissett', 'Isaiah Jackson', 'Chris Duarte',
    'Tyrese Haliburton', 'Keifer Sykes', 'Goga Bitadze', 'Jalen Smith',
    'Duane Washington Jr.', 'Malcolm Brogdon', 'Terry Taylor',
    'Lance Stephenson', 'Tristan Thompson', 'Torrey Craig',
    'Justin Holiday', 'Domantas Sabonis', 'Caris LeVert',
    'Reggie Perry', 'Jeremy Lamb', 'Myles Turner', 'Justin Anderson',
    'Ahmad Caver', 'Nate Hinton']
    var Clippers= ['Nicolas Batum', 'Marcus Morris Sr.', 'Ivica Zubac', 'Amir Coffey',
    'Reggie Jackson', 'Isaiah Hartenstein', 'Terance Mann',
    'Luke Kennard', 'Brandon Boston Jr.', 'Semi Ojeleye',
    'Rodney Hood', 'Robert Covington', 'Norman Powell', 'Serge Ibaka',
    'Eric Bledsoe', 'Justise Winslow', 'Jay Scrubb', 'Xavier Moon',
    'Wenyen Gabriel', 'Keon Johnson', 'James Ennis III']
    var Lakers= ['Austin Reaves', 'Stanley Johnson', 'LeBron James', 'Malik Monk',
    'Russell Westbrook', 'Talen Horton-Tucker', 'Carmelo Anthony',
    'D.J. Augustin', 'Wenyen Gabriel', 'Avery Bradley',
    'Kent Bazemore', 'Dwight Howard', 'Wayne Ellington',
    'Trevor Ariza', 'DeAndre Jordan', 'Anthony Davis']
    var Grizzlies= ['Ziaire Williams', 'Jaren Jackson Jr.', 'Steven Adams',
    'Desmond Bane', 'Ja Morant', "De'Anthony Melton", 'Kyle Anderson',
    'John Konchar', 'Tyus Jones', 'Brandon Clarke', 'Killian Tillie',
    'Xavier Tillman', 'Jarrett Culver', 'Yves Pons', 'Santi Aldama',
    'Dakota Mathias', 'Dillon Brooks', 'Jon Teske', 'DaQuan Jeffries',
    'Xavier Sneed']
    var Heat= ['Duncan Robinson', 'P.J. Tucker', 'Bam Adebayo', 'Gabe Vincent',
    'Kyle Lowry', 'Tyler Herro', 'Max Strus', 'Markieff Morris',
    'Dewayne Dedmon', 'Haywood Highsmith', 'Jimmy Butler',
    'Victor Oladipo', 'Omer Yurtseven', 'Caleb Martin', 'Kyle Guy',
    'Javonte Smart', 'Chris Silva', 'Udonis Haslem', 'Nik Stauskas']
    var Bucks= ['Khris Middleton', 'Giannis Antetokounmpo', 'Bobby Portis',
    'Grayson Allen', 'Jrue Holiday', 'Jevon Carter', 'Wesley Matthews',
    'Serge Ibaka', 'Jordan Nwora', "DeAndre' Bembry",
    'Sandro Mamukelashvili', 'Thanasis Antetokounmpo',
    'Lindell Wigginton', 'Greg Monroe', 'Pat Connaughton',
    'Donte DiVincenzo', 'Rodney Hood', 'Semi Ojeleye', 'George Hill',
    'Langston Galloway', 'Javonte Smart', 'Luke Kornet', 'Jeff Dowtin',
    'DeMarcus Cousins', 'Javin DeLaurier']
    var Timberwolves= ['Anthony Edwards', 'Jaden McDaniels', 'Karl-Anthony Towns',
    'Malik Beasley', "D'Angelo Russell", 'Naz Reid',
    'Jordan McLaughlin', 'Jaylen Nowell', 'Taurean Prince',
    'Josh Okogie', 'Jarred Vanderbilt', 'Patrick Beverley',
    'Nathan Knight', 'Leandro Bolmaro', 'Jake Layman',
    'McKinley Wright IV']
    var Pelicans= ['Naji Marshall', 'Jaxson Hayes', 'Jonas Valanciunas',
    'Herbert Jones', "Devonte' Graham", 'Jose Alvarado',
    'Willy Hernangomez', 'Trey Murphy III', 'Tony Snell',
    'CJ McCollum', 'Alize Johnson', 'Gary Clark', 'Brandon Ingram',
    'Garrett Temple', 'Josh Hart', 'Nickeil Alexander-Walker',
    'Tomas Satoransky']
    var Knicks= ['RJ Barrett', 'Julius Randle', 'Mitchell Robinson',
    'Evan Fournier', 'Alec Burks', 'Taj Gibson', 'Jericho Sims',
    'Immanuel Quickley', 'Miles McBride', 'Ryan Arcidiacono',
    'Cam Reddish', 'Obi Toppin', 'Quentin Grimes', 'Kemba Walker',
    'Nerlens Noel', 'Kevin Knox II']
    var Thunder= ['Aaron Wiggins', 'Darius Bazley', 'Isaiah Roby',
    'Lindy Waters III', 'Shai Gilgeous-Alexander',
    'Aleksej Pokusevski', 'Vit Krejci', 'Theo Maledon', 'Olivier Sarr',
    'Tre Mann', 'Derrick Favors', 'Josh Giddey', 'Kenrich Williams',
    'Ty Jerome', 'Luguentz Dort', 'Mamadi Diakite', 'Mike Muscala',
    'Jeremiah Robinson-Earl', 'Paul Watson', 'Rob Edwards']
    var Magic= ['Franz Wagner', 'Wendell Carter Jr.', 'Mo Bamba', 'Cole Anthony',
    'Jalen Suggs', 'Markelle Fultz', 'Chuma Okeke', 'R.J. Hampton',
    'Terrence Ross', 'Moritz Wagner', 'Gary Harris',
    'Ignas Brazdeikis', 'Admiral Schofield', 'Robin Lopez',
    'Tim Frazier', 'Freddie Gillespie', 'Hassani Gravett']
    var Philly= ['Matisse Thybulle', 'Tobias Harris', 'Joel Embiid', 'Tyrese Maxey',
    'James Harden', 'Georges Niang', 'Shake Milton', 'DeAndre Jordan',
    'Furkan Korkmaz', 'Isaiah Joe', 'Paul Reed', 'Danny Green',
    'Paul Millsap', 'Willie Cauley-Stein', 'Charles Bassey',
    'Charlie Brown Jr.', 'Seth Curry', 'Andre Drummond',
    'Myles Powell', 'Braxton Key', 'Aaron Henry']
    var Suns= ['Mikal Bridges', 'Jae Crowder', 'Deandre Ayton', 'Devin Booker',
    'Cameron Payne', 'Aaron Holiday', 'Landry Shamet', 'JaVale McGee',
    'Torrey Craig', 'Bismack Biyombo', 'Elfrid Payton',
    'Ish Wainright', 'Cameron Johnson', 'Chris Paul', 'Jalen Smith',
    'Justin Jackson', 'Paris Bass', 'MJ Walker', 'Emanuel Terry']
    var Blazers= ['CJ Elleby', 'Trendon Watford', 'Drew Eubanks', 'Josh Hart',
    'Brandon Williams', 'Ben McLemore', 'Greg Brown III',
    'Keon Johnson', 'Elijah Hughes', 'Keljin Blevins',
    'Anfernee Simons', 'Justise Winslow', 'Jusuf Nurkic',
    'Dennis Smith Jr.', 'Tony Snell', 'CJ McCollum', 'Norman Powell',
    'Robert Covington', 'Nassir Little', 'Cody Zeller',
    'Larry Nance Jr.']
    var Kings= ['Harrison Barnes', 'Trey Lyles', 'Damian Jones', 'Justin Holiday',
    "De'Aaron Fox", 'Richaun Holmes', 'Donte DiVincenzo',
    'Chimezie Metu', 'Davion Mitchell', 'Jeremy Lamb',
    'Maurice Harkless', 'Alex Len', 'Domantas Sabonis', 'Josh Jackson',
    "Jahmi'us Ramsey", 'Louis King', 'Robert Woodard II',
    'Tyrese Haliburton', 'Buddy Hield', 'Neemias Queta',
    'Marvin Bagley III', 'Terence Davis', 'Tristan Thompson']
    var Spurs= ['Josh Richardson', 'Doug McDermott', 'Zach Collins',
    'Devin Vassell', 'Tre Jones', 'Keita Bates-Diop', 'Jock Landale',
    'Joshua Primo', 'Lonnie Walker IV', 'Keldon Johnson',
    'Jakob Poeltl', 'Dejounte Murray', 'Joe Wieskamp',
    'Romeo Langford', 'Devontae Cacok', 'Tomas Satoransky',
    'Derrick White', 'Drew Eubanks', 'Juancho Hernangomez',
    'Thaddeus Young', 'Bryn Forbes', 'Tyler Johnson', 'Jaylen Morris',
    'Anthony Lamb']
    var Raptors= ['Gary Trent Jr.', 'Pascal Siakam', 'Precious Achiuwa',
    'Scottie Barnes', 'Armoni Brooks', 'Thaddeus Young',
    'Chris Boucher', 'Dalano Banton', 'Khem Birch', 'Yuta Watanabe',
    'Svi Mykhailiuk', 'Fred VanVleet', 'Isaac Bonga', 'Malachi Flynn',
    'Justin Champagnie', 'D.J. Wilson', 'OG Anunoby', 'Daniel Oturu']
    var Jazz= ['Bojan Bogdanovic', "Royce O'Neale", 'Hassan Whiteside',
    'Donovan Mitchell', 'Danuel House Jr.', 'Eric Paschall',
    'Jordan Clarkson', 'Jared Butler', 'Rudy Gay', 'Rudy Gobert',
    'Mike Conley', 'Nickeil Alexander-Walker', 'Trent Forrest',
    'Udoka Azubuike', 'Juancho Hernangomez', 'Elijah Hughes',
    'Joe Ingles', 'Denzel Valentine', 'Zylan Cheatham', 'Norvel Pelle',
    'Malik Fitts']
    var Wizards= ['Kentavious Caldwell-Pope', 'Kyle Kuzma', 'Daniel Gafford',
    'Corey Kispert', 'Raul Neto', 'Deni Avdija', 'Ish Smith',
    'Thomas Bryant', 'Rui Hachimura', 'Tomas Satoransky',
    'Anthony Gill', 'Kristaps Porzingis', 'Cassius Winston',
    'Isaiah Todd', 'Vernon Carey Jr.', 'Aaron Holiday',
    'Spencer Dinwiddie', 'Montrezl Harrell', 'Davis Bertans',
    'Bradley Beal', 'Greg Monroe', 'Craig Sword', 'Alize Johnson',
    'Tremont Waters']
	

	if(currentValue === "Atlanta Hawks")
		createOptions(Hawks, players)
	else if(currentValue === "Boston Celtics")
		createOptions(Celtics, players)
	else if(currentValue === "Brooklyn Nets")
		createOptions(Nets, players)
    else if(currentValue === "Charlotte Hornets")
		createOptions(Hornets, players)
    else if(currentValue === "Chicago Bulls")
		createOptions(Bulls, players)
    else if(currentValue === "Cleveland Cavaliers")
		createOptions(Cavaliers, players)
    else if(currentValue === "Dallas Mavericks")
		createOptions(Mavericks, players)
    else if(currentValue === "Denver Nuggets")
		createOptions(Nuggets, players)
    else if(currentValue === "Detroit Pistons")
		createOptions(Pistons, players)
    else if(currentValue === "Golden State Warriors")
		createOptions(Warriors, players)
    else if(currentValue === "Houston Rockets")
		createOptions(Rockets, players)
    else if(currentValue === "Indiana Pacers")
		createOptions(Pacers, players)
    else if(currentValue === "Los Angeles Clippers")
		createOptions(Clippers, players)
    else if(currentValue === "Los Angeles Lakers")
		createOptions(Lakers, players)
    else if(currentValue === "Memphis Grizzlies")
		createOptions(Grizzlies, players)
    else if(currentValue === "Miami Heat")
		createOptions(Heat, players)
    else if(currentValue === "Milwaukee Bucks")
		createOptions(Bucks, players)
    else if(currentValue === "Minnesota Timberwolves")
		createOptions(Timberwolves, players)
    else if(currentValue === "New Orleans Pelicans")
		createOptions(Pelicans, players)
    else if(currentValue === "New York Knicks")
		createOptions(Knicks, players)
    else if(currentValue === "Oklahoma City Thunder")
		createOptions(Thunder, players)
    else if(currentValue === "Orlando Magic")
		createOptions(Magic, players)
    else if(currentValue === "Philadelphia 76ers")
		createOptions(Philly, players)
    else if(currentValue === "Phoenix Suns")
		createOptions(Suns, players)
    else if(currentValue === "Portland Trail Blazers")
		createOptions(Blazers, players)
    else if(currentValue === "Sacramento Kings")
		createOptions(Kings, players)
    else if(currentValue === "San Antonio Spurs")
		createOptions(Spurs, players)
    else if(currentValue === "Toronto Raptors")
		createOptions(Raptors, players)
    else if(currentValue === "Utah Jazz")
		createOptions(Jazz, players)
    else if(currentValue === "Washington Wizards")
		createOptions(Wizards, players)
}

function createOptions(options, element){
	// reset current options
	element.innerHTML = "<option hidden>Players</option>";
	// loop through each option and create <option> element
	options.forEach(optionValue =>{
		// create <option>
		var opt = document.createElement('option');
		// set value
		opt.value = optionValue;
		// set inner html
		opt.innerHTML = optionValue;
		// add to the select box
		element.add(opt)
	})
}