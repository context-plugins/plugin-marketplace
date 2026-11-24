<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `code_qr/apis/projects.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.projects.get_project

- **Route**: `GET /projects/{projectSlug}`
- **Auth**: `token`
- **Signature**: `def get_project(project_slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`
- **Params**: `project_slug` — path `projectSlug`
- **Returns (parsed)**: `Project`
- **Returns (raw)**: `ApiResult[Project, GetProjectErrorBody]`
- **Error**: `GetProjectErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Project` | `code_qr/models/project.py` |
| `GetProjectErrorBody` | `code_qr/errors/get_project_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.projects.get_projects

- **Route**: `GET /projects`
- **Auth**: `token`
- **Signature**: `def get_projects(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[Project]`
- **Returns (raw)**: `ApiResult[list[Project], GetProjectsErrorBody]`
- **Error**: `GetProjectsErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Project` | `code_qr/models/project.py` |
| `GetProjectsErrorBody` | `code_qr/errors/get_projects_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

