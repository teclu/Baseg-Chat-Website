const accessTokenMatch = window.location.hash.match(/^#access_token=([^&]+).*$/)
const accessToken = accessTokenMatch?.[1]
if (accessToken) {
	window.location.replace(`baseg-chat://authentication/${accessToken}`)
}
window.location.replace(location.pathname.split('/').slice(0, 2).join('/'))
