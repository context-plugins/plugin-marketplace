# OrgsMxEdges — operations

Accessor: `client.OrgsMxEdges` · Source: `Api/OrgsMxEdges.cs` · 21 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddOrgMxEdgeImage
- **HTTP**: `POST /api/v1/orgs/{org_id}/mxedges/{mxedge_id}/image/{image_number}` (ApiHost (api))
- **Notes**: Attach up to 3 images to a mxedge
- **Signature**: `AddOrgMxEdgeImage(Guid orgId, Guid mxedgeId, int imageNumber, ImageImport? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<AddOrgMxEdgeImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AssignOrgMxEdgeToSite
- **HTTP**: `POST /api/v1/orgs/{org_id}/mxedges/assign` (ApiHost (api))
- **Notes**: Assign Org MxEdge to Site
- **Signature**: `AssignOrgMxEdgeToSite(Guid orgId, MxedgesAssign? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseAssignSuccess`
- **Error**: `SdkException<AssignOrgMxEdgeToSiteError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### BounceOrgMxEdgeDataPorts
- **HTTP**: `POST /api/v1/orgs/{org_id}/mxedges/{mxedge_id}/services/tunterm/bounce_port` (ApiHost (api))
- **Notes**: Bounce TunTerm Data Ports
- **Signature**: `BounceOrgMxEdgeDataPorts(Guid orgId, Guid mxedgeId, UtilsTuntermBouncePort? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<BounceOrgMxEdgeDataPortsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ClaimOrgMxEdge
- **HTTP**: `POST /api/v1/orgs/{org_id}/mxedges/claim` (ApiHost (api))
- **Notes**: For a Mist Edge in default state, it will show a random claim code like `135-546-673` which you can "claim" it into your Org
- **Signature**: `ClaimOrgMxEdge(Guid orgId, CodeString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseClaimMxEdge`
- **Error**: `SdkException<ClaimOrgMxEdgeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ControlOrgMxEdgeServices
- **HTTP**: `POST /api/v1/orgs/{org_id}/mxedges/{mxedge_id}/services/{name}/{action}` (ApiHost (api))
- **Notes**: Control Services on a Mist Edge
- **Signature**: `ControlOrgMxEdgeServices(Guid orgId, Guid mxedgeId, MxedgeServiceName name, MxedgeServiceAction action, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ControlOrgMxEdgeServicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CountOrgMxEdges
- **HTTP**: `GET /api/v1/orgs/{org_id}/mxedges/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Org Mist Edges
- **Signature**: `CountOrgMxEdges(Guid orgId, OrgMxedgeCountDistinct? distinct, string? mxedgeId, string? siteId, string? mxclusterId, string? model, string? distro, string? tuntermVersion, string? sort, bool? stats, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `mxedge_id` ← `mxedgeId`, `site_id` ← `siteId`, `mxcluster_id` ← `mxclusterId`, `model` ← `model`, `distro` ← `distro`, `tunterm_version` ← `tuntermVersion`, `sort` ← `sort`, `stats` ← `stats`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgMxEdgesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CountOrgSiteMxEdgeEvents
- **HTTP**: `GET /api/v1/orgs/{org_id}/mxedges/events/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Org Mist Edge Events
- **Signature**: `CountOrgSiteMxEdgeEvents(Guid orgId, OrgMxedgeEventsCountDistinct? distinct, string? mxedgeId, string? mxclusterId, string? type, string? service, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `mxedge_id` ← `mxedgeId`, `mxcluster_id` ← `mxclusterId`, `type` ← `type`, `service` ← `service`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountOrgSiteMxEdgeEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateOrgMxEdge
- **HTTP**: `POST /api/v1/orgs/{org_id}/mxedges` (ApiHost (api))
- **Notes**: Create MxEdge
- **Signature**: `CreateOrgMxEdge(Guid orgId, Mxedge? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Mxedge`
- **Error**: `SdkException<CreateOrgMxEdgeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgMxEdge
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/mxedges/{mxedge_id}` (ApiHost (api))
- **Notes**: Delete Org MxEdge
- **Signature**: `DeleteOrgMxEdge(Guid orgId, Guid mxedgeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgMxEdgeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrgMxEdgeImage
- **HTTP**: `DELETE /api/v1/orgs/{org_id}/mxedges/{mxedge_id}/image/{image_number}` (ApiHost (api))
- **Notes**: Remove MxEdge Image
- **Signature**: `DeleteOrgMxEdgeImage(Guid orgId, Guid mxedgeId, int imageNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrgMxEdgeImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DisconnectOrgMxEdgeTuntermAps
- **HTTP**: `POST /api/v1/orgs/{org_id}/mxedges/{mxedge_id}/services/tunterm/disconnect_aps` (ApiHost (api))
- **Notes**: Disconnect AP’s from TunTerm
- **Signature**: `DisconnectOrgMxEdgeTuntermAps(Guid orgId, Guid mxedgeId, MacAddresses? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DisconnectOrgMxEdgeTuntermApsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgMxEdge
- **HTTP**: `GET /api/v1/orgs/{org_id}/mxedges/{mxedge_id}` (ApiHost (api))
- **Notes**: Get Org MxEdge details
- **Signature**: `GetOrgMxEdge(Guid orgId, Guid mxedgeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Mxedge`
- **Error**: `SdkException<GetOrgMxEdgeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrgMxEdgeUpgradeInfo
- **HTTP**: `GET /api/v1/orgs/{org_id}/mxedges/version` (ApiHost (api))
- **Notes**: Get Mist Edge Upgrade Information
- **Signature**: `GetOrgMxEdgeUpgradeInfo(Guid orgId, GetOrgMxedgeUpgradeInfoChannel? channel, string? distro, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `channel` — nullable, no default → **must pass explicitly**
  - `distro` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `distro` ← `distro`
- **Returns**: `IReadOnlyList<MxedgeUpgradeInfoItems>`
- **Error**: `SdkException<GetOrgMxEdgeUpgradeInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOrgMxEdges
- **HTTP**: `GET /api/v1/orgs/{org_id}/mxedges` (ApiHost (api))
- **Notes**: Get List of Org MxEdges
- **Signature**: `ListOrgMxEdges(Guid orgId, MxedgeForSite? forSite, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `forSite` — nullable, no default → **must pass explicitly**
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `for_site` ← `forSite`, `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Mxedge>`
- **Error**: `SdkException<ListOrgMxEdgesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### RestartOrgMxEdge
- **HTTP**: `POST /api/v1/orgs/{org_id}/mxedges/{mxedge_id}/restart` (ApiHost (api))
- **Notes**: In the case where a Mist Edge is replaced, you would need to unregister it. Which disconnects the currently the connected Mist Edge and allow another to register.
- **Signature**: `RestartOrgMxEdge(Guid orgId, Guid mxedgeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RestartOrgMxEdgeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgMistEdgeEvents
- **HTTP**: `GET /api/v1/orgs/{org_id}/mxedges/events/search` (ApiHost (api))
- **Notes**: Search Org Mist Edge Events
- **Signature**: `SearchOrgMistEdgeEvents(Guid orgId, string? mxedgeId, string? mxclusterId, string? type, string? service, string? component, int? start, int? end, int? limit = 100, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`mxedgeId` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `mxedge_id` ← `mxedgeId`, `mxcluster_id` ← `mxclusterId`, `type` ← `type`, `service` ← `service`, `component` ← `component`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseMxedgeEventsSearch`
- **Error**: `SdkException<SearchOrgMistEdgeEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrgMxEdges
- **HTTP**: `GET /api/v1/orgs/{org_id}/mxedges/search` (ApiHost (api))
- **Notes**: Search Org Mist Edges
- **Signature**: `SearchOrgMxEdges(Guid orgId, string? mxedgeId, string? siteId, string? mxclusterId, string? model, string? distro, string? tuntermVersion, bool? stats, int? start, int? end, int? limit = 100, int? page = 1, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`mxedgeId` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 100, `page` = 1, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `mxedge_id` ← `mxedgeId`, `site_id` ← `siteId`, `mxcluster_id` ← `mxclusterId`, `model` ← `model`, `distro` ← `distro`, `tunterm_version` ← `tuntermVersion`, `stats` ← `stats`, `limit` ← `limit`, `page` ← `page`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseMxedgeSearch`
- **Error**: `SdkException<SearchOrgMxEdgesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UnassignOrgMxEdgeFromSite
- **HTTP**: `POST /api/v1/orgs/{org_id}/mxedges/unassign` (ApiHost (api))
- **Notes**: Unassign Org MxEdge from Site
- **Signature**: `UnassignOrgMxEdgeFromSite(Guid orgId, MxedgesUnassign? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseAssignSuccess`
- **Error**: `SdkException<UnassignOrgMxEdgeFromSiteError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnregisterOrgMxEdge
- **HTTP**: `POST /api/v1/orgs/{org_id}/mxedges/{mxedge_id}/unregister` (ApiHost (api))
- **Notes**: In the case where a Mist Edge is replaced, you would need to unregister it. Which disconnects the currently the connected Mist Edge and allow another to register.
- **Signature**: `UnregisterOrgMxEdge(Guid orgId, Guid mxedgeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnregisterOrgMxEdgeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrgMxEdge
- **HTTP**: `PUT /api/v1/orgs/{org_id}/mxedges/{mxedge_id}` (ApiHost (api))
- **Notes**: Update Org MxEdge
- **Signature**: `UpdateOrgMxEdge(Guid orgId, Guid mxedgeId, Mxedge? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Mxedge`
- **Error**: `SdkException<UpdateOrgMxEdgeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UploadOrgMxEdgeSupportFiles
- **HTTP**: `POST /api/v1/orgs/{org_id}/mxedges/{mxedge_id}/support` (ApiHost (api))
- **Notes**: Support / Upload Mist Edge support files
- **Signature**: `UploadOrgMxEdgeSupportFiles(Guid orgId, Guid mxedgeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UploadOrgMxEdgeSupportFilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
