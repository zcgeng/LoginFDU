function loginFDU(){
	var doNotRun = false;
	chrome.extension.sendRequest({eventName: "get_name_pswd"}, function(response) {
		var name = response.name;
		var pswd = response.pswd;
		if(!name || !pswd){
			doNotRun = true;
			alert("LoginFDU: 请在右上角设置学号和密码");
			return;
		}
		document.getElementById("username").value = response.name;
		document.getElementById("password").value = response.pswd;
	});
	if(document.getElementById("inputCode")!=null){
		doNotRun = true;
		alert("LoginFDU: 出现了验证码,请检查是否设置正确");
		return;
	}
}

loginFDU();
