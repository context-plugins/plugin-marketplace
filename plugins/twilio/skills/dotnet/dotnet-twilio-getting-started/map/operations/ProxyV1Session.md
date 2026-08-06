# ProxyV1Session — operations

Accessor: `client.ProxyV1Session` · Source: `Api/ProxyV1Session.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSession
- **HTTP**: `POST /v1/Services/{ServiceSid}/Sessions` (Default10 (proxy))
- **Notes**: Create a new Session
- **Signature**: `CreateSession(string serviceSid, string? uniqueName, DateTimeOffset? dateExpiry, int? ttl, SessionEnumMode? mode, SessionEnumStatus? status, IReadOnlyList<object>? participants, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`uniqueName` … `participants`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `UniqueName` ← `uniqueName`, `DateExpiry` ← `dateExpiry`, `Ttl` ← `ttl`, `Mode` ← `mode`, `Status` ← `status`, `Participants` ← `participants`
- **Returns**: `ProxyV1ServiceSession`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSession
- **HTTP**: `DELETE /v1/Services/{ServiceSid}/Sessions/{Sid}` (Default10 (proxy))
- **Notes**: Delete a specific Session.
- **Signature**: `DeleteSession(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchSession
- **HTTP**: `GET /v1/Services/{ServiceSid}/Sessions/{Sid}` (Default10 (proxy))
- **Notes**: Fetch a specific Session.
- **Signature**: `FetchSession(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ProxyV1ServiceSession`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListSession
- **HTTP**: `GET /v1/Services/{ServiceSid}/Sessions` (Default10 (proxy))
- **Notes**: Retrieve a list of all Sessions for the Service. A maximum of 100 records will be returned per page.
- **Signature**: `ListSession(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSessionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSession
- **HTTP**: `POST /v1/Services/{ServiceSid}/Sessions/{Sid}` (Default10 (proxy))
- **Notes**: Update a specific Session.
- **Signature**: `UpdateSession(string serviceSid, string sid, DateTimeOffset? dateExpiry, int? ttl, SessionEnumStatus? status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `dateExpiry` — nullable, no default → **must pass explicitly**
  - `ttl` — nullable, no default → **must pass explicitly**
  - `status` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `DateExpiry` ← `dateExpiry`, `Ttl` ← `ttl`, `Status` ← `status`
- **Returns**: `ProxyV1ServiceSession`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
