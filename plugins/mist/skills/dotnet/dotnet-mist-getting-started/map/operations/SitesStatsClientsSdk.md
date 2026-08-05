# SitesStatsClientsSdk — operations

Accessor: `client.SitesStatsClientsSdk` · Source: `Api/SitesStatsClientsSdk.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSiteSdkStats
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/sdkclients/{sdkclient_id}` (ApiHost (api))
- **Notes**: Get Detail Stats of a SdkClient
- **Signature**: `GetSiteSdkStats(Guid siteId, Guid sdkclientId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SdkstatsWirelessClient`
- **Error**: `SdkException<GetSiteSdkStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteSdkStatsByMap
- **HTTP**: `GET /api/v1/sites/{site_id}/stats/maps/{map_id}/sdkclients` (ApiHost (api))
- **Notes**: Get SdkClient Stats By Map
- **Signature**: `GetSiteSdkStatsByMap(Guid siteId, Guid mapId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<StatsSdkclient>`
- **Error**: `SdkException<GetSiteSdkStatsByMapError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
