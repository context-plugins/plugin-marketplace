<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `src/resources/projects.ts` · 10 operations · Request and error types: namespace `Projects`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `contentstack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createProject

- **Server**: `defaultContentstackProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createProject(request: Projects.CreateProjectRequestParams, options?: RequestOptions): ApiPromise<Project, Projects.CreateProjectError>`
- **Wire**: `POST /v1/organizations/{organization_uid}/projects`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Project`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Projects.CreateProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.CreateProjectRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `body` | `body` | — | `CreateProjectRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateProjectRequest` | `createProjectRequestSchema` | `src/models/create-project-request.ts` |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteProject

- **Server**: `defaultContentstackProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteProject(request: Projects.DeleteProjectRequest, options?: RequestOptions): ApiPromise<undefined, Projects.DeleteProjectError>`
- **Wire**: `DELETE /v1/organizations/{organization_uid}/projects/{project_uid}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Projects.DeleteProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.DeleteProjectRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `projectUid` | `path` | `project_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteProjectsByProjectUid

- **Server**: `defaultContentstackProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteProjectsByProjectUid(request: Projects.DeleteProjectsByProjectUidRequest, options?: RequestOptions): ApiPromise<undefined, Projects.DeleteProjectsByProjectUidError>`
- **Wire**: `DELETE /projects/{project_uid}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Projects.DeleteProjectsByProjectUidError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.DeleteProjectsByProjectUidRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectUid` | `path` | `project_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getAllProjects

- **Server**: `defaultContentstackProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getAllProjects(request: Projects.GetAllProjectsRequest, options?: RequestOptions): ApiPromise<ProjectList, Projects.GetAllProjectsError>`
- **Wire**: `GET /v1/organizations/{organization_uid}/projects`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectList`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Projects.GetAllProjectsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.GetAllProjectsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectList` | `projectListSchema` | `src/models/project-list.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getProject

- **Server**: `defaultContentstackProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getProject(request: Projects.GetProjectRequest, options?: RequestOptions): ApiPromise<Project, Projects.GetProjectError>`
- **Wire**: `GET /v1/organizations/{organization_uid}/projects/{project_uid}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Project`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Projects.GetProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.GetProjectRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `projectUid` | `path` | `project_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getProjects

- **Server**: `defaultContentstackProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getProjects(options?: RequestOptions): ApiPromise<ProjectList2, Projects.GetProjectsError>`
- **Wire**: `GET /projects`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectList2`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Projects.GetProjectsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectList2` | `projectList2Schema` | `src/models/project-list2.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getProjectsByProjectUid

- **Server**: `defaultContentstackProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getProjectsByProjectUid(request: Projects.GetProjectsByProjectUidRequest, options?: RequestOptions): ApiPromise<Project2, Projects.GetProjectsByProjectUidError>`
- **Wire**: `GET /projects/{project_uid}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Project2`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Projects.GetProjectsByProjectUidError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.GetProjectsByProjectUidRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectUid` | `path` | `project_uid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Project2` | `project2Schema` | `src/models/project2.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### postProjects

- **Server**: `defaultContentstackProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postProjects(request: Projects.PostProjectsRequest, options?: RequestOptions): ApiPromise<Project2, Projects.PostProjectsError>`
- **Wire**: `POST /projects`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Project2`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Projects.PostProjectsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.PostProjectsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateProjectRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateProjectRequest2` | `createProjectRequest2Schema` | `src/models/create-project-request2.ts` |
| `Project2` | `project2Schema` | `src/models/project2.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### putProjectsByProjectUid

- **Server**: `defaultContentstackProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `putProjectsByProjectUid(request: Projects.PutProjectsByProjectUidRequest, options?: RequestOptions): ApiPromise<Project2, Projects.PutProjectsByProjectUidError>`
- **Wire**: `PUT /projects/{project_uid}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Project2`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Projects.PutProjectsByProjectUidError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.PutProjectsByProjectUidRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectUid` | `path` | `project_uid` | `string` | yes |
| `body` | `body` | — | `CreateProjectRequest2` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateProjectRequest2` | `createProjectRequest2Schema` | `src/models/create-project-request2.ts` |
| `Project2` | `project2Schema` | `src/models/project2.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateProject

- **Server**: `defaultContentstackProjectsApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateProject(request: Projects.UpdateProjectRequest, options?: RequestOptions): ApiPromise<Project, Projects.UpdateProjectError>`
- **Wire**: `PUT /v1/organizations/{organization_uid}/projects/{project_uid}`
- **Auth**: any of `bearerAuth`, `authtokenAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Project`
- **Error**: `ContentstackError` with `kind: "api"`, an instance of `Projects.UpdateProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.UpdateProjectRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `organizationUid` | `path` | `organization_uid` | `string` | yes |
| `projectUid` | `path` | `project_uid` | `string` | yes |
| `body` | `body` | — | `CreateProjectRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateProjectRequest` | `createProjectRequestSchema` | `src/models/create-project-request.ts` |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

