var travelLog=[]




var grid = [
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];
var rover={
	direction:"N",
	x:0,
	y:0
}

function turnLeft(rover){
	if(rover.direction==="N"){
		rover.direction="W"
	}
	else if(rover.direction==="W"){
		rover.direction="S"
	}
	if(rover.direction==="S"){
		rover.direction="E"
	}
	if(rover.direction==="E"){
		rover.direction="N"
	}
}
function turnRight(rover){
	if(rover.direction==="N"){
		rover.direction="E"
	}
	else if(rover.direction==="E"){
		rover.direction="S"
	}
	if(rover.direction==="S"){
		rover.direction="W"
	}
	if(rover.direction==="W"){
		rover.direction="N"
	}
}
function moveForward(rover){
	if(rover.direction==="N"){
		(rover.y)++
	}
	else if(rover.direction==="E"){
		(rover.x)++
	}
	else if(rover.direction==="S"){
		(rover.y)--
	}
	if(rover.direction==="W"){
		(rover.x)--
	}
	travelLog.push('x',rover.x,'y',rover.y,'direction',rover.direction)
	console.log(travelLog);

}

function piloteRover(command){
	for(var i=0;i<command.length;i++){
		if (command[i]==='l'){
			turnLeft(rover)
		}
		else if (command[i]==='r'){
			turnRight(rover)
		}
		else if (command[i]==='f'){
			moveForward(rover)
		}

	}
}
piloteRover('rffrf')