<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProjectBriefs — operations

Accessor: `client.projectBriefs` · Source: `src/resources/project-briefs.ts` · 4 operations · Request and error types: namespace `ProjectBriefs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `asana`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createProjectBrief

- **Signature**: `createProjectBrief(request: ProjectBriefs.CreateProjectBriefRequest, options?: RequestOptions): ApiPromise<ProjectsProjectBriefsResponse, ProjectBriefs.CreateProjectBriefError>`
- **Wire**: `POST /projects/{project_gid}/project_briefs`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectsProjectBriefsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `ProjectBriefs.CreateProjectBriefError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [404] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectBriefs.CreateProjectBriefRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectGid` | `path` | `project_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `ProjectsProjectBriefsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectsProjectBriefsRequest` | `projectsProjectBriefsRequestSchema` | `src/models/projects-project-briefs-request.ts` |
| `ProjectsProjectBriefsResponse` | `projectsProjectBriefsResponseSchema` | `src/models/projects-project-briefs-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteProjectBrief

- **Signature**: `deleteProjectBrief(request: ProjectBriefs.DeleteProjectBriefRequest, options?: RequestOptions): ApiPromise<ProjectBriefsResponse2, ProjectBriefs.DeleteProjectBriefError>`
- **Wire**: `DELETE /project_briefs/{project_brief_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectBriefsResponse2`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `ProjectBriefs.DeleteProjectBriefError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectBriefs.DeleteProjectBriefRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectBriefGid` | `path` | `project_brief_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectBriefsResponse2` | `projectBriefsResponse2Schema` | `src/models/project-briefs-response2.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getProjectBrief

- **Signature**: `getProjectBrief(request: ProjectBriefs.GetProjectBriefRequest, options?: RequestOptions): ApiPromise<ProjectBriefsResponse, ProjectBriefs.GetProjectBriefError>`
- **Wire**: `GET /project_briefs/{project_brief_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectBriefsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `ProjectBriefs.GetProjectBriefError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [402] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [404] `ErrorResponse` · `"errorResponse6"` [424] `ErrorResponse` · `"errorResponse7"` [500] `ErrorResponse` · `"errorResponse8"` [501] `ErrorResponse` · `"errorResponse9"` [503] `ErrorResponse` · `"errorResponse10"` [504] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectBriefs.GetProjectBriefRequest` (3):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectBriefGid` | `path` | `project_brief_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectBriefsResponse` | `projectBriefsResponseSchema` | `src/models/project-briefs-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateProjectBrief

- **Signature**: `updateProjectBrief(request: ProjectBriefs.UpdateProjectBriefRequest, options?: RequestOptions): ApiPromise<ProjectBriefsResponse, ProjectBriefs.UpdateProjectBriefError>`
- **Wire**: `PUT /project_briefs/{project_brief_gid}`
- **Auth**: any of `personalAccessToken`, `oauth2` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectBriefsResponse`
- **Error**: `AsanaError` with `kind: "api"`, an instance of `ProjectBriefs.UpdateProjectBriefError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProjectBriefs.UpdateProjectBriefRequest` (4):

| Field | Channel | Wire | Type | Req | Style |
| --- | --- | --- | --- | --- | --- |
| `projectBriefGid` | `path` | `project_brief_gid` | `string` | yes | — |
| `optPretty` | `query` | `opt_pretty` | `boolean` | no | — |
| `optFields` | `query` | `opt_fields` | `string[]` | no | `csv` |
| `body` | `body` | — | `ProjectBriefsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectBriefsRequest` | `projectBriefsRequestSchema` | `src/models/project-briefs-request.ts` |
| `ProjectBriefsResponse` | `projectBriefsResponseSchema` | `src/models/project-briefs-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

