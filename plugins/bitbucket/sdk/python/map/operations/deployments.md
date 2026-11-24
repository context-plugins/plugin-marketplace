<!-- Generated file — do not edit; regenerated with the SDK. -->

# Deployments — operations

Accessor: `client.deployments` · Source: `bitbucket/apis/deployments.py` · 16 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.deployments.create_environment

- **Route**: `POST /repositories/{workspace}/{repo_slug}/environments`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def create_environment(workspace: str, repo_slug: str, body: DeploymentEnvironment | DeploymentEnvironmentDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `body` — JSON body
- **Returns (parsed)**: `DeploymentEnvironment`
- **Returns (raw)**: `ApiResult[DeploymentEnvironment, CreateEnvironmentErrorBody]`
- **Error**: `CreateEnvironmentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeploymentEnvironment` | `bitbucket/models/deployment_environment.py` |
| `DeploymentEnvironmentDict` | `bitbucket/models/deployment_environment.py` |
| `CreateEnvironmentErrorBody` | `bitbucket/errors/create_environment_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.deployments.delete_environment_for_repository

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/environments/{environment_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_environment_for_repository(workspace: str, repo_slug: str, environment_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `environment_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `environment_uuid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteEnvironmentForRepositoryErrorBody]`
- **Error**: `DeleteEnvironmentForRepositoryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteEnvironmentForRepositoryErrorBody` | `bitbucket/errors/delete_environment_for_repository_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.deployments.delete_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(key_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key_id`, `repo_slug`, `workspace`
- **Params**: `key_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody]`
- **Error**: `DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody` | `bitbucket/errors/delete_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.deployments.delete_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id

- **Route**: `DELETE /workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id(key_id: str, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key_id`, `project_key`, `workspace`
- **Params**: `key_id` — path · `project_key` — path · `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody]`
- **Error**: `DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody` | `bitbucket/errors/delete_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.deployments.get_deployment_for_repository

- **Route**: `GET /repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_deployment_for_repository(workspace: str, repo_slug: str, deployment_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `deployment_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `deployment_uuid` — path
- **Returns (parsed)**: `Deployment`
- **Returns (raw)**: `ApiResult[Deployment, GetDeploymentForRepositoryErrorBody]`
- **Error**: `GetDeploymentForRepositoryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Deployment` | `bitbucket/models/deployment.py` |
| `GetDeploymentForRepositoryErrorBody` | `bitbucket/errors/get_deployment_for_repository_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.deployments.get_deployments_for_repository

- **Route**: `GET /repositories/{workspace}/{repo_slug}/deployments`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_deployments_for_repository(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`
- **Params**: `workspace` — path · `repo_slug` — path
- **Returns (parsed)**: `PaginatedDeployments`
- **Returns (raw)**: `ApiResult[PaginatedDeployments, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginatedDeployments` | `bitbucket/models/paginated_deployments.py` |

### client.deployments.get_environment_for_repository

- **Route**: `GET /repositories/{workspace}/{repo_slug}/environments/{environment_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_environment_for_repository(workspace: str, repo_slug: str, environment_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `environment_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `environment_uuid` — path
- **Returns (parsed)**: `DeploymentEnvironment`
- **Returns (raw)**: `ApiResult[DeploymentEnvironment, GetEnvironmentForRepositoryErrorBody]`
- **Error**: `GetEnvironmentForRepositoryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeploymentEnvironment` | `bitbucket/models/deployment_environment.py` |
| `GetEnvironmentForRepositoryErrorBody` | `bitbucket/errors/get_environment_for_repository_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.deployments.get_environments_for_repository

- **Route**: `GET /repositories/{workspace}/{repo_slug}/environments`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_environments_for_repository(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`
- **Params**: `workspace` — path · `repo_slug` — path
- **Returns (parsed)**: `PaginatedDeploymentEnvironments`
- **Returns (raw)**: `ApiResult[PaginatedDeploymentEnvironments, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginatedDeploymentEnvironments` | `bitbucket/models/paginated_deployment_environments.py` |

### client.deployments.get_repositories_by_workspace_by_repo_slug_deploy_keys

- **Route**: `GET /repositories/{workspace}/{repo_slug}/deploy-keys`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_deploy_keys(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedDeployKeys`
- **Returns (raw)**: `ApiResult[PaginatedDeployKeys, GetRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedDeployKeys` | `bitbucket/models/paginated_deploy_keys.py` |
| `GetRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_deploy_keys_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.deployments.get_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id

- **Route**: `GET /repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(key_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key_id`, `repo_slug`, `workspace`
- **Params**: `key_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `DeployKey`
- **Returns (raw)**: `ApiResult[DeployKey, GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody]`
- **Error**: `GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `DeployKey` | `bitbucket/models/deploy_key.py` |
| `GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody` | `bitbucket/errors/get_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.deployments.get_workspaces_by_workspace_projects_by_project_key_deploy_keys

- **Route**: `GET /workspaces/{workspace}/projects/{project_key}/deploy-keys`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_projects_by_project_key_deploy_keys(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_key`, `workspace`
- **Params**: `project_key` — path · `workspace` — path
- **Returns (parsed)**: `PaginatedProjectDeployKeys`
- **Returns (raw)**: `ApiResult[PaginatedProjectDeployKeys, GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody]`
- **Error**: `GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedProjectDeployKeys` | `bitbucket/models/paginated_project_deploy_keys.py` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_deploy_keys_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.deployments.get_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id

- **Route**: `GET /workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id(key_id: str, project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key_id`, `project_key`, `workspace`
- **Params**: `key_id` — path · `project_key` — path · `workspace` — path
- **Returns (parsed)**: `ProjectDeployKey`
- **Returns (raw)**: `ApiResult[ProjectDeployKey, GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody]`
- **Error**: `GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectDeployKey` | `bitbucket/models/project_deploy_key.py` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdErrorBody` | `bitbucket/errors/get_workspaces_by_workspace_projects_by_project_key_deploy_keys_by_key_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.deployments.post_repositories_by_workspace_by_repo_slug_deploy_keys

- **Route**: `POST /repositories/{workspace}/{repo_slug}/deploy-keys`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_repositories_by_workspace_by_repo_slug_deploy_keys(repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `repo_slug`, `workspace`
- **Params**: `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `DeployKey`
- **Returns (raw)**: `ApiResult[DeployKey, PostRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody]`
- **Error**: `PostRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [400, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `DeployKey` | `bitbucket/models/deploy_key.py` |
| `PostRepositoriesByWorkspaceByRepoSlugDeployKeysErrorBody` | `bitbucket/errors/post_repositories_by_workspace_by_repo_slug_deploy_keys_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.deployments.post_workspaces_by_workspace_projects_by_project_key_deploy_keys

- **Route**: `POST /workspaces/{workspace}/projects/{project_key}/deploy-keys`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def post_workspaces_by_workspace_projects_by_project_key_deploy_keys(project_key: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_key`, `workspace`
- **Params**: `project_key` — path · `workspace` — path
- **Returns (parsed)**: `ProjectDeployKey`
- **Returns (raw)**: `ApiResult[ProjectDeployKey, PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody]`
- **Error**: `PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectDeployKey` | `bitbucket/models/project_deploy_key.py` |
| `PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysErrorBody` | `bitbucket/errors/post_workspaces_by_workspace_projects_by_project_key_deploy_keys_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.deployments.put_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def put_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id(key_id: str, repo_slug: str, workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key_id`, `repo_slug`, `workspace`
- **Params**: `key_id` — path · `repo_slug` — path · `workspace` — path
- **Returns (parsed)**: `DeployKey`
- **Returns (raw)**: `ApiResult[DeployKey, PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody]`
- **Error**: `PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 404] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `DeployKey` | `bitbucket/models/deploy_key.py` |
| `PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdErrorBody` | `bitbucket/errors/put_repositories_by_workspace_by_repo_slug_deploy_keys_by_key_id_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.deployments.update_environment_for_repository

- **Route**: `POST /repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def update_environment_for_repository(workspace: str, repo_slug: str, environment_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `environment_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `environment_uuid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateEnvironmentForRepositoryErrorBody]`
- **Error**: `UpdateEnvironmentForRepositoryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateEnvironmentForRepositoryErrorBody` | `bitbucket/errors/update_environment_for_repository_error.py` |
| `Error` | `bitbucket/models/error.py` |

