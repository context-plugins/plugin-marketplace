# SitesZones — operations

Accessor: `client.SitesZones` · Source: `Api/SitesZones.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountSiteZoneSessions
- **HTTP**: `GET /api/v1/sites/{site_id}/{zone_type}/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Site Zone Sessions
- **Signature**: `CountSiteZoneSessions(Guid siteId, ZoneType zoneType, SiteZoneCountDistinct? distinct, RfClientType? userType, string? user, string? scopeId, ZoneScope? scope, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `user_type` ← `userType`, `user` ← `user`, `scope_id` ← `scopeId`, `scope` ← `scope`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteZoneSessionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateSiteZone
- **HTTP**: `POST /api/v1/sites/{site_id}/zones` (ApiHost (api))
- **Notes**: Create Site Zone
- **Signature**: `CreateSiteZone(Guid siteId, Zone? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Zone`
- **Error**: `SdkException<CreateSiteZoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteZone
- **HTTP**: `DELETE /api/v1/sites/{site_id}/zones/{zone_id}` (ApiHost (api))
- **Notes**: Delete Site Zone
- **Signature**: `DeleteSiteZone(Guid siteId, Guid zoneId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteZoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteZone
- **HTTP**: `GET /api/v1/sites/{site_id}/zones/{zone_id}` (ApiHost (api))
- **Notes**: Get Site Zone Details
- **Signature**: `GetSiteZone(Guid siteId, Guid zoneId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Zone`
- **Error**: `SdkException<GetSiteZoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteZones
- **HTTP**: `GET /api/v1/sites/{site_id}/zones` (ApiHost (api))
- **Notes**: Get List of Site Zones
- **Signature**: `ListSiteZones(Guid siteId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Zone>`
- **Error**: `SdkException<ListSiteZonesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchSiteZoneSessions
- **HTTP**: `GET /api/v1/sites/{site_id}/{zone_type}/visits/search` (ApiHost (api))
- **Notes**: Search Zone Sessions
- **Signature**: `SearchSiteZoneSessions(Guid siteId, ZoneType zoneType, RfClientType? userType, string? user, string? scopeId, VisitsScope? scope, int? start, int? end, int? limit = 100, int? page = 1, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`userType` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `page` = 1, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `user_type` ← `userType`, `user` ← `user`, `scope_id` ← `scopeId`, `scope` ← `scope`, `limit` ← `limit`, `page` ← `page`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseZoneSearch`
- **Error**: `SdkException<SearchSiteZoneSessionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSiteZone
- **HTTP**: `PUT /api/v1/sites/{site_id}/zones/{zone_id}` (ApiHost (api))
- **Notes**: Update Site Zone
- **Signature**: `UpdateSiteZone(Guid siteId, Guid zoneId, Zone? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Zone`
- **Error**: `SdkException<UpdateSiteZoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
