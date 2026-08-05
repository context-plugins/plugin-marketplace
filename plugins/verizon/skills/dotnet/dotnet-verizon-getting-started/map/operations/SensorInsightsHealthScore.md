# SensorInsightsHealthScore — operations

Accessor: `client.SensorInsightsHealthScore` · Source: `Api/SensorInsightsHealthScore.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SensorInsightsGetNetworkHealthScoreResponse
- **HTTP**: `POST /dm/v1/healthscore/network` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsGetNetworkHealthScoreResponse(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DtoGetNetworkHealthScoreResponse`
- **Error**: `SdkException<SensorInsightsGetNetworkHealthScoreResponseError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsHealthScoreSummary
- **HTTP**: `POST /dm/v1/healthscore/summary` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsHealthScoreSummary(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DtoHealthScoreSummary`
- **Error**: `SdkException<SensorInsightsHealthScoreSummaryError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
