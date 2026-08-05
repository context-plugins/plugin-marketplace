# SitesAlarms — operations

Accessor: `client.SitesAlarms` · Source: `Api/SitesAlarms.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AckSiteMultipleAlarms
- **HTTP**: `POST /api/v1/sites/{site_id}/alarms/ack` (ApiHost (api))
- **Notes**: Ack multiple Site Alarms
- **Signature**: `AckSiteMultipleAlarms(Guid siteId, AlarmAck? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AckSiteMultipleAlarmsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SubscribeSiteAlarms
- **HTTP**: `POST /api/v1/sites/{site_id}/subscriptions` (ApiHost (api))
- **Notes**: Subscribe to Site Alarms
- **Signature**: `SubscribeSiteAlarms(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SubscribeSiteAlarmsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnsubscribeSiteAlarms
- **HTTP**: `DELETE /api/v1/sites/{site_id}/subscriptions` (ApiHost (api))
- **Notes**: Unsubscribe to Site Alarms
- **Signature**: `UnsubscribeSiteAlarms(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnsubscribeSiteAlarmsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AckSiteAlarm
- **HTTP**: `POST /api/v1/sites/{site_id}/alarms/{alarm_id}/ack` (ApiHost (api))
- **Notes**: Ack Site Alarm
- **Signature**: `AckSiteAlarm(Guid siteId, Guid alarmId, NoteString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AckSiteAlarmError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AckSiteAllAlarms
- **HTTP**: `POST /api/v1/sites/{site_id}/alarms/ack_all` (ApiHost (api))
- **Notes**: Ack all Site Alarms N.B. : Batch size for multiple alarm ack and unack has to be less or or equal to 1000.
- **Signature**: `AckSiteAllAlarms(Guid siteId, NoteString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AckSiteAllAlarmsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CountSiteAlarms
- **HTTP**: `GET /api/v1/sites/{site_id}/alarms/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Site Alarms
- **Signature**: `CountSiteAlarms(Guid siteId, AlarmCountDistinct? distinct, string? ackAdminName, bool? acked, string? type, string? severity, string? group, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `ack_admin_name` ← `ackAdminName`, `acked` ← `acked`, `type` ← `type`, `severity` ← `severity`, `group` ← `group`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteAlarmsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchSiteAlarms
- **HTTP**: `GET /api/v1/sites/{site_id}/alarms/search` (ApiHost (api))
- **Notes**: Search Site Alarms
- **Signature**: `SearchSiteAlarms(Guid siteId, string? type, string? ackAdminName, bool? acked, string? severity, string? group, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`type` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `ack_admin_name` ← `ackAdminName`, `acked` ← `acked`, `severity` ← `severity`, `group` ← `group`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `AlarmSearchResult`
- **Error**: `SdkException<SearchSiteAlarmsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnackSiteAlarm
- **HTTP**: `POST /api/v1/sites/{site_id}/alarms/{alarm_id}/unack` (ApiHost (api))
- **Notes**: Unack Site Alarm
- **Signature**: `UnackSiteAlarm(Guid siteId, Guid alarmId, NoteString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnackSiteAlarmError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnackSiteAllAlarms
- **HTTP**: `POST /api/v1/sites/{site_id}/alarms/unack_all` (ApiHost (api))
- **Notes**: Unack all Site Alarms N.B. : Batch size for multiple alarm ack and unack has to be less or or equal to 1000.
- **Signature**: `UnackSiteAllAlarms(Guid siteId, NoteString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnackSiteAllAlarmsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnackSiteMultipleAlarms
- **HTTP**: `POST /api/v1/sites/{site_id}/alarms/unack` (ApiHost (api))
- **Notes**: Unack multiple Site Alarms
- **Signature**: `UnackSiteMultipleAlarms(Guid siteId, AlarmAck? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnackSiteMultipleAlarmsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
