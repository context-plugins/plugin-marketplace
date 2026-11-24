<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProjectStatuses — operations

Accessor: `client.projectStatuses` · Source: `src/resources/project-statuses.ts` · 4 operations · Request and error types: namespace `ProjectStatuses`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createProjectStatusForProject

- **Signature**: `createProjectStatusForProject(request: ProjectStatuses.CreateProjectStatusForProjectRequest, options?: RequestOptions): ApiPromise<ProjectsProjectStatusesResponse1, ProjectStatuses.CreateProjectStatusForProjectError>`
- **Wire**: `POST /projects/{project_gid}/project_statuses`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectsProjectStatusesResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `ProjectStatuses.CreateProjectStatusForProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectStatuses.CreateProjectStatusForProjectRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `ProjectsProjectStatusesRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsProjectStatusesRequest` | `projectsProjectStatusesRequestSchema` | `src/models/projects-project-statuses-request.ts` |
| `ProjectsProjectStatusesResponse1` | `projectsProjectStatusesResponse1Schema` | `src/models/projects-project-statuses-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteProjectStatus

- **Signature**: `deleteProjectStatus(request: ProjectStatuses.DeleteProjectStatusRequest, options?: RequestOptions): ApiPromise<ProjectStatusesResponse1, ProjectStatuses.DeleteProjectStatusError>`
- **Wire**: `DELETE /project_statuses/{project_status_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectStatusesResponse1`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `ProjectStatuses.DeleteProjectStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectStatuses.DeleteProjectStatusRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectStatusGid` | `path` | `project_status_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectStatusesResponse1` | `projectStatusesResponse1Schema` | `src/models/project-statuses-response1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getProjectStatus

- **Signature**: `getProjectStatus(request: ProjectStatuses.GetProjectStatusRequest, options?: RequestOptions): ApiPromise<ProjectStatusesResponse, ProjectStatuses.GetProjectStatusError>`
- **Wire**: `GET /project_statuses/{project_status_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectStatusesResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `ProjectStatuses.GetProjectStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectStatuses.GetProjectStatusRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectStatusGid` | `path` | `project_status_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectStatusesResponse` | `projectStatusesResponseSchema` | `src/models/project-statuses-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getProjectStatusesForProject

- **Signature**: `getProjectStatusesForProject(request: ProjectStatuses.GetProjectStatusesForProjectRequest, options?: RequestOptions): ApiPromise<ProjectsProjectStatusesResponse, ProjectStatuses.GetProjectStatusesForProjectError>`
- **Wire**: `GET /projects/{project_gid}/project_statuses`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectsProjectStatusesResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `ProjectStatuses.GetProjectStatusesForProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectStatuses.GetProjectStatusesForProjectRequest` (5):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsProjectStatusesResponse` | `projectsProjectStatusesResponseSchema` | `src/models/projects-project-statuses-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

