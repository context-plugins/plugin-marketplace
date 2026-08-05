# TagsTagDeprecated — operations

Accessor: `client.TagsTagDeprecated` · Source: `Api/TagsTagDeprecated.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### TagServiceCreate2
- **HTTP**: `POST /tagging/api/v1.1alpha/{org-id}/tags` (Default)
- **Signature**: `TagServiceCreate2(string orgId, TagServiceCreateBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TagCreateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TagServiceDelete2
- **HTTP**: `DELETE /tagging/api/v1.1alpha/{org-id}/tags/{id}` (Default)
- **Signature**: `TagServiceDelete2(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TagServiceGet2
- **HTTP**: `GET /tagging/api/v1.1alpha/{org-id}/tags/{id}` (Default)
- **Signature**: `TagServiceGet2(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TagGetResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TagServiceList2
- **HTTP**: `GET /tagging/api/v1.1alpha/{org-id}/tags` (Default)
- **Signature**: `TagServiceList2(string orgId, int? selectionPaginationPageSize, int? selectionPaginationPageOffset, string? selectionFilterFilter, IReadOnlyList<string>? selectionSortKeys, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`selectionPaginationPageSize` … `selectionSortKeys`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `selection.pagination.pageSize` ← `selectionPaginationPageSize`, `selection.pagination.pageOffset` ← `selectionPaginationPageOffset`, `selection.filter.filter` ← `selectionFilterFilter`, `selection.sort.keys` ← `selectionSortKeys`
- **Returns**: `TagListResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TagServiceUpdate2
- **HTTP**: `PUT /tagging/api/v1.1alpha/{org-id}/tags/{id}` (Default)
- **Signature**: `TagServiceUpdate2(string orgId, string id, TagServiceUpdateBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TagUpdateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
