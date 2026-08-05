# SitesStatsWxRules — operations

Accessor: `client.SitesStatsWxRules` · Source: `Api/SitesStatsWxRules.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSiteWxRulesUsage
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/wxrules` (ApiHost (api))
- **Notes**: Get Wxlan Rule usage
- **Signature**: `GetSiteWxRulesUsage(Guid siteId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<StatsWxrule>`
- **Error**: `SdkException<GetSiteWxRulesUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
