# TrustIntegritySku — operations

Accessor: `client.TrustIntegritySku` · Source: `Api/TrustIntegritySku.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### IntegrityServiceCreateSku
- **HTTP**: `POST /trust/api/v1/orgs/{orgId}/integrity/skus` (Default)
- **Signature**: `IntegrityServiceCreateSku(string orgId, IntegrityServiceCreateSkubody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IntegrityCreateSkuresponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### IntegrityServiceDeleteSku
- **HTTP**: `DELETE /trust/api/v1/orgs/{orgId}/integrity/skus/{id}` (Default)
- **Signature**: `IntegrityServiceDeleteSku(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### IntegrityServiceListSku
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/integrity/skus` (Default)
- **Signature**: `IntegrityServiceListSku(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IntegrityListSkuresponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### IntegrityServiceListSkudevices
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/integrity/skusdevices` (Default)
- **Signature**: `IntegrityServiceListSkudevices(string orgId, bool? excludeUnused, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `excludeUnused` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `excludeUnused` ← `excludeUnused`
- **Returns**: `IntegrityListSkudevicesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### IntegrityServiceListSkudevicesSearch
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/integrity/skusdevices/search` (Default)
- **Signature**: `IntegrityServiceListSkudevicesSearch(string orgId, bool? excludeUnused, int? selectionPaginationPageSize, int? selectionPaginationPageOffset, string? selectionFilteringFilter, IReadOnlyList<string>? selectionSortKeys, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`excludeUnused` … `selectionSortKeys`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `excludeUnused` ← `excludeUnused`, `selection.pagination.pageSize` ← `selectionPaginationPageSize`, `selection.pagination.pageOffset` ← `selectionPaginationPageOffset`, `selection.filtering.filter` ← `selectionFilteringFilter`, `selection.sort.keys` ← `selectionSortKeys`
- **Returns**: `IntegrityListSkudevicesSearchResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### IntegrityServiceListSkusearch
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/integrity/skus/search` (Default)
- **Signature**: `IntegrityServiceListSkusearch(string orgId, int? selectionPaginationPageSize, int? selectionPaginationPageOffset, string? selectionFilteringFilter, IReadOnlyList<string>? selectionSortKeys, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`selectionPaginationPageSize` … `selectionSortKeys`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `selection.pagination.pageSize` ← `selectionPaginationPageSize`, `selection.pagination.pageOffset` ← `selectionPaginationPageOffset`, `selection.filtering.filter` ← `selectionFilteringFilter`, `selection.sort.keys` ← `selectionSortKeys`
- **Returns**: `IntegrityListSkusearchResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### IntegrityServiceReadSku
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/integrity/skus/{id}` (Default)
- **Signature**: `IntegrityServiceReadSku(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IntegrityReadSkuresponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### IntegrityServiceReadSkudeviceCounts
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/integrity/skusdevices/counts` (Default)
- **Signature**: `IntegrityServiceReadSkudeviceCounts(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IntegrityReadSkudeviceCountsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### IntegrityServiceUpdateSku
- **HTTP**: `PUT /trust/api/v1/orgs/{orgId}/integrity/skus` (Default)
- **Signature**: `IntegrityServiceUpdateSku(string orgId, IntegrityServiceUpdateSkubody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IntegrityUpdateSkuresponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
