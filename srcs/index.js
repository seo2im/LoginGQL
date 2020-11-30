import ContextServer from './ContextLevel'

ContextServer.listen().then(({ url }) => {
	console.log(`server ready at ${url}`)
})