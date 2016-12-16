function save(){
	var name = document.getElementById("username").value;
	var pswd = document.getElementById("password").value;
	var bg = chrome.extension.getBackgroundPage();
	if(!bg){
		console.log("something went wrong here.");
		return;
	}
	bg.saveStorage("name", name);
	bg.saveStorage("pswd", pswd);
	window.close();
}

function onload(){
	var bg = chrome.extension.getBackgroundPage();
	var name = bg.getStorage("name");
	var pswd = bg.getStorage("pswd");
	if(!name || !pswd){
		return;
	}
	document.getElementById("username").value = name;
	document.getElementById("password").value = pswd;
}

document.getElementById("save_button").onclick = save;
document.getElementById("body").onload = onload;
