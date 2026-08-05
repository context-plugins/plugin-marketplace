# SyncV1SyncMapPermission — operations

Accessor: `client.SyncV1SyncMapPermission` · Source: `Api/SyncV1SyncMapPermission.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteSyncMapPermission
- **HTTP**: `DELETE /v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}` (Default10 (sync))
- **Notes**: Delete a specific Sync Map Permission.
- **Signature**: `DeleteSyncMapPermission(string serviceSid, string mapSid, string identity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchSyncMapPermission
- **HTTP**: `GET /v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}` (Default10 (sync))
- **Notes**: Fetch a specific Sync Map Permission.
- **Signature**: `FetchSyncMapPermission(string serviceSid, string mapSid, string identity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SyncV1ServiceSyncMapSyncMapPermission`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListSyncMapPermission
- **HTTP**: `GET /v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions` (Default10 (sync))
- **Notes**: Retrieve a list of all Permissions applying to a Sync Map.
- **Signature**: `ListSyncMapPermission(string serviceSid, string mapSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSyncMapPermissionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSyncMapPermission
- **HTTP**: `POST /v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}` (Default10 (sync))
- **Notes**: Update an identity's access to a specific Sync Map.
- **Signature**: `UpdateSyncMapPermission(string serviceSid, string mapSid, string identity, bool read, bool write, bool manage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Read` ← `read`, `Write` ← `write`, `Manage` ← `manage`
- **Returns**: `SyncV1ServiceSyncMapSyncMapPermission`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
