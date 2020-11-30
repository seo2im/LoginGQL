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

