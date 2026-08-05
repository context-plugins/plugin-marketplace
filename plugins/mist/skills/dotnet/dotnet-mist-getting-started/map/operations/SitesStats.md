# SitesStats — operations

Accessor: `client.SitesStats` · Source: `Api/SitesStats.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSiteStats
- **HTTP**: `GET /api/v1/sites/{site_id}/stats` (ApiHost (api))
- **Notes**: Get Sites Stats
- **Signature**: `GetSiteStats(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `StatsSite`
- **Error**: `SdkException<GetSiteStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
