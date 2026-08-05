# ApiauthenticationBasicLogin — operations

Accessor: `client.ApiauthenticationBasicLogin` · Source: `Api/ApiauthenticationBasicLogin.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Authorizefromclient
- **HTTP**: `GET /api/v1/orgs/stats` (Default)
- **Notes**: This section covers user authentication methods, including Basic Authentication and JSON-based login. Users can authenticate using their credentials to generate an API token or establish a session for secure API access.
- **Signature**: `Authorizefromclient(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Authorizeusingpayload
- **HTTP**: `POST /api/v1/login` (Default)
- **Notes**: Authenticates a user by sending login credentials in the request body. This will return session id and csrf token in response, which can be included in the request headers to authorize future API requests.
- **Signature**: `Authorizeusingpayload(ApiV1LoginRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
