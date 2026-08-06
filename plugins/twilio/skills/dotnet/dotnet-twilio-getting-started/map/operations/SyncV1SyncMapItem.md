# SyncV1SyncMapItem — operations

Accessor: `client.SyncV1SyncMapItem` · Source: `Api/SyncV1SyncMapItem.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSyncMapItem
- **HTTP**: `POST /v1/Services/{ServiceSid}/Maps/{MapSid}/Items` (Default12 (sync))
- **Signature**: `CreateSyncMapItem(string serviceSid, string mapSid, string key, object data, int? ttl, int? itemTtl, int? collectionTtl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ttl` — nullable, no default → **must pass explicitly**
  - `itemTtl` — nullable, no default → **must pass explicitly**
  - `collectionTtl` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Key` ← `key`, `Data` ← `data`, `Ttl` ← `ttl`, `ItemTtl` ← `itemTtl`, `CollectionTtl` ← `collectionTtl`
- **Returns**: `SyncV1ServiceSyncMapSyncMapItem`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSyncMapItem
- **HTTP**: `DELETE /v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}` (Default12 (sync))
- **Signature**: `DeleteSyncMapItem(string serviceSid, string mapSid, string key, string? ifMatch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ifMatch` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchSyncMapItem
- **HTTP**: `GET /v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}` (Default12 (sync))
- **Signature**: `FetchSyncMapItem(string serviceSid, string mapSid, string key, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SyncV1ServiceSyncMapSyncMapItem`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListSyncMapItem
- **HTTP**: `GET /v1/Services/{ServiceSid}/Maps/{MapSid}/Items` (Default12 (sync))
- **Signature**: `ListSyncMapItem(string serviceSid, string mapSid, ChallengeEnumListOrders? order, string? from, SyncMapItemEnumQueryFromBoundType? bounds, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`order` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Order` ← `order`, `From` ← `from`, `Bounds` ← `bounds`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSyncMapItemResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSyncMapItem
- **HTTP**: `POST /v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}` (Default12 (sync))
- **Signature**: `UpdateSyncMapItem(string serviceSid, string mapSid, string key, string? ifMatch, object? data, int? ttl, int? itemTtl, int? collectionTtl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`ifMatch` … `collectionTtl`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Data` ← `data`, `Ttl` ← `ttl`, `ItemTtl` ← `itemTtl`, `CollectionTtl` ← `collectionTtl`
- **Returns**: `SyncV1ServiceSyncMapSyncMapItem`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
