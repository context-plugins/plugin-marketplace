# SyncV1SyncListPermission — operations

Accessor: `client.SyncV1SyncListPermission` · Source: `Api/SyncV1SyncListPermission.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteSyncListPermission
- **HTTP**: `DELETE /v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}` (Default12 (sync))
- **Notes**: Delete a specific Sync List Permission.
- **Signature**: `DeleteSyncListPermission(string serviceSid, string listSid, string identity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchSyncListPermission
- **HTTP**: `GET /v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}` (Default12 (sync))
- **Notes**: Fetch a specific Sync List Permission.
- **Signature**: `FetchSyncListPermission(string serviceSid, string listSid, string identity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SyncV1ServiceSyncListSyncListPermission`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListSyncListPermission
- **HTTP**: `GET /v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions` (Default12 (sync))
- **Notes**: Retrieve a list of all Permissions applying to a Sync List.
- **Signature**: `ListSyncListPermission(string serviceSid, string listSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSyncListPermissionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSyncListPermission
- **HTTP**: `POST /v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}` (Default12 (sync))
- **Notes**: Update an identity's access to a specific Sync List.
- **Signature**: `UpdateSyncListPermission(string serviceSid, string listSid, string identity, bool read, bool write, bool manage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Read` ← `read`, `Write` ← `write`, `Manage` ← `manage`
- **Returns**: `SyncV1ServiceSyncListSyncListPermission`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
