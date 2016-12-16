function saveStorage(key, value){
	if(localStorage)
		localStorage[key] = value;
	else{
		alert("你的chrome竟然不支持localStorage，请联系很懒的作者zcg1996@gmail.com填坑");
	}
}

function getStorage(key){
	if(localStorage)
		return localStorage[key];
	else{
		alert("你的chrome竟然不支持localStorage，请联系很懒的作者zcg1996@gmail.com填坑");
	}
}

function showNotification(){
	var notification = webkitNotifications.createNotification(
		  'z.png',  // icon url - can be relative
		  'LoginFDU',  // notification title
		  '正在为您自动登录'  // notification body text
		);
	notification.show();
}
chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    if (request.eventName == "get_name_pswd"){
		sendResponse({name:getStorage("name"), pswd:getStorage("pswd")});
	}
    else
      sendResponse({}); // snub them.
  });