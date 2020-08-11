var submitCatch = document.getElementById("submit");

submitCatch.addEventListener("click", function(evnt) {
	evnt.preventDefault();
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	chrome.tabs.executeScript({
		tabs[0].id,
		file: 'content.js'
	});
});

// fileInput.addEventListener('change', function(evnt) {
// 	fileList = [];
// 	for (var i = 0; i < fileInput.files.length; i++) {
// 		fileList.push(fileInput.files[i]);
// 	}
// });
// /* catch the submission event to upload files in file list */
// var submitCatch = document.getElementById("submit");
// submitCatch.addEventListener("click", function(evnt) {
// 	//evnt.preventDefault();
// 	fileList.forEach(function(file) {
// 		sendFile(file);
// 	})
// });
// sendFile = function(file) {
// 	var formData = new FormData();
// 	formData.append("sysparm_upload_prefix", "");
// 	formData.append("sysparm_referring_url", "incident_list.do");
// 	formData.append("sysparm_target", "incident");
// 	formData.append("attachFile", file);
// 	var request = new XMLHttpRequest();
// 	request.open("POST", "http://localhost:8080/sys_upload.do");
// 	request.setRequestHeader("Accept", "application/json");
//  			request.setRequestHeader("Content-Type", "application/json");
// 	request.setRequestHeader("X-CSRF-Token", window.g_ck);
// 	request.send(formData);
// };





// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
// 	changeColor.style.backgroundColor = data.color;
// 	changeColor.setAttribute('value', data.color);
// });

// const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1', '#ffffff', '#000000'];
// function constructOptions(kButtonColors) {
// 	for (let item of kButtonColors) {
// 		let button = document.createElement('button');
// 		button.style.backgroundColor = item;
// 		button.addEventListener('click', function() {
// 			chrome.storage.sync.set({color: item}, function() {
// 				console.log('color is ' + item);
// 			})
// 			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 			chrome.tabs.executeScript(
// 				tabs[0].id,
// 				{code: 'document.body.style.backgroundColor = "' + item + '";'});
// 			});
// 		});
// 		changeColor.appendChild(button);
// 	}
// }
// constructOptions(kButtonColors);

//let fileUpload = document.getElementById('file');