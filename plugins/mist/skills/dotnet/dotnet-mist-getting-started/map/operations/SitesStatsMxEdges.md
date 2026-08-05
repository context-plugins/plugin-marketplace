# SitesStatsMxEdges — operations

Accessor: `client.SitesStatsMxEdges` · Source: `Api/SitesStatsMxEdges.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSiteMxEdgeStats
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/mxedges/{mxedge_id}` (ApiHost (api))
- **Notes**: Get One Site MxEdge Stats
- **Signature**: `GetSiteMxEdgeStats(Guid siteId, Guid mxedgeId, int? start, int? end, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`
- **Returns**: `StatsMxedge`
- **Error**: `SdkException<GetSiteMxEdgeStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteMxEdgesStats
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/mxedges` (ApiHost (api))
- **Notes**: Get List of Site MxEdges Stats
- **Signature**: `ListSiteMxEdgesStats(Guid siteId, int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<StatsMxedge>`
- **Error**: `SdkException<ListSiteMxEdgesStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
