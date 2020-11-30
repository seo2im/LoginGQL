import ContextServer from './ContextLevel/ContextLevel'


ContextServer.listen().then(({ url }) => {
	console.log(`server ready at ${url}`)
})

