# OrgsEvpnTopologies — operations

Accessor: `client.OrgsEvpnTopologies` · Source: `Api/OrgsEvpnTopologies.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateOrgEvpnTopology
- **HTTP**: `POST /api/v1/orgs/{org_id}/evpn_topologies` (ApiHost (api))
- **Notes**: While all the `evpn_id` / `downlink_ips` can be specified by hand, the easiest way is to call the `build_vpn_topology` API, allowing you to examine the diff, and update it yourself. You can also simply call it with `overwrite=true` which will apply the updates for you. Notes: 1. You can use `core` / `distribution` / `access` to create a CLOS topology 2. You can also use `core` / `distribution` to form a 2-tier EVPN topology where ESI-Lag is configured distribution to connect to access switches 3. In a small/medium campus, `collapsed-core` can be used where core switches are the inter-connected to do EVPN 4. The API uses a few pre-defined parameters and best-practices to generate the configs. It can be customized by using `evpn_options` in Site Setting / Network Template. (e.g. a different subnet for the underlay) Collapsed Core In a small-medium campus, EVPN can also be enabled only at the core switches (up to 4) by assigning all participating switches with `collapsed-core role`. When there are more than 2 switches, a ring-like topology will be formed. ESI-Lag If the access switches does not have EVPN support, you can take advantage of EVPN by setting up ESI-Lag on distribution switches Leaf / Access / Collapsed-Core For leaf nodes in a EVPN topology, you’d have to configure the IPs for networks that would participate in EVPN. Optionally, VRFs to isolate traffic from one tenant versus another
- **Signature**: `CreateOrgEvpnTopology(Guid orgId, EvpnTopology? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EvpnTopology`
- **Error**: `SdkException<CreateOrgEvpnTopologyError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgEvpnTopology
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/evpn_topologies/{evpn_topology_id}` (ApiHost (api))
- **Notes**: Delete the Org EVPN Topology
- **Signature**: `DeleteOrgEvpnTopology(Guid orgId, Guid evpnTopologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgEvpnTopologyError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgEvpnTopology
- **HTTP**: `GET /api/v1/orgs/{org_id}/evpn_topologies/{evpn_topology_id}` (ApiHost (api))
- **Notes**: Get One EVPN Topology Detail
- **Signature**: `GetOrgEvpnTopology(Guid orgId, Guid evpnTopologyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `EvpnTopology`
- **Error**: `SdkException<GetOrgEvpnTopologyError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgEvpnTopologies
- **HTTP**: `GET /api/v1/orgs/{org_id}/evpn_topologies` (ApiHost (api))
- **Notes**: Get List of the existing Org EVPN topologies
- **Signature**: `ListOrgEvpnTopologies(Guid orgId, MxedgeForSite? forSite, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `forSite` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `for_site` ← `forSite`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<EvpnTopologyResponse>`
- **Error**: `SdkException<ListOrgEvpnTopologiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateOrgEvpnTopology
- **HTTP**: `PUT /api/v1/orgs/{org_id}/evpn_topologies/{evpn_topology_id}` (ApiHost (api))
- **Notes**: Update the EVPN Topology
- **Signature**: `UpdateOrgEvpnTopology(Guid orgId, Guid evpnTopologyId, EvpnTopology? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `EvpnTopology`
- **Error**: `SdkException<UpdateOrgEvpnTopologyError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
