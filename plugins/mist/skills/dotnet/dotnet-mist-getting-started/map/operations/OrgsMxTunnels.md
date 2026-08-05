# OrgsMxTunnels — operations

Accessor: `client.OrgsMxTunnels` · Source: `Api/OrgsMxTunnels.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgMxTunnel
- **HTTP**: `POST /api/v1/orgs/{org_id}/mxtunnels` (ApiHost (api))
- **Notes**: Create MxTunnel
- **Signature**: `CreateOrgMxTunnel(Guid orgId, Mxtunnel? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Mxtunnel`
- **Error**: `SdkException<CreateOrgMxTunnelError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgMxTunnel
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/mxtunnels/{mxtunnel_id}` (ApiHost (api))
- **Notes**: Delete Org MxTunnel
- **Signature**: `DeleteOrgMxTunnel(Guid orgId, Guid mxtunnelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgMxTunnelError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgMxTunnel
- **HTTP**: `GET /api/v1/orgs/{org_id}/mxtunnels/{mxtunnel_id}` (ApiHost (api))
- **Notes**: Get Org MxTunnel Details
- **Signature**: `GetOrgMxTunnel(Guid orgId, Guid mxtunnelId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Mxtunnel`
- **Error**: `SdkException<GetOrgMxTunnelError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgMxTunnels
- **HTTP**: `GET /api/v1/orgs/{org_id}/mxtunnels` (ApiHost (api))
- **Notes**: Get List of Org MxTunnels
- **Signature**: `ListOrgMxTunnels(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Mxtunnel>`
- **Error**: `SdkException<ListOrgMxTunnelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgMxTunnel
- **HTTP**: `PUT /api/v1/orgs/{org_id}/mxtunnels/{mxtunnel_id}` (ApiHost (api))
- **Notes**: Update Org MxTunnel
- **Signature**: `UpdateOrgMxTunnel(Guid orgId, Guid mxtunnelId, Mxtunnel? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Mxtunnel`
- **Error**: `SdkException<UpdateOrgMxTunnelError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
