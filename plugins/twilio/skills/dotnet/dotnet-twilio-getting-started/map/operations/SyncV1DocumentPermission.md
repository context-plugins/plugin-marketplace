# SyncV1DocumentPermission — operations

Accessor: `client.SyncV1DocumentPermission` · Source: `Api/SyncV1DocumentPermission.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteDocumentPermission
- **HTTP**: `DELETE /v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}` (Default10 (sync))
- **Notes**: Delete a specific Sync Document Permission.
- **Signature**: `DeleteDocumentPermission(string serviceSid, string documentSid, string identity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchDocumentPermission
- **HTTP**: `GET /v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}` (Default10 (sync))
- **Notes**: Fetch a specific Sync Document Permission.
- **Signature**: `FetchDocumentPermission(string serviceSid, string documentSid, string identity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SyncV1ServiceDocumentDocumentPermission`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListDocumentPermission
- **HTTP**: `GET /v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions` (Default10 (sync))
- **Notes**: Retrieve a list of all Permissions applying to a Sync Document.
- **Signature**: `ListDocumentPermission(string serviceSid, string documentSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListDocumentPermissionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateDocumentPermission
- **HTTP**: `POST /v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}` (Default10 (sync))
- **Notes**: Update an identity's access to a specific Sync Document.
- **Signature**: `UpdateDocumentPermission(string serviceSid, string documentSid, string identity, bool read, bool write, bool manage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Read` ← `read`, `Write` ← `write`, `Manage` ← `manage`
- **Returns**: `SyncV1ServiceDocumentDocumentPermission`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
