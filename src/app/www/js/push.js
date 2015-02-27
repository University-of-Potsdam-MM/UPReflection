var pushDetails = {
	senderID: "38438927043",
	uniqushUrl: "http://musang.soft.cs.uni-potsdam.de:9898/subscribe",
	serviceName: "reflectup",
	subscriberName: "android"
};

document.addEventListener("deviceready", function(){
    PushServiceRegister();
});

var SubscribeToUniqush = function(options) {
	var uri = new URI(pushDetails.uniqushUrl);
	uri.search(options);

	console.log("Registering id " + options.regid + " via " + uri.href());

	$.ajax({
		url: uri.href(),
		success: function() { console.log("Successfully contacted uniqush server"); },
		error: function() { console.log("Some error happened while contacting the uniqush server"); }
	});
};

var PushServiceRegister = function() {
	
	var successHandler = function(result) {
		console.log("result = " + result);
	};

	var errorHandler = function(result) {
		console.log("error = " + result);
	};

	var pushNotification = window.plugins.pushNotification;
	if (device.platform == "android" || device.platform == "Android" || device.platform == "amazon-fireos") {
	    pushNotification.register(
		    successHandler,
		    errorHandler,
		    {
		        "senderID": pushDetails.senderID,
		        "ecb": "onNotification"
		    });
	}
};

var onNotification = function(e) {
	switch (e.event) {
		case "registered":
			// RegID received, inform uniqush server
			var regId = e.regid;
			if (regId.length == 0) {
				// empty regId, what do we do?
			} else {
				var options = {
					service: pushDetails.serviceName,
					subscriber: pushDetails.subscriberName,
					pushservicetype: "gcm",
					regid: regId
				};
				SubscribeToUniqush(options);
			}

			break;
		case "message":
			// push notification received, inform app
			console.log("NEW PUSH NOTIFICATION RECEIVED");
			break;
		case "error":
			// error happened
			console.log("PUSH ERROR HAPPENED");
			break;
		default:
			// unknown event, what do we do?
			console.log("UNKNOWN PUSH EVENT");
			break;
	}
};
