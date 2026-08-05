# SitesVBeacons — operations

Accessor: `client.SitesVBeacons` · Source: `Api/SitesVBeacons.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSiteVbeacon
- **HTTP**: `POST /api/v1/sites/{site_id}/vbeacons` (ApiHost (api))
- **Notes**: Create Virtual Beacon
- **Signature**: `CreateSiteVbeacon(Guid siteId, Vbeacon? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Vbeacon`
- **Error**: `SdkException<CreateSiteVbeaconError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteVbeacon
- **HTTP**: `DELETE /api/v1/sites/{site_id}/vbeacons/{vbeacon_id}` (ApiHost (api))
- **Notes**: Delete Site Virtual Beacon
- **Signature**: `DeleteSiteVbeacon(Guid siteId, Guid vbeaconId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteVbeaconError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteVbeacon
- **HTTP**: `GET /api/v1/sites/{site_id}/vbeacons/{vbeacon_id}` (ApiHost (api))
- **Notes**: Get Site Virtual Beacon Details
- **Signature**: `GetSiteVbeacon(Guid siteId, Guid vbeaconId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Vbeacon`
- **Error**: `SdkException<GetSiteVbeaconError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteVbeacons
- **HTTP**: `GET /api/v1/sites/{site_id}/vbeacons` (ApiHost (api))
- **Notes**: Get List of Site Virtual Beacons
- **Signature**: `ListSiteVbeacons(Guid siteId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Vbeacon>`
- **Error**: `SdkException<ListSiteVbeaconsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSiteVbeacon
- **HTTP**: `PUT /api/v1/sites/{site_id}/vbeacons/{vbeacon_id}` (ApiHost (api))
- **Notes**: Update Site Virtual Beacon
- **Signature**: `UpdateSiteVbeacon(Guid siteId, Guid vbeaconId, Vbeacon? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Vbeacon`
- **Error**: `SdkException<UpdateSiteVbeaconError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
