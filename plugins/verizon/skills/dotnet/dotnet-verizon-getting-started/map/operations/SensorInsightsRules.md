# SensorInsightsRules — operations

Accessor: `client.SensorInsightsRules` · Source: `Api/SensorInsightsRules.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SensorInsightsListRulesRequest
- **HTTP**: `POST /dm/v1/rules/actions/query` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsListRulesRequest(DtoListRulesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ResourceRule>`
- **Error**: `SdkException<SensorInsightsListRulesRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsOverwriteRuleRequest
- **HTTP**: `POST /dm/v1/rules` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsOverwriteRuleRequest(DtoOverwriteRuleRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResourceRule`
- **Error**: `SdkException<SensorInsightsOverwriteRuleRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
