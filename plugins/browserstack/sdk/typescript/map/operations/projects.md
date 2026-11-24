<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `src/resources/projects.ts` · 5 operations · Request types: namespace `Projects`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `browser-stack`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteProject

- **Signature**: `deleteProject(request: Projects.DeleteProjectRequest, options?: RequestOptions): ApiPromise<StatusMessage, ApiError>`
- **Wire**: `DELETE /automate/projects/{projectId}.json`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StatusMessage`
- **Error**: `BrowserStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Projects.DeleteProjectRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusMessage` | `statusMessageSchema` | `src/models/status-message.ts` |

### getProject

- **Signature**: `getProject(request: Projects.GetProjectRequest, options?: RequestOptions): ApiPromise<ProjectDetail, ApiError>`
- **Wire**: `GET /automate/projects/{projectId}.json`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProjectDetail`
- **Error**: `BrowserStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Projects.GetProjectRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProjectDetail` | `projectDetailSchema` | `src/models/project-detail.ts` |

### getProjectBadgeKey

- **Signature**: `getProjectBadgeKey(request: Projects.GetProjectBadgeKeyRequest, options?: RequestOptions): ApiPromise<string, ApiError>`
- **Wire**: `GET /automate/projects/{projectId}/badge_key`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `BrowserStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Projects.GetProjectBadgeKeyRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `number` | yes |

### listProjects

- **Signature**: `listProjects(options?: RequestOptions): ApiPromise<Project[], ApiError>`
- **Wire**: `GET /automate/projects.json`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Project[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BrowserStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `Project` | `projectSchema` | `src/models/project.ts` |

### updateProject

- **Signature**: `updateProject(request: Projects.UpdateProjectRequest, options?: RequestOptions): ApiPromise<Project, ApiError>`
- **Wire**: `PUT /automate/projects/{projectId}.json`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Project`
- **Error**: `BrowserStackError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Projects.UpdateProjectRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectId` | `path` | `number` | yes |
| `body` | `body` | `AutomateProjectsJsonRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AutomateProjectsJsonRequest` | `automateProjectsJsonRequestSchema` | `src/models/automate-projects-json-request.ts` |
| `Project` | `projectSchema` | `src/models/project.ts` |

