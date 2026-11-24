<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `src/resources/projects.ts` · 3 operations · Request and error types: namespace `Projects`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `ui-path`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createProject

- **Server**: `defaultUiPathTestManagerProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createProject(request: Projects.CreateProjectRequestParams, options?: RequestOptions): ApiPromise<ProjectUiPathTestManagerProjectsApi, Projects.CreateProjectError>`
- **Wire**: `POST /api/v2/projects`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProjectUiPathTestManagerProjectsApi`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Projects.CreateProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathTestManagerProjectsApi"` [400] `ErrorResponseUiPathTestManagerProjectsApi` · `"errorResponseUiPathTestManagerProjectsApi2"` [401] `ErrorResponseUiPathTestManagerProjectsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.CreateProjectRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateProjectRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateProjectRequest` | `createProjectRequestSchema` | `src/models/create-project-request.ts` |
| `ProjectUiPathTestManagerProjectsApi` | `projectUiPathTestManagerProjectsApiSchema` | `src/models/project-ui-path-test-manager-projects-api.ts` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `errorResponseUiPathTestManagerProjectsApiSchema` | `src/models/error-response-ui-path-test-manager-projects-api.ts` |

### getProject

- **Server**: `defaultUiPathTestManagerProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getProject(request: Projects.GetProjectRequest, options?: RequestOptions): ApiPromise<ProjectUiPathTestManagerProjectsApi, Projects.GetProjectError>`
- **Wire**: `GET /api/v2/projects/{projectId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectUiPathTestManagerProjectsApi`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Projects.GetProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathTestManagerProjectsApi"` [401] `ErrorResponseUiPathTestManagerProjectsApi` · `"errorResponseUiPathTestManagerProjectsApi2"` [404] `ErrorResponseUiPathTestManagerProjectsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.GetProjectRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectUiPathTestManagerProjectsApi` | `projectUiPathTestManagerProjectsApiSchema` | `src/models/project-ui-path-test-manager-projects-api.ts` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `errorResponseUiPathTestManagerProjectsApiSchema` | `src/models/error-response-ui-path-test-manager-projects-api.ts` |

### listProjects2

- **Server**: `defaultUiPathTestManagerProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listProjects2(request?: Projects.ListProjects2Request, options?: RequestOptions): ApiPromise<ProjectListResponse, Projects.ListProjects2Error>`
- **Wire**: `GET /api/v2/projects`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectListResponse`
- **Error**: `UiPathError` with `kind: "api"`, an instance of `Projects.ListProjects2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponseUiPathTestManagerProjectsApi"` [401] `ErrorResponseUiPathTestManagerProjectsApi` · `"errorResponseUiPathTestManagerProjectsApi2"` [403] `ErrorResponseUiPathTestManagerProjectsApi` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ListProjects2Request` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `page` | `query` | `number` | no | `0` |
| `pageSize` | `query` | `number` | no | `20` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectListResponse` | `projectListResponseSchema` | `src/models/project-list-response.ts` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `errorResponseUiPathTestManagerProjectsApiSchema` | `src/models/error-response-ui-path-test-manager-projects-api.ts` |

