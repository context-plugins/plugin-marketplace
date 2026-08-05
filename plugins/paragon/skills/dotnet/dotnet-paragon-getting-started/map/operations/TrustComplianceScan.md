# TrustComplianceScan — operations

Accessor: `client.TrustComplianceScan` · Source: `Api/TrustComplianceScan.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ComplianceServiceCreateScan
- **HTTP**: `POST /trust/api/v1/orgs/{orgId}/compliance/scans` (Default)
- **Signature**: `ComplianceServiceCreateScan(string orgId, ComplianceServiceCreateScanBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ComplianceCreateScanResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ComplianceServiceDeleteScan
- **HTTP**: `DELETE /trust/api/v1/orgs/{orgId}/compliance/scans/{id}` (Default)
- **Signature**: `ComplianceServiceDeleteScan(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ComplianceServiceListScans
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/compliance/scans` (Default)
- **Signature**: `ComplianceServiceListScans(string orgId, int? selectionPaginationPageSize, int? selectionPaginationPageOffset, string? selectionFilteringFilter, IReadOnlyList<string>? selectionSortKeys, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`selectionPaginationPageSize` … `selectionSortKeys`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `selection.pagination.pageSize` ← `selectionPaginationPageSize`, `selection.pagination.pageOffset` ← `selectionPaginationPageOffset`, `selection.filtering.filter` ← `selectionFilteringFilter`, `selection.sort.keys` ← `selectionSortKeys`
- **Returns**: `ComplianceListScansResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ComplianceServiceListScansAverages
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/compliance/scans/averages` (Default)
- **Signature**: `ComplianceServiceListScansAverages(string orgId, string? selectionOrgId, int? selectionDaysInPast, string? selectionBenchmarkDoc, string? selectionProfile, string? selectionTailoringDoc, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`selectionOrgId` … `selectionTailoringDoc`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `selection.orgId` ← `selectionOrgId`, `selection.daysInPast` ← `selectionDaysInPast`, `selection.benchmarkDoc` ← `selectionBenchmarkDoc`, `selection.profile` ← `selectionProfile`, `selection.tailoringDoc` ← `selectionTailoringDoc`
- **Returns**: `ComplianceListScansAveragesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ComplianceServiceReadScan
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/compliance/scans/{id}` (Default)
- **Signature**: `ComplianceServiceReadScan(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ComplianceReadScanResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ComplianceServiceTargetStatus
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/compliance/scan/targets` (Default)
- **Signature**: `ComplianceServiceTargetStatus(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ComplianceTargetStatusResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
