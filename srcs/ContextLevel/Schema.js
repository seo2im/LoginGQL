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
		id : Int!
		name : String!
	}


	type Query {
		userData(id : Int!) : UserData
	}

	
	type Mutation {
		addUsers(name : String!) : [Users]
	}
`

