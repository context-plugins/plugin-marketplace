# TrustSnapshot — operations

Accessor: `client.TrustSnapshot` · Source: `Api/TrustSnapshot.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SnapshotServiceCreate
- **HTTP**: `POST /trust/api/v1/orgs/{orgId}/snapshots` (Default)
- **Signature**: `SnapshotServiceCreate(string orgId, SnapshotSnapshotServiceCreateBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SnapshotCreateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SnapshotServiceDelete
- **HTTP**: `DELETE /trust/api/v1/orgs/{orgId}/snapshots/{id}` (Default)
- **Signature**: `SnapshotServiceDelete(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SnapshotServiceList
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/snapshots` (Default)
- **Signature**: `SnapshotServiceList(string orgId, int? selectionPaginationPageSize, int? selectionPaginationPageOffset, string? selectionFilteringFilter, IReadOnlyList<string>? selectionSortKeys, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`selectionPaginationPageSize` … `selectionSortKeys`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `selection.pagination.pageSize` ← `selectionPaginationPageSize`, `selection.pagination.pageOffset` ← `selectionPaginationPageOffset`, `selection.filtering.filter` ← `selectionFilteringFilter`, `selection.sort.keys` ← `selectionSortKeys`
- **Returns**: `SnapshotListResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SnapshotServiceRead
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/snapshots/{id}` (Default)
- **Signature**: `SnapshotServiceRead(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SnapshotReadResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
