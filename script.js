function createCard(fName, lName, candidatePicture) {
	let candidateCard = document.createElement("div");
	candidateCard.id = `${lName.toLowerCase()}Card`;
	candidateCard.className = `candidateCard`;

	let candidatePFP = document.createElement("img");
	candidatePFP.className = `candidatePFP`;
	candidatePFP.src = candidatePicture;

	let candidateName = document.createElement("h3");
	candidateName.innerText = `${fName} ${lName}`;

	let voteButton = document.createElement("input");
	voteButton.type = "button";
	voteButton.value = "VOTE";
	voteButton.id = `vote${lName}`;
	voteButton.className = `candidateCardVote`;

	candidateCard.append(candidatePFP, candidateName, voteButton);
	document.getElementById("candidateCards").append(candidateCard);
}

function cardGlow() {}

// function 'cardOrderToggle' gets the flex direction of html element 'candidateCards' and converts to the opposite direction. TLDR: This flips the order of the cards on the site when called.
function cardOrderToggle() {
	document.getElementById("candidateCards").style.flexDirection == "row-reverse"
		? (document.getElementById("candidateCards").style.flexDirection = "row")
		: (document.getElementById("candidateCards").style.flexDirection = "row-reverse");
}

function voteAlert() {
	let voteSuccessPanel = document.createElement("article");
	voteSuccessPanel.setAttribute("id", "votedFor");

	let voteSuccessPanelText = document.createElement("h3");
	voteSuccessPanelText.innerText = `You've voted for ${this.id.slice(4)}!`;
	voteSuccessPanel.append(voteSuccessPanelText);

	document.body.append(voteSuccessPanel);
	document.getElementById("voteNixon").removeEventListener("click", voteAlert);
	document.getElementById("voteMcGovern").removeEventListener("mouseover", cardOrderToggle);
}

// function 'cardOrderToggle' now runs when the user hovers over McGovern's card in the linked HTML
// document.getElementById("voteMcGovern").addEventListener("mouseover", cardOrderToggle);
const candidateArray = [
	["Richard", "Nixon", "./images/representatives/richardNixonPFP.png"],
	["George", "McGovern", "./images/representatives/georgeMcGovernPFP.png"],
];
for (let i = 0; i < candidateArray.length; i++) {
	createCard(candidateArray[i][0], candidateArray[i][1], candidateArray[i][2]);
}
document.getElementById("voteNixon").addEventListener("click", voteAlert);
document.getElementById("voteMcGovern").addEventListener("mouseover", cardOrderToggle);
