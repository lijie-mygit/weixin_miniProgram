let baseUrl = 'https://zswenlv.mini.xunbaowang.net/interface/v1/';


//get请求
function getRequest(url,data,success,fail){
	let token = uni.getStorageSync('token') ? uni.getStorageSync('token'):'';
	uni.request({
	    url: baseUrl+url, 
		method: 'GET',
		data:data,
	    header: {
	        'content-type': 'application/json', // 默认值
	        Authorization:'Bearer token='+token
	    },
	    success: (res) => {
	        if (success && typeof success === 'function') {
				if(res.data.error_code == 0){
					success(res)
				}else{
					console.error(res)
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
				}
			}
	    },
		fail: (error) => {
			if (fail && typeof fail === 'function') {
				fail(error)
			} else {
				console.log(error)
			}
		}
	});
}

//post请求
function postRequest(url,data,success,fail){
	let token = uni.getStorageSync('token') ? uni.getStorageSync('token'):'';
	uni.request({
	    url: baseUrl+url, 
		method: 'POST',
	    data:data,
	    header: {
	        'content-type': 'application/json', // 默认值
	        Authorization:'Bearer token='+token
			
	    },
	    success: (res) => {
	        if (success && typeof success === 'function') {
				if(res.data.error_code == 0){
					success(res)
				}else if(res.data.error_code == 5006){
					uni.showToast({
						title:res.data.message,
						icon:'none',
						duration:3000
					})
				}else{
					console.error(res)
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
				}
			}
	    },
		fail: (error) => {
			if (fail && typeof fail === 'function') {
				fail(error)
			} else {
				console.log(error)
			}
		}
	});
}

//del请求
function delRequest(url,success,fail){
	let token = uni.getStorageSync('token') ? uni.getStorageSync('token'):'';
	uni.request({
	    url: baseUrl+url, 
		method: 'DELETE',
	    header: {
	        'content-type': 'application/json', // 默认值
	        Authorization:'Bearer token='+token
	    },
	    success: (res) => {
	        if (success && typeof success === 'function') {
				if(res.data.error_code == 0){
					success(res)
				}else{
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
				}
			}
	    },
		fail: (error) => {
			if (fail && typeof fail === 'function') {
				fail(error)
			} else {
				console.log(error)
			}
		}
	});
}

export{getRequest,postRequest,delRequest}