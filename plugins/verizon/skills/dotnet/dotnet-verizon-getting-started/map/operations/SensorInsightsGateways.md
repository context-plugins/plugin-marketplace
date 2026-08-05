# SensorInsightsGateways — operations

Accessor: `client.SensorInsightsGateways` · Source: `Api/SensorInsightsGateways.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SensorInsightsListGatewayDevicesRequest
- **HTTP**: `POST /dm/v1/devices/gateways/actions/query` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsListGatewayDevicesRequest(DtoListDevicesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ResourceDevice>`
- **Error**: `SdkException<SensorInsightsListGatewayDevicesRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
