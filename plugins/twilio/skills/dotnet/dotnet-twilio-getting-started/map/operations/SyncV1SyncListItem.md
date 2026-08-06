# SyncV1SyncListItem — operations

Accessor: `client.SyncV1SyncListItem` · Source: `Api/SyncV1SyncListItem.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSyncListItem
- **HTTP**: `POST /v1/Services/{ServiceSid}/Lists/{ListSid}/Items` (Default12 (sync))
- **Signature**: `CreateSyncListItem(string serviceSid, string listSid, object data, int? ttl, int? itemTtl, int? collectionTtl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ttl` — nullable, no default → **must pass explicitly**
  - `itemTtl` — nullable, no default → **must pass explicitly**
  - `collectionTtl` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Data` ← `data`, `Ttl` ← `ttl`, `ItemTtl` ← `itemTtl`, `CollectionTtl` ← `collectionTtl`
- **Returns**: `SyncV1ServiceSyncListSyncListItem`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSyncListItem
- **HTTP**: `DELETE /v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}` (Default12 (sync))
- **Signature**: `DeleteSyncListItem(string serviceSid, string listSid, int index, string? ifMatch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ifMatch` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchSyncListItem
- **HTTP**: `GET /v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}` (Default12 (sync))
- **Signature**: `FetchSyncListItem(string serviceSid, string listSid, int index, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SyncV1ServiceSyncListSyncListItem`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListSyncListItem
- **HTTP**: `GET /v1/Services/{ServiceSid}/Lists/{ListSid}/Items` (Default12 (sync))
- **Signature**: `ListSyncListItem(string serviceSid, string listSid, ChallengeEnumListOrders? order, string? from, SyncListItemEnumQueryFromBoundType? bounds, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`order` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Order` ← `order`, `From` ← `from`, `Bounds` ← `bounds`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListSyncListItemResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSyncListItem
- **HTTP**: `POST /v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}` (Default12 (sync))
- **Signature**: `UpdateSyncListItem(string serviceSid, string listSid, int index, string? ifMatch, object? data, int? ttl, int? itemTtl, int? collectionTtl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`ifMatch` … `collectionTtl`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Data` ← `data`, `Ttl` ← `ttl`, `ItemTtl` ← `itemTtl`, `CollectionTtl` ← `collectionTtl`
- **Returns**: `SyncV1ServiceSyncListSyncListItem`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
