# OrgsAlarmTemplates — operations

Accessor: `client.OrgsAlarmTemplates` · Source: `Api/OrgsAlarmTemplates.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgAlarmTemplate
- **HTTP**: `POST /api/v1/orgs/{org_id}/alarmtemplates` (ApiHost (api))
- **Notes**: Available rules can be found in List Alarm DefinitionsThe delivery dict is only required if different from the template delivery settings.
- **Signature**: `CreateOrgAlarmTemplate(Guid orgId, AlarmTemplate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AlarmTemplate`
- **Error**: `SdkException<CreateOrgAlarmTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgAlarmTemplate
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/alarmtemplates/{alarmtemplate_id}` (ApiHost (api))
- **Notes**: Delete Org Alarm Template
- **Signature**: `DeleteOrgAlarmTemplate(Guid orgId, Guid alarmtemplateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgAlarmTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgAlarmTemplate
- **HTTP**: `GET /api/v1/orgs/{org_id}/alarmtemplates/{alarmtemplate_id}` (ApiHost (api))
- **Notes**: Get Org Alarm Template Details
- **Signature**: `GetOrgAlarmTemplate(Guid orgId, Guid alarmtemplateId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AlarmTemplate`
- **Error**: `SdkException<GetOrgAlarmTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgAlarmTemplates
- **HTTP**: `GET /api/v1/orgs/{org_id}/alarmtemplates` (ApiHost (api))
- **Notes**: Get List of Org Alarm Templates
- **Signature**: `ListOrgAlarmTemplates(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<AlarmTemplate>`
- **Error**: `SdkException<ListOrgAlarmTemplatesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListOrgSuppressedAlarms
- **HTTP**: `GET /api/v1/orgs/{org_id}/alarmtemplates/suppress` (ApiHost (api))
- **Notes**: Get List of Org Alarms Currently Suppressed
- **Signature**: `ListOrgSuppressedAlarms(Guid orgId, SuppressedAlarmScope? scope, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `scope` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `scope` ← `scope`
- **Returns**: `ResponseOrgSuppressAlarm`
- **Error**: `SdkException<ListOrgSuppressedAlarmsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SuppressOrgAlarm
- **HTTP**: `POST /api/v1/orgs/{org_id}/alarmtemplates/suppress` (ApiHost (api))
- **Notes**: In certain situations, for example, scheduled maintenance, you may want to suspend alarms to be triggered against Sites for a period of time.
- **Signature**: `SuppressOrgAlarm(Guid orgId, SuppressedAlarm? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<SuppressOrgAlarmError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnsuppressOrgSuppressedAlarms
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/alarmtemplates/suppress` (ApiHost (api))
- **Notes**: Un-Suppress Suppressed Alarms
- **Signature**: `UnsuppressOrgSuppressedAlarms(Guid orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnsuppressOrgSuppressedAlarmsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgAlarmTemplate
- **HTTP**: `PUT /api/v1/orgs/{org_id}/alarmtemplates/{alarmtemplate_id}` (ApiHost (api))
- **Notes**: Update Org Alarm Template
- **Signature**: `UpdateOrgAlarmTemplate(Guid orgId, Guid alarmtemplateId, AlarmTemplate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AlarmTemplate`
- **Error**: `SdkException<UpdateOrgAlarmTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
