# IsolatedMarginStream — operations

Accessor: `client.IsolatedMarginStream` · Source: `Api/IsolatedMarginStream.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CloseAListenKeyUserStream3
- **HTTP**: `DELETE /sapi/v1/userDataStream/isolated` (Default (api))
- **Notes**: Close out a user data stream. Weight: 1
- **Signature**: `CloseAListenKeyUserStream3(string? listenKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `listenKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `listenKey` ← `listenKey`
- **Returns**: `object`
- **Error**: `SdkException<CloseAListenKeyUserStream3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GenerateAListenKeyUserStream
- **HTTP**: `POST /sapi/v1/userDataStream/isolated` (Default (api))
- **Notes**: Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent. If the account has an active `listenKey`, that `listenKey` will be returned and its validity will be extended for 60 minutes. Weight: 1
- **Signature**: `GenerateAListenKeyUserStream(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SapiV1UserDataStreamIsolatedResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PingKeepAliveAListenKeyUserStream
- **HTTP**: `PUT /sapi/v1/userDataStream/isolated` (Default (api))
- **Notes**: Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes. Weight: 1
- **Signature**: `PingKeepAliveAListenKeyUserStream(string? listenKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `listenKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `listenKey` ← `listenKey`
- **Returns**: `object`
- **Error**: `SdkException<PingKeepAliveAListenKeyUserStreamApiError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
