# OrgsAlarms — operations

Accessor: `client.OrgsAlarms` · Source: `Api/OrgsAlarms.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AckOrgAlarm
- **HTTP**: `POST /api/v1/orgs/{org_id}/alarms/{alarm_id}/ack` (ApiHost (api))
- **Notes**: Ack Org Alarm
- **Signature**: `AckOrgAlarm(Guid orgId, Guid alarmId, NoteString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AckOrgAlarmError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AckOrgAllAlarms
- **HTTP**: `POST /api/v1/orgs/{org_id}/alarms/ack_all` (ApiHost (api))
- **Notes**: Ack all Org Alarms N.B. : Batch size for multiple alarm ack and unack has to be less or or equal to 1000.
- **Signature**: `AckOrgAllAlarms(Guid orgId, NoteString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AckOrgAllAlarmsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AckOrgMultipleAlarms
- **HTTP**: `POST /api/v1/orgs/{org_id}/alarms/ack` (ApiHost (api))
- **Notes**: Ack multiple Org Alarms
- **Signature**: `AckOrgMultipleAlarms(Guid orgId, Alarms? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AckOrgMultipleAlarmsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CountOrgAlarms
- **HTTP**: `GET /api/v1/orgs/{org_id}/alarms/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Org Alarms
- **Signature**: `CountOrgAlarms(Guid orgId, string? distinct, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgAlarmsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgAlarms
- **HTTP**: `GET /api/v1/orgs/{org_id}/alarms/search` (ApiHost (api))
- **Notes**: Search Org Alarms
- **Signature**: `SearchOrgAlarms(Guid orgId, Guid? siteId, string? type, string? status, int? start, int? end, string? duration = "1d", int? limit = 100, string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`siteId` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `site_id` ← `siteId`, `type` ← `type`, `status` ← `status`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `sort` ← `sort`
- **Returns**: `AlarmSearchResult`
- **Error**: `SdkException<SearchOrgAlarmsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SubscribeOrgAlarmsReports
- **HTTP**: `POST /api/v1/orgs/{org_id}/subscriptions` (ApiHost (api))
- **Notes**: Subscribe to Org Alarms/Reports Subscriptions define how Org Alarms/Reports are delivered to whom
- **Signature**: `SubscribeOrgAlarmsReports(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SubscribeOrgAlarmsReportsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnackOrgAllAlarms
- **HTTP**: `POST /api/v1/orgs/{org_id}/alarms/unack_all` (ApiHost (api))
- **Notes**: Unack all Org Alarms N.B. : Batch size for multiple alarm ack and unack has to be less or or equal to 1000.
- **Signature**: `UnackOrgAllAlarms(Guid orgId, NoteString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnackOrgAllAlarmsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnackOrgMultipleAlarms
- **HTTP**: `POST /api/v1/orgs/{org_id}/alarms/unack` (ApiHost (api))
- **Notes**: Unack multiple Org Alarms
- **Signature**: `UnackOrgMultipleAlarms(Guid orgId, Alarms? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnackOrgMultipleAlarmsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnsubscribeOrgAlarmsReports
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/subscriptions` (ApiHost (api))
- **Notes**: Unsubscribe from Org Alarms/Reports Subscriptions define how Org Alarms/Reports are delivered to whom
- **Signature**: `UnsubscribeOrgAlarmsReports(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnsubscribeOrgAlarmsReportsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
