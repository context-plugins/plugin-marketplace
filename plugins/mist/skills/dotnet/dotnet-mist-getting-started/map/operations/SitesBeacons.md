# SitesBeacons — operations

Accessor: `client.SitesBeacons` · Source: `Api/SitesBeacons.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSiteBeacon
- **HTTP**: `POST /api/v1/sites/{site_id}/beacons` (ApiHost (api))
- **Notes**: Create Site Beacon
- **Signature**: `CreateSiteBeacon(Guid siteId, Beacon? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Beacon`
- **Error**: `SdkException<CreateSiteBeaconError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteBeacon
- **HTTP**: `DELETE /api/v1/sites/{site_id}/beacons/{beacon_id}` (ApiHost (api))
- **Notes**: Delete Site Beacon
- **Signature**: `DeleteSiteBeacon(Guid siteId, Guid beaconId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteBeaconError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteBeacon
- **HTTP**: `GET /api/v1/sites/{site_id}/beacons/{beacon_id}` (ApiHost (api))
- **Notes**: Get Site Beacon Details
- **Signature**: `GetSiteBeacon(Guid siteId, Guid beaconId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Beacon`
- **Error**: `SdkException<GetSiteBeaconError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteBeacons
- **HTTP**: `GET /api/v1/sites/{site_id}/beacons` (ApiHost (api))
- **Notes**: Get List of Site Beacons
- **Signature**: `ListSiteBeacons(Guid siteId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Beacon>`
- **Error**: `SdkException<ListSiteBeaconsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSiteBeacon
- **HTTP**: `PUT /api/v1/sites/{site_id}/beacons/{beacon_id}` (ApiHost (api))
- **Notes**: Update Site Beacon
- **Signature**: `UpdateSiteBeacon(Guid siteId, Guid beaconId, Beacon? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Beacon`
- **Error**: `SdkException<UpdateSiteBeaconError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
