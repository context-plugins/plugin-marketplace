# OrgsSles — operations

Accessor: `client.OrgsSles` · Source: `Api/OrgsSles.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetOrgSitesSle
- **HTTP**: `GET /api/v1/orgs/{org_id}/insights/sites-sle` (ApiHost (api))
- **Notes**: Get Org Sites SLE
- **Signature**: `GetOrgSitesSle(Guid orgId, OrgSiteSleType? sle, int? start, int? end, string? interval, string? duration = "1d", int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`sle` … `interval`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `sle` ← `sle`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `interval` ← `interval`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `ResponseOrgSiteSle`
- **Error**: `SdkException<GetOrgSitesSleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetOrgSle
- **HTTP**: `GET /api/v1/orgs/{org_id}/insights/{metric}` (ApiHost (api))
- **Notes**: Get Org SLEs (all/worst sites, Mx Edges, ...)
- **Signature**: `GetOrgSle(Guid orgId, string metric, string? sle, string? interval, int? start, int? end, string? duration = "1d", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`sle` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `requestOptions` = null
- **Query params (wire ← C#)**: `sle` ← `sle`, `duration` ← `duration`, `interval` ← `interval`, `start` ← `start`, `end` ← `end`
- **Returns**: `InsightMetrics`
- **Error**: `SdkException<GetOrgSleError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
