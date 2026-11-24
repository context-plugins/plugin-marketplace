<!-- Generated file — do not edit; regenerated with the SDK. -->

# DiagnosticReportApi — operations

Accessor: `client.DiagnosticReportApi` · Source: `src/HealthGorilla/Api/DiagnosticReportApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ReadDiagnosticReport

- **Auth**: `options.BearerAuth`
- **Signature**: `ReadDiagnosticReport(ReadDiagnosticReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `DiagnosticReport`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ReadDiagnosticReportRequest` | `src/HealthGorilla/Requests/DiagnosticReportApi/ReadDiagnosticReportRequest.cs` |
| `DiagnosticReport` | `src/HealthGorilla/Models/DiagnosticReport.cs` |

### SearchDiagnosticReports

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchDiagnosticReports(SearchDiagnosticReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `patient` ← `Patient`, `category` ← `Category`, `date` ← `Date`, `_count` ← `Count`
- **Returns**: `Bundle`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `SearchDiagnosticReportsRequest` | `src/HealthGorilla/Requests/DiagnosticReportApi/SearchDiagnosticReportsRequest.cs` |
| `Bundle` | `src/HealthGorilla/Models/Bundle.cs` |

