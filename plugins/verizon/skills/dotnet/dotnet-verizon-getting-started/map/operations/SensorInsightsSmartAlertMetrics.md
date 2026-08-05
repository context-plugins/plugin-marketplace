# SensorInsightsSmartAlertMetrics — operations

Accessor: `client.SensorInsightsSmartAlertMetrics` · Source: `Api/SensorInsightsSmartAlertMetrics.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Sensorinsightsmetricsquery
- **HTTP**: `POST /dm/v1/smartAlerts/actions/metrics` (HyperPreciseCredentials (thingspace))
- **Notes**: Get Device Alerts for the most recent daily period, up to 30 days.
- **Signature**: `Sensorinsightsmetricsquery(DtoQueryMetrics body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DtoQueryMetricsResponse`
- **Error**: `SdkException<SensorinsightsmetricsqueryError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
