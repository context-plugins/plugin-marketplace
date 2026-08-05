# AiopsBlackhole — operations

Accessor: `client.AiopsBlackhole` · Source: `Api/AiopsBlackhole.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AlertEvents
- **HTTP**: `GET /jaiml/api/v1/orgs/{org_id}/blackhole/alert_events` (Default)
- **Notes**: Get blackhole and packet drop anomalies alerts for the device.
- **Signature**: `AlertEvents(Guid orgId, Guid deviceId, string startTime, string endTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `device_id` ← `deviceId`, `start_time` ← `startTime`, `end_time` ← `endTime`
- **Returns**: `DeviceAlertInfo`
- **Error**: `SdkException<AlertEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [405] · `TryGetString(out string)` [491, 493, 494, 495, 498] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeviceStatus
- **HTTP**: `GET /jaiml/api/v1/orgs/{org_id}/blackhole/device_status` (Default)
- **Notes**: Get the input, output and drop rate in terms of packets per second, along with the timestamp of the device.
- **Signature**: `DeviceStatus(Guid orgId, Guid deviceId, string startTime, string endTime, string interval, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `device_id` ← `deviceId`, `start_time` ← `startTime`, `end_time` ← `endTime`, `interval` ← `interval`
- **Returns**: `DevicePacketInfo`
- **Error**: `SdkException<DeviceStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [405] · `TryGetString(out string)` [491, 493, 494, 495, 498] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### HasBlackhole
- **HTTP**: `GET /jaiml/api/v1/orgs/{org_id}/blackhole/has_blackhole` (Default)
- **Notes**: Given the Org ID and Device ID, this API returns a JSON object with a boolean flag indicating if the device currently has a blackhole and the number of active alerts.
- **Signature**: `HasBlackhole(Guid orgId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `device_id` ← `deviceId`
- **Returns**: `HasBlackholeDeviceInfo`
- **Error**: `SdkException<HasBlackholeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 405] · `TryGetString(out string)` [491, 493, 494, 495, 498] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### IsFabricHealthEnabled
- **HTTP**: `GET /jaiml/api/v1/orgs/{org_id}/blackhole/is_fabric_health_enabled` (Default)
- **Notes**: Given the Org ID and Device ID, this API checks per-device NIP config and returns whether fabric health detection is enabled.
- **Signature**: `IsFabricHealthEnabled(Guid orgId, Guid deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `device_id` ← `deviceId`
- **Returns**: `IsFabricHealthEnabledDeviceInfo`
- **Error**: `SdkException<IsFabricHealthEnabledError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404, 405] · `TryGetString(out string)` [491, 493, 494, 495, 498] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
