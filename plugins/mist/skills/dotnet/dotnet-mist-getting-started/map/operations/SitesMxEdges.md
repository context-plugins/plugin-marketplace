# SitesMxEdges — operations

Accessor: `client.SitesMxEdges` · Source: `Api/SitesMxEdges.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CountSiteMxEdgeEvents
- **HTTP**: `GET /api/v1/sites/{site_id}/mxedges/events/count` (ApiHost (api))
- **Notes**: Count by Distinct Attributes of Mist Edge Events
- **Signature**: `CountSiteMxEdgeEvents(Guid siteId, SiteMxedgeEventsCountDistinct? distinct, string? mxedgeId, string? mxclusterId, string? type, string? service, int? start, int? end, string? duration = "1d", int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`distinct` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `duration` = "1d", `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `distinct` ← `distinct`, `mxedge_id` ← `mxedgeId`, `mxcluster_id` ← `mxclusterId`, `type` ← `type`, `service` ← `service`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `limit` ← `limit`
- **Returns**: `ResponseCount`
- **Error**: `SdkException<CountSiteMxEdgeEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteSiteMxEdge
- **HTTP**: `DELETE /api/v1/sites/{site_id}/mxedges/{mxedge_id}` (ApiHost (api))
- **Notes**: Delete Site Mist Edge
- **Signature**: `DeleteSiteMxEdge(Guid siteId, Guid mxedgeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSiteMxEdgeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSiteMxEdge
- **HTTP**: `GET /api/v1/sites/{site_id}/mxedges/{mxedge_id}` (ApiHost (api))
- **Notes**: Get Site Mist Edge
- **Signature**: `GetSiteMxEdge(Guid siteId, Guid mxedgeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetSiteMxEdgeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListSiteMxEdges
- **HTTP**: `GET /api/v1/sites/{site_id}/mxedges` (ApiHost (api))
- **Notes**: Get List of Site Mist Edges
- **Signature**: `ListSiteMxEdges(Guid siteId, int? limit = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `limit` ← `limit`, `page` ← `page`
- **Returns**: `IReadOnlyList<Mxedge>`
- **Error**: `SdkException<ListSiteMxEdgesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SearchSiteMistEdgeEvents
- **HTTP**: `GET /api/v1/sites/{site_id}/mxedges/events/search` (ApiHost (api))
- **Notes**: Search Site Mist Edge Events
- **Signature**: `SearchSiteMistEdgeEvents(Guid siteId, string? mxedgeId, string? mxclusterId, string? type, string? service, string? component, int? start, int? end, int? limit = 10, string? duration = "1d", string? sort = "timestamp", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`mxedgeId` … `end`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `limit` = 10, `duration` = "1d", `sort` = "timestamp", `requestOptions` = null
- **Query params (wire ← C#)**: `mxedge_id` ← `mxedgeId`, `mxcluster_id` ← `mxclusterId`, `type` ← `type`, `service` ← `service`, `component` ← `component`, `limit` ← `limit`, `start` ← `start`, `end` ← `end`, `duration` ← `duration`, `sort` ← `sort`
- **Returns**: `ResponseMxedgeEventsSearch`
- **Error**: `SdkException<SearchSiteMistEdgeEventsError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSiteMxEdge
- **HTTP**: `PUT /api/v1/sites/{site_id}/mxedges/{mxedge_id}` (ApiHost (api))
- **Notes**: Update Site Mist Edge settings
- **Signature**: `UpdateSiteMxEdge(Guid siteId, Guid mxedgeId, Mxedge? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Mxedge`
- **Error**: `SdkException<UpdateSiteMxEdgeError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UploadSiteMxEdgeSupportFiles
- **HTTP**: `POST /api/v1/sites/{site_id}/mxedges/{mxedge_id}/support` (ApiHost (api))
- **Notes**: Support / Upload Mist Edge support files
- **Signature**: `UploadSiteMxEdgeSupportFiles(Guid siteId, Guid mxedgeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UploadSiteMxEdgeSupportFilesError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
