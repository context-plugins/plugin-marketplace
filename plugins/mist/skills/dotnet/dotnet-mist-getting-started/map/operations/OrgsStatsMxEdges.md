# OrgsStatsMxEdges — operations

Accessor: `client.OrgsStatsMxEdges` · Source: `Api/OrgsStatsMxEdges.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetOrgMxEdgeStats
- **HTTP**: `GET /api/v1/orgs/{org_id}/stats/mxedges/{mxedge_id}` (ApiHost (api))
- **Notes**: Get Org MxEdge Details Stats
- **Signature**: `GetOrgMxEdgeStats(Guid orgId, Guid mxedgeId, bool? forSite = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `forSite` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `for_site` ← `forSite`
- **Returns**: `StatsMxedge`
- **Error**: `SdkException<GetOrgMxEdgeStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgMxEdgesStats
- **HTTP**: `GET /api/v1/orgs/{org_id}/stats/mxedges` (ApiHost (api))
- **Notes**: Get List of Org MxEdge Stats
- **Signature**: `ListOrgMxEdgesStats(Guid orgId, ForSite? forSite, int? start, int? end, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `forSite` — nullable, no default → **must pass explicitly**
  - `start` — nullable, no default → **must pass explicitly**
  - `end` — nullable, no default → **must pass explicitly**
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `for_site` ← `forSite`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<StatsMxedge>`
- **Error**: `SdkException<ListOrgMxEdgesStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
