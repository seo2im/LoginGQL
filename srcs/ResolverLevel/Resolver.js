import { UserData, Users } from '../DB'
import { AuthenticationError } from 'apollo-server'

export const resolvers = {
	Query : {
		authenticate : (_, { name, password }) => {
			const found = Users.find(user => user.name === name && user.password === password)
			return found && found.token
		},

		userData : (_, { id }, { user }) => {
			if (!user) throw new AuthenticationError("not auth")
			return UserData.find(data => data.id === id)
		}
	},

	Mutation : {
		addUsers : (_, { name }, { user }) => {
			if (!user) throw new AuthenticationError("not auth")
			return [...Users, {id : Users.length, name : name}]
		}
	}
}