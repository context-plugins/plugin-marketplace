# TrustChecklist — operations

Accessor: `client.TrustChecklist` · Source: `Api/TrustChecklist.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ChecklistServiceChecklistSummaries
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/checklist/summaries` (Default)
- **Signature**: `ChecklistServiceChecklistSummaries(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChecklistChecklistSummariesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChecklistServiceCreateChecklist
- **HTTP**: `POST /trust/api/v1/orgs/{orgId}/checklist/checklists` (Default)
- **Signature**: `ChecklistServiceCreateChecklist(string orgId, ChecklistServiceCreateChecklistBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChecklistCreateChecklistResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChecklistServiceDeleteChecklist
- **HTTP**: `DELETE /trust/api/v1/orgs/{orgId}/checklist/checklists/{id}` (Default)
- **Signature**: `ChecklistServiceDeleteChecklist(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChecklistServiceImportScanResults
- **HTTP**: `PATCH /trust/api/v1/orgs/{orgId}/checklist/checklists` (Default)
- **Signature**: `ChecklistServiceImportScanResults(string orgId, ChecklistServiceImportScanResultsBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChecklistImportScanResultsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChecklistServiceListChecklists
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/checklist/checklists` (Default)
- **Signature**: `ChecklistServiceListChecklists(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChecklistListChecklistsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChecklistServiceReadChecklist
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/checklist/checklists/{id}` (Default)
- **Signature**: `ChecklistServiceReadChecklist(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChecklistReadChecklistResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChecklistServiceUpdateChecklist
- **HTTP**: `PUT /trust/api/v1/orgs/{orgId}/checklist/checklists` (Default)
- **Signature**: `ChecklistServiceUpdateChecklist(string orgId, ChecklistServiceUpdateChecklistBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChecklistUpdateChecklistResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
