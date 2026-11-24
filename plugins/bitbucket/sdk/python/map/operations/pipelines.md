<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pipelines — operations

Accessor: `client.pipelines` · Source: `bitbucket/apis/pipelines.py` · 68 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.pipelines.create_deployment_variable

- **Route**: `POST /repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def create_deployment_variable(workspace: str, repo_slug: str, environment_uuid: str, body: DeploymentVariable | DeploymentVariableDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `environment_uuid`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `environment_uuid` — path · `body` — JSON body
- **Returns (parsed)**: `DeploymentVariable`
- **Returns (raw)**: `ApiResult[DeploymentVariable, CreateDeploymentVariableErrorBody]`
- **Error**: `CreateDeploymentVariableErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeploymentVariable` | `bitbucket/models/deployment_variable.py` |
| `DeploymentVariableDict` | `bitbucket/models/deployment_variable.py` |
| `CreateDeploymentVariableErrorBody` | `bitbucket/errors/create_deployment_variable_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.create_pipeline_for_repository

- **Route**: `POST /repositories/{workspace}/{repo_slug}/pipelines`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def create_pipeline_for_repository(workspace: str, repo_slug: str, body: Pipeline | PipelineDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `body` — JSON body
- **Returns (parsed)**: `Pipeline`
- **Returns (raw)**: `ApiResult[Pipeline, CreatePipelineForRepositoryErrorBody]`
- **Error**: `CreatePipelineForRepositoryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Pipeline` | `bitbucket/models/pipeline.py` |
| `PipelineDict` | `bitbucket/models/pipeline.py` |
| `CreatePipelineForRepositoryErrorBody` | `bitbucket/errors/create_pipeline_for_repository_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.create_pipeline_variable_for_team

- **Route**: `POST /teams/{username}/pipelines_config/variables`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def create_pipeline_variable_for_team(username: str, *, body: PipelineVariable | PipelineVariableDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `username`
- **Params**: `username` — path · `body` — JSON body
- **Returns (parsed)**: `PipelineVariable`
- **Returns (raw)**: `ApiResult[PipelineVariable, CreatePipelineVariableForTeamErrorBody]`
- **Error**: `CreatePipelineVariableForTeamErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineVariable` | `bitbucket/models/pipeline_variable.py` |
| `PipelineVariableDict` | `bitbucket/models/pipeline_variable.py` |
| `CreatePipelineVariableForTeamErrorBody` | `bitbucket/errors/create_pipeline_variable_for_team_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.create_pipeline_variable_for_user

- **Route**: `POST /users/{selected_user}/pipelines_config/variables`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def create_pipeline_variable_for_user(selected_user: str, *, body: PipelineVariable | PipelineVariableDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `selected_user`
- **Params**: `selected_user` — path · `body` — JSON body
- **Returns (parsed)**: `PipelineVariable`
- **Returns (raw)**: `ApiResult[PipelineVariable, CreatePipelineVariableForUserErrorBody]`
- **Error**: `CreatePipelineVariableForUserErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineVariable` | `bitbucket/models/pipeline_variable.py` |
| `PipelineVariableDict` | `bitbucket/models/pipeline_variable.py` |
| `CreatePipelineVariableForUserErrorBody` | `bitbucket/errors/create_pipeline_variable_for_user_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.create_pipeline_variable_for_workspace

- **Route**: `POST /workspaces/{workspace}/pipelines-config/variables`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def create_pipeline_variable_for_workspace(workspace: str, *, body: PipelineVariable | PipelineVariableDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path · `body` — JSON body
- **Returns (parsed)**: `PipelineVariable`
- **Returns (raw)**: `ApiResult[PipelineVariable, CreatePipelineVariableForWorkspaceErrorBody]`
- **Error**: `CreatePipelineVariableForWorkspaceErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineVariable` | `bitbucket/models/pipeline_variable.py` |
| `PipelineVariableDict` | `bitbucket/models/pipeline_variable.py` |
| `CreatePipelineVariableForWorkspaceErrorBody` | `bitbucket/errors/create_pipeline_variable_for_workspace_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.create_repository_pipeline_known_host

- **Route**: `POST /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def create_repository_pipeline_known_host(workspace: str, repo_slug: str, body: PipelineKnownHost | PipelineKnownHostDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `body` — JSON body
- **Returns (parsed)**: `PipelineKnownHost`
- **Returns (raw)**: `ApiResult[PipelineKnownHost, CreateRepositoryPipelineKnownHostErrorBody]`
- **Error**: `CreateRepositoryPipelineKnownHostErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineKnownHost` | `bitbucket/models/pipeline_known_host.py` |
| `PipelineKnownHostDict` | `bitbucket/models/pipeline_known_host.py` |
| `CreateRepositoryPipelineKnownHostErrorBody` | `bitbucket/errors/create_repository_pipeline_known_host_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.create_repository_pipeline_schedule

- **Route**: `POST /repositories/{workspace}/{repo_slug}/pipelines_config/schedules`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def create_repository_pipeline_schedule(workspace: str, repo_slug: str, body: PipelineSchedulePostRequestBody | PipelineSchedulePostRequestBodyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `body` — JSON body
- **Returns (parsed)**: `PipelineSchedule`
- **Returns (raw)**: `ApiResult[PipelineSchedule, CreateRepositoryPipelineScheduleErrorBody]`
- **Error**: `CreateRepositoryPipelineScheduleErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineSchedulePostRequestBody` | `bitbucket/models/pipeline_schedule_post_request_body.py` |
| `PipelineSchedulePostRequestBodyDict` | `bitbucket/models/pipeline_schedule_post_request_body.py` |
| `PipelineSchedule` | `bitbucket/models/pipeline_schedule.py` |
| `CreateRepositoryPipelineScheduleErrorBody` | `bitbucket/errors/create_repository_pipeline_schedule_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.create_repository_pipeline_variable

- **Route**: `POST /repositories/{workspace}/{repo_slug}/pipelines_config/variables`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def create_repository_pipeline_variable(workspace: str, repo_slug: str, body: PipelineVariable | PipelineVariableDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `body` — JSON body
- **Returns (parsed)**: `PipelineVariable`
- **Returns (raw)**: `ApiResult[PipelineVariable, CreateRepositoryPipelineVariableErrorBody]`
- **Error**: `CreateRepositoryPipelineVariableErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineVariable` | `bitbucket/models/pipeline_variable.py` |
| `PipelineVariableDict` | `bitbucket/models/pipeline_variable.py` |
| `CreateRepositoryPipelineVariableErrorBody` | `bitbucket/errors/create_repository_pipeline_variable_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.create_repository_runner

- **Route**: `POST /repositories/{workspace}/{repo_slug}/pipelines-config/runners`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def create_repository_runner(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`
- **Params**: `workspace` — path · `repo_slug` — path
- **Returns (parsed)**: `PipelineRunner`
- **Returns (raw)**: `ApiResult[PipelineRunner, CreateRepositoryRunnerErrorBody]`
- **Error**: `CreateRepositoryRunnerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineRunner` | `bitbucket/models/pipeline_runner.py` |
| `CreateRepositoryRunnerErrorBody` | `bitbucket/errors/create_repository_runner_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.create_workspace_runner

- **Route**: `POST /workspaces/{workspace}/pipelines-config/runners`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def create_workspace_runner(workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path
- **Returns (parsed)**: `PipelineRunner`
- **Returns (raw)**: `ApiResult[PipelineRunner, CreateWorkspaceRunnerErrorBody]`
- **Error**: `CreateWorkspaceRunnerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineRunner` | `bitbucket/models/pipeline_runner.py` |
| `CreateWorkspaceRunnerErrorBody` | `bitbucket/errors/create_workspace_runner_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.delete_deployment_variable

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_deployment_variable(workspace: str, repo_slug: str, environment_uuid: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `environment_uuid`, `variable_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `environment_uuid` — path · `variable_uuid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteDeploymentVariableErrorBody]`
- **Error**: `DeleteDeploymentVariableErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteDeploymentVariableErrorBody` | `bitbucket/errors/delete_deployment_variable_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.delete_pipeline_variable_for_team

- **Route**: `DELETE /teams/{username}/pipelines_config/variables/{variable_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_pipeline_variable_for_team(username: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `username`, `variable_uuid`
- **Params**: `username` — path · `variable_uuid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeletePipelineVariableForTeamErrorBody]`
- **Error**: `DeletePipelineVariableForTeamErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeletePipelineVariableForTeamErrorBody` | `bitbucket/errors/delete_pipeline_variable_for_team_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.delete_pipeline_variable_for_user

- **Route**: `DELETE /users/{selected_user}/pipelines_config/variables/{variable_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_pipeline_variable_for_user(selected_user: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `selected_user`, `variable_uuid`
- **Params**: `selected_user` — path · `variable_uuid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeletePipelineVariableForUserErrorBody]`
- **Error**: `DeletePipelineVariableForUserErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeletePipelineVariableForUserErrorBody` | `bitbucket/errors/delete_pipeline_variable_for_user_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.delete_pipeline_variable_for_workspace

- **Route**: `DELETE /workspaces/{workspace}/pipelines-config/variables/{variable_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_pipeline_variable_for_workspace(workspace: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `variable_uuid`
- **Params**: `workspace` — path · `variable_uuid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeletePipelineVariableForWorkspaceErrorBody]`
- **Error**: `DeletePipelineVariableForWorkspaceErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeletePipelineVariableForWorkspaceErrorBody` | `bitbucket/errors/delete_pipeline_variable_for_workspace_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.delete_repository_pipeline_cache

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repository_pipeline_cache(workspace: str, repo_slug: str, cache_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `cache_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `cache_uuid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoryPipelineCacheErrorBody]`
- **Error**: `DeleteRepositoryPipelineCacheErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoryPipelineCacheErrorBody` | `bitbucket/errors/delete_repository_pipeline_cache_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.delete_repository_pipeline_caches

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/pipelines-config/caches`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repository_pipeline_caches(workspace: str, repo_slug: str, name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `name`
- **Params**: `workspace` — path · `repo_slug` — path · `name` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoryPipelineCachesErrorBody]`
- **Error**: `DeleteRepositoryPipelineCachesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoryPipelineCachesErrorBody` | `bitbucket/errors/delete_repository_pipeline_caches_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.delete_repository_pipeline_key_pair

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repository_pipeline_key_pair(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`
- **Params**: `workspace` — path · `repo_slug` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoryPipelineKeyPairErrorBody]`
- **Error**: `DeleteRepositoryPipelineKeyPairErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoryPipelineKeyPairErrorBody` | `bitbucket/errors/delete_repository_pipeline_key_pair_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.delete_repository_pipeline_known_host

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repository_pipeline_known_host(workspace: str, repo_slug: str, known_host_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `known_host_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `known_host_uuid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoryPipelineKnownHostErrorBody]`
- **Error**: `DeleteRepositoryPipelineKnownHostErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoryPipelineKnownHostErrorBody` | `bitbucket/errors/delete_repository_pipeline_known_host_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.delete_repository_pipeline_schedule

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repository_pipeline_schedule(workspace: str, repo_slug: str, schedule_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `schedule_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `schedule_uuid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoryPipelineScheduleErrorBody]`
- **Error**: `DeleteRepositoryPipelineScheduleErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoryPipelineScheduleErrorBody` | `bitbucket/errors/delete_repository_pipeline_schedule_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.delete_repository_pipeline_variable

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repository_pipeline_variable(workspace: str, repo_slug: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `variable_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `variable_uuid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoryPipelineVariableErrorBody]`
- **Error**: `DeleteRepositoryPipelineVariableErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoryPipelineVariableErrorBody` | `bitbucket/errors/delete_repository_pipeline_variable_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.delete_repository_runner

- **Route**: `DELETE /repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_repository_runner(workspace: str, repo_slug: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `runner_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `runner_uuid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteRepositoryRunnerErrorBody]`
- **Error**: `DeleteRepositoryRunnerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteRepositoryRunnerErrorBody` | `bitbucket/errors/delete_repository_runner_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.delete_workspace_runner

- **Route**: `DELETE /workspaces/{workspace}/pipelines-config/runners/{runner_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def delete_workspace_runner(workspace: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `runner_uuid`
- **Params**: `workspace` — path · `runner_uuid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWorkspaceRunnerErrorBody]`
- **Error**: `DeleteWorkspaceRunnerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteWorkspaceRunnerErrorBody` | `bitbucket/errors/delete_workspace_runner_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_deployment_variables

- **Route**: `GET /repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_deployment_variables(workspace: str, repo_slug: str, environment_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `environment_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `environment_uuid` — path
- **Returns (parsed)**: `PaginatedDeploymentVariables`
- **Returns (raw)**: `ApiResult[PaginatedDeploymentVariables, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginatedDeploymentVariables` | `bitbucket/models/paginated_deployment_variables.py` |

### client.pipelines.get_oidc_configuration

- **Route**: `GET /workspaces/{workspace}/pipelines-config/identity/oidc/.well-known/openid-configuration`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_oidc_configuration(workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetOidcConfigurationErrorBody]`
- **Error**: `GetOidcConfigurationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetOidcConfigurationErrorBody` | `bitbucket/errors/get_oidc_configuration_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_oidc_keys

- **Route**: `GET /workspaces/{workspace}/pipelines-config/identity/oidc/keys.json`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_oidc_keys(workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetOidcKeysErrorBody]`
- **Error**: `GetOidcKeysErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetOidcKeysErrorBody` | `bitbucket/errors/get_oidc_keys_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_pipeline_container_log

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/logs/{log_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_pipeline_container_log(workspace: str, repo_slug: str, pipeline_uuid: str, step_uuid: str, log_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `pipeline_uuid`, `step_uuid`, `log_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `pipeline_uuid` — path · `step_uuid` — path · `log_uuid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetPipelineContainerLogErrorBody]`
- **Error**: `GetPipelineContainerLogErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `GetPipelineContainerLogErrorBody` | `bitbucket/errors/get_pipeline_container_log_error.py` |

### client.pipelines.get_pipeline_for_repository

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_pipeline_for_repository(workspace: str, repo_slug: str, pipeline_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `pipeline_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `pipeline_uuid` — path
- **Returns (parsed)**: `Pipeline`
- **Returns (raw)**: `ApiResult[Pipeline, GetPipelineForRepositoryErrorBody]`
- **Error**: `GetPipelineForRepositoryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Pipeline` | `bitbucket/models/pipeline.py` |
| `GetPipelineForRepositoryErrorBody` | `bitbucket/errors/get_pipeline_for_repository_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_pipeline_step_for_repository

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_pipeline_step_for_repository(workspace: str, repo_slug: str, pipeline_uuid: str, step_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `pipeline_uuid`, `step_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `pipeline_uuid` — path · `step_uuid` — path
- **Returns (parsed)**: `PipelineStep`
- **Returns (raw)**: `ApiResult[PipelineStep, GetPipelineStepForRepositoryErrorBody]`
- **Error**: `GetPipelineStepForRepositoryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineStep` | `bitbucket/models/pipeline_step.py` |
| `GetPipelineStepForRepositoryErrorBody` | `bitbucket/errors/get_pipeline_step_for_repository_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_pipeline_step_log_for_repository

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/log`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_pipeline_step_log_for_repository(workspace: str, repo_slug: str, pipeline_uuid: str, step_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `pipeline_uuid`, `step_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `pipeline_uuid` — path · `step_uuid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetPipelineStepLogForRepositoryErrorBody]`
- **Error**: `GetPipelineStepLogForRepositoryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, 416, anything unmapped]

| Type | Source |
| --- | --- |
| `GetPipelineStepLogForRepositoryErrorBody` | `bitbucket/errors/get_pipeline_step_log_for_repository_error.py` |

### client.pipelines.get_pipeline_steps_for_repository

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_pipeline_steps_for_repository(workspace: str, repo_slug: str, pipeline_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `pipeline_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `pipeline_uuid` — path
- **Returns (parsed)**: `PaginatedPipelineSteps`
- **Returns (raw)**: `ApiResult[PaginatedPipelineSteps, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginatedPipelineSteps` | `bitbucket/models/paginated_pipeline_steps.py` |

### client.pipelines.get_pipeline_test_report_test_case_reasons

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases/{test_case_uuid}/test_case_reasons`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_pipeline_test_report_test_case_reasons(workspace: str, repo_slug: str, pipeline_uuid: str, step_uuid: str, test_case_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `pipeline_uuid`, `step_uuid`, `test_case_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `pipeline_uuid` — path · `step_uuid` — path · `test_case_uuid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetPipelineTestReportTestCaseReasonsErrorBody]`
- **Error**: `GetPipelineTestReportTestCaseReasonsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetPipelineTestReportTestCaseReasonsErrorBody` | `bitbucket/errors/get_pipeline_test_report_test_case_reasons_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_pipeline_test_report_test_cases

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_pipeline_test_report_test_cases(workspace: str, repo_slug: str, pipeline_uuid: str, step_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `pipeline_uuid`, `step_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `pipeline_uuid` — path · `step_uuid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetPipelineTestReportTestCasesErrorBody]`
- **Error**: `GetPipelineTestReportTestCasesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetPipelineTestReportTestCasesErrorBody` | `bitbucket/errors/get_pipeline_test_report_test_cases_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_pipeline_test_reports

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_pipeline_test_reports(workspace: str, repo_slug: str, pipeline_uuid: str, step_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `pipeline_uuid`, `step_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `pipeline_uuid` — path · `step_uuid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetPipelineTestReportsErrorBody]`
- **Error**: `GetPipelineTestReportsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetPipelineTestReportsErrorBody` | `bitbucket/errors/get_pipeline_test_reports_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_pipeline_variable_for_team

- **Route**: `GET /teams/{username}/pipelines_config/variables/{variable_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_pipeline_variable_for_team(username: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `username`, `variable_uuid`
- **Params**: `username` — path · `variable_uuid` — path
- **Returns (parsed)**: `PipelineVariable`
- **Returns (raw)**: `ApiResult[PipelineVariable, GetPipelineVariableForTeamErrorBody]`
- **Error**: `GetPipelineVariableForTeamErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineVariable` | `bitbucket/models/pipeline_variable.py` |
| `GetPipelineVariableForTeamErrorBody` | `bitbucket/errors/get_pipeline_variable_for_team_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_pipeline_variable_for_user

- **Route**: `GET /users/{selected_user}/pipelines_config/variables/{variable_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_pipeline_variable_for_user(selected_user: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `selected_user`, `variable_uuid`
- **Params**: `selected_user` — path · `variable_uuid` — path
- **Returns (parsed)**: `PipelineVariable`
- **Returns (raw)**: `ApiResult[PipelineVariable, GetPipelineVariableForUserErrorBody]`
- **Error**: `GetPipelineVariableForUserErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineVariable` | `bitbucket/models/pipeline_variable.py` |
| `GetPipelineVariableForUserErrorBody` | `bitbucket/errors/get_pipeline_variable_for_user_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_pipeline_variable_for_workspace

- **Route**: `GET /workspaces/{workspace}/pipelines-config/variables/{variable_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_pipeline_variable_for_workspace(workspace: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `variable_uuid`
- **Params**: `workspace` — path · `variable_uuid` — path
- **Returns (parsed)**: `PipelineVariable`
- **Returns (raw)**: `ApiResult[PipelineVariable, GetPipelineVariableForWorkspaceErrorBody]`
- **Error**: `GetPipelineVariableForWorkspaceErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineVariable` | `bitbucket/models/pipeline_variable.py` |
| `GetPipelineVariableForWorkspaceErrorBody` | `bitbucket/errors/get_pipeline_variable_for_workspace_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_pipeline_variables_for_team

- **Route**: `GET /teams/{username}/pipelines_config/variables`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_pipeline_variables_for_team(username: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `username`
- **Params**: `username` — path
- **Returns (parsed)**: `PaginatedPipelineVariables`
- **Returns (raw)**: `ApiResult[PaginatedPipelineVariables, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginatedPipelineVariables` | `bitbucket/models/paginated_pipeline_variables.py` |

### client.pipelines.get_pipeline_variables_for_user

- **Route**: `GET /users/{selected_user}/pipelines_config/variables`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_pipeline_variables_for_user(selected_user: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `selected_user`
- **Params**: `selected_user` — path
- **Returns (parsed)**: `PaginatedPipelineVariables`
- **Returns (raw)**: `ApiResult[PaginatedPipelineVariables, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginatedPipelineVariables` | `bitbucket/models/paginated_pipeline_variables.py` |

### client.pipelines.get_pipeline_variables_for_workspace

- **Route**: `GET /workspaces/{workspace}/pipelines-config/variables`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_pipeline_variables_for_workspace(workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path
- **Returns (parsed)**: `PaginatedPipelineVariables`
- **Returns (raw)**: `ApiResult[PaginatedPipelineVariables, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginatedPipelineVariables` | `bitbucket/models/paginated_pipeline_variables.py` |

### client.pipelines.get_pipelines_for_repository

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_pipelines_for_repository(workspace: str, repo_slug: str, *, creator_uuid: UUID | None = None, target_ref_type: TargetRefTypeOrStr | None = None, target_ref_name: str | None = None, target_branch: str | None = None, target_commit_hash: str | None = None, target_selector_pattern: str | None = None, target_selector_type: TargetSelectorTypeOrStr | None = None, created_on: RFC3339DateTime | None = None, trigger_type: TriggerTypeOrStr | None = None, status: Status1OrStr | None = None, sort: SortOrStr | None = None, page: int | None = 1, pagelen: int | None = 10, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`
- **Params**: `workspace` — path · `repo_slug` — path · `creator_uuid` — query `creator.uuid` · `target_ref_type` — query `target.ref_type` · `target_ref_name` — query `target.ref_name` · `target_branch` — query `target.branch` · `target_commit_hash` — query `target.commit.hash` · `target_selector_pattern` — query `target.selector.pattern` · `target_selector_type` — query `target.selector.type` · `created_on` — query · `trigger_type` — query · `status` — query · `sort` — query · `page` — query · `pagelen` — query
- **Returns (parsed)**: `PaginatedPipelines`
- **Returns (raw)**: `ApiResult[PaginatedPipelines, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `TargetRefTypeOrStr` | `bitbucket/models/enums/target_ref_type.py` |
| `TargetSelectorTypeOrStr` | `bitbucket/models/enums/target_selector_type.py` |
| `TriggerTypeOrStr` | `bitbucket/models/enums/trigger_type.py` |
| `Status1OrStr` | `bitbucket/models/enums/status1.py` |
| `SortOrStr` | `bitbucket/models/enums/sort.py` |
| `PaginatedPipelines` | `bitbucket/models/paginated_pipelines.py` |

### client.pipelines.get_repository_pipeline_cache_content_uri

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repository_pipeline_cache_content_uri(workspace: str, repo_slug: str, cache_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `cache_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `cache_uuid` — path
- **Returns (parsed)**: `PipelineCacheContentUri`
- **Returns (raw)**: `ApiResult[PipelineCacheContentUri, GetRepositoryPipelineCacheContentUriErrorBody]`
- **Error**: `GetRepositoryPipelineCacheContentUriErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineCacheContentUri` | `bitbucket/models/pipeline_cache_content_uri.py` |
| `GetRepositoryPipelineCacheContentUriErrorBody` | `bitbucket/errors/get_repository_pipeline_cache_content_uri_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_repository_pipeline_caches

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines-config/caches`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repository_pipeline_caches(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`
- **Params**: `workspace` — path · `repo_slug` — path
- **Returns (parsed)**: `PaginatedPipelineCache`
- **Returns (raw)**: `ApiResult[PaginatedPipelineCache, GetRepositoryPipelineCachesErrorBody]`
- **Error**: `GetRepositoryPipelineCachesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedPipelineCache` | `bitbucket/models/paginated_pipeline_cache.py` |
| `GetRepositoryPipelineCachesErrorBody` | `bitbucket/errors/get_repository_pipeline_caches_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_repository_pipeline_config

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines_config`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repository_pipeline_config(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`
- **Params**: `workspace` — path · `repo_slug` — path
- **Returns (parsed)**: `PipelinesConfig`
- **Returns (raw)**: `ApiResult[PipelinesConfig, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PipelinesConfig` | `bitbucket/models/pipelines_config.py` |

### client.pipelines.get_repository_pipeline_known_host

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repository_pipeline_known_host(workspace: str, repo_slug: str, known_host_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `known_host_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `known_host_uuid` — path
- **Returns (parsed)**: `PipelineKnownHost`
- **Returns (raw)**: `ApiResult[PipelineKnownHost, GetRepositoryPipelineKnownHostErrorBody]`
- **Error**: `GetRepositoryPipelineKnownHostErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineKnownHost` | `bitbucket/models/pipeline_known_host.py` |
| `GetRepositoryPipelineKnownHostErrorBody` | `bitbucket/errors/get_repository_pipeline_known_host_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_repository_pipeline_known_hosts

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repository_pipeline_known_hosts(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`
- **Params**: `workspace` — path · `repo_slug` — path
- **Returns (parsed)**: `PaginatedPipelineKnownHosts`
- **Returns (raw)**: `ApiResult[PaginatedPipelineKnownHosts, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginatedPipelineKnownHosts` | `bitbucket/models/paginated_pipeline_known_hosts.py` |

### client.pipelines.get_repository_pipeline_schedule

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repository_pipeline_schedule(workspace: str, repo_slug: str, schedule_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `schedule_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `schedule_uuid` — path
- **Returns (parsed)**: `PipelineSchedule`
- **Returns (raw)**: `ApiResult[PipelineSchedule, GetRepositoryPipelineScheduleErrorBody]`
- **Error**: `GetRepositoryPipelineScheduleErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineSchedule` | `bitbucket/models/pipeline_schedule.py` |
| `GetRepositoryPipelineScheduleErrorBody` | `bitbucket/errors/get_repository_pipeline_schedule_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_repository_pipeline_schedule_executions

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}/executions`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repository_pipeline_schedule_executions(workspace: str, repo_slug: str, schedule_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `schedule_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `schedule_uuid` — path
- **Returns (parsed)**: `PaginatedPipelineScheduleExecutions`
- **Returns (raw)**: `ApiResult[PaginatedPipelineScheduleExecutions, GetRepositoryPipelineScheduleExecutionsErrorBody]`
- **Error**: `GetRepositoryPipelineScheduleExecutionsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedPipelineScheduleExecutions` | `bitbucket/models/paginated_pipeline_schedule_executions.py` |
| `GetRepositoryPipelineScheduleExecutionsErrorBody` | `bitbucket/errors/get_repository_pipeline_schedule_executions_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_repository_pipeline_schedules

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines_config/schedules`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repository_pipeline_schedules(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`
- **Params**: `workspace` — path · `repo_slug` — path
- **Returns (parsed)**: `PaginatedPipelineSchedule`
- **Returns (raw)**: `ApiResult[PaginatedPipelineSchedule, GetRepositoryPipelineSchedulesErrorBody]`
- **Error**: `GetRepositoryPipelineSchedulesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedPipelineSchedule` | `bitbucket/models/paginated_pipeline_schedule.py` |
| `GetRepositoryPipelineSchedulesErrorBody` | `bitbucket/errors/get_repository_pipeline_schedules_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_repository_pipeline_ssh_key_pair

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repository_pipeline_ssh_key_pair(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`
- **Params**: `workspace` — path · `repo_slug` — path
- **Returns (parsed)**: `PipelineSshKeyPair`
- **Returns (raw)**: `ApiResult[PipelineSshKeyPair, GetRepositoryPipelineSshKeyPairErrorBody]`
- **Error**: `GetRepositoryPipelineSshKeyPairErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineSshKeyPair` | `bitbucket/models/pipeline_ssh_key_pair.py` |
| `GetRepositoryPipelineSshKeyPairErrorBody` | `bitbucket/errors/get_repository_pipeline_ssh_key_pair_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_repository_pipeline_variable

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repository_pipeline_variable(workspace: str, repo_slug: str, variable_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `variable_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `variable_uuid` — path
- **Returns (parsed)**: `PipelineVariable`
- **Returns (raw)**: `ApiResult[PipelineVariable, GetRepositoryPipelineVariableErrorBody]`
- **Error**: `GetRepositoryPipelineVariableErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineVariable` | `bitbucket/models/pipeline_variable.py` |
| `GetRepositoryPipelineVariableErrorBody` | `bitbucket/errors/get_repository_pipeline_variable_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_repository_pipeline_variables

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines_config/variables`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repository_pipeline_variables(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`
- **Params**: `workspace` — path · `repo_slug` — path
- **Returns (parsed)**: `PaginatedPipelineVariables`
- **Returns (raw)**: `ApiResult[PaginatedPipelineVariables, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginatedPipelineVariables` | `bitbucket/models/paginated_pipeline_variables.py` |

### client.pipelines.get_repository_runner

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repository_runner(workspace: str, repo_slug: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `runner_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `runner_uuid` — path
- **Returns (parsed)**: `PipelineRunner`
- **Returns (raw)**: `ApiResult[PipelineRunner, GetRepositoryRunnerErrorBody]`
- **Error**: `GetRepositoryRunnerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineRunner` | `bitbucket/models/pipeline_runner.py` |
| `GetRepositoryRunnerErrorBody` | `bitbucket/errors/get_repository_runner_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_repository_runners

- **Route**: `GET /repositories/{workspace}/{repo_slug}/pipelines-config/runners`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_repository_runners(workspace: str, repo_slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`
- **Params**: `workspace` — path · `repo_slug` — path
- **Returns (parsed)**: `PaginatedRunners`
- **Returns (raw)**: `ApiResult[PaginatedRunners, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginatedRunners` | `bitbucket/models/paginated_runners.py` |

### client.pipelines.get_workspace_runner

- **Route**: `GET /workspaces/{workspace}/pipelines-config/runners/{runner_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspace_runner(workspace: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `runner_uuid`
- **Params**: `workspace` — path · `runner_uuid` — path
- **Returns (parsed)**: `PipelineRunner`
- **Returns (raw)**: `ApiResult[PipelineRunner, GetWorkspaceRunnerErrorBody]`
- **Error**: `GetWorkspaceRunnerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineRunner` | `bitbucket/models/pipeline_runner.py` |
| `GetWorkspaceRunnerErrorBody` | `bitbucket/errors/get_workspace_runner_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.get_workspace_runners

- **Route**: `GET /workspaces/{workspace}/pipelines-config/runners`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_workspace_runners(workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path
- **Returns (parsed)**: `PaginatedRunners`
- **Returns (raw)**: `ApiResult[PaginatedRunners, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PaginatedRunners` | `bitbucket/models/paginated_runners.py` |

### client.pipelines.stop_pipeline

- **Route**: `POST /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def stop_pipeline(workspace: str, repo_slug: str, pipeline_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `pipeline_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `pipeline_uuid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StopPipelineErrorBody]`
- **Error**: `StopPipelineErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StopPipelineErrorBody` | `bitbucket/errors/stop_pipeline_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.update_deployment_variable

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def update_deployment_variable(workspace: str, repo_slug: str, environment_uuid: str, variable_uuid: str, body: DeploymentVariable | DeploymentVariableDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `environment_uuid`, `variable_uuid`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `environment_uuid` — path · `variable_uuid` — path · `body` — JSON body
- **Returns (parsed)**: `DeploymentVariable`
- **Returns (raw)**: `ApiResult[DeploymentVariable, UpdateDeploymentVariableErrorBody]`
- **Error**: `UpdateDeploymentVariableErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeploymentVariable` | `bitbucket/models/deployment_variable.py` |
| `DeploymentVariableDict` | `bitbucket/models/deployment_variable.py` |
| `UpdateDeploymentVariableErrorBody` | `bitbucket/errors/update_deployment_variable_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.update_pipeline_variable_for_team

- **Route**: `PUT /teams/{username}/pipelines_config/variables/{variable_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def update_pipeline_variable_for_team(username: str, variable_uuid: str, body: PipelineVariable | PipelineVariableDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `username`, `variable_uuid`, `body`
- **Params**: `username` — path · `variable_uuid` — path · `body` — JSON body
- **Returns (parsed)**: `PipelineVariable`
- **Returns (raw)**: `ApiResult[PipelineVariable, UpdatePipelineVariableForTeamErrorBody]`
- **Error**: `UpdatePipelineVariableForTeamErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineVariable` | `bitbucket/models/pipeline_variable.py` |
| `PipelineVariableDict` | `bitbucket/models/pipeline_variable.py` |
| `UpdatePipelineVariableForTeamErrorBody` | `bitbucket/errors/update_pipeline_variable_for_team_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.update_pipeline_variable_for_user

- **Route**: `PUT /users/{selected_user}/pipelines_config/variables/{variable_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def update_pipeline_variable_for_user(selected_user: str, variable_uuid: str, body: PipelineVariable | PipelineVariableDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `selected_user`, `variable_uuid`, `body`
- **Params**: `selected_user` — path · `variable_uuid` — path · `body` — JSON body
- **Returns (parsed)**: `PipelineVariable`
- **Returns (raw)**: `ApiResult[PipelineVariable, UpdatePipelineVariableForUserErrorBody]`
- **Error**: `UpdatePipelineVariableForUserErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineVariable` | `bitbucket/models/pipeline_variable.py` |
| `PipelineVariableDict` | `bitbucket/models/pipeline_variable.py` |
| `UpdatePipelineVariableForUserErrorBody` | `bitbucket/errors/update_pipeline_variable_for_user_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.update_pipeline_variable_for_workspace

- **Route**: `PUT /workspaces/{workspace}/pipelines-config/variables/{variable_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def update_pipeline_variable_for_workspace(workspace: str, variable_uuid: str, body: PipelineVariable | PipelineVariableDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `variable_uuid`, `body`
- **Params**: `workspace` — path · `variable_uuid` — path · `body` — JSON body
- **Returns (parsed)**: `PipelineVariable`
- **Returns (raw)**: `ApiResult[PipelineVariable, UpdatePipelineVariableForWorkspaceErrorBody]`
- **Error**: `UpdatePipelineVariableForWorkspaceErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineVariable` | `bitbucket/models/pipeline_variable.py` |
| `PipelineVariableDict` | `bitbucket/models/pipeline_variable.py` |
| `UpdatePipelineVariableForWorkspaceErrorBody` | `bitbucket/errors/update_pipeline_variable_for_workspace_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.update_repository_build_number

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/pipelines_config/build_number`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def update_repository_build_number(workspace: str, repo_slug: str, body: PipelineBuildNumber | PipelineBuildNumberDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `body` — JSON body
- **Returns (parsed)**: `PipelineBuildNumber`
- **Returns (raw)**: `ApiResult[PipelineBuildNumber, UpdateRepositoryBuildNumberErrorBody]`
- **Error**: `UpdateRepositoryBuildNumberErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineBuildNumber` | `bitbucket/models/pipeline_build_number.py` |
| `PipelineBuildNumberDict` | `bitbucket/models/pipeline_build_number.py` |
| `UpdateRepositoryBuildNumberErrorBody` | `bitbucket/errors/update_repository_build_number_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.update_repository_pipeline_config

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/pipelines_config`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def update_repository_pipeline_config(workspace: str, repo_slug: str, body: PipelinesConfig | PipelinesConfigDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `body` — JSON body
- **Returns (parsed)**: `PipelinesConfig`
- **Returns (raw)**: `ApiResult[PipelinesConfig, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PipelinesConfig` | `bitbucket/models/pipelines_config.py` |
| `PipelinesConfigDict` | `bitbucket/models/pipelines_config.py` |

### client.pipelines.update_repository_pipeline_key_pair

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def update_repository_pipeline_key_pair(workspace: str, repo_slug: str, body: PipelineSshKeyPair | PipelineSshKeyPairDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `body` — JSON body
- **Returns (parsed)**: `PipelineSshKeyPair`
- **Returns (raw)**: `ApiResult[PipelineSshKeyPair, UpdateRepositoryPipelineKeyPairErrorBody]`
- **Error**: `UpdateRepositoryPipelineKeyPairErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineSshKeyPair` | `bitbucket/models/pipeline_ssh_key_pair.py` |
| `PipelineSshKeyPairDict` | `bitbucket/models/pipeline_ssh_key_pair.py` |
| `UpdateRepositoryPipelineKeyPairErrorBody` | `bitbucket/errors/update_repository_pipeline_key_pair_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.update_repository_pipeline_known_host

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def update_repository_pipeline_known_host(workspace: str, repo_slug: str, known_host_uuid: str, body: PipelineKnownHost | PipelineKnownHostDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `known_host_uuid`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `known_host_uuid` — path · `body` — JSON body
- **Returns (parsed)**: `PipelineKnownHost`
- **Returns (raw)**: `ApiResult[PipelineKnownHost, UpdateRepositoryPipelineKnownHostErrorBody]`
- **Error**: `UpdateRepositoryPipelineKnownHostErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineKnownHost` | `bitbucket/models/pipeline_known_host.py` |
| `PipelineKnownHostDict` | `bitbucket/models/pipeline_known_host.py` |
| `UpdateRepositoryPipelineKnownHostErrorBody` | `bitbucket/errors/update_repository_pipeline_known_host_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.update_repository_pipeline_schedule

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def update_repository_pipeline_schedule(workspace: str, repo_slug: str, schedule_uuid: str, body: PipelineSchedulePutRequestBody | PipelineSchedulePutRequestBodyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `schedule_uuid`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `schedule_uuid` — path · `body` — JSON body
- **Returns (parsed)**: `PipelineSchedule`
- **Returns (raw)**: `ApiResult[PipelineSchedule, UpdateRepositoryPipelineScheduleErrorBody]`
- **Error**: `UpdateRepositoryPipelineScheduleErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineSchedulePutRequestBody` | `bitbucket/models/pipeline_schedule_put_request_body.py` |
| `PipelineSchedulePutRequestBodyDict` | `bitbucket/models/pipeline_schedule_put_request_body.py` |
| `PipelineSchedule` | `bitbucket/models/pipeline_schedule.py` |
| `UpdateRepositoryPipelineScheduleErrorBody` | `bitbucket/errors/update_repository_pipeline_schedule_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.update_repository_pipeline_variable

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def update_repository_pipeline_variable(workspace: str, repo_slug: str, variable_uuid: str, body: PipelineVariable | PipelineVariableDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `variable_uuid`, `body`
- **Params**: `workspace` — path · `repo_slug` — path · `variable_uuid` — path · `body` — JSON body
- **Returns (parsed)**: `PipelineVariable`
- **Returns (raw)**: `ApiResult[PipelineVariable, UpdateRepositoryPipelineVariableErrorBody]`
- **Error**: `UpdateRepositoryPipelineVariableErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineVariable` | `bitbucket/models/pipeline_variable.py` |
| `PipelineVariableDict` | `bitbucket/models/pipeline_variable.py` |
| `UpdateRepositoryPipelineVariableErrorBody` | `bitbucket/errors/update_repository_pipeline_variable_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.update_repository_runner

- **Route**: `PUT /repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def update_repository_runner(workspace: str, repo_slug: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `repo_slug`, `runner_uuid`
- **Params**: `workspace` — path · `repo_slug` — path · `runner_uuid` — path
- **Returns (parsed)**: `PipelineRunner`
- **Returns (raw)**: `ApiResult[PipelineRunner, UpdateRepositoryRunnerErrorBody]`
- **Error**: `UpdateRepositoryRunnerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineRunner` | `bitbucket/models/pipeline_runner.py` |
| `UpdateRepositoryRunnerErrorBody` | `bitbucket/errors/update_repository_runner_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.pipelines.update_workspace_runner

- **Route**: `PUT /workspaces/{workspace}/pipelines-config/runners/{runner_uuid}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def update_workspace_runner(workspace: str, runner_uuid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `runner_uuid`
- **Params**: `workspace` — path · `runner_uuid` — path
- **Returns (parsed)**: `PipelineRunner`
- **Returns (raw)**: `ApiResult[PipelineRunner, UpdateWorkspaceRunnerErrorBody]`
- **Error**: `UpdateWorkspaceRunnerErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineRunner` | `bitbucket/models/pipeline_runner.py` |
| `UpdateWorkspaceRunnerErrorBody` | `bitbucket/errors/update_workspace_runner_error.py` |
| `Error` | `bitbucket/models/error.py` |

