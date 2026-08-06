# SyncV1Document — operations

Accessor: `client.SyncV1Document` · Source: `Api/SyncV1Document.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateDocument
- **HTTP**: `POST /v1/Services/{ServiceSid}/Documents` (Default12 (sync))
- **Signature**: `CreateDocument(string serviceSid, string? uniqueName, object? data, int? ttl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `uniqueName` — nullable, no default → **must pass explicitly**
  - `data` — nullable, no default → **must pass explicitly**
  - `ttl` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `UniqueName` ← `uniqueName`, `Data` ← `data`, `Ttl` ← `ttl`
- **Returns**: `SyncV1ServiceDocument`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteDocument
- **HTTP**: `DELETE /v1/Services/{ServiceSid}/Documents/{Sid}` (Default12 (sync))
- **Signature**: `DeleteDocument(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchDocument
- **HTTP**: `GET /v1/Services/{ServiceSid}/Documents/{Sid}` (Default12 (sync))
- **Signature**: `FetchDocument(string serviceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SyncV1ServiceDocument`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListDocument
- **HTTP**: `GET /v1/Services/{ServiceSid}/Documents` (Default12 (sync))
- **Signature**: `ListDocument(string serviceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListDocumentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateDocument
- **HTTP**: `POST /v1/Services/{ServiceSid}/Documents/{Sid}` (Default12 (sync))
- **Signature**: `UpdateDocument(string serviceSid, string sid, string? ifMatch, object? data, int? ttl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ifMatch` — nullable, no default → **must pass explicitly**
  - `data` — nullable, no default → **must pass explicitly**
  - `ttl` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Data` ← `data`, `Ttl` ← `ttl`
- **Returns**: `SyncV1ServiceDocument`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
