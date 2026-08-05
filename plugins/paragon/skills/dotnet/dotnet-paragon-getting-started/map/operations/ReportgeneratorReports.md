# ReportgeneratorReports — operations

Accessor: `client.ReportgeneratorReports` · Source: `Api/ReportgeneratorReports.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ReportGeneratorGenerateReport
- **HTTP**: `POST /report-generator/api/v1/orgs/{org_id}/types/{type}/{type_id}:generateReport` (Default)
- **Signature**: `ReportGeneratorGenerateReport(string orgId, string type, string typeId, ReportGeneratorGenerateReportBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
