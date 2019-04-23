{ status: 200,
  statusText: 'OK',
  headers:
   { 'content-type': 'application/json',
     'content-length': '721',
     connection: 'close',
     date: 'Tue, 23 Apr 2019 17:53:19 GMT',
     'x-amzn-requestid': 'ad996bf4-65f0-11e9-a821-b3ae0cca70cc',
     'access-control-allow-origin': '*',
     'x-amz-apigw-id': 'YmmaWGkbIAMFlXg=',
     'x-amzn-trace-id': 'Root=1-5cbf510f-4d0c333ccedc50e9f05c8e66;Sampled=0',
     'x-cache': 'Miss from cloudfront',
     via:
      '1.1 5f1ed7565ba7c1337b1d9b9c702d733a.cloudfront.net (CloudFront)',
     'x-amz-cf-id': 'Ndn1LEW-9K3j5OLngQNg9u4bzq8CvR83JxRwl79vdPuwLTvHBHh1Ww==' },
  config:
   { adapter: [Function: httpAdapter],
     transformRequest: { '0': [Function: transformRequest] },
     transformResponse: { '0': [Function: transformResponse] },
     timeout: 0,
     xsrfCookieName: 'XSRF-TOKEN',
     xsrfHeaderName: 'X-XSRF-TOKEN',
     maxContentLength: -1,
     validateStatus: [Function: validateStatus],
     headers:
      { Accept: 'application/json, text/plain, */*',
        'User-Agent': 'axios/0.18.0' },
     method: 'get',
     url:
      'https://rest.bandsintown.com/artists/sewage/events?app_id=codingbootcamp',
     data: undefined },
  request:
   ClientRequest {
     _events:
      [Object: null prototype] {
        socket: [Function],
        abort: [Function],
        aborted: [Function],
        error: [Function],
        timeout: [Function],
        prefinish: [Function: requestOnPrefinish] },
     _eventsCount: 6,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: true,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: false,
     sendDate: false,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: 0,
     _hasBody: true,
     _trailer: '',
     finished: true,
     _headerSent: true,
     socket:
      TLSSocket {
        _tlsOptions: [Object],
        _secureEstablished: true,
        _securePending: false,
        _newSessionPending: false,
        _controlReleased: true,
        _SNICallback: null,
        servername: 'rest.bandsintown.com',
        alpnProtocol: false,
        authorized: true,
        authorizationError: null,
        encrypted: true,
        _events: [Object],
        _eventsCount: 8,
        connecting: false,
        _hadError: false,
        _handle: [TLSWrap],
        _parent: null,
        _host: 'rest.bandsintown.com',
        _readableState: [ReadableState],
        readable: true,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: false,
        allowHalfOpen: false,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: undefined,
        _server: null,
        ssl: [TLSWrap],
        _requestCert: true,
        _rejectUnauthorized: true,
        parser: null,
        _httpMessage: [Circular],
        [Symbol(res)]: [TLSWrap],
        [Symbol(asyncId)]: 8,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: null,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(connect-options)]: [Object] },
     connection:
      TLSSocket {
        _tlsOptions: [Object],
        _secureEstablished: true,
        _securePending: false,
        _newSessionPending: false,
        _controlReleased: true,
        _SNICallback: null,
        servername: 'rest.bandsintown.com',
        alpnProtocol: false,
        authorized: true,
        authorizationError: null,
        encrypted: true,
        _events: [Object],
        _eventsCount: 8,
        connecting: false,
        _hadError: false,
        _handle: [TLSWrap],
        _parent: null,
        _host: 'rest.bandsintown.com',
        _readableState: [ReadableState],
        readable: true,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: false,
        allowHalfOpen: false,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: undefined,
        _server: null,
        ssl: [TLSWrap],
        _requestCert: true,
        _rejectUnauthorized: true,
        parser: null,
        _httpMessage: [Circular],
        [Symbol(res)]: [TLSWrap],
        [Symbol(asyncId)]: 8,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: null,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(connect-options)]: [Object] },
     _header:
      'GET /artists/sewage/events?app_id=codingbootcamp HTTP/1.1\r\nAccept: application/json, text/plain, */*\r\nUser-Agent: axios/0.18.0\r\nHost: rest.bandsintown.com\r\nConnection: close\r\n\r\n',
     _onPendingData: [Function: noopPendingOutput],
     agent:
      Agent {
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        defaultPort: 443,
        protocol: 'https:',
        options: [Object],
        requests: {},
        sockets: [Object],
        freeSockets: {},
        keepAliveMsecs: 1000,
        keepAlive: false,
        maxSockets: Infinity,
        maxFreeSockets: 256,
        maxCachedSessions: 100,
        _sessionCache: [Object] },
     socketPath: undefined,
     timeout: undefined,
     method: 'GET',
     path: '/artists/sewage/events?app_id=codingbootcamp',
     _ended: true,
     res:
      IncomingMessage {
        _readableState: [ReadableState],
        readable: false,
        _events: [Object],
        _eventsCount: 3,
        _maxListeners: undefined,
        socket: [TLSSocket],
        connection: [TLSSocket],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers: [Object],
        rawHeaders: [Array],
        trailers: {},
        rawTrailers: [],
        aborted: false,
        upgrade: false,
        url: '',
        method: null,
        statusCode: 200,
        statusMessage: 'OK',
        client: [TLSSocket],
        _consuming: false,
        _dumped: false,
        req: [Circular],
        responseUrl:
         'https://rest.bandsintown.com/artists/sewage/events?app_id=codingbootcamp',
        redirects: [] },
     aborted: undefined,
     timeoutCb: null,
     upgradeOrConnect: false,
     parser: null,
     maxHeadersCount: null,
     _redirectable:
      Writable {
        _writableState: [WritableState],
        writable: true,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _options: [Object],
        _ended: true,
        _ending: true,
        _redirectCount: 0,
        _redirects: [],
        _requestBodyLength: 0,
        _requestBodyBuffers: [],
        _onNativeResponse: [Function],
        _currentRequest: [Circular],
        _currentUrl:
         'https://rest.bandsintown.com/artists/sewage/events?app_id=codingbootcamp' },
     [Symbol(isCorked)]: false,
     [Symbol(outHeadersKey)]:
      [Object: null prototype] { accept: [Array], 'user-agent': [Array], host: [Array] } },
  data:
   [ { id: '1014525925',
       artist_id: '4194988',
       url:
        'https://www.bandsintown.com/e/1014525925?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event',
       on_sale_datetime: '2019-04-05T12:00:04',
       datetime: '2019-04-23T17:00:00',
       description:
        'An Evening of Music and Art: A Benefit For The Joe Strummer Foundation',
       venue: [Object],
       lineup: [Array],
       offers: [Array] } ] }