/* 加入收藏 */
function AddFavorite(sURL, sTitle) {
	sURL = encodeURI(sURL);
	try {
		window.external.AddFavorite(sURL, sTitle);
	}catch(e) {
		try {
			window.sidebar.addPanel(sTitle, sURL, '');
		}catch(e) {
			alert('添加收藏失败！');
		}
	}
}
/* 设为首页 */
function SetHome(url) {
	if(document.all) {
		document.body.style.behavior = 'url(#default#homepage)';
		document.body.setHomePage(url);
	}else {
		alert('您的浏览器不支持自动设置首页');
	}
}