<!-- Generated file — do not edit; regenerated with the SDK. -->

# CloudDiagrams — operations

Accessor: `client.CloudDiagrams` · Source: `src/DoiT/Api/CloudDiagrams.cs` · 12 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ExportCloudDiagramJson

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ExportCloudDiagramJson(ExportCloudDiagramJsonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `CloudDiagramExportJsonResponse`
- **Error**: `ApiException<ExportCloudDiagramJsonError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExportCloudDiagramJsonRequest` | `src/DoiT/Requests/CloudDiagrams/ExportCloudDiagramJsonRequest.cs` |
| `CloudDiagramExportJsonResponse` | `src/DoiT/Models/CloudDiagramExportJsonResponse.cs` |
| `ExportCloudDiagramJsonError` | `src/DoiT/Errors/ExportCloudDiagramJsonError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### FindCloudDiagrams

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `FindCloudDiagrams(FindCloudDiagramsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyList<FindCloudDiagramsResponse>`
- **Error**: `ApiException<FindCloudDiagramsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FindCloudDiagramsOperationRequest` | `src/DoiT/Requests/CloudDiagrams/FindCloudDiagramsOperationRequest.cs` |
| `FindCloudDiagramsRequest` | `src/DoiT/Models/FindCloudDiagramsRequest.cs` |
| `FindCloudDiagramsResponse` | `src/DoiT/Models/FindCloudDiagramsResponse.cs` |
| `FindCloudDiagramsError` | `src/DoiT/Errors/FindCloudDiagramsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetCloudDiagramComponents

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetCloudDiagramComponents(GetCloudDiagramComponentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `components` ← `Components`, `external` ← `External`, `element` ← `Element`, `link` ← `Link`, `group` ← `Group`, `note` ← `Note`, `combiner` ← `Combiner`, `type` ← `Type`, `node_type` ← `NodeType`, `alarms_count` ← `AlarmsCount`, `issues_count` ← `IssuesCount`, `skip_empty` ← `SkipEmpty`, `exclude_default_vpc` ← `ExcludeDefaultVpc`, `exclude_empty_subnets` ← `ExcludeEmptySubnets`
- **Returns**: `CloudDiagramsGetResponse`
- **Error**: `ApiException<GetCloudDiagramComponentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCloudDiagramComponentsRequest` | `src/DoiT/Requests/CloudDiagrams/GetCloudDiagramComponentsRequest.cs` |
| `Type10` | `src/DoiT/Models/Enums/Type10.cs` |
| `NodeType1` | `src/DoiT/Models/Enums/NodeType1.cs` |
| `CloudDiagramsGetRequest` | `src/DoiT/Models/CloudDiagramsGetRequest.cs` |
| `CloudDiagramsGetResponse` | `src/DoiT/Models/CloudDiagramsGetResponse.cs` |
| `GetCloudDiagramComponentsError` | `src/DoiT/Errors/GetCloudDiagramComponentsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetCloudDiagramCostSnapshot

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetCloudDiagramCostSnapshot(GetCloudDiagramCostSnapshotRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `StartDate`, `EndDate`
- **Query params (wire ← C#)**: `startDate` ← `StartDate`, `endDate` ← `EndDate`, `interval` ← `Interval`
- **Returns**: `CloudDiagramCostSnapshot`
- **Error**: `ApiException<GetCloudDiagramCostSnapshotError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCloudDiagramCostSnapshotRequest` | `src/DoiT/Requests/CloudDiagrams/GetCloudDiagramCostSnapshotRequest.cs` |
| `Interval1` | `src/DoiT/Models/Enums/Interval1.cs` |
| `CloudDiagramCostSnapshot` | `src/DoiT/Models/CloudDiagramCostSnapshot.cs` |
| `GetCloudDiagramCostSnapshotError` | `src/DoiT/Errors/GetCloudDiagramCostSnapshotError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetCloudDiagramLayerSnapshot

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetCloudDiagramLayerSnapshot(GetCloudDiagramLayerSnapshotRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `SnapshotId`
- **Query params (wire ← C#)**: `snapshot_id` ← `SnapshotId`
- **Returns**: `CloudDiagramLayerSnapshot`
- **Error**: `ApiException<GetCloudDiagramLayerSnapshotError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCloudDiagramLayerSnapshotRequest` | `src/DoiT/Requests/CloudDiagrams/GetCloudDiagramLayerSnapshotRequest.cs` |
| `CloudDiagramLayerSnapshot` | `src/DoiT/Models/CloudDiagramLayerSnapshot.cs` |
| `GetCloudDiagramLayerSnapshotError` | `src/DoiT/Errors/GetCloudDiagramLayerSnapshotError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetCloudDiagramResourceRelationships

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetCloudDiagramResourceRelationships(GetCloudDiagramResourceRelationshipsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Rid`
- **Query params (wire ← C#)**: `direction` ← `Direction`, `depth` ← `Depth`, `kind` ← `Kind`
- **Returns**: `DiagramRelationshipsResponse`
- **Error**: `ApiException<GetCloudDiagramResourceRelationshipsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCloudDiagramResourceRelationshipsRequest` | `src/DoiT/Requests/CloudDiagrams/GetCloudDiagramResourceRelationshipsRequest.cs` |
| `Direction` | `src/DoiT/Models/Enums/Direction.cs` |
| `Depth` | `src/DoiT/Models/Enums/Depth.cs` |
| `Kind` | `src/DoiT/Models/Enums/Kind.cs` |
| `DiagramRelationshipsResponse` | `src/DoiT/Models/DiagramRelationshipsResponse.cs` |
| `GetCloudDiagramResourceRelationshipsError` | `src/DoiT/Errors/GetCloudDiagramResourceRelationshipsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetCloudDiagramsStats

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetCloudDiagramsStats(GetCloudDiagramsStatsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Start`, `End`
- **Query params (wire ← C#)**: `start` ← `Start`, `end` ← `End`
- **Returns**: `IReadOnlyList<CloudDiagramStats>`
- **Error**: `ApiException<GetCloudDiagramsStatsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCloudDiagramsStatsRequest` | `src/DoiT/Requests/CloudDiagrams/GetCloudDiagramsStatsRequest.cs` |
| `CloudDiagramStats` | `src/DoiT/Models/CloudDiagramStats.cs` |
| `GetCloudDiagramsStatsError` | `src/DoiT/Errors/GetCloudDiagramsStatsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetStatussheetComponents

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetStatussheetComponents(GetStatussheetComponentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Query params (wire ← C#)**: `p` ← `P`
- **Returns**: `CloudDiagramStatussheetComponents`
- **Error**: `ApiException<GetStatussheetComponentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetStatussheetComponentsRequest` | `src/DoiT/Requests/CloudDiagrams/GetStatussheetComponentsRequest.cs` |
| `CloudDiagramStatussheetGetRequest` | `src/DoiT/Models/CloudDiagramStatussheetGetRequest.cs` |
| `CloudDiagramStatussheetComponents` | `src/DoiT/Models/CloudDiagramStatussheetComponents.cs` |
| `GetStatussheetComponentsError` | `src/DoiT/Errors/GetStatussheetComponentsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListCloudDiagramActivityGroups

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListCloudDiagramActivityGroups(ListCloudDiagramActivityGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SsId`
- **Query params (wire ← C#)**: `ss_id` ← `SsId`, `limit` ← `Limit`, `offset` ← `Offset`, `tags` ← `Tags`
- **Returns**: `IReadOnlyList<CloudDiagramSnapshotActivityGroup>`
- **Error**: `ApiException<ListCloudDiagramActivityGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCloudDiagramActivityGroupsRequest` | `src/DoiT/Requests/CloudDiagrams/ListCloudDiagramActivityGroupsRequest.cs` |
| `CloudDiagramSnapshotActivityGroup` | `src/DoiT/Models/CloudDiagramSnapshotActivityGroup.cs` |
| `ListCloudDiagramActivityGroupsError` | `src/DoiT/Errors/ListCloudDiagramActivityGroupsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListCloudDiagramLayerSnapshots

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListCloudDiagramLayerSnapshots(ListCloudDiagramLayerSnapshotsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `offset` ← `Offset`, `limit` ← `Limit`, `sort` ← `Sort`
- **Returns**: `IReadOnlyList<CloudDiagramLayerSnapshot>`
- **Error**: `ApiException<ListCloudDiagramLayerSnapshotsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCloudDiagramLayerSnapshotsRequest` | `src/DoiT/Requests/CloudDiagrams/ListCloudDiagramLayerSnapshotsRequest.cs` |
| `CloudDiagramLayerSnapshot` | `src/DoiT/Models/CloudDiagramLayerSnapshot.cs` |
| `ListCloudDiagramLayerSnapshotsError` | `src/DoiT/Errors/ListCloudDiagramLayerSnapshotsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListCloudDiagramNodeActivities

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListCloudDiagramNodeActivities(ListCloudDiagramNodeActivitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SsId`, `NodeId`
- **Query params (wire ← C#)**: `ss_id` ← `SsId`, `nodeId` ← `NodeId`, `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `IReadOnlyList<CloudDiagramNodeActivity>`
- **Error**: `ApiException<ListCloudDiagramNodeActivitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCloudDiagramNodeActivitiesRequest` | `src/DoiT/Requests/CloudDiagrams/ListCloudDiagramNodeActivitiesRequest.cs` |
| `CloudDiagramNodeActivity` | `src/DoiT/Models/CloudDiagramNodeActivity.cs` |
| `ListCloudDiagramNodeActivitiesError` | `src/DoiT/Errors/ListCloudDiagramNodeActivitiesError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### SearchCloudDiagrams

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `SearchCloudDiagrams(SearchCloudDiagramsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CloudDiagramsSearchResponse`
- **Error**: `ApiException<SearchCloudDiagramsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchCloudDiagramsRequest` | `src/DoiT/Requests/CloudDiagrams/SearchCloudDiagramsRequest.cs` |
| `CloudDiagramsSearchRequest` | `src/DoiT/Models/CloudDiagramsSearchRequest.cs` |
| `CloudDiagramsSearchResponse` | `src/DoiT/Models/CloudDiagramsSearchResponse.cs` |
| `SearchCloudDiagramsError` | `src/DoiT/Errors/SearchCloudDiagramsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

