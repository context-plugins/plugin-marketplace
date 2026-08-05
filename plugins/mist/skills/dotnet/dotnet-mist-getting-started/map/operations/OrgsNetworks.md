# OrgsNetworks — operations

Accessor: `client.OrgsNetworks` · Source: `Api/OrgsNetworks.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgNetwork
- **HTTP**: `POST /api/v1/orgs/{org_id}/networks` (ApiHost (api))
- **Notes**: Create Organization Network
- **Signature**: `CreateOrgNetwork(Guid orgId, Network? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Network`
- **Error**: `SdkException<CreateOrgNetworkError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgNetwork
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/networks/{network_id}` (ApiHost (api))
- **Notes**: Delete Organization Network
- **Signature**: `DeleteOrgNetwork(Guid orgId, Guid networkId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgNetworkError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgNetwork
- **HTTP**: `GET /api/v1/orgs/{org_id}/networks/{network_id}` (ApiHost (api))
- **Notes**: Get Organization Network Details
- **Signature**: `GetOrgNetwork(Guid orgId, Guid networkId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Network`
- **Error**: `SdkException<GetOrgNetworkError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgNetworks
- **HTTP**: `GET /api/v1/orgs/{org_id}/networks` (ApiHost (api))
- **Notes**: Get List of Org Networks
- **Signature**: `ListOrgNetworks(Guid orgId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Network>`
- **Error**: `SdkException<ListOrgNetworksError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgNetwork
- **HTTP**: `PUT /api/v1/orgs/{org_id}/networks/{network_id}` (ApiHost (api))
- **Notes**: Update Organization Network
- **Signature**: `UpdateOrgNetwork(Guid orgId, Guid networkId, Network? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Network`
- **Error**: `SdkException<UpdateOrgNetworkError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
