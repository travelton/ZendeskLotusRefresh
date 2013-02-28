//Injected function
function timerMethod() {
	//Refresh function
	Zd.get("filterManagerController").refreshFiltersWithDefinitions();
	//Log it
	console.log("Zendesk Refresh Triggered");
}
//Refresh every 60 seconds
var timerId = setInterval(timerMethod, 60 * 1000); 