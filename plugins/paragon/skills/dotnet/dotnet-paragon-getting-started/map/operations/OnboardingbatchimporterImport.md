# OnboardingbatchimporterImport — operations

Accessor: `client.OnboardingbatchimporterImport` · Source: `Api/OnboardingbatchimporterImport.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ImportServiceAbortBatch
- **HTTP**: `DELETE /bulk-onboarding/api/v1/orgs/{org-id}/imports/batch/{batchId}` (Default)
- **Signature**: `ImportServiceAbortBatch(string orgId, string batchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V1AbortBatchResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ImportServiceCreateBatch
- **HTTP**: `POST /bulk-onboarding/api/v1/orgs/{org-id}/imports/batch` (Default)
- **Signature**: `ImportServiceCreateBatch(string orgId, ImportServiceCreateBatchBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V1CreateBatchResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ImportServiceGetBatch
- **HTTP**: `GET /bulk-onboarding/api/v1/orgs/{org-id}/imports/batch/{batchId}` (Default)
- **Signature**: `ImportServiceGetBatch(string orgId, string batchId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V1GetBatchResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ImportServiceListBatches
- **HTTP**: `GET /bulk-onboarding/api/v1/orgs/{org-id}/imports/batch` (Default)
- **Signature**: `ImportServiceListBatches(string orgId, int? selectionPaginationPageSize, int? selectionPaginationPageOffset, string? selectionFilterFilter, IReadOnlyList<string>? selectionSortKeys, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`selectionPaginationPageSize` … `selectionSortKeys`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `selection.pagination.pageSize` ← `selectionPaginationPageSize`, `selection.pagination.pageOffset` ← `selectionPaginationPageOffset`, `selection.filter.filter` ← `selectionFilterFilter`, `selection.sort.keys` ← `selectionSortKeys`
- **Returns**: `V1ListBatchesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
