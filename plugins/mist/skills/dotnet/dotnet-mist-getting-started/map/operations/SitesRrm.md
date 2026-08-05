# SitesRrm — operations

Accessor: `client.SitesRrm` · Source: `Api/SitesRrm.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSiteCurrentChannelPlanning
- **HTTP**: `GET /api/v1/sites/{site_id}/rrm/current` (ApiHost (api))
- **Notes**: Get Current Channel Planning
- **Signature**: `GetSiteCurrentChannelPlanning(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Rrm`
- **Error**: `SdkException<GetSiteCurrentChannelPlanningError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteCurrentRrmConsiderations
- **HTTP**: `GET /api/v1/sites/{site_id}/rrm/current/devices/{device_id}/band/{band}` (ApiHost (api))
- **Notes**: Get Current RRM Considerations for an AP on a Specific Band
- **Signature**: `GetSiteCurrentRrmConsiderations(Guid siteId, Guid deviceId, Dot11Band band, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseRrmConsideration`
- **Error**: `SdkException<GetSiteCurrentRrmConsiderationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteCurrentRrmNeighbors
- **HTTP**: `GET /api/v1/sites/{site_id}/rrm/neighbors/band/{band}` (ApiHost (api))
- **Notes**: List Current RRM observed neighbors
- **Signature**: `ListSiteCurrentRrmNeighbors(Guid siteId, Dot11Band band, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `ResponseRrmNeighbors`
- **Error**: `SdkException<ListSiteCurrentRrmNeighborsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ListSiteRrmEvents
- **HTTP**: `GET /api/v1/sites/{site_id}/rrm/events` (ApiHost (api))
- **Notes**: List Site RRM Events
- **Signature**: `ListSiteRrmEvents(Guid siteId, Dot11Band? band, int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `band` — nullable, no default → **must pass explicitly**
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `band` ← `band`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `ResponseEventsRrm`
- **Error**: `SdkException<ListSiteRrmEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
