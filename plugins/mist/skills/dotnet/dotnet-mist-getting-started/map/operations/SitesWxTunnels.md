# SitesWxTunnels — operations

Accessor: `client.SitesWxTunnels` · Source: `Api/SitesWxTunnels.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSiteWxTunnel
- **HTTP**: `POST /api/v1/sites/{site_id}/wxtunnels` (ApiHost (api))
- **Notes**: Create Site WxLan Tunnel
- **Signature**: `CreateSiteWxTunnel(Guid siteId, WxlanTunnel? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WxlanTunnel`
- **Error**: `SdkException<CreateSiteWxTunnelError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteWxTunnel
- **HTTP**: `DELETE /api/v1/sites/{site_id}/wxtunnels/{wxtunnel_id}` (ApiHost (api))
- **Notes**: Delete Site WxLan Tunnel
- **Signature**: `DeleteSiteWxTunnel(Guid siteId, Guid wxtunnelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteWxTunnelError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteWxTunnel
- **HTTP**: `GET /api/v1/sites/{site_id}/wxtunnels/{wxtunnel_id}` (ApiHost (api))
- **Notes**: Get Site WxLan tunnel Details
- **Signature**: `GetSiteWxTunnel(Guid siteId, Guid wxtunnelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WxlanTunnel`
- **Error**: `SdkException<GetSiteWxTunnelError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteWxTunnels
- **HTTP**: `GET /api/v1/sites/{site_id}/wxtunnels` (ApiHost (api))
- **Notes**: Get List of Site WxLan Tunnels
- **Signature**: `ListSiteWxTunnels(Guid siteId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<WxlanTunnel>`
- **Error**: `SdkException<ListSiteWxTunnelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSiteWxTunnel
- **HTTP**: `PUT /api/v1/sites/{site_id}/wxtunnels/{wxtunnel_id}` (ApiHost (api))
- **Notes**: Update Site WxLan Tunnel
- **Signature**: `UpdateSiteWxTunnel(Guid siteId, Guid wxtunnelId, WxlanTunnel? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WxlanTunnel`
- **Error**: `SdkException<UpdateSiteWxTunnelError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
