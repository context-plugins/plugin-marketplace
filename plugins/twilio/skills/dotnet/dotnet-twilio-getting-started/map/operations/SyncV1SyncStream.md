# SyncV1SyncStream — operations

Accessor: `client.SyncV1SyncStream` · Source: `Api/SyncV1SyncStream.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSyncStream
- **HTTP**: `POST /v1/Services/{ServiceSid}/Streams` (Default12 (sync))
- **Notes**: Create a new Stream.
- **Signature**: `CreateSyncStream(string serviceSid, string? uniqueName, int? ttl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `uniqueName` — nullable, no default → **must pass explicitly**
  - `ttl` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `UniqueName` ← `uniqueName`, `Ttl` ← `ttl`
- **Returns**: `SyncV1ServiceSyncStream`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSyncStream
- **HTTP**: `DELETE /v1/Services/{ServiceSid}/Streams/{Sid}` (Default12 (sync))
- **Notes**: Delete a specific Stream.
- **Signature**: `DeleteSyncStream(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchSyncStream
- **HTTP**: `GET /v1/Services/{ServiceSid}/Streams/{Sid}` (Default12 (sync))
- **Notes**: Fetch a specific Stream.
- **Signature**: `FetchSyncStream(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SyncV1ServiceSyncStream`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListSyncStream
- **HTTP**: `GET /v1/Services/{ServiceSid}/Streams` (Default12 (sync))
- **Notes**: Retrieve a list of all Streams in a Service Instance.
- **Signature**: `ListSyncStream(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSyncStreamResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSyncStream
- **HTTP**: `POST /v1/Services/{ServiceSid}/Streams/{Sid}` (Default12 (sync))
- **Notes**: Update a specific Stream.
- **Signature**: `UpdateSyncStream(string serviceSid, string sid, int? ttl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ttl` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Ttl` ← `ttl`
- **Returns**: `SyncV1ServiceSyncStream`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
