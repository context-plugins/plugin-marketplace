# SensorInsightsSensors — operations

Accessor: `client.SensorInsightsSensors` · Source: `Api/SensorInsightsSensors.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SensorInsightsListSensorDevicesRequest
- **HTTP**: `POST /dm/v1/devices/sensors/actions/query` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsListSensorDevicesRequest(DtoListSensorDevicesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<ResourceDevice>`
- **Error**: `SdkException<SensorInsightsListSensorDevicesRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsOffBoardSensorRequest
- **HTTP**: `POST /dm/v1/devices/sensors/offboard` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsOffBoardSensorRequest(DtoOffBoardSensorRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SensorInsightsOffBoardSensorRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsOnBoardSensorRequest
- **HTTP**: `POST /dm/v1/devices/sensors/onboard` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsOnBoardSensorRequest(DtoOnBoardSensorRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SensorInsightsOnBoardSensorRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsSensorOffBoardingStatusRequest
- **HTTP**: `POST /dm/v1/devices/sensors/offboard/status/actions/query` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsSensorOffBoardingStatusRequest(DtoSensorOffBoardStatusRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DtoSensorOffBoardingStatusResponse`
- **Error**: `SdkException<SensorInsightsSensorOffBoardingStatusRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SensorInsightsSensorOnBoardStatusRequest
- **HTTP**: `POST /dm/v1/devices/sensors/onboard/status/actions/query` (HyperPreciseCredentials (thingspace))
- **Signature**: `SensorInsightsSensorOnBoardStatusRequest(DtoSensorOnBoardStatusRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DtoSensorOnBoardingStatusResponse`
- **Error**: `SdkException<SensorInsightsSensorOnBoardStatusRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401, 406, 415, 429] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError404(out ManagementError404)` [404] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
