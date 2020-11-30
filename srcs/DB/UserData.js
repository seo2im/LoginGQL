export const UserData = [
	{
		id : 0,
		categories : [{
			id : 0, name : "TestCat"
		}, {
			id : 1, name : "TestCat2"
		}],
		todos : [{
			catId : 0, id : 0, name : "testTodo1",  state : false
		},{
			catId : 0, id : 1, name : "testTodo2",  state : false
		},{
			catId : 0, id : 2, name : "testTodo3",  state : false
		},{
			catId : 1, id : 3, name : "testTodo4",  state : false
		},{
			catId : 1, id : 4, name : "testTodo5",  state : false
		},{
			catId : 1, id : 5, name : "testTodo6",  state : false
		}],
		records : [{
			catId : 0,
			id : 0,
			date : '20.11.12',
			name : 'Test Record1',
			content : 'TestTestTest'
		},
		{
			catId : 0,
			id : 1,
			date : '20.11.13',
			name : 'Test Record1',
			content : 'TestTestTest'
		},
		{
			catId : 0,
			id : 2,
			date : '20.11.14',
			name : 'Test Record1',
			content : 'TestTestTest'
		}]
	},
	{
		id : 1,
		categories : [],
		todos : [],
		records : []
	}
]