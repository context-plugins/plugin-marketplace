<!-- Generated file — do not edit; regenerated with the SDK. -->

# BranchingModelApi — operations

Accessor: `client.branching_model_api` · Source: `bitbucket/apis/branching_model_api.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.branching_model_api.get_repositories_by_workspace_by_repo_slug_branching_model

- **Route**: `GET /repositories/{workspace}/{repo_slug}/branching-model`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_branching_model(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `BranchingModel`
- **Returns (raw)**: `ApiResult[BranchingModel, GetRepositoriesByWorkspaceByRepoSlugBranchingModelErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugBranchingModelErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BranchingModel` | `bitbucket/models/branching_model.py` |
| `GetRepositoriesByWorkspaceByRepoSlugBranchingModelErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_branching_model_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.branching_model_api.get_repositories_by_workspace_by_repo_slug_branching_model_settings

- **Route**: `GET /repositories/{workspace}/{repo_slug}/branching-model/settings`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_branching_model_settings(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `BranchingModelSettings`
- **Returns (raw)**: `ApiResult[BranchingModelSettings, GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BranchingModelSettings` | `bitbucket/models/branching_model_settings.py` |
| `GetRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_branching_model_settings_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.branching_model_api.get_repositories_by_workspace_by_repo_slug_effective_branching_model

- **Route**: `GET /repositories/{workspace}/{repo_slug}/effective-branching-model`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_effective_branching_model(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `EffectiveRepoBranchingModel`
- **Returns (raw)**: `ApiResult[EffectiveRepoBranchingModel, GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EffectiveRepoBranchingModel` | `bitbucket/models/effective_repo_branching_model.py` |
| `GetRepositoriesByWorkspaceByRepoSlugEffectiveBranchingModelErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_effective_branching_model_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.branching_model_api.get_workspaces_by_workspace_projects_by_project_key_branching_model

- **Route**: `GET /workspaces/{workspace}/projects/{project_key}/branching-model`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_projects_by_project_key_branching_model(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_key`, `workspace`
- **Params**: `project_key` — path · `workspace` — path
- **Returns (parsed)**: `ProjectBranchingModel`
- **Returns (raw)**: `ApiResult[ProjectBranchingModel, GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelErrorBody]`
- **Error**: `GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectBranchingModel` | `bitbucket/models/project_branching_model.py` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_branching_model_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.branching_model_api.get_workspaces_by_workspace_projects_by_project_key_branching_model_settings

- **Route**: `GET /workspaces/{workspace}/projects/{project_key}/branching-model/settings`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_projects_by_project_key_branching_model_settings(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_key`, `workspace`
- **Params**: `project_key` — path · `workspace` — path
- **Returns (parsed)**: `BranchingModelSettings`
- **Returns (raw)**: `ApiResult[BranchingModelSettings, GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsErrorBody]`
- **Error**: `GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BranchingModelSettings` | `bitbucket/models/branching_model_settings.py` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_branching_model_settings_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.branching_model_api.put_repositories_by_workspace_by_repo_slug_branching_model_settings

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/branching-model/settings`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_repositories_by_workspace_by_repo_slug_branching_model_settings(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `BranchingModelSettings`
- **Returns (raw)**: `ApiResult[BranchingModelSettings, PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody]`
- **Error**: `PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BranchingModelSettings` | `bitbucket/models/branching_model_settings.py` |
| `PutRepositoriesByWorkspaceByRepoSlugBranchingModelSettingsErrorBody` | `bitbucket/errors/put_repositories_by_workspace_by_repo_slug_branching_model_settings_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.branching_model_api.put_workspaces_by_workspace_projects_by_project_key_branching_model_settings

- **Route**: `PUT /workspaces/{workspace}/projects/{project_key}/branching-model/settings`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_workspaces_by_workspace_projects_by_project_key_branching_model_settings(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_key`, `workspace`
- **Params**: `project_key` — path · `workspace` — path
- **Returns (parsed)**: `BranchingModelSettings`
- **Returns (raw)**: `ApiResult[BranchingModelSettings, PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsErrorBody]`
- **Error**: `PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BranchingModelSettings` | `bitbucket/models/branching_model_settings.py` |
| `PutWorkspacesByWorkspaceProjectsByProjectKeyBranchingModelSettingsErrorBody` | `bitbucket/errors/put_workspaces_by_workspace_projects_by_project_key_branching_model_settings_error.py` |
| `Error` | `bitbucket/models/error.py` |

