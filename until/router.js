var navTo=true;
var redTo=true;
var relTo=true;

function navigateTo(param) {
	if(navTo){
		uni.navigateTo(param);
		navTo=false;
	}
	setTimeout(function(){
		navTo=true;
	},1000)
}

function redirectTo(param) {
	if(redTo){
		uni.redirectTo(param)
		redTo=false;
	}
	setTimeout(function(){
		redTo=true;
	},1000)
}

function reLaunch(param) {
	if(relTo){
		uni.reLaunch(param)
		relTo=false;
	}
	setTimeout(function(){
		relTo=true;
	},1000)
}


export {
	navigateTo,
	redirectTo,
	reLaunch
}
