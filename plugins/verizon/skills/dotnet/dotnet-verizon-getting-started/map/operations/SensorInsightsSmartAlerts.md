# SensorInsightsSmartAlerts — operations

Accessor: `client.SensorInsightsSmartAlerts` · Source: `Api/SensorInsightsSmartAlerts.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SensorInsightsBulkUpdate
- **HTTP**: `POST /dm/v1/smartAlerts/actions/bulkupdate` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsBulkUpdate(DtoBulkUpdate body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UserSmartAlert`
- **Error**: `SdkException<SensorInsightsBulkUpdateError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsListSmartAlertsRequest
- **HTTP**: `POST /dm/v1/smartAlerts/actions/query` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsListSmartAlertsRequest(DtoListSmartAlertsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<UserSmartAlert>`
- **Error**: `SdkException<SensorInsightsListSmartAlertsRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsPatchSmartAlertRequest
- **HTTP**: `PATCH /dm/v1/smartAlerts` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsPatchSmartAlertRequest(DtoPatchSmartAlertRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UserSmartAlert`
- **Error**: `SdkException<SensorInsightsPatchSmartAlertRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
