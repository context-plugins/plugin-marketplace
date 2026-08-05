# SensorInsightsDevices — operations

Accessor: `client.SensorInsightsDevices` · Source: `Api/SensorInsightsDevices.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SensorInsightsDeviceActionSetRequest
- **HTTP**: `POST /dm/v1/devices/actions/set` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsDeviceActionSetRequest(DmV1DevicesActionsSetRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DtoDeviceActionSetResponse`
- **Error**: `SdkException<SensorInsightsDeviceActionSetRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsLastReportedTimeRequest
- **HTTP**: `POST /dm/v1/devices/lastreported` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsLastReportedTimeRequest(DtoLastReportedTimeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DtoLastReportedTimeResponse`
- **Error**: `SdkException<SensorInsightsLastReportedTimeRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsListDeviceExperienceHistoryRequest
- **HTTP**: `POST /dm/v1/devices/experience/actions/query` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsListDeviceExperienceHistoryRequest(DtoListDeviceExperienceHistoryRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<UserDeviceExperienceHistory>`
- **Error**: `SdkException<SensorInsightsListDeviceExperienceHistoryRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsListDevicesRequest
- **HTTP**: `POST /dm/v1/devices/actions/query` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsListDevicesRequest(DtoListDevicesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DtoExpandedDeviceResponse>`
- **Error**: `SdkException<SensorInsightsListDevicesRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError(out ManagementError)` [400, 401, 403, 404, 406, 415, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsListNetworkExperienceHistoryRequest
- **HTTP**: `POST /dm/v1/devices/networkexperience/actions/query` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsListNetworkExperienceHistoryRequest(DtoListNetworkExperienceHistoryRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<UserNetworkExperienceHistory>`
- **Error**: `SdkException<SensorInsightsListNetworkExperienceHistoryRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsPatchDeviceRequest
- **HTTP**: `PATCH /dm/v1/devices` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsPatchDeviceRequest(DtoPatchDeviceRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResourceDevice`
- **Error**: `SdkException<SensorInsightsPatchDeviceRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
