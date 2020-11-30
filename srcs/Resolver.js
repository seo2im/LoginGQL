import { UserData, Users } from './DB'

export const resolvers = {
	Query : {
		userData : (_, { id }) => {
			return UserData.find(user => user.id === id)
		}
	},

	Mutation : {
		addUsers : (_, { name }) => {
			return [...Users, {id : Users.length, name : name}]
		}
	}
}