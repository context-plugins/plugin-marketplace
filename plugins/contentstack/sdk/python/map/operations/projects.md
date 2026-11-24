<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `contentstack/apis/projects.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.projects.create_project

- **Route**: `POST /v1/organizations/{organization_uid}/projects`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_projects_api`
- **Signature**: `def create_project(organization_uid: str, body: CreateProjectRequest | CreateProjectRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `body`
- **Params**: `organization_uid` — path · `body` — JSON body
- **Returns (parsed)**: `Project`
- **Returns (raw)**: `ApiResult[Project, CreateProjectErrorBody]`
- **Error**: `CreateProjectErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateProjectRequest` | `contentstack/models/create_project_request.py` |
| `CreateProjectRequestDict` | `contentstack/models/create_project_request.py` |
| `Project` | `contentstack/models/project.py` |
| `CreateProjectErrorBody` | `contentstack/errors/create_project_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.projects.delete_project

- **Route**: `DELETE /v1/organizations/{organization_uid}/projects/{project_uid}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_projects_api`
- **Signature**: `def delete_project(organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `project_uid`
- **Params**: `organization_uid` — path · `project_uid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteProjectErrorBody]`
- **Error**: `DeleteProjectErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteProjectErrorBody` | `contentstack/errors/delete_project_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.projects.delete_projects_by_project_uid

- **Route**: `DELETE /projects/{project_uid}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_projects_api`
- **Signature**: `def delete_projects_by_project_uid(project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_uid`
- **Params**: `project_uid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteProjectsByProjectUidErrorBody]`
- **Error**: `DeleteProjectsByProjectUidErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteProjectsByProjectUidErrorBody` | `contentstack/errors/delete_projects_by_project_uid_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.projects.get_all_projects

- **Route**: `GET /v1/organizations/{organization_uid}/projects`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_projects_api`
- **Signature**: `def get_all_projects(organization_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`
- **Params**: `organization_uid` — path
- **Returns (parsed)**: `ProjectList`
- **Returns (raw)**: `ApiResult[ProjectList, GetAllProjectsErrorBody]`
- **Error**: `GetAllProjectsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectList` | `contentstack/models/project_list.py` |
| `GetAllProjectsErrorBody` | `contentstack/errors/get_all_projects_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.projects.get_project

- **Route**: `GET /v1/organizations/{organization_uid}/projects/{project_uid}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_projects_api`
- **Signature**: `def get_project(organization_uid: str, project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `project_uid`
- **Params**: `organization_uid` — path · `project_uid` — path
- **Returns (parsed)**: `Project`
- **Returns (raw)**: `ApiResult[Project, GetProjectErrorBody]`
- **Error**: `GetProjectErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Project` | `contentstack/models/project.py` |
| `GetProjectErrorBody` | `contentstack/errors/get_project_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.projects.get_projects

- **Route**: `GET /projects`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_projects_api`
- **Signature**: `def get_projects(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ProjectList2`
- **Returns (raw)**: `ApiResult[ProjectList2, GetProjectsErrorBody]`
- **Error**: `GetProjectsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectList2` | `contentstack/models/project_list2.py` |
| `GetProjectsErrorBody` | `contentstack/errors/get_projects_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.projects.get_projects_by_project_uid

- **Route**: `GET /projects/{project_uid}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_projects_api`
- **Signature**: `def get_projects_by_project_uid(project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_uid`
- **Params**: `project_uid` — path
- **Returns (parsed)**: `Project2`
- **Returns (raw)**: `ApiResult[Project2, GetProjectsByProjectUidErrorBody]`
- **Error**: `GetProjectsByProjectUidErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Project2` | `contentstack/models/project2.py` |
| `GetProjectsByProjectUidErrorBody` | `contentstack/errors/get_projects_by_project_uid_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.projects.post_projects

- **Route**: `POST /projects`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_projects_api`
- **Signature**: `def post_projects(body: CreateProjectRequest2 | CreateProjectRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Project2`
- **Returns (raw)**: `ApiResult[Project2, PostProjectsErrorBody]`
- **Error**: `PostProjectsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateProjectRequest2` | `contentstack/models/create_project_request2.py` |
| `CreateProjectRequest2Dict` | `contentstack/models/create_project_request2.py` |
| `Project2` | `contentstack/models/project2.py` |
| `PostProjectsErrorBody` | `contentstack/errors/post_projects_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.projects.put_projects_by_project_uid

- **Route**: `PUT /projects/{project_uid}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_projects_api`
- **Signature**: `def put_projects_by_project_uid(project_uid: str, body: CreateProjectRequest2 | CreateProjectRequest2Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_uid`, `body`
- **Params**: `project_uid` — path · `body` — JSON body
- **Returns (parsed)**: `Project2`
- **Returns (raw)**: `ApiResult[Project2, PutProjectsByProjectUidErrorBody]`
- **Error**: `PutProjectsByProjectUidErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateProjectRequest2` | `contentstack/models/create_project_request2.py` |
| `CreateProjectRequest2Dict` | `contentstack/models/create_project_request2.py` |
| `Project2` | `contentstack/models/project2.py` |
| `PutProjectsByProjectUidErrorBody` | `contentstack/errors/put_projects_by_project_uid_error.py` |
| `Error` | `contentstack/models/error.py` |

### client.projects.update_project

- **Route**: `PUT /v1/organizations/{organization_uid}/projects/{project_uid}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_projects_api`
- **Signature**: `def update_project(organization_uid: str, project_uid: str, body: CreateProjectRequest | CreateProjectRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_uid`, `project_uid`, `body`
- **Params**: `organization_uid` — path · `project_uid` — path · `body` — JSON body
- **Returns (parsed)**: `Project`
- **Returns (raw)**: `ApiResult[Project, UpdateProjectErrorBody]`
- **Error**: `UpdateProjectErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateProjectRequest` | `contentstack/models/create_project_request.py` |
| `CreateProjectRequestDict` | `contentstack/models/create_project_request.py` |
| `Project` | `contentstack/models/project.py` |
| `UpdateProjectErrorBody` | `contentstack/errors/update_project_error.py` |
| `Error` | `contentstack/models/error.py` |

