import { gql } from 'apollo-server'

export const typeDefs = gql`
	type Category {
		id : Int!
		name : String!
	}
	type Todo {
		catId : Int!
		id : Int!
		name : String!
		state : Boolean!
	}
	type Record {
		catId : Int!
		id : Int!
		date : String!
		name : String!
		content : String
	}
	type UserData {
		id : Int!
		name : String!
		categories : [Category]
		todos : [Todo]
		records : [Record]
	}
	type Users {
		token : String
		id : Int!
		name : String!
		password : String !
	}


	type Query {
		authenticate(name : String, password : String) : String
		userData(id : Int!) : UserData
	}

	
	type Mutation {
		addUsers(name : String!) : [Users]
	}
`

