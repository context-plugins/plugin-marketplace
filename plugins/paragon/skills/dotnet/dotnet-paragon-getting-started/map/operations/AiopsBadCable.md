# AiopsBadCable — operations

Accessor: `client.AiopsBadCable` · Source: `Api/AiopsBadCable.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetLinkAnomalyStatus
- **HTTP**: `GET /jaiml/api/v1/orgs/{org_id}/interface_health/link_anomaly_status` (Default)
- **Notes**: Provides details of features contributing to cable health status
- **Signature**: `GetLinkAnomalyStatus(Guid orgId, Guid siteId, Guid deviceId, DateTimeOffset time, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `site_id` ← `siteId`, `device_id` ← `deviceId`, `time` ← `time`
- **Returns**: `BadCableEntry`
- **Error**: `SdkException<GetLinkAnomalyStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetString(out string)` [491, 493, 494, 495, 498] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetLinkAnomalyStatusDetails
- **HTTP**: `GET /jaiml/api/v1/orgs/{org_id}/interface_health/link_anomaly_status_details` (Default)
- **Notes**: Get information about cable health based on severity, category and status
- **Signature**: `GetLinkAnomalyStatusDetails(Guid orgId, Guid? siteId, Guid? deviceId, string? category, string? startTime, string? endTime, string? severity, Sort? sort, string? status, string? alarmSeverity, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`siteId` … `alarmSeverity`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `site_id` ← `siteId`, `device_id` ← `deviceId`, `category` ← `category`, `start_time` ← `startTime`, `end_time` ← `endTime`, `severity` ← `severity`, `sort` ← `sort`, `status` ← `status`, `alarm_severity` ← `alarmSeverity`
- **Returns**: `BadCableAnomalyStatusDetails`
- **Error**: `SdkException<GetLinkAnomalyStatusDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetString(out string)` [491, 493, 494, 495, 498] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
