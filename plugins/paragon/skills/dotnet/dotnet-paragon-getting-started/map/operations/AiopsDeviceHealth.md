# AiopsDeviceHealth — operations

Accessor: `client.AiopsDeviceHealth` · Source: `Api/AiopsDeviceHealth.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AnomalyRca
- **HTTP**: `POST /jaiml/api/v1/orgs/{org_id}/devices/{device_id}/device_health/anomaly_rca` (Default)
- **Notes**: Return the anomaly logs for given field-name and additionally provide RCA for temperature field-name
- **Signature**: `AnomalyRca(Guid orgId, Guid deviceId, Guid siteId, IReadOnlyList<Datum1> data, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `site-id` ← `siteId`, `data` ← `data`
- **Returns**: `RcaOutput`
- **Error**: `SdkException<AnomalyRcaError>` — **Case A (typed)**
- **Error accessors**: `TryGetString(out string)` [405, 491, 493, 494, 495, 498] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AnomalyStatus
- **HTTP**: `POST /jaiml/api/v1/orgs/{org_id}/devices/{device_id}/device_health/anomaly_status` (Default)
- **Notes**: The Boundary provided by this API is used to determine if the device is undergoing an anomaly for given field-name by checking if its outside the boundary
- **Signature**: `AnomalyStatus(Guid orgId, Guid deviceId, Guid siteId, IReadOnlyList<Datum> data, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `site-id` ← `siteId`, `data` ← `data`
- **Returns**: `AnomalyOutput`
- **Error**: `SdkException<AnomalyStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetString(out string)` [405, 491, 493, 494, 495, 498] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
