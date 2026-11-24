<!-- Generated file — do not edit; regenerated with the SDK. -->

# CloudDiagrams — operations

Accessor: `client.cloud_diagrams` · Source: `doi_t/apis/cloud_diagrams.py` · 12 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.cloud_diagrams.export_cloud_diagram_json

- **Route**: `GET /clouddiagrams/v1/statussheet/{id}/export-json`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def export_cloud_diagram_json(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `CloudDiagramExportJsonResponse`
- **Returns (raw)**: `ApiResult[CloudDiagramExportJsonResponse, ExportCloudDiagramJsonErrorBody]`
- **Error**: `ExportCloudDiagramJsonErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudDiagramExportJsonResponse` | `doi_t/models/cloud_diagram_export_json_response.py` |
| `ExportCloudDiagramJsonErrorBody` | `doi_t/errors/export_cloud_diagram_json_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_diagrams.find_cloud_diagrams

- **Route**: `POST /clouddiagrams/v1/scheme/find`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def find_cloud_diagrams(body: FindCloudDiagramsRequest | FindCloudDiagramsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[FindCloudDiagramsResponse]`
- **Returns (raw)**: `ApiResult[list[FindCloudDiagramsResponse], FindCloudDiagramsErrorBody]`
- **Error**: `FindCloudDiagramsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FindCloudDiagramsRequest` | `doi_t/models/find_cloud_diagrams_request.py` |
| `FindCloudDiagramsRequestDict` | `doi_t/models/find_cloud_diagrams_request.py` |
| `FindCloudDiagramsResponse` | `doi_t/models/find_cloud_diagrams_response.py` |
| `FindCloudDiagramsErrorBody` | `doi_t/errors/find_cloud_diagrams_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_diagrams.get_cloud_diagram_components

- **Route**: `POST /clouddiagrams/v1/scheme/get`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_cloud_diagram_components(*, components: bool | None = None, external: bool | None = None, element: bool | None = None, link: bool | None = None, group: bool | None = None, note: bool | None = None, combiner: bool | None = None, type_: list[Type10OrStr] | None = None, node_type: NodeType1OrStr | None = None, alarms_count: bool | None = None, issues_count: bool | None = None, skip_empty: bool | None = None, exclude_default_vpc: bool | None = None, exclude_empty_subnets: bool | None = None, body: CloudDiagramsGetRequest | CloudDiagramsGetRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `components` — query · `external` — query · `element` — query · `link` — query · `group` — query · `note` — query · `combiner` — query · `type_` — query `type` · `node_type` — query · `alarms_count` — query · `issues_count` — query · `skip_empty` — query · `exclude_default_vpc` — query · `exclude_empty_subnets` — query · `body` — JSON body
- **Returns (parsed)**: `CloudDiagramsGetResponse`
- **Returns (raw)**: `ApiResult[CloudDiagramsGetResponse, GetCloudDiagramComponentsErrorBody]`
- **Error**: `GetCloudDiagramComponentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Type10OrStr` | `doi_t/models/enums/type10.py` |
| `NodeType1OrStr` | `doi_t/models/enums/node_type1.py` |
| `CloudDiagramsGetRequest` | `doi_t/models/cloud_diagrams_get_request.py` |
| `CloudDiagramsGetRequestDict` | `doi_t/models/cloud_diagrams_get_request.py` |
| `CloudDiagramsGetResponse` | `doi_t/models/cloud_diagrams_get_response.py` |
| `GetCloudDiagramComponentsErrorBody` | `doi_t/errors/get_cloud_diagram_components_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_diagrams.get_cloud_diagram_cost_snapshot

- **Route**: `GET /clouddiagrams/v1/statussheet/{id}/costs`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_cloud_diagram_cost_snapshot(id_: str, start_date: Date, end_date: Date, *, interval: Interval1OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `start_date`, `end_date`
- **Params**: `id_` — path `id` · `start_date` — query `startDate` · `end_date` — query `endDate` · `interval` — query
- **Returns (parsed)**: `CloudDiagramCostSnapshot`
- **Returns (raw)**: `ApiResult[CloudDiagramCostSnapshot, GetCloudDiagramCostSnapshotErrorBody]`
- **Error**: `GetCloudDiagramCostSnapshotErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Interval1OrStr` | `doi_t/models/enums/interval1.py` |
| `CloudDiagramCostSnapshot` | `doi_t/models/cloud_diagram_cost_snapshot.py` |
| `GetCloudDiagramCostSnapshotErrorBody` | `doi_t/errors/get_cloud_diagram_cost_snapshot_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_diagrams.get_cloud_diagram_layer_snapshot

- **Route**: `GET /clouddiagrams/v1/statussheet/{id}/snapshot`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_cloud_diagram_layer_snapshot(id_: str, snapshot_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `snapshot_id`
- **Params**: `id_` — path `id` · `snapshot_id` — query
- **Returns (parsed)**: `CloudDiagramLayerSnapshot`
- **Returns (raw)**: `ApiResult[CloudDiagramLayerSnapshot, GetCloudDiagramLayerSnapshotErrorBody]`
- **Error**: `GetCloudDiagramLayerSnapshotErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudDiagramLayerSnapshot` | `doi_t/models/cloud_diagram_layer_snapshot.py` |
| `GetCloudDiagramLayerSnapshotErrorBody` | `doi_t/errors/get_cloud_diagram_layer_snapshot_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_diagrams.get_cloud_diagram_resource_relationships

- **Route**: `GET /clouddiagrams/v1/statussheet/{id}/resources/{rid}/relationships`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_cloud_diagram_resource_relationships(id_: str, rid: str, *, direction: DirectionOrStr | None = Direction.BOTH, depth: DepthOrStr | None = Depth.DIRECT, kind: KindOrStr | None = Kind.EDGES, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `rid`
- **Params**: `id_` — path `id` · `rid` — path · `direction` — query · `depth` — query · `kind` — query
- **Returns (parsed)**: `DiagramRelationshipsResponse`
- **Returns (raw)**: `ApiResult[DiagramRelationshipsResponse, GetCloudDiagramResourceRelationshipsErrorBody]`
- **Error**: `GetCloudDiagramResourceRelationshipsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DirectionOrStr` | `doi_t/models/enums/direction.py` |
| `DepthOrStr` | `doi_t/models/enums/depth.py` |
| `KindOrStr` | `doi_t/models/enums/kind.py` |
| `DiagramRelationshipsResponse` | `doi_t/models/diagram_relationships_response.py` |
| `GetCloudDiagramResourceRelationshipsErrorBody` | `doi_t/errors/get_cloud_diagram_resource_relationships_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_diagrams.get_cloud_diagrams_stats

- **Route**: `GET /clouddiagrams/v1/scheme/stats`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_cloud_diagrams_stats(start: RFC3339DateTime, end: RFC3339DateTime, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `start`, `end`
- **Params**: `start` — query · `end` — query
- **Returns (parsed)**: `list[CloudDiagramStats]`
- **Returns (raw)**: `ApiResult[list[CloudDiagramStats], GetCloudDiagramsStatsErrorBody]`
- **Error**: `GetCloudDiagramsStatsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudDiagramStats` | `doi_t/models/cloud_diagram_stats.py` |
| `GetCloudDiagramsStatsErrorBody` | `doi_t/errors/get_cloud_diagrams_stats_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_diagrams.get_statussheet_components

- **Route**: `POST /clouddiagrams/v1/statussheet/{id}/get`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_statussheet_components(id_: str, body: CloudDiagramStatussheetGetRequest | CloudDiagramStatussheetGetRequestDict, *, p: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `p` — query · `body` — JSON body
- **Returns (parsed)**: `CloudDiagramStatussheetComponents`
- **Returns (raw)**: `ApiResult[CloudDiagramStatussheetComponents, GetStatussheetComponentsErrorBody]`
- **Error**: `GetStatussheetComponentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudDiagramStatussheetGetRequest` | `doi_t/models/cloud_diagram_statussheet_get_request.py` |
| `CloudDiagramStatussheetGetRequestDict` | `doi_t/models/cloud_diagram_statussheet_get_request.py` |
| `CloudDiagramStatussheetComponents` | `doi_t/models/cloud_diagram_statussheet_components.py` |
| `GetStatussheetComponentsErrorBody` | `doi_t/errors/get_statussheet_components_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_diagrams.list_cloud_diagram_activity_groups

- **Route**: `GET /clouddiagrams/v1/activity`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_cloud_diagram_activity_groups(ss_id: str, *, limit: int | None = None, offset: int | None = None, tags: list[str] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ss_id`
- **Params**: `ss_id` — query · `limit` — query · `offset` — query · `tags` — query
- **Returns (parsed)**: `list[CloudDiagramSnapshotActivityGroup]`
- **Returns (raw)**: `ApiResult[list[CloudDiagramSnapshotActivityGroup], ListCloudDiagramActivityGroupsErrorBody]`
- **Error**: `ListCloudDiagramActivityGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudDiagramSnapshotActivityGroup` | `doi_t/models/cloud_diagram_snapshot_activity_group.py` |
| `ListCloudDiagramActivityGroupsErrorBody` | `doi_t/errors/list_cloud_diagram_activity_groups_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_diagrams.list_cloud_diagram_layer_snapshots

- **Route**: `GET /clouddiagrams/v1/statussheet/{id}/snapshots`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_cloud_diagram_layer_snapshots(id_: str, *, offset: int | None = None, limit: int | None = None, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `offset` — query · `limit` — query · `sort` — query
- **Returns (parsed)**: `list[CloudDiagramLayerSnapshot]`
- **Returns (raw)**: `ApiResult[list[CloudDiagramLayerSnapshot], ListCloudDiagramLayerSnapshotsErrorBody]`
- **Error**: `ListCloudDiagramLayerSnapshotsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudDiagramLayerSnapshot` | `doi_t/models/cloud_diagram_layer_snapshot.py` |
| `ListCloudDiagramLayerSnapshotsErrorBody` | `doi_t/errors/list_cloud_diagram_layer_snapshots_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_diagrams.list_cloud_diagram_node_activities

- **Route**: `GET /clouddiagrams/v1/activity/node-activities`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_cloud_diagram_node_activities(ss_id: str, node_id: str, *, limit: int | None = None, offset: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ss_id`, `node_id`
- **Params**: `ss_id` — query · `node_id` — query `nodeId` · `limit` — query · `offset` — query
- **Returns (parsed)**: `list[CloudDiagramNodeActivity]`
- **Returns (raw)**: `ApiResult[list[CloudDiagramNodeActivity], ListCloudDiagramNodeActivitiesErrorBody]`
- **Error**: `ListCloudDiagramNodeActivitiesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudDiagramNodeActivity` | `doi_t/models/cloud_diagram_node_activity.py` |
| `ListCloudDiagramNodeActivitiesErrorBody` | `doi_t/errors/list_cloud_diagram_node_activities_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.cloud_diagrams.search_cloud_diagrams

- **Route**: `POST /clouddiagrams/v1/scheme/search`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def search_cloud_diagrams(body: CloudDiagramsSearchRequest | CloudDiagramsSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CloudDiagramsSearchResponse`
- **Returns (raw)**: `ApiResult[CloudDiagramsSearchResponse, SearchCloudDiagramsErrorBody]`
- **Error**: `SearchCloudDiagramsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudDiagramsSearchRequest` | `doi_t/models/cloud_diagrams_search_request.py` |
| `CloudDiagramsSearchRequestDict` | `doi_t/models/cloud_diagrams_search_request.py` |
| `CloudDiagramsSearchResponse` | `doi_t/models/cloud_diagrams_search_response.py` |
| `SearchCloudDiagramsErrorBody` | `doi_t/errors/search_cloud_diagrams_error.py` |
| `Error` | `doi_t/models/error.py` |

