# ActiveassuranceMeasurementReports — operations

Accessor: `client.ActiveassuranceMeasurementReports` · Source: `Api/ActiveassuranceMeasurementReports.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### MeasurementReportServiceGetMeasurementReport
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/measurement_reports/{measurement_report_id}` (Default)
- **Signature**: `MeasurementReportServiceGetMeasurementReport(string orgId, string measurementReportId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MeasurementReport`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MeasurementReportServiceListMeasurementReports
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/measurement_reports` (Default)
- **Signature**: `MeasurementReportServiceListMeasurementReports(string orgId, int? page, int? limit, string? filter, string? orderBy, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`page` … `orderBy`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `filter` ← `filter`, `order_by` ← `orderBy`
- **Returns**: `ListMeasurementReportsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
