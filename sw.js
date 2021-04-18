self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim())
})

self.addEventListener('fetch', (e) => {
  // ignore request urls other than .mp3/.m4a
  if (!/\.m4a|mp3(?=[?#]|$)/.test(e.request.url)) return

  const dest = e.request.destination

  e.waitUntil(
    log(
      `<code>request.duration</code> is <code>"${dest}"</code> (${
        e.request.url.split(/[?#]/)[0]
      })`,
      dest !== 'audio'
    )
  )
})

async function log(msg, error = false) {
  for (const client of await self.clients.matchAll())
    client.postMessage({ type: error ? 'error' : 'info', msg })
}
