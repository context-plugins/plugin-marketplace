# TrustScoringValueReport — operations

Accessor: `client.TrustScoringValueReport` · Source: `Api/TrustScoringValueReport.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ScoreServiceCreateValueReport
- **HTTP**: `POST /trust/api/v1/orgs/{orgId}/scoring/reports` (Default)
- **Signature**: `ScoreServiceCreateValueReport(string orgId, ScoreServiceCreateValueReportBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ScoreCreateValueReportResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ScoreServiceDeleteValueReport
- **HTTP**: `DELETE /trust/api/v1/orgs/{orgId}/scoring/reports/{id}` (Default)
- **Signature**: `ScoreServiceDeleteValueReport(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ScoreServiceListValueReports
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/scoring/reports` (Default)
- **Signature**: `ScoreServiceListValueReports(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ScoreListValueReportsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ScoreServiceReadValueReport
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/scoring/reports/{id}` (Default)
- **Signature**: `ScoreServiceReadValueReport(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ScoreReadValueReportResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
