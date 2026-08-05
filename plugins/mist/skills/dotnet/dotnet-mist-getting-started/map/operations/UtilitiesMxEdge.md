# UtilitiesMxEdge — operations

Accessor: `client.UtilitiesMxEdge` · Source: `Api/UtilitiesMxEdge.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PreemptSitesMxTunnel
- **HTTP**: `POST /api/v1/sites/{site_id}/mxtunnels/{mxtunnel_id}/preempt_aps` (ApiHost (api))
- **Notes**: To preempt AP’s which are not connected to preferred peer to the preferred peer
- **Signature**: `PreemptSitesMxTunnel(Guid siteId, Guid mxtunnelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseMxtunnelsPreemptAps`
- **Error**: `SdkException<PreemptSitesMxTunnelError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
