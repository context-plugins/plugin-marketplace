# TagsObjectDeprecated — operations

Accessor: `client.TagsObjectDeprecated` · Source: `Api/TagsObjectDeprecated.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ObjectServiceAssign2
- **HTTP**: `POST /tagging/api/v1.1alpha/{org-id}/objects/assign` (Default)
- **Signature**: `ObjectServiceAssign2(string orgId, ObjectServiceAssignBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ObjectAssignResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ObjectServiceList2
- **HTTP**: `GET /tagging/api/v1.1alpha/{org-id}/objects` (Default)
- **Signature**: `ObjectServiceList2(string orgId, int? selectionPaginationPageSize, int? selectionPaginationPageOffset, string? selectionFilterFilter, IReadOnlyList<string>? selectionSortKeys, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`selectionPaginationPageSize` … `selectionSortKeys`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `selection.pagination.pageSize` ← `selectionPaginationPageSize`, `selection.pagination.pageOffset` ← `selectionPaginationPageOffset`, `selection.filter.filter` ← `selectionFilterFilter`, `selection.sort.keys` ← `selectionSortKeys`
- **Returns**: `ObjectListResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ObjectServiceSearch2
- **HTTP**: `POST /tagging/api/v1.1alpha/{org-id}/objects/search` (Default)
- **Signature**: `ObjectServiceSearch2(string orgId, ObjectServiceSearchBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ObjectSearchResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ObjectServiceUnassign2
- **HTTP**: `POST /tagging/api/v1.1alpha/{org-id}/objects/unassign` (Default)
- **Signature**: `ObjectServiceUnassign2(string orgId, ObjectServiceUnassignBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ObjectUnassignResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
