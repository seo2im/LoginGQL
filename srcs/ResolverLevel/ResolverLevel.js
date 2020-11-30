import { ApolloServer, AuthenticationError } from 'apollo-server'
import { resolvers } from './Resolver'
import { typeDefs } from './Schema'
import * as DB from '../DB'

const server = new ApolloServer({
	typeDefs, resolvers,
	context : ({ req }) => {
		if (!req.headers.authorization)
			return { user : undefined }
		
		const token = req.headers.authorization.substr(7); //last token string
		const user = DB.User.find((user) => user.token === token);
		return { user };
	}
});


export default server;
