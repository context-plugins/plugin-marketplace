<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workspaces — operations

Accessor: `client.workspaces` · Source: `src/resources/workspaces.ts` · 3 operations · Request and error types: namespace `Workspaces`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `audioscrape`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getWorkspace

- **Signature**: `getWorkspace(request: Workspaces.GetWorkspaceRequest, options?: RequestOptions): ApiPromise<WorkspaceDetail, Workspaces.GetWorkspaceError>`
- **Wire**: `GET /api/workspaces/{workspace}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspaceDetail`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Workspaces.GetWorkspaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [404] `ApiErrorBody` · `"apiErrorBody5"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspaces.GetWorkspaceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `workspace` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceDetail` | `workspaceDetailSchema` | `src/models/workspace-detail.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### listWorkspaceDatasets

- **Signature**: `listWorkspaceDatasets(request: Workspaces.ListWorkspaceDatasetsRequest, options?: RequestOptions): ApiPromise<DatasetList, Workspaces.ListWorkspaceDatasetsError>`
- **Wire**: `GET /api/workspaces/{workspace}/datasets`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DatasetList`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Workspaces.ListWorkspaceDatasetsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [404] `ApiErrorBody` · `"apiErrorBody5"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Workspaces.ListWorkspaceDatasetsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `workspace` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DatasetList` | `datasetListSchema` | `src/models/dataset-list.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### listWorkspaces

- **Signature**: `listWorkspaces(options?: RequestOptions): ApiPromise<WorkspaceList, Workspaces.ListWorkspacesError>`
- **Wire**: `GET /api/workspaces`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WorkspaceList`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `Workspaces.ListWorkspacesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceList` | `workspaceListSchema` | `src/models/workspace-list.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

