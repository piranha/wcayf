function makeInfo(req) {
  var data = JSON.stringify({country: req.cf.country});
  var name = new URL(req.url).searchParams.get('callback');
  if (name) {
    data = name + '(' + data + ');';
    var headers = {'content-type': 'application/javascript'};
  } else {
    var headers = {'content-type': 'application/json'};
  }
  return new Response(data, {headers: headers});
}

addEventListener('fetch', e => {
  e.respondWith(makeInfo(e.request));
});
