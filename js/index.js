function GetValue() {
			var borinatorarray = new Array("Schwimmen gehen", "Spazieren gehen",
					"Fahrrad fahren", "Eis essen", "Fotos machen",
					"Ein neues Buch lesen", "Malen/ Zeichnen",
					"Facebook aufraeumen", "Twitter aufraeumen",
					"Alte Fotos anschauen", "Ein Gedicht schreiben", "Putzen",
					"Jemanden ein Geschenk machen", "Einkaufen",
					"Amazon nach lustigen Dingen durchsuchen",
					"Auto/ Fahrrad/ Motorrad waschen", "Tanzen", "Musik hoeren",
					"Neue Musik suchen", "Neue Filme suchen",
					"Nach ausgefallenen Klamotten suchen", "Lernen",
					"Sich ein Ziel setzen", "Das Zimmer umstellen",
					"Eine neue Musikrichtung probieren",
					"Youtube/ Vimeo durchstoebern",
					"Ein neues Getraenk probieren",
					"Die Weltherrschaft an sich reissen", "Computer aufraeumen",
					"Etwas neues lernen", "Das Wetter geniessen", "In eine Bar gehen",
					"Penspinning", "Ein Musikinstrument lernen", "Eine Shisha kaufen",
					"Freunde anrufen", "Briefe schreiben", "Ein Tutorial gucken", "Ein VLOG machen", 
					"Programmieren (lernen)", "Mathematische Aufgaben loesen", "Eine neue Sprache lernen",
					"ueber das TV - Programm aufregen", "Klamotten aussortieren", "Die Ruhe geniessen", 
					"Ans Wasser fahren", "Ein Video drehen", "Tumblr durchstoebern", "Neue Serien suchen", 
					"In die Buchhandlung gehen", "Witze ueberlegen", "Weiterhin diesen Button klicken", "Bodypainting",
					"Verkleiden", "Ein Buch schreiben", "Eine Sportart ausueben", "Neue Filme suchen", "Die eigenen Waende streichen", 
					"Etwas basteln", "Ein neues Hobby suchen", "Ein Video schneiden", "Photoshop lernen", "Gimp lernen", "Eine App probieren",
					"Versuchen der Beste in etwas zu werden", "Schlafen", "Liegestuetze", "Unkraut zupfen");
			var getrandomstring = borinatorarray[Math.floor(Math.random() * borinatorarray.length)];
			document.getElementById("message").innerHTML = getrandomstring;
		}