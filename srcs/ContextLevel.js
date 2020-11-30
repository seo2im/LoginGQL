import { ApolloServer, AuthenticationError } from 'apollo-server'
import { resolvers } from './Resolver'
import { typeDefs } from './Schema'
import * as DB from './DB'
/*
	Context function is called in every request.
*/
const server = new ApolloServer({
	typeDefs, resolvers,
	context : ({ req }) => {
		if (!req.headers.authorization)
			throw new AuthenticationError("missing token");
		
		const token = req.headers.authorization.substr(7); //last token string
		const user = DB.User.find((user) => user.token === token);
		if (!user) 
			throw new AuthenticationError("invalid token");
		
		return { user };
	}
});


export default server;
