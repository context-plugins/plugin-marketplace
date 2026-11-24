<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `src/resources/projects.ts` · 6 operations · Request and error types: namespace `Projects`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createProject

- **Signature**: `createProject(request: Projects.CreateProjectRequest, options?: RequestOptions): ApiPromise<Project, Projects.CreateProjectError>`
- **Wire**: `POST /api/v3/projects`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Project`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Projects.CreateProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.CreateProjectRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateProject` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateProject` | `createProjectSchema` | `src/models/create-project.ts` |
| `Project` | `projectSchema` | `src/models/project.ts` |

### deleteProject

- **Signature**: `deleteProject(request: Projects.DeleteProjectRequest, options?: RequestOptions): ApiPromise<undefined, Projects.DeleteProjectError>`
- **Wire**: `DELETE /api/v3/projects/{project-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Projects.DeleteProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.DeleteProjectRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectPublicId` | `path` | `project-public-id` | `number` | yes |

### getProject

- **Signature**: `getProject(request: Projects.GetProjectRequest, options?: RequestOptions): ApiPromise<Project, Projects.GetProjectError>`
- **Wire**: `GET /api/v3/projects/{project-public-id}`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Project`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Projects.GetProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.GetProjectRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectPublicId` | `path` | `project-public-id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Project` | `projectSchema` | `src/models/project.ts` |

### listProjects

- **Signature**: `listProjects(options?: RequestOptions): ApiPromise<Project[], Projects.ListProjectsError>`
- **Wire**: `GET /api/v3/projects`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Project[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Projects.ListProjectsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Project` | `projectSchema` | `src/models/project.ts` |

### listStories

- **Signature**: `listStories(request: Projects.ListStoriesRequest, options?: RequestOptions): ApiPromise<StorySlim[], Projects.ListStoriesError>`
- **Wire**: `GET /api/v3/projects/{project-public-id}/stories`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StorySlim[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Projects.ListStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.ListStoriesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectPublicId` | `path` | `project-public-id` | `number` | yes |
| `includesDescription` | `query` | `includes_description` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StorySlim` | `storySlimSchema` | `src/models/story-slim.ts` |

### updateProject

- **Signature**: `updateProject(request: Projects.UpdateProjectRequest, options?: RequestOptions): ApiPromise<Project, Projects.UpdateProjectError>`
- **Wire**: `PUT /api/v3/projects/{project-public-id}`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Project`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Projects.UpdateProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.UpdateProjectRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `projectPublicId` | `path` | `project-public-id` | `number` | yes |
| `body` | `body` | — | `UpdateProject` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateProject` | `updateProjectSchema` | `src/models/update-project.ts` |
| `Project` | `projectSchema` | `src/models/project.ts` |

