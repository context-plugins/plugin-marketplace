# DeviceReports — operations

Accessor: `client.DeviceReports` · Source: `Api/DeviceReports.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CalculateAggregatedReportAsynchronous
- **HTTP**: `POST /report/async/aggregate` (HyperPreciseLocation (thingspace))
- **Notes**: Calculate aggregated report per day with number of sessions and usage information. User will receive an asynchronous callback for the specified list of devices (Max 10000) and date range (Max 180 days).
- **Signature**: `CalculateAggregatedReportAsynchronous(AggregateSessionReportRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AggregatedReportCallbackResult`
- **Error**: `SdkException<CalculateAggregatedReportAsynchronousError>` — **Case A (typed)**
- **Error accessors**: `TryGetHyperPreciseLocationResult(out HyperPreciseLocationResult)` [400, 401, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CalculateAggregatedReportSynchronous
- **HTTP**: `POST /report/aggregate` (HyperPreciseLocation (thingspace))
- **Notes**: Calculate aggregated report per day with number of sessions and usage information. User will receive synchronous response for specified list of devices (Max 10) and date range (Max 180 days).
- **Signature**: `CalculateAggregatedReportSynchronous(AggregateSessionReportRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AggregateSessionReport`
- **Error**: `SdkException<CalculateAggregatedReportSynchronousError>` — **Case A (typed)**
- **Error accessors**: `TryGetHyperPreciseLocationResult(out HyperPreciseLocationResult)` [400, 401, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSessionsReport
- **HTTP**: `POST /report/sessions` (HyperPreciseLocation (thingspace))
- **Notes**: Detailed report of session duration and number of bytes transferred per day.
- **Signature**: `GetSessionsReport(SessionReportRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SessionReport`
- **Error**: `SdkException<GetSessionsReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetHyperPreciseLocationResult(out HyperPreciseLocationResult)` [400, 401, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
