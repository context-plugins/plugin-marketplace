<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `browser_stack/apis/projects.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.projects.delete_project

- **Route**: `DELETE /automate/projects/{projectId}.json`
- **Auth**: `basic_auth`
- **Signature**: `def delete_project(project_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`
- **Params**: `project_id` — path `projectId`
- **Returns (parsed)**: `StatusMessage`
- **Returns (raw)**: `ApiResult[StatusMessage, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `StatusMessage` | `browser_stack/models/status_message.py` |

### client.projects.get_project

- **Route**: `GET /automate/projects/{projectId}.json`
- **Auth**: `basic_auth`
- **Signature**: `def get_project(project_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`
- **Params**: `project_id` — path `projectId`
- **Returns (parsed)**: `ProjectDetail`
- **Returns (raw)**: `ApiResult[ProjectDetail, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ProjectDetail` | `browser_stack/models/project_detail.py` |

### client.projects.get_project_badge_key

- **Route**: `GET /automate/projects/{projectId}/badge_key`
- **Auth**: `basic_auth`
- **Signature**: `def get_project_badge_key(project_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`
- **Params**: `project_id` — path `projectId`
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, RawError]`
- **Error**: `RawError` — **Case B**

### client.projects.list_projects

- **Route**: `GET /automate/projects.json`
- **Auth**: `basic_auth`
- **Signature**: `def list_projects(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[Project]`
- **Returns (raw)**: `ApiResult[list[Project], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Project` | `browser_stack/models/project.py` |

### client.projects.update_project

- **Route**: `PUT /automate/projects/{projectId}.json`
- **Auth**: `basic_auth`
- **Signature**: `def update_project(project_id: int, body: AutomateProjectsJsonRequest | AutomateProjectsJsonRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `body`
- **Params**: `project_id` — path `projectId` · `body` — JSON body
- **Returns (parsed)**: `Project`
- **Returns (raw)**: `ApiResult[Project, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `AutomateProjectsJsonRequest` | `browser_stack/models/automate_projects_json_request.py` |
| `AutomateProjectsJsonRequestDict` | `browser_stack/models/automate_projects_json_request.py` |
| `Project` | `browser_stack/models/project.py` |

