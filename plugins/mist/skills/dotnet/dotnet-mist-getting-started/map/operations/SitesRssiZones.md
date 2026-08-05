# SitesRssiZones — operations

Accessor: `client.SitesRssiZones` · Source: `Api/SitesRssiZones.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSiteRssiZone
- **HTTP**: `POST /api/v1/sites/{site_id}/rssizones` (ApiHost (api))
- **Notes**: Create RSSI Zone
- **Signature**: `CreateSiteRssiZone(Guid siteId, RssiZone? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `RssiZone`
- **Error**: `SdkException<CreateSiteRssiZoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteRssiZone
- **HTTP**: `DELETE /api/v1/sites/{site_id}/rssizones/{rssizone_id}` (ApiHost (api))
- **Notes**: Delete Site RSSI Zone
- **Signature**: `DeleteSiteRssiZone(Guid siteId, Guid rssizoneId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteRssiZoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteRssiZone
- **HTTP**: `GET /api/v1/sites/{site_id}/rssizones/{rssizone_id}` (ApiHost (api))
- **Notes**: Get Site RSSI Zone details
- **Signature**: `GetSiteRssiZone(Guid siteId, Guid rssizoneId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<RssiZone>`
- **Error**: `SdkException<GetSiteRssiZoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteRssiZones
- **HTTP**: `GET /api/v1/sites/{site_id}/rssizones` (ApiHost (api))
- **Notes**: Get List of Site RSSI Zone (RSSI-based)
- **Signature**: `ListSiteRssiZones(Guid siteId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<RssiZone>`
- **Error**: `SdkException<ListSiteRssiZonesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSiteRssiZone
- **HTTP**: `PUT /api/v1/sites/{site_id}/rssizones/{rssizone_id}` (ApiHost (api))
- **Notes**: Update Site RSSI Zone
- **Signature**: `UpdateSiteRssiZone(Guid siteId, Guid rssizoneId, RssiZone? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `RssiZone`
- **Error**: `SdkException<UpdateSiteRssiZoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
