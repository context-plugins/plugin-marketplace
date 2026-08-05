# TrustComplianceDocument — operations

Accessor: `client.TrustComplianceDocument` · Source: `Api/TrustComplianceDocument.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ComplianceServiceCreateDocument
- **HTTP**: `POST /trust/api/v1/orgs/{orgId}/compliance/documents` (Default)
- **Signature**: `ComplianceServiceCreateDocument(string orgId, ComplianceServiceCreateDocumentBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ComplianceCreateDocumentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ComplianceServiceDeleteDocument
- **HTTP**: `DELETE /trust/api/v1/orgs/{orgId}/compliance/documents/{id}` (Default)
- **Signature**: `ComplianceServiceDeleteDocument(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ComplianceServiceListDocuments
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/compliance/documents` (Default)
- **Signature**: `ComplianceServiceListDocuments(string orgId, string? location, string? name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `location` — nullable, no default → **must pass explicitly**
  - `name` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `location` ← `location`, `name` ← `name`
- **Returns**: `ComplianceListDocumentsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ComplianceServiceListDocumentsSearch
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/compliance/documents/search` (Default)
- **Signature**: `ComplianceServiceListDocumentsSearch(string orgId, int? selectionPaginationPageSize, int? selectionPaginationPageOffset, string? selectionFilteringFilter, IReadOnlyList<string>? selectionSortKeys, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`selectionPaginationPageSize` … `selectionSortKeys`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `selection.pagination.pageSize` ← `selectionPaginationPageSize`, `selection.pagination.pageOffset` ← `selectionPaginationPageOffset`, `selection.filtering.filter` ← `selectionFilteringFilter`, `selection.sort.keys` ← `selectionSortKeys`
- **Returns**: `ComplianceListDocumentsSearchResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ComplianceServiceReadDocument
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/compliance/documents/{id}` (Default)
- **Signature**: `ComplianceServiceReadDocument(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ComplianceReadDocumentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
