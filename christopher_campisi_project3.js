var assignInfo = '{"name":"Christopher Campisi","class":"SDI: 1408","date":"Aug 21st 2014", "assignment":"Project 3"}'

var obj = JSON.parse(assignInfo);

//displaying the JSON elements at the top of the HTML webpage and at the bottom for the last element.
document.getElementById("myInfo").innerHTML =
	obj.name + "<br><br>" +
	obj.class + "<br><br>" +
	obj.date;

document.getElementById("assign").innerHTML =
	obj.assignment;
	
document.getElementById("completion").innerHTML =
	obj.date + "<br>" +
	obj.name;
	
//Declare Global Variables

//player information
var pHealth = 19;
var pDamage = 8; //up to 8 damage per hit
var pAttacksPerTurn = 2; //2 attacks per turn
var pName = "Grognak";
var pTitle = "the Destroyer";
var pInventory = ["Torch", "Rope", "Canteen"];

//Goblin Information
var eName = "Grinklestein";
var eTitle = "the Destroyed";
var eAttacksPerTurn = 4;
var eDamage = 3;
var	eHealth = 15;


console.log(displayPlayerInfo());
console.log("Items in your inventory are: ");
for (var i = 0; i < pInventory.length; i++)
{
	console.log(pInventory[i]);
}
console.log(displayGoblinInfo());


//Display player info
function displayPlayerInfo()
{
	var pInfo = "Name: " + pName + " " + pTitle + "\nHealth: " + pHealth;
	
	if (pHealth == 100)
	{
		pInfo += "\nYou are in perfect health! You flex your might muscles, RAWR!";
	}
	else if (pHealth < 80 && pHealth > 60)
	{
		pInfo += "\nYou have a gash down one leg and a cut under your eye, but you can still fight.";
	}
	else if (pHealth < 60 && pHealth > 20)
	{
		pInfo += "\nYou aren't doing so well at all. Your shield arm has been chopped off in addition to your leg being almost severed. Good luck, you're going to need it...";
	}
	else if (pHealth < 20)
	{
		if(pHealth < eHealth)
		{
			pInfo += "\nYou're going to die. I just want you to know.";
		}
		else
		{
			pInfo += "\nYou may be missing a leg, your arm might be hanging by a ligament, and both eyes have been gouged out, but you are going to WIN!";
		}
	}
	return pInfo;
}

//Display goblin info
function displayGoblinInfo()
{
	var eInfo = "Name: " + eName + " " + eTitle + "\nHealth: " + eHealth;
	
	if (eHealth == 100)
	{
		eInfo += "\nThe goblin you are fighting looks like he's ready to kick some shin!";
	}
	else if (eHealth < 80 && eHealth > 60)
	{
		eInfo += "\nYour opponent looks like he might bleed to death, but probably only after he's killed you.";
	}
	else if (eHealth < 60 && eHealth > 20)
	{
		eInfo += "\n" + eName + " " + eTitle + " staggers from blood loss and probably because he's been drinking even as he's fighting you.";
	}
	else if (eHealth < 20)
	{
		if(eHealth < pHealth)
		{
			eInfo += "\nThe goblin just isn't going to give up, even if he's missing everything below his torso.";
		}
		else
		{
			eInfo += "\nYou may have decapitated him, but it looks like he's going to bite you to death. You should probably run, I mean hobble.";
		}
	}
	return eInfo;
}