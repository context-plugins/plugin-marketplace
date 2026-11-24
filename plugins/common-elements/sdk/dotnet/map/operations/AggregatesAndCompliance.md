<!-- Generated file — do not edit; regenerated with the SDK. -->

# AggregatesAndCompliance — operations

Accessor: `client.AggregatesAndCompliance` · Source: `src/CommonElements/Api/AggregatesAndCompliance.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ComplianceScan

- **Auth**: `options.BearerAuth`
- **Signature**: `ComplianceScan(ComplianceScanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ApiV1ComplianceScanResponse`
- **Error**: `ApiException<ComplianceScanError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ComplianceScanRequest` | `src/CommonElements/Requests/AggregatesAndCompliance/ComplianceScanRequest.cs` |
| `ApiV1ComplianceScanRequest` | `src/CommonElements/Models/ApiV1ComplianceScanRequest.cs` |
| `ApiV1ComplianceScanResponse` | `src/CommonElements/Models/ApiV1ComplianceScanResponse.cs` |
| `ComplianceScanError` | `src/CommonElements/Errors/ComplianceScanError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

### GeoStateSummary

- **Auth**: `options.BearerAuth`
- **Signature**: `GeoStateSummary(GeoStateSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `state` ← `State`
- **Returns**: `ApiV1GeoStateSummaryResponse`
- **Error**: `ApiException<GeoStateSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GeoStateSummaryRequest` | `src/CommonElements/Requests/AggregatesAndCompliance/GeoStateSummaryRequest.cs` |
| `ApiV1GeoStateSummaryResponse` | `src/CommonElements/Models/ApiV1GeoStateSummaryResponse.cs` |
| `GeoStateSummaryError` | `src/CommonElements/Errors/GeoStateSummaryError.cs` |
| `Error` | `src/CommonElements/Models/Error.cs` |

