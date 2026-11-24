<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `src/resources/projects.ts` · 2 operations · Request and error types: namespace `Projects`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `code-qr`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getProject

- **Signature**: `getProject(request: Projects.GetProjectRequest, options?: RequestOptions): ApiPromise<Project, Projects.GetProjectError>`
- **Wire**: `GET /projects/{projectSlug}`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Project`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Projects.GetProjectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Projects.GetProjectRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `projectSlug` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### getProjects

- **Signature**: `getProjects(options?: RequestOptions): ApiPromise<Project[], Projects.GetProjectsError>`
- **Wire**: `GET /projects`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Project[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Projects.GetProjectsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Project` | `projectSchema` | `src/models/project.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

