# Login Server with GQL

> OBJECT

make authorization / authentication in GQL server

## HTTP Auth

This use **Bearer**(Auth 2.0). Bearer make `authorization header` to `Bearer <token>`.
Server Check that and give authorization or not.

## Context Level Authentication

Basically, All requests taht don't have token are rejected. In apollo server, function assiged in context option is called at everytime request.

```javascript
const server = new ApolloServer({
	...
	context : ({ req }) => {
		if (!req.headers.authorization)
			throw new AuthenticationError("no token");
		...
	}
})
```

## Resolver level

For example, login time, client dont have token, so we don't use context level authentication.
`Resolver level auth` is more efficient. Context only return user matched, if no user matched, return undefined. Resolver only check it.

```javascript
export const resolvers = {
	Query : {
		authenticate : (_, { name, password }) => {
			const found = Users.find(user => user.name === name && user.password === password)
			return found && found.token
		},

		userData : (_, { id }, { user }) => { //third param is context
			if (!user) throw new AuthenticationError("not auth")
			return UserData.find(data => data.id === id)
		}
	},
	...
}


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
```

