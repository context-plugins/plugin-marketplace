# SitesEvpnTopologies — operations

Accessor: `client.SitesEvpnTopologies` · Source: `Api/SitesEvpnTopologies.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateSiteEvpnTopology
- **HTTP**: `POST /api/v1/sites/{site_id}/evpn_topologies` (ApiHost (api))
- **Notes**: While all the `evpn_id` / `downlink_ips` can be specified by hand, the easiest way is to call the `build_vpn_topology` API, allowing you to examine the diff, and update it yourself. You can also simply call it with `overwrite=true` which will apply the updates for you. Notes: 1. You can use `core` / `distribution` / `access` to create a CLOS topology 2. You can also use `core` / `distribution` to form a 2-tier EVPN topology where ESI-Lag is configured distribution to connect to access switches 3. In a small/medium campus, `collapsed-core` can be used where core switches are the inter-connected to do EVPN
- **Signature**: `CreateSiteEvpnTopology(Guid siteId, EvpnTopology? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EvpnTopology`
- **Error**: `SdkException<CreateSiteEvpnTopologyError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteEvpnTopology
- **HTTP**: `DELETE /api/v1/sites/{site_id}/evpn_topologies/{evpn_topology_id}` (ApiHost (api))
- **Notes**: Delete the site EVPN Topology
- **Signature**: `DeleteSiteEvpnTopology(Guid siteId, Guid evpnTopologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteEvpnTopologyError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteEvpnTopology
- **HTTP**: `GET /api/v1/sites/{site_id}/evpn_topologies/{evpn_topology_id}` (ApiHost (api))
- **Notes**: Get One EVPN Topology Detail
- **Signature**: `GetSiteEvpnTopology(Guid siteId, Guid evpnTopologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EvpnTopology`
- **Error**: `SdkException<GetSiteEvpnTopologyError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteEvpnTopologies
- **HTTP**: `GET /api/v1/sites/{site_id}/evpn_topologies` (ApiHost (api))
- **Notes**: Get the existing EVPN topology
- **Signature**: `ListSiteEvpnTopologies(Guid siteId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<EvpnTopologyResponse>`
- **Error**: `SdkException<ListSiteEvpnTopologiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateSiteEvpnTopology
- **HTTP**: `PUT /api/v1/sites/{site_id}/evpn_topologies/{evpn_topology_id}` (ApiHost (api))
- **Notes**: Update the EVPN Topology
- **Signature**: `UpdateSiteEvpnTopology(Guid siteId, Guid evpnTopologyId, EvpnTopology? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EvpnTopology`
- **Error**: `SdkException<UpdateSiteEvpnTopologyError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
