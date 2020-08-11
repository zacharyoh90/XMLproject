console.log("Hello");

var requestBody = "";
var client = new XMLHttpRequest();
client.open("post","https://k8s0088048-node3.thunder.lab3.service-now.com/api/now/table/incident");
client.setRequestHeader('Accept','application/json');
client.setRequestHeader('Content-Type','application/json');
//Eg. UserName="admin", Password="admin" for this code sample.
client.setRequestHeader('Authorization', 'Basic '+btoa('maint'+':'+'maint'));
client.onreadystatechange = function() {
	if(this.readyState == this.DONE) {
		console.log(this.status + this.response);
	}
};
client.send(requestBody);

