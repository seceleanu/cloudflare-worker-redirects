// Object mapping old URLs to new URLs with complete domains
const urlMap = {
  'https://oldurl.com/1': 'https://newurl.com/1',
  'https://oldurl.com/2': 'https://newurl.com/2',
  // Add more mappings here
};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = request.url;

  // Check if the URL is in the list of old URLs
  if (Object.hasOwnProperty.call(urlMap, url)) {
    // Redirect to the corresponding new URL
    return Response.redirect(urlMap[url], 301)
  } else {
    // Proceed to the requested URL
    return fetch(request)
  }
}
