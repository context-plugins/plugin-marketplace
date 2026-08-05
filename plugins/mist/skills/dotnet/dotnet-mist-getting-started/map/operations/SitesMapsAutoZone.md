# SitesMapsAutoZone — operations

Accessor: `client.SitesMapsAutoZone` · Source: `Api/SitesMapsAutoZone.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteSiteMapAutoZone
- **HTTP**: `DELETE /api/v1/sites/{site_id}/maps/{map_id}/auto_zones` (ApiHost (api))
- **Notes**: This API starts the auto zones service for a specified map. This map must have an image to parse for the auto zones service. Repeated POST requests to this endpoint while the auto zones service is processing the map or awaiting review will be rejected.
- **Signature**: `DeleteSiteMapAutoZone(Guid mapId, Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteMapAutoZoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteMapAutoZoneStatus
- **HTTP**: `GET /api/v1/sites/{site_id}/maps/{map_id}/auto_zones` (ApiHost (api))
- **Notes**: This API provides the current status of the auto zones service for a given map
- **Signature**: `GetSiteMapAutoZoneStatus(Guid mapId, Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseAutoZone`
- **Error**: `SdkException<GetSiteMapAutoZoneStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StartSiteMapAutoZone
- **HTTP**: `POST /api/v1/sites/{site_id}/maps/{map_id}/auto_zones` (ApiHost (api))
- **Notes**: This API starts the auto zones service for a specified map. This map must have an image to parse for the auto zones service. Repeated POST requests to this endpoint while the auto zones service is processing the map will be rejected.
- **Signature**: `StartSiteMapAutoZone(Guid mapId, Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<StartSiteMapAutoZoneError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
