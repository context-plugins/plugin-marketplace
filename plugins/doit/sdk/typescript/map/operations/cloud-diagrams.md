<!-- Generated file — do not edit; regenerated with the SDK. -->

# CloudDiagrams — operations

Accessor: `client.cloudDiagrams` · Source: `src/resources/cloud-diagrams.ts` · 12 operations · Request and error types: namespace `CloudDiagrams`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### exportCloudDiagramJson

- **Signature**: `exportCloudDiagramJson(request: CloudDiagrams.ExportCloudDiagramJsonRequest, options?: RequestOptions): ApiPromise<CloudDiagramExportJsonResponse, CloudDiagrams.ExportCloudDiagramJsonError>`
- **Wire**: `GET /clouddiagrams/v1/statussheet/{id}/export-json`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CloudDiagramExportJsonResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudDiagrams.ExportCloudDiagramJsonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudDiagrams.ExportCloudDiagramJsonRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudDiagramExportJsonResponse` | `cloudDiagramExportJsonResponseSchema` | `src/models/cloud-diagram-export-json-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### findCloudDiagrams

- **Signature**: `findCloudDiagrams(request: CloudDiagrams.FindCloudDiagramsRequestParams, options?: RequestOptions): ApiPromise<FindCloudDiagramsResponse[], CloudDiagrams.FindCloudDiagramsError>`
- **Wire**: `POST /clouddiagrams/v1/scheme/find`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FindCloudDiagramsResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudDiagrams.FindCloudDiagramsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudDiagrams.FindCloudDiagramsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FindCloudDiagramsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FindCloudDiagramsRequest` | `findCloudDiagramsRequestSchema` | `src/models/find-cloud-diagrams-request.ts` |
| `FindCloudDiagramsResponse` | `findCloudDiagramsResponseSchema` | `src/models/find-cloud-diagrams-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCloudDiagramComponents

- **Signature**: `getCloudDiagramComponents(request?: CloudDiagrams.GetCloudDiagramComponentsRequest, options?: RequestOptions): ApiPromise<CloudDiagramsGetResponse, CloudDiagrams.GetCloudDiagramComponentsError>`
- **Wire**: `POST /clouddiagrams/v1/scheme/get`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CloudDiagramsGetResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudDiagrams.GetCloudDiagramComponentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudDiagrams.GetCloudDiagramComponentsRequest` (15):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `components` | `query` | — | `boolean` | no |
| `external` | `query` | — | `boolean` | no |
| `element` | `query` | — | `boolean` | no |
| `link` | `query` | — | `boolean` | no |
| `group` | `query` | — | `boolean` | no |
| `note` | `query` | — | `boolean` | no |
| `combiner` | `query` | — | `boolean` | no |
| `type` | `query` | — | `Type10[]` | no |
| `nodeType` | `query` | `node_type` | `NodeType1` | no |
| `alarmsCount` | `query` | `alarms_count` | `boolean` | no |
| `issuesCount` | `query` | `issues_count` | `boolean` | no |
| `skipEmpty` | `query` | `skip_empty` | `boolean` | no |
| `excludeDefaultVpc` | `query` | `exclude_default_vpc` | `boolean` | no |
| `excludeEmptySubnets` | `query` | `exclude_empty_subnets` | `boolean` | no |
| `body` | `body` | — | `CloudDiagramsGetRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type10` | `type10Schema` | `src/models/type10.ts` |
| `NodeType1` | `nodeType1Schema` | `src/models/node-type1.ts` |
| `CloudDiagramsGetRequest` | `cloudDiagramsGetRequestSchema` | `src/models/cloud-diagrams-get-request.ts` |
| `CloudDiagramsGetResponse` | `cloudDiagramsGetResponseSchema` | `src/models/cloud-diagrams-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCloudDiagramCostSnapshot

- **Signature**: `getCloudDiagramCostSnapshot(request: CloudDiagrams.GetCloudDiagramCostSnapshotRequest, options?: RequestOptions): ApiPromise<CloudDiagramCostSnapshot, CloudDiagrams.GetCloudDiagramCostSnapshotError>`
- **Wire**: `GET /clouddiagrams/v1/statussheet/{id}/costs`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CloudDiagramCostSnapshot`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudDiagrams.GetCloudDiagramCostSnapshotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudDiagrams.GetCloudDiagramCostSnapshotRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `startDate` | `query` | `string` (date) | yes |
| `endDate` | `query` | `string` (date) | yes |
| `interval` | `query` | `Interval1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Interval1` | `interval1Schema` | `src/models/interval1.ts` |
| `CloudDiagramCostSnapshot` | `cloudDiagramCostSnapshotSchema` | `src/models/cloud-diagram-cost-snapshot.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCloudDiagramLayerSnapshot

- **Signature**: `getCloudDiagramLayerSnapshot(request: CloudDiagrams.GetCloudDiagramLayerSnapshotRequest, options?: RequestOptions): ApiPromise<CloudDiagramLayerSnapshot, CloudDiagrams.GetCloudDiagramLayerSnapshotError>`
- **Wire**: `GET /clouddiagrams/v1/statussheet/{id}/snapshot`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CloudDiagramLayerSnapshot`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudDiagrams.GetCloudDiagramLayerSnapshotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudDiagrams.GetCloudDiagramLayerSnapshotRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `snapshotId` | `query` | `snapshot_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudDiagramLayerSnapshot` | `cloudDiagramLayerSnapshotSchema` | `src/models/cloud-diagram-layer-snapshot.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCloudDiagramResourceRelationships

- **Signature**: `getCloudDiagramResourceRelationships(request: CloudDiagrams.GetCloudDiagramResourceRelationshipsRequest, options?: RequestOptions): ApiPromise<DiagramRelationshipsResponse, CloudDiagrams.GetCloudDiagramResourceRelationshipsError>`
- **Wire**: `GET /clouddiagrams/v1/statussheet/{id}/resources/{rid}/relationships`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DiagramRelationshipsResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudDiagrams.GetCloudDiagramResourceRelationshipsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudDiagrams.GetCloudDiagramResourceRelationshipsRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | yes | — |
| `rid` | `path` | `string` | yes | — |
| `direction` | `query` | `Direction` | no | `Direction.Both` |
| `depth` | `query` | `Depth` | no | `Depth.Direct` |
| `kind` | `query` | `Kind` | no | `Kind.Edges` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Direction` | `directionSchema` | `src/models/direction.ts` |
| `Depth` | `depthSchema` | `src/models/depth.ts` |
| `Kind` | `kindSchema` | `src/models/kind.ts` |
| `DiagramRelationshipsResponse` | `diagramRelationshipsResponseSchema` | `src/models/diagram-relationships-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCloudDiagramsStats

- **Signature**: `getCloudDiagramsStats(request: CloudDiagrams.GetCloudDiagramsStatsRequest, options?: RequestOptions): ApiPromise<CloudDiagramStats[], CloudDiagrams.GetCloudDiagramsStatsError>`
- **Wire**: `GET /clouddiagrams/v1/scheme/stats`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CloudDiagramStats[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudDiagrams.GetCloudDiagramsStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudDiagrams.GetCloudDiagramsStatsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `start` | `query` | `Date` (date-time) | yes |
| `end` | `query` | `Date` (date-time) | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudDiagramStats` | `cloudDiagramStatsSchema` | `src/models/cloud-diagram-stats.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getStatussheetComponents

- **Signature**: `getStatussheetComponents(request: CloudDiagrams.GetStatussheetComponentsRequest, options?: RequestOptions): ApiPromise<CloudDiagramStatussheetComponents, CloudDiagrams.GetStatussheetComponentsError>`
- **Wire**: `POST /clouddiagrams/v1/statussheet/{id}/get`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CloudDiagramStatussheetComponents`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudDiagrams.GetStatussheetComponentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudDiagrams.GetStatussheetComponentsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `p` | `query` | `string` | no |
| `body` | `body` | `CloudDiagramStatussheetGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudDiagramStatussheetGetRequest` | `cloudDiagramStatussheetGetRequestSchema` | `src/models/cloud-diagram-statussheet-get-request.ts` |
| `CloudDiagramStatussheetComponents` | `cloudDiagramStatussheetComponentsSchema` | `src/models/cloud-diagram-statussheet-components.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listCloudDiagramActivityGroups

- **Signature**: `listCloudDiagramActivityGroups(request: CloudDiagrams.ListCloudDiagramActivityGroupsRequest, options?: RequestOptions): ApiPromise<CloudDiagramSnapshotActivityGroup[], CloudDiagrams.ListCloudDiagramActivityGroupsError>`
- **Wire**: `GET /clouddiagrams/v1/activity`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CloudDiagramSnapshotActivityGroup[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudDiagrams.ListCloudDiagramActivityGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudDiagrams.ListCloudDiagramActivityGroupsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ssId` | `query` | `ss_id` | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `offset` | `query` | — | `number` | no |
| `tags` | `query` | — | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudDiagramSnapshotActivityGroup` | `cloudDiagramSnapshotActivityGroupSchema` | `src/models/cloud-diagram-snapshot-activity-group.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listCloudDiagramLayerSnapshots

- **Signature**: `listCloudDiagramLayerSnapshots(request: CloudDiagrams.ListCloudDiagramLayerSnapshotsRequest, options?: RequestOptions): ApiPromise<CloudDiagramLayerSnapshot[], CloudDiagrams.ListCloudDiagramLayerSnapshotsError>`
- **Wire**: `GET /clouddiagrams/v1/statussheet/{id}/snapshots`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CloudDiagramLayerSnapshot[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudDiagrams.ListCloudDiagramLayerSnapshotsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudDiagrams.ListCloudDiagramLayerSnapshotsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `offset` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `sort` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudDiagramLayerSnapshot` | `cloudDiagramLayerSnapshotSchema` | `src/models/cloud-diagram-layer-snapshot.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listCloudDiagramNodeActivities

- **Signature**: `listCloudDiagramNodeActivities(request: CloudDiagrams.ListCloudDiagramNodeActivitiesRequest, options?: RequestOptions): ApiPromise<CloudDiagramNodeActivity[], CloudDiagrams.ListCloudDiagramNodeActivitiesError>`
- **Wire**: `GET /clouddiagrams/v1/activity/node-activities`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CloudDiagramNodeActivity[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudDiagrams.ListCloudDiagramNodeActivitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudDiagrams.ListCloudDiagramNodeActivitiesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `ssId` | `query` | `ss_id` | `string` | yes |
| `nodeId` | `query` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `offset` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudDiagramNodeActivity` | `cloudDiagramNodeActivitySchema` | `src/models/cloud-diagram-node-activity.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### searchCloudDiagrams

- **Signature**: `searchCloudDiagrams(request: CloudDiagrams.SearchCloudDiagramsRequest, options?: RequestOptions): ApiPromise<CloudDiagramsSearchResponse, CloudDiagrams.SearchCloudDiagramsError>`
- **Wire**: `POST /clouddiagrams/v1/scheme/search`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CloudDiagramsSearchResponse`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `CloudDiagrams.SearchCloudDiagramsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CloudDiagrams.SearchCloudDiagramsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CloudDiagramsSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloudDiagramsSearchRequest` | `cloudDiagramsSearchRequestSchema` | `src/models/cloud-diagrams-search-request.ts` |
| `CloudDiagramsSearchResponse` | `cloudDiagramsSearchResponseSchema` | `src/models/cloud-diagrams-search-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

