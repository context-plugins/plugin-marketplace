# OrgsWxTunnels — operations

Accessor: `client.OrgsWxTunnels` · Source: `Api/OrgsWxTunnels.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgWxTunnel
- **HTTP**: `POST /api/v1/orgs/{org_id}/wxtunnels` (ApiHost (api))
- **Notes**: Create Org WxAN Tunnel
- **Signature**: `CreateOrgWxTunnel(Guid orgId, WxlanTunnel? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WxlanTunnel`
- **Error**: `SdkException<CreateOrgWxTunnelError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgWxTunnel
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/wxtunnels/{wxtunnel_id}` (ApiHost (api))
- **Notes**: Delete Org WxLAN Tunnel
- **Signature**: `DeleteOrgWxTunnel(Guid orgId, Guid wxtunnelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgWxTunnelError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgWxTunnel
- **HTTP**: `GET /api/v1/orgs/{org_id}/wxtunnels/{wxtunnel_id}` (ApiHost (api))
- **Notes**: Get Org WxLAN Tunnel Details
- **Signature**: `GetOrgWxTunnel(Guid orgId, Guid wxtunnelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `WxlanTunnel`
- **Error**: `SdkException<GetOrgWxTunnelError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgWxTunnels
- **HTTP**: `GET /api/v1/orgs/{org_id}/wxtunnels` (ApiHost (api))
- **Notes**: Get List of Org WxLAN Tunnels
- **Signature**: `ListOrgWxTunnels(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<WxlanTunnel>`
- **Error**: `SdkException<ListOrgWxTunnelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgWxTunnel
- **HTTP**: `PUT /api/v1/orgs/{org_id}/wxtunnels/{wxtunnel_id}` (ApiHost (api))
- **Notes**: Update Org WxLAN Tunnel
- **Signature**: `UpdateOrgWxTunnel(Guid orgId, Guid wxtunnelId, WxlanTunnel? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WxlanTunnel`
- **Error**: `SdkException<UpdateOrgWxTunnelError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
