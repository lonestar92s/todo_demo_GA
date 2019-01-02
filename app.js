console.log("It is here")


$("#add-task-button").click(function(){
// this declares task	
	let task = $("#add-task-input").val()
	//put conditional here
	if(task === ""){
		alert("Task cannot be blank")
	//everything else
	}else
	console.log('i have been clicked')
	console.log(task)
	let $li = $("<li>" + task + "</li>")
	$("#to-do-list").append($li)
	$("#add-task-input").val("")
})


