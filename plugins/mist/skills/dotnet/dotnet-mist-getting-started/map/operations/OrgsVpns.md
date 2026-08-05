# OrgsVpns — operations

Accessor: `client.OrgsVpns` · Source: `Api/OrgsVpns.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgVpn
- **HTTP**: `POST /api/v1/orgs/{org_id}/vpns` (ApiHost (api))
- **Notes**: Create Org VPN
- **Signature**: `CreateOrgVpn(Guid orgId, Vpn? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Vpn`
- **Error**: `SdkException<CreateOrgVpnError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgVpn
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/vpns/{vpn_id}` (ApiHost (api))
- **Notes**: Delete Org Vpn
- **Signature**: `DeleteOrgVpn(Guid orgId, Guid vpnId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgVpnError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgVpn
- **HTTP**: `GET /api/v1/orgs/{org_id}/vpns/{vpn_id}` (ApiHost (api))
- **Notes**: Get Org Vpn
- **Signature**: `GetOrgVpn(Guid orgId, Guid vpnId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Vpn`
- **Error**: `SdkException<GetOrgVpnError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgVpns
- **HTTP**: `GET /api/v1/orgs/{org_id}/vpns` (ApiHost (api))
- **Notes**: Get List of Org VPNs
- **Signature**: `ListOrgVpns(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Vpn>`
- **Error**: `SdkException<ListOrgVpnsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgVpn
- **HTTP**: `PUT /api/v1/orgs/{org_id}/vpns/{vpn_id}` (ApiHost (api))
- **Notes**: Update Org Vpn
- **Signature**: `UpdateOrgVpn(Guid orgId, Guid vpnId, Vpn? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Vpn`
- **Error**: `SdkException<UpdateOrgVpnError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
