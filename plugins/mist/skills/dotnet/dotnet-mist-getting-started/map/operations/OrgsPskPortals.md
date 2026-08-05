# OrgsPskPortals — operations

Accessor: `client.OrgsPskPortals` · Source: `Api/OrgsPskPortals.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountOrgPskPortalLogs
- **HTTP**: `GET /api/v1/orgs/{org_id}/pskportals/logs/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of PskPortal Logs
- **Signature**: `CountOrgPskPortalLogs(Guid orgId, OrgPskPortalLogsCountDistinct? distinct, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `distinct` — nullable, no default → **must pass explicitly**
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgPskPortalLogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateOrgPskPortal
- **HTTP**: `POST /api/v1/orgs/{org_id}/pskportals` (ApiHost (api))
- **Notes**: Create Org Psk Portal
- **Signature**: `CreateOrgPskPortal(Guid orgId, PskPortal? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PskPortal`
- **Error**: `SdkException<CreateOrgPskPortalError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgPskPortal
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/pskportals/{pskportal_id}` (ApiHost (api))
- **Notes**: Delete Org Psk Portal
- **Signature**: `DeleteOrgPskPortal(Guid orgId, Guid pskportalId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgPskPortalError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgPskPortalImage
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/pskportals/{pskportal_id}/portal_image` (ApiHost (api))
- **Notes**: Delete background image for PskPortal If image is not uploaded or is deleted, PskPortal will use default image.
- **Signature**: `DeleteOrgPskPortalImage(Guid orgId, Guid pskportalId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgPskPortalImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgPskPortal
- **HTTP**: `GET /api/v1/orgs/{org_id}/pskportals/{pskportal_id}` (ApiHost (api))
- **Notes**: Get Org Psk Portal Details
- **Signature**: `GetOrgPskPortal(Guid orgId, Guid pskportalId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PskPortal`
- **Error**: `SdkException<GetOrgPskPortalError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgPskPortalLogs
- **HTTP**: `GET /api/v1/orgs/{org_id}/pskportals/logs` (ApiHost (api))
- **Notes**: Get the list of PSK Portals Logs
- **Signature**: `ListOrgPskPortalLogs(Guid orgId, int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `ResponsePskPortalLogsSearch`
- **Error**: `SdkException<ListOrgPskPortalLogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListOrgPskPortals
- **HTTP**: `GET /api/v1/orgs/{org_id}/pskportals` (ApiHost (api))
- **Notes**: Get List of Org Psk Portals
- **Signature**: `ListOrgPskPortals(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<PskPortal>`
- **Error**: `SdkException<ListOrgPskPortalsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchOrgPskPortalLogs
- **HTTP**: `GET /api/v1/orgs/{org_id}/pskportals/logs/search` (ApiHost (api))
- **Notes**: Search Org PSK Portal Logs
- **Signature**: `SearchOrgPskPortalLogs(Guid orgId, int? start, int? end, string? pskName, string? pskId, string? pskportalId, Guid? id, string? adminName, string? adminId, Guid? nameId, int? limit = 100, int? page = 1, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`start` … `nameId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `page` = 1, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`, `psk_name` ← `pskName`, `psk_id` ← `pskId`, `pskportal_id` ← `pskportalId`, `id` ← `id`, `admin_name` ← `adminName`, `admin_id` ← `adminId`, `name_id` ← `nameId`
- **Returns**: `ResponsePskPortalLogsSearch`
- **Error**: `SdkException<SearchOrgPskPortalLogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgPskPortal
- **HTTP**: `PUT /api/v1/orgs/{org_id}/pskportals/{pskportal_id}` (ApiHost (api))
- **Notes**: Update Org Psk Portal
- **Signature**: `UpdateOrgPskPortal(Guid orgId, Guid pskportalId, PskPortal? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PskPortal`
- **Error**: `SdkException<UpdateOrgPskPortalError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgPskPortalTemplate
- **HTTP**: `PUT /api/v1/orgs/{org_id}/pskportals/{pskportal_id}/portal_template` (ApiHost (api))
- **Notes**: Update Org Psk Portal Template
- **Signature**: `UpdateOrgPskPortalTemplate(Guid orgId, Guid pskportalId, PskPortalTemplate? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateOrgPskPortalTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UploadOrgPskPortalImage
- **HTTP**: `POST /api/v1/orgs/{org_id}/pskportals/{pskportal_id}/portal_image` (ApiHost (api))
- **Notes**: Upload background image for PskPortal
- **Signature**: `UploadOrgPskPortalImage(Guid orgId, Guid pskportalId, BinaryContent? file, string? json, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `file` — nullable, no default → **must pass explicitly**
  - `json` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UploadOrgPskPortalImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
