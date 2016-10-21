var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Terminar el curso de node',
	completed: false
},{
	id: 2, 
	description: 'Terminar el portafolio',
	completed: false
}, {
	id: 3,
	description: 'Escanear 10 libros',
	completed: true
}];

app.get('/', function(req, res) {
	res.send('Todo API Root');
})

// Get /todos
app.get('/todos', function(req, res) {
	res.json(todos);
})

//Get /todos:id
app.get('/todos/:id', function(req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchTodo;

	todos.forEach(function (todo) {
		if(todoId === todo.id) {
			matchTodo = todo;
		}
	})

	if (matchTodo) {
		res.json(matchTodo);
	} else {
		res.status(404).send();
	}
})

app.listen(PORT, function() {
	console.log('Express esta corriendo en' + PORT);
})


