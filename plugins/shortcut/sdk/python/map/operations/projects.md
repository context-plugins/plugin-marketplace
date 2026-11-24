<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `shortcut/apis/projects.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.projects.create_project

- **Route**: `POST /api/v3/projects`
- **Auth**: `api_token`
- **Signature**: `def create_project(body: CreateProject | CreateProjectDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Project`
- **Returns (raw)**: `ApiResult[Project, CreateProjectErrorBody]`
- **Error**: `CreateProjectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateProject` | `shortcut/models/create_project.py` |
| `CreateProjectDict` | `shortcut/models/create_project.py` |
| `Project` | `shortcut/models/project.py` |
| `CreateProjectErrorBody` | `shortcut/errors/create_project_error.py` |

### client.projects.delete_project

- **Route**: `DELETE /api/v3/projects/{project-public-id}`
- **Auth**: `api_token`
- **Signature**: `def delete_project(project_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_public_id`
- **Params**: `project_public_id` — path `project-public-id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteProjectErrorBody]`
- **Error**: `DeleteProjectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteProjectErrorBody` | `shortcut/errors/delete_project_error.py` |

### client.projects.get_project

- **Route**: `GET /api/v3/projects/{project-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_project(project_public_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_public_id`
- **Params**: `project_public_id` — path `project-public-id`
- **Returns (parsed)**: `Project`
- **Returns (raw)**: `ApiResult[Project, GetProjectErrorBody]`
- **Error**: `GetProjectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Project` | `shortcut/models/project.py` |
| `GetProjectErrorBody` | `shortcut/errors/get_project_error.py` |

### client.projects.list_projects

- **Route**: `GET /api/v3/projects`
- **Auth**: `api_token`
- **Signature**: `def list_projects(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[Project]`
- **Returns (raw)**: `ApiResult[list[Project], ListProjectsErrorBody]`
- **Error**: `ListProjectsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `Project` | `shortcut/models/project.py` |
| `ListProjectsErrorBody` | `shortcut/errors/list_projects_error.py` |

### client.projects.list_stories

- **Route**: `GET /api/v3/projects/{project-public-id}/stories`
- **Auth**: `api_token`
- **Signature**: `def list_stories(project_public_id: int, *, includes_description: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_public_id`
- **Params**: `project_public_id` — path `project-public-id` · `includes_description` — query
- **Returns (parsed)**: `list[StorySlim]`
- **Returns (raw)**: `ApiResult[list[StorySlim], ListStoriesErrorBody]`
- **Error**: `ListStoriesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `StorySlim` | `shortcut/models/story_slim.py` |
| `ListStoriesErrorBody` | `shortcut/errors/list_stories_error.py` |

### client.projects.update_project

- **Route**: `PUT /api/v3/projects/{project-public-id}`
- **Auth**: `api_token`
- **Signature**: `def update_project(project_public_id: int, body: UpdateProject | UpdateProjectDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_public_id`, `body`
- **Params**: `project_public_id` — path `project-public-id` · `body` — JSON body
- **Returns (parsed)**: `Project`
- **Returns (raw)**: `ApiResult[Project, UpdateProjectErrorBody]`
- **Error**: `UpdateProjectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateProject` | `shortcut/models/update_project.py` |
| `UpdateProjectDict` | `shortcut/models/update_project.py` |
| `Project` | `shortcut/models/project.py` |
| `UpdateProjectErrorBody` | `shortcut/errors/update_project_error.py` |

