<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pipelines — operations

Accessor: `client.Pipelines` · Source: `src/Bitbucket/Api/Pipelines.cs` · 68 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateDeploymentVariable

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `CreateDeploymentVariable(CreateDeploymentVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `EnvironmentUuid`, `Body`
- **Returns**: `DeploymentVariable`
- **Error**: `ApiException<CreateDeploymentVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDeploymentVariableRequest` | `src/Bitbucket/Requests/Pipelines/CreateDeploymentVariableRequest.cs` |
| `DeploymentVariable` | `src/Bitbucket/Models/AllOf/DeploymentVariable.cs` |
| `CreateDeploymentVariableError` | `src/Bitbucket/Errors/CreateDeploymentVariableError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### CreatePipelineForRepository

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `CreatePipelineForRepository(CreatePipelineForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Body`
- **Returns**: `Pipeline`
- **Error**: `ApiException<CreatePipelineForRepositoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePipelineForRepositoryRequest` | `src/Bitbucket/Requests/Pipelines/CreatePipelineForRepositoryRequest.cs` |
| `Pipeline` | `src/Bitbucket/Models/AllOf/Pipeline.cs` |
| `CreatePipelineForRepositoryError` | `src/Bitbucket/Errors/CreatePipelineForRepositoryError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### CreatePipelineVariableForTeam

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `CreatePipelineVariableForTeam(CreatePipelineVariableForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Username`
- **Returns**: `PipelineVariable`
- **Error**: `ApiException<CreatePipelineVariableForTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePipelineVariableForTeamRequest` | `src/Bitbucket/Requests/Pipelines/CreatePipelineVariableForTeamRequest.cs` |
| `PipelineVariable` | `src/Bitbucket/Models/AllOf/PipelineVariable.cs` |
| `CreatePipelineVariableForTeamError` | `src/Bitbucket/Errors/CreatePipelineVariableForTeamError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### CreatePipelineVariableForUser

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `CreatePipelineVariableForUser(CreatePipelineVariableForUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SelectedUser`
- **Returns**: `PipelineVariable`
- **Error**: `ApiException<CreatePipelineVariableForUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePipelineVariableForUserRequest` | `src/Bitbucket/Requests/Pipelines/CreatePipelineVariableForUserRequest.cs` |
| `PipelineVariable` | `src/Bitbucket/Models/AllOf/PipelineVariable.cs` |
| `CreatePipelineVariableForUserError` | `src/Bitbucket/Errors/CreatePipelineVariableForUserError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### CreatePipelineVariableForWorkspace

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `CreatePipelineVariableForWorkspace(CreatePipelineVariableForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Returns**: `PipelineVariable`
- **Error**: `ApiException<CreatePipelineVariableForWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePipelineVariableForWorkspaceRequest` | `src/Bitbucket/Requests/Pipelines/CreatePipelineVariableForWorkspaceRequest.cs` |
| `PipelineVariable` | `src/Bitbucket/Models/AllOf/PipelineVariable.cs` |
| `CreatePipelineVariableForWorkspaceError` | `src/Bitbucket/Errors/CreatePipelineVariableForWorkspaceError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### CreateRepositoryPipelineKnownHost

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `CreateRepositoryPipelineKnownHost(CreateRepositoryPipelineKnownHostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Body`
- **Returns**: `PipelineKnownHost`
- **Error**: `ApiException<CreateRepositoryPipelineKnownHostError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRepositoryPipelineKnownHostRequest` | `src/Bitbucket/Requests/Pipelines/CreateRepositoryPipelineKnownHostRequest.cs` |
| `PipelineKnownHost` | `src/Bitbucket/Models/AllOf/PipelineKnownHost.cs` |
| `CreateRepositoryPipelineKnownHostError` | `src/Bitbucket/Errors/CreateRepositoryPipelineKnownHostError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### CreateRepositoryPipelineSchedule

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `CreateRepositoryPipelineSchedule(CreateRepositoryPipelineScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Body`
- **Returns**: `PipelineSchedule`
- **Error**: `ApiException<CreateRepositoryPipelineScheduleError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRepositoryPipelineScheduleRequest` | `src/Bitbucket/Requests/Pipelines/CreateRepositoryPipelineScheduleRequest.cs` |
| `PipelineSchedulePostRequestBody` | `src/Bitbucket/Models/AllOf/PipelineSchedulePostRequestBody.cs` |
| `PipelineSchedule` | `src/Bitbucket/Models/AllOf/PipelineSchedule.cs` |
| `CreateRepositoryPipelineScheduleError` | `src/Bitbucket/Errors/CreateRepositoryPipelineScheduleError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### CreateRepositoryPipelineVariable

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `CreateRepositoryPipelineVariable(CreateRepositoryPipelineVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Body`
- **Returns**: `PipelineVariable`
- **Error**: `ApiException<CreateRepositoryPipelineVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRepositoryPipelineVariableRequest` | `src/Bitbucket/Requests/Pipelines/CreateRepositoryPipelineVariableRequest.cs` |
| `PipelineVariable` | `src/Bitbucket/Models/AllOf/PipelineVariable.cs` |
| `CreateRepositoryPipelineVariableError` | `src/Bitbucket/Errors/CreateRepositoryPipelineVariableError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### CreateRepositoryRunner

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `CreateRepositoryRunner(CreateRepositoryRunnerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`
- **Returns**: `PipelineRunner`
- **Error**: `ApiException<CreateRepositoryRunnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRepositoryRunnerRequest` | `src/Bitbucket/Requests/Pipelines/CreateRepositoryRunnerRequest.cs` |
| `PipelineRunner` | `src/Bitbucket/Models/AllOf/PipelineRunner.cs` |
| `CreateRepositoryRunnerError` | `src/Bitbucket/Errors/CreateRepositoryRunnerError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### CreateWorkspaceRunner

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `CreateWorkspaceRunner(CreateWorkspaceRunnerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Returns**: `PipelineRunner`
- **Error**: `ApiException<CreateWorkspaceRunnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateWorkspaceRunnerRequest` | `src/Bitbucket/Requests/Pipelines/CreateWorkspaceRunnerRequest.cs` |
| `PipelineRunner` | `src/Bitbucket/Models/AllOf/PipelineRunner.cs` |
| `CreateWorkspaceRunnerError` | `src/Bitbucket/Errors/CreateWorkspaceRunnerError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteDeploymentVariable

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteDeploymentVariable(DeleteDeploymentVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `EnvironmentUuid`, `VariableUuid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteDeploymentVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDeploymentVariableRequest` | `src/Bitbucket/Requests/Pipelines/DeleteDeploymentVariableRequest.cs` |
| `DeleteDeploymentVariableError` | `src/Bitbucket/Errors/DeleteDeploymentVariableError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeletePipelineVariableForTeam

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeletePipelineVariableForTeam(DeletePipelineVariableForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Username`, `VariableUuid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeletePipelineVariableForTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeletePipelineVariableForTeamRequest` | `src/Bitbucket/Requests/Pipelines/DeletePipelineVariableForTeamRequest.cs` |
| `DeletePipelineVariableForTeamError` | `src/Bitbucket/Errors/DeletePipelineVariableForTeamError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeletePipelineVariableForUser

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeletePipelineVariableForUser(DeletePipelineVariableForUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SelectedUser`, `VariableUuid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeletePipelineVariableForUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeletePipelineVariableForUserRequest` | `src/Bitbucket/Requests/Pipelines/DeletePipelineVariableForUserRequest.cs` |
| `DeletePipelineVariableForUserError` | `src/Bitbucket/Errors/DeletePipelineVariableForUserError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeletePipelineVariableForWorkspace

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeletePipelineVariableForWorkspace(DeletePipelineVariableForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `VariableUuid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeletePipelineVariableForWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeletePipelineVariableForWorkspaceRequest` | `src/Bitbucket/Requests/Pipelines/DeletePipelineVariableForWorkspaceRequest.cs` |
| `DeletePipelineVariableForWorkspaceError` | `src/Bitbucket/Errors/DeletePipelineVariableForWorkspaceError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoryPipelineCache

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoryPipelineCache(DeleteRepositoryPipelineCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `CacheUuid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoryPipelineCacheError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoryPipelineCacheRequest` | `src/Bitbucket/Requests/Pipelines/DeleteRepositoryPipelineCacheRequest.cs` |
| `DeleteRepositoryPipelineCacheError` | `src/Bitbucket/Errors/DeleteRepositoryPipelineCacheError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoryPipelineCaches

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoryPipelineCaches(DeleteRepositoryPipelineCachesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Name`
- **Query params (wire ← C#)**: `name` ← `Name`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoryPipelineCachesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoryPipelineCachesRequest` | `src/Bitbucket/Requests/Pipelines/DeleteRepositoryPipelineCachesRequest.cs` |
| `DeleteRepositoryPipelineCachesError` | `src/Bitbucket/Errors/DeleteRepositoryPipelineCachesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoryPipelineKeyPair

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoryPipelineKeyPair(DeleteRepositoryPipelineKeyPairRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoryPipelineKeyPairError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoryPipelineKeyPairRequest` | `src/Bitbucket/Requests/Pipelines/DeleteRepositoryPipelineKeyPairRequest.cs` |
| `DeleteRepositoryPipelineKeyPairError` | `src/Bitbucket/Errors/DeleteRepositoryPipelineKeyPairError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoryPipelineKnownHost

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoryPipelineKnownHost(DeleteRepositoryPipelineKnownHostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `KnownHostUuid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoryPipelineKnownHostError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoryPipelineKnownHostRequest` | `src/Bitbucket/Requests/Pipelines/DeleteRepositoryPipelineKnownHostRequest.cs` |
| `DeleteRepositoryPipelineKnownHostError` | `src/Bitbucket/Errors/DeleteRepositoryPipelineKnownHostError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoryPipelineSchedule

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoryPipelineSchedule(DeleteRepositoryPipelineScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `ScheduleUuid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoryPipelineScheduleError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoryPipelineScheduleRequest` | `src/Bitbucket/Requests/Pipelines/DeleteRepositoryPipelineScheduleRequest.cs` |
| `DeleteRepositoryPipelineScheduleError` | `src/Bitbucket/Errors/DeleteRepositoryPipelineScheduleError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoryPipelineVariable

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoryPipelineVariable(DeleteRepositoryPipelineVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `VariableUuid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoryPipelineVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoryPipelineVariableRequest` | `src/Bitbucket/Requests/Pipelines/DeleteRepositoryPipelineVariableRequest.cs` |
| `DeleteRepositoryPipelineVariableError` | `src/Bitbucket/Errors/DeleteRepositoryPipelineVariableError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoryRunner

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoryRunner(DeleteRepositoryRunnerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `RunnerUuid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoryRunnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoryRunnerRequest` | `src/Bitbucket/Requests/Pipelines/DeleteRepositoryRunnerRequest.cs` |
| `DeleteRepositoryRunnerError` | `src/Bitbucket/Errors/DeleteRepositoryRunnerError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteWorkspaceRunner

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteWorkspaceRunner(DeleteWorkspaceRunnerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RunnerUuid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWorkspaceRunnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWorkspaceRunnerRequest` | `src/Bitbucket/Requests/Pipelines/DeleteWorkspaceRunnerRequest.cs` |
| `DeleteWorkspaceRunnerError` | `src/Bitbucket/Errors/DeleteWorkspaceRunnerError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetDeploymentVariables

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetDeploymentVariables(GetDeploymentVariablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `EnvironmentUuid`
- **Returns**: `PaginatedDeploymentVariables`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetDeploymentVariablesRequest` | `src/Bitbucket/Requests/Pipelines/GetDeploymentVariablesRequest.cs` |
| `PaginatedDeploymentVariables` | `src/Bitbucket/Models/PaginatedDeploymentVariables.cs` |

### GetOidcConfiguration

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetOidcConfiguration(GetOidcConfigurationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetOidcConfigurationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOidcConfigurationRequest` | `src/Bitbucket/Requests/Pipelines/GetOidcConfigurationRequest.cs` |
| `GetOidcConfigurationError` | `src/Bitbucket/Errors/GetOidcConfigurationError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetOidcKeys

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetOidcKeys(GetOidcKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetOidcKeysError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetOidcKeysRequest` | `src/Bitbucket/Requests/Pipelines/GetOidcKeysRequest.cs` |
| `GetOidcKeysError` | `src/Bitbucket/Errors/GetOidcKeysError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetPipelineContainerLog

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetPipelineContainerLog(GetPipelineContainerLogRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `PipelineUuid`, `StepUuid`, `LogUuid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetPipelineContainerLogError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorByteContent([NotNullWhen(true)] out ErrorByteContent? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPipelineContainerLogRequest` | `src/Bitbucket/Requests/Pipelines/GetPipelineContainerLogRequest.cs` |
| `GetPipelineContainerLogError` | `src/Bitbucket/Errors/GetPipelineContainerLogError.cs` |

### GetPipelineForRepository

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetPipelineForRepository(GetPipelineForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `PipelineUuid`
- **Returns**: `Pipeline`
- **Error**: `ApiException<GetPipelineForRepositoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPipelineForRepositoryRequest` | `src/Bitbucket/Requests/Pipelines/GetPipelineForRepositoryRequest.cs` |
| `Pipeline` | `src/Bitbucket/Models/AllOf/Pipeline.cs` |
| `GetPipelineForRepositoryError` | `src/Bitbucket/Errors/GetPipelineForRepositoryError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetPipelineStepForRepository

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetPipelineStepForRepository(GetPipelineStepForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `PipelineUuid`, `StepUuid`
- **Returns**: `PipelineStep`
- **Error**: `ApiException<GetPipelineStepForRepositoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPipelineStepForRepositoryRequest` | `src/Bitbucket/Requests/Pipelines/GetPipelineStepForRepositoryRequest.cs` |
| `PipelineStep` | `src/Bitbucket/Models/AllOf/PipelineStep.cs` |
| `GetPipelineStepForRepositoryError` | `src/Bitbucket/Errors/GetPipelineStepForRepositoryError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetPipelineStepLogForRepository

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetPipelineStepLogForRepository(GetPipelineStepLogForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `PipelineUuid`, `StepUuid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetPipelineStepLogForRepositoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorByteContent([NotNullWhen(true)] out ErrorByteContent? value)` [404, 416] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPipelineStepLogForRepositoryRequest` | `src/Bitbucket/Requests/Pipelines/GetPipelineStepLogForRepositoryRequest.cs` |
| `GetPipelineStepLogForRepositoryError` | `src/Bitbucket/Errors/GetPipelineStepLogForRepositoryError.cs` |

### GetPipelineStepsForRepository

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetPipelineStepsForRepository(GetPipelineStepsForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `PipelineUuid`
- **Returns**: `PaginatedPipelineSteps`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPipelineStepsForRepositoryRequest` | `src/Bitbucket/Requests/Pipelines/GetPipelineStepsForRepositoryRequest.cs` |
| `PaginatedPipelineSteps` | `src/Bitbucket/Models/PaginatedPipelineSteps.cs` |

### GetPipelineTestReportTestCaseReasons

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetPipelineTestReportTestCaseReasons(GetPipelineTestReportTestCaseReasonsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `PipelineUuid`, `StepUuid`, `TestCaseUuid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetPipelineTestReportTestCaseReasonsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPipelineTestReportTestCaseReasonsRequest` | `src/Bitbucket/Requests/Pipelines/GetPipelineTestReportTestCaseReasonsRequest.cs` |
| `GetPipelineTestReportTestCaseReasonsError` | `src/Bitbucket/Errors/GetPipelineTestReportTestCaseReasonsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetPipelineTestReportTestCases

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetPipelineTestReportTestCases(GetPipelineTestReportTestCasesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `PipelineUuid`, `StepUuid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetPipelineTestReportTestCasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPipelineTestReportTestCasesRequest` | `src/Bitbucket/Requests/Pipelines/GetPipelineTestReportTestCasesRequest.cs` |
| `GetPipelineTestReportTestCasesError` | `src/Bitbucket/Errors/GetPipelineTestReportTestCasesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetPipelineTestReports

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetPipelineTestReports(GetPipelineTestReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `PipelineUuid`, `StepUuid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetPipelineTestReportsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPipelineTestReportsRequest` | `src/Bitbucket/Requests/Pipelines/GetPipelineTestReportsRequest.cs` |
| `GetPipelineTestReportsError` | `src/Bitbucket/Errors/GetPipelineTestReportsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetPipelineVariableForTeam

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetPipelineVariableForTeam(GetPipelineVariableForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Username`, `VariableUuid`
- **Returns**: `PipelineVariable`
- **Error**: `ApiException<GetPipelineVariableForTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPipelineVariableForTeamRequest` | `src/Bitbucket/Requests/Pipelines/GetPipelineVariableForTeamRequest.cs` |
| `PipelineVariable` | `src/Bitbucket/Models/AllOf/PipelineVariable.cs` |
| `GetPipelineVariableForTeamError` | `src/Bitbucket/Errors/GetPipelineVariableForTeamError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetPipelineVariableForUser

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetPipelineVariableForUser(GetPipelineVariableForUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SelectedUser`, `VariableUuid`
- **Returns**: `PipelineVariable`
- **Error**: `ApiException<GetPipelineVariableForUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPipelineVariableForUserRequest` | `src/Bitbucket/Requests/Pipelines/GetPipelineVariableForUserRequest.cs` |
| `PipelineVariable` | `src/Bitbucket/Models/AllOf/PipelineVariable.cs` |
| `GetPipelineVariableForUserError` | `src/Bitbucket/Errors/GetPipelineVariableForUserError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetPipelineVariableForWorkspace

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetPipelineVariableForWorkspace(GetPipelineVariableForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `VariableUuid`
- **Returns**: `PipelineVariable`
- **Error**: `ApiException<GetPipelineVariableForWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPipelineVariableForWorkspaceRequest` | `src/Bitbucket/Requests/Pipelines/GetPipelineVariableForWorkspaceRequest.cs` |
| `PipelineVariable` | `src/Bitbucket/Models/AllOf/PipelineVariable.cs` |
| `GetPipelineVariableForWorkspaceError` | `src/Bitbucket/Errors/GetPipelineVariableForWorkspaceError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetPipelineVariablesForTeam

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetPipelineVariablesForTeam(GetPipelineVariablesForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Username`
- **Returns**: `PaginatedPipelineVariables`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPipelineVariablesForTeamRequest` | `src/Bitbucket/Requests/Pipelines/GetPipelineVariablesForTeamRequest.cs` |
| `PaginatedPipelineVariables` | `src/Bitbucket/Models/PaginatedPipelineVariables.cs` |

### GetPipelineVariablesForUser

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetPipelineVariablesForUser(GetPipelineVariablesForUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SelectedUser`
- **Returns**: `PaginatedPipelineVariables`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPipelineVariablesForUserRequest` | `src/Bitbucket/Requests/Pipelines/GetPipelineVariablesForUserRequest.cs` |
| `PaginatedPipelineVariables` | `src/Bitbucket/Models/PaginatedPipelineVariables.cs` |

### GetPipelineVariablesForWorkspace

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetPipelineVariablesForWorkspace(GetPipelineVariablesForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Returns**: `PaginatedPipelineVariables`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPipelineVariablesForWorkspaceRequest` | `src/Bitbucket/Requests/Pipelines/GetPipelineVariablesForWorkspaceRequest.cs` |
| `PaginatedPipelineVariables` | `src/Bitbucket/Models/PaginatedPipelineVariables.cs` |

### GetPipelinesForRepository

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetPipelinesForRepository(GetPipelinesForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`
- **Query params (wire ← C#)**: `creator.uuid` ← `CreatorUuid`, `target.ref_type` ← `TargetRefType`, `target.ref_name` ← `TargetRefName`, `target.branch` ← `TargetBranch`, `target.commit.hash` ← `TargetCommitHash`, `target.selector.pattern` ← `TargetSelectorPattern`, `target.selector.type` ← `TargetSelectorType`, `created_on` ← `CreatedOn`, `trigger_type` ← `TriggerType`, `status` ← `Status`, `sort` ← `Sort`, `page` ← `Page`, `pagelen` ← `Pagelen`
- **Returns**: `PaginatedPipelines`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetPipelinesForRepositoryRequest` | `src/Bitbucket/Requests/Pipelines/GetPipelinesForRepositoryRequest.cs` |
| `TargetRefType` | `src/Bitbucket/Models/Enums/TargetRefType.cs` |
| `TargetSelectorType` | `src/Bitbucket/Models/Enums/TargetSelectorType.cs` |
| `TriggerType` | `src/Bitbucket/Models/Enums/TriggerType.cs` |
| `Status1` | `src/Bitbucket/Models/Enums/Status1.cs` |
| `Sort` | `src/Bitbucket/Models/Enums/Sort.cs` |
| `PaginatedPipelines` | `src/Bitbucket/Models/PaginatedPipelines.cs` |

### GetRepositoryPipelineCacheContentUri

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoryPipelineCacheContentUri(GetRepositoryPipelineCacheContentUriRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `CacheUuid`
- **Returns**: `PipelineCacheContentUri`
- **Error**: `ApiException<GetRepositoryPipelineCacheContentUriError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoryPipelineCacheContentUriRequest` | `src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineCacheContentUriRequest.cs` |
| `PipelineCacheContentUri` | `src/Bitbucket/Models/PipelineCacheContentUri.cs` |
| `GetRepositoryPipelineCacheContentUriError` | `src/Bitbucket/Errors/GetRepositoryPipelineCacheContentUriError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoryPipelineCaches

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoryPipelineCaches(GetRepositoryPipelineCachesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`
- **Returns**: `PaginatedPipelineCache`
- **Error**: `ApiException<GetRepositoryPipelineCachesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoryPipelineCachesRequest` | `src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineCachesRequest.cs` |
| `PaginatedPipelineCache` | `src/Bitbucket/Models/PaginatedPipelineCache.cs` |
| `GetRepositoryPipelineCachesError` | `src/Bitbucket/Errors/GetRepositoryPipelineCachesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoryPipelineConfig

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoryPipelineConfig(GetRepositoryPipelineConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`
- **Returns**: `PipelinesConfig`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetRepositoryPipelineConfigRequest` | `src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineConfigRequest.cs` |
| `PipelinesConfig` | `src/Bitbucket/Models/AllOf/PipelinesConfig.cs` |

### GetRepositoryPipelineKnownHost

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoryPipelineKnownHost(GetRepositoryPipelineKnownHostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `KnownHostUuid`
- **Returns**: `PipelineKnownHost`
- **Error**: `ApiException<GetRepositoryPipelineKnownHostError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoryPipelineKnownHostRequest` | `src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineKnownHostRequest.cs` |
| `PipelineKnownHost` | `src/Bitbucket/Models/AllOf/PipelineKnownHost.cs` |
| `GetRepositoryPipelineKnownHostError` | `src/Bitbucket/Errors/GetRepositoryPipelineKnownHostError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoryPipelineKnownHosts

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoryPipelineKnownHosts(GetRepositoryPipelineKnownHostsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`
- **Returns**: `PaginatedPipelineKnownHosts`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetRepositoryPipelineKnownHostsRequest` | `src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineKnownHostsRequest.cs` |
| `PaginatedPipelineKnownHosts` | `src/Bitbucket/Models/PaginatedPipelineKnownHosts.cs` |

### GetRepositoryPipelineSchedule

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoryPipelineSchedule(GetRepositoryPipelineScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `ScheduleUuid`
- **Returns**: `PipelineSchedule`
- **Error**: `ApiException<GetRepositoryPipelineScheduleError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoryPipelineScheduleRequest` | `src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineScheduleRequest.cs` |
| `PipelineSchedule` | `src/Bitbucket/Models/AllOf/PipelineSchedule.cs` |
| `GetRepositoryPipelineScheduleError` | `src/Bitbucket/Errors/GetRepositoryPipelineScheduleError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoryPipelineScheduleExecutions

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoryPipelineScheduleExecutions(GetRepositoryPipelineScheduleExecutionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `ScheduleUuid`
- **Returns**: `PaginatedPipelineScheduleExecutions`
- **Error**: `ApiException<GetRepositoryPipelineScheduleExecutionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoryPipelineScheduleExecutionsRequest` | `src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineScheduleExecutionsRequest.cs` |
| `PaginatedPipelineScheduleExecutions` | `src/Bitbucket/Models/PaginatedPipelineScheduleExecutions.cs` |
| `GetRepositoryPipelineScheduleExecutionsError` | `src/Bitbucket/Errors/GetRepositoryPipelineScheduleExecutionsError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoryPipelineSchedules

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoryPipelineSchedules(GetRepositoryPipelineSchedulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`
- **Returns**: `PaginatedPipelineSchedule`
- **Error**: `ApiException<GetRepositoryPipelineSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoryPipelineSchedulesRequest` | `src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineSchedulesRequest.cs` |
| `PaginatedPipelineSchedule` | `src/Bitbucket/Models/PaginatedPipelineSchedule.cs` |
| `GetRepositoryPipelineSchedulesError` | `src/Bitbucket/Errors/GetRepositoryPipelineSchedulesError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoryPipelineSshKeyPair

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoryPipelineSshKeyPair(GetRepositoryPipelineSshKeyPairRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`
- **Returns**: `PipelineSshKeyPair`
- **Error**: `ApiException<GetRepositoryPipelineSshKeyPairError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoryPipelineSshKeyPairRequest` | `src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineSshKeyPairRequest.cs` |
| `PipelineSshKeyPair` | `src/Bitbucket/Models/AllOf/PipelineSshKeyPair.cs` |
| `GetRepositoryPipelineSshKeyPairError` | `src/Bitbucket/Errors/GetRepositoryPipelineSshKeyPairError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoryPipelineVariable

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoryPipelineVariable(GetRepositoryPipelineVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `VariableUuid`
- **Returns**: `PipelineVariable`
- **Error**: `ApiException<GetRepositoryPipelineVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoryPipelineVariableRequest` | `src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineVariableRequest.cs` |
| `PipelineVariable` | `src/Bitbucket/Models/AllOf/PipelineVariable.cs` |
| `GetRepositoryPipelineVariableError` | `src/Bitbucket/Errors/GetRepositoryPipelineVariableError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoryPipelineVariables

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoryPipelineVariables(GetRepositoryPipelineVariablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`
- **Returns**: `PaginatedPipelineVariables`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetRepositoryPipelineVariablesRequest` | `src/Bitbucket/Requests/Pipelines/GetRepositoryPipelineVariablesRequest.cs` |
| `PaginatedPipelineVariables` | `src/Bitbucket/Models/PaginatedPipelineVariables.cs` |

### GetRepositoryRunner

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoryRunner(GetRepositoryRunnerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `RunnerUuid`
- **Returns**: `PipelineRunner`
- **Error**: `ApiException<GetRepositoryRunnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoryRunnerRequest` | `src/Bitbucket/Requests/Pipelines/GetRepositoryRunnerRequest.cs` |
| `PipelineRunner` | `src/Bitbucket/Models/AllOf/PipelineRunner.cs` |
| `GetRepositoryRunnerError` | `src/Bitbucket/Errors/GetRepositoryRunnerError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoryRunners

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoryRunners(GetRepositoryRunnersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`
- **Returns**: `PaginatedRunners`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetRepositoryRunnersRequest` | `src/Bitbucket/Requests/Pipelines/GetRepositoryRunnersRequest.cs` |
| `PaginatedRunners` | `src/Bitbucket/Models/PaginatedRunners.cs` |

### GetWorkspaceRunner

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspaceRunner(GetWorkspaceRunnerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RunnerUuid`
- **Returns**: `PipelineRunner`
- **Error**: `ApiException<GetWorkspaceRunnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspaceRunnerRequest` | `src/Bitbucket/Requests/Pipelines/GetWorkspaceRunnerRequest.cs` |
| `PipelineRunner` | `src/Bitbucket/Models/AllOf/PipelineRunner.cs` |
| `GetWorkspaceRunnerError` | `src/Bitbucket/Errors/GetWorkspaceRunnerError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspaceRunners

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspaceRunners(GetWorkspaceRunnersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`
- **Returns**: `PaginatedRunners`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetWorkspaceRunnersRequest` | `src/Bitbucket/Requests/Pipelines/GetWorkspaceRunnersRequest.cs` |
| `PaginatedRunners` | `src/Bitbucket/Models/PaginatedRunners.cs` |

### StopPipeline

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `StopPipeline(StopPipelineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `PipelineUuid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StopPipelineError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopPipelineRequest` | `src/Bitbucket/Requests/Pipelines/StopPipelineRequest.cs` |
| `StopPipelineError` | `src/Bitbucket/Errors/StopPipelineError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### UpdateDeploymentVariable

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `UpdateDeploymentVariable(UpdateDeploymentVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `EnvironmentUuid`, `VariableUuid`, `Body`
- **Returns**: `DeploymentVariable`
- **Error**: `ApiException<UpdateDeploymentVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateDeploymentVariableRequest` | `src/Bitbucket/Requests/Pipelines/UpdateDeploymentVariableRequest.cs` |
| `DeploymentVariable` | `src/Bitbucket/Models/AllOf/DeploymentVariable.cs` |
| `UpdateDeploymentVariableError` | `src/Bitbucket/Errors/UpdateDeploymentVariableError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### UpdatePipelineVariableForTeam

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `UpdatePipelineVariableForTeam(UpdatePipelineVariableForTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Username`, `VariableUuid`, `Body`
- **Returns**: `PipelineVariable`
- **Error**: `ApiException<UpdatePipelineVariableForTeamError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePipelineVariableForTeamRequest` | `src/Bitbucket/Requests/Pipelines/UpdatePipelineVariableForTeamRequest.cs` |
| `PipelineVariable` | `src/Bitbucket/Models/AllOf/PipelineVariable.cs` |
| `UpdatePipelineVariableForTeamError` | `src/Bitbucket/Errors/UpdatePipelineVariableForTeamError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### UpdatePipelineVariableForUser

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `UpdatePipelineVariableForUser(UpdatePipelineVariableForUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SelectedUser`, `VariableUuid`, `Body`
- **Returns**: `PipelineVariable`
- **Error**: `ApiException<UpdatePipelineVariableForUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePipelineVariableForUserRequest` | `src/Bitbucket/Requests/Pipelines/UpdatePipelineVariableForUserRequest.cs` |
| `PipelineVariable` | `src/Bitbucket/Models/AllOf/PipelineVariable.cs` |
| `UpdatePipelineVariableForUserError` | `src/Bitbucket/Errors/UpdatePipelineVariableForUserError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### UpdatePipelineVariableForWorkspace

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `UpdatePipelineVariableForWorkspace(UpdatePipelineVariableForWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `VariableUuid`, `Body`
- **Returns**: `PipelineVariable`
- **Error**: `ApiException<UpdatePipelineVariableForWorkspaceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePipelineVariableForWorkspaceRequest` | `src/Bitbucket/Requests/Pipelines/UpdatePipelineVariableForWorkspaceRequest.cs` |
| `PipelineVariable` | `src/Bitbucket/Models/AllOf/PipelineVariable.cs` |
| `UpdatePipelineVariableForWorkspaceError` | `src/Bitbucket/Errors/UpdatePipelineVariableForWorkspaceError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### UpdateRepositoryBuildNumber

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `UpdateRepositoryBuildNumber(UpdateRepositoryBuildNumberRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Body`
- **Returns**: `PipelineBuildNumber`
- **Error**: `ApiException<UpdateRepositoryBuildNumberError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateRepositoryBuildNumberRequest` | `src/Bitbucket/Requests/Pipelines/UpdateRepositoryBuildNumberRequest.cs` |
| `PipelineBuildNumber` | `src/Bitbucket/Models/AllOf/PipelineBuildNumber.cs` |
| `UpdateRepositoryBuildNumberError` | `src/Bitbucket/Errors/UpdateRepositoryBuildNumberError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### UpdateRepositoryPipelineConfig

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `UpdateRepositoryPipelineConfig(UpdateRepositoryPipelineConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Body`
- **Returns**: `PipelinesConfig`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `UpdateRepositoryPipelineConfigRequest` | `src/Bitbucket/Requests/Pipelines/UpdateRepositoryPipelineConfigRequest.cs` |
| `PipelinesConfig` | `src/Bitbucket/Models/AllOf/PipelinesConfig.cs` |

### UpdateRepositoryPipelineKeyPair

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `UpdateRepositoryPipelineKeyPair(UpdateRepositoryPipelineKeyPairRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Body`
- **Returns**: `PipelineSshKeyPair`
- **Error**: `ApiException<UpdateRepositoryPipelineKeyPairError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateRepositoryPipelineKeyPairRequest` | `src/Bitbucket/Requests/Pipelines/UpdateRepositoryPipelineKeyPairRequest.cs` |
| `PipelineSshKeyPair` | `src/Bitbucket/Models/AllOf/PipelineSshKeyPair.cs` |
| `UpdateRepositoryPipelineKeyPairError` | `src/Bitbucket/Errors/UpdateRepositoryPipelineKeyPairError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### UpdateRepositoryPipelineKnownHost

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `UpdateRepositoryPipelineKnownHost(UpdateRepositoryPipelineKnownHostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `KnownHostUuid`, `Body`
- **Returns**: `PipelineKnownHost`
- **Error**: `ApiException<UpdateRepositoryPipelineKnownHostError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateRepositoryPipelineKnownHostRequest` | `src/Bitbucket/Requests/Pipelines/UpdateRepositoryPipelineKnownHostRequest.cs` |
| `PipelineKnownHost` | `src/Bitbucket/Models/AllOf/PipelineKnownHost.cs` |
| `UpdateRepositoryPipelineKnownHostError` | `src/Bitbucket/Errors/UpdateRepositoryPipelineKnownHostError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### UpdateRepositoryPipelineSchedule

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `UpdateRepositoryPipelineSchedule(UpdateRepositoryPipelineScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `ScheduleUuid`, `Body`
- **Returns**: `PipelineSchedule`
- **Error**: `ApiException<UpdateRepositoryPipelineScheduleError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateRepositoryPipelineScheduleRequest` | `src/Bitbucket/Requests/Pipelines/UpdateRepositoryPipelineScheduleRequest.cs` |
| `PipelineSchedulePutRequestBody` | `src/Bitbucket/Models/AllOf/PipelineSchedulePutRequestBody.cs` |
| `PipelineSchedule` | `src/Bitbucket/Models/AllOf/PipelineSchedule.cs` |
| `UpdateRepositoryPipelineScheduleError` | `src/Bitbucket/Errors/UpdateRepositoryPipelineScheduleError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### UpdateRepositoryPipelineVariable

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `UpdateRepositoryPipelineVariable(UpdateRepositoryPipelineVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `VariableUuid`, `Body`
- **Returns**: `PipelineVariable`
- **Error**: `ApiException<UpdateRepositoryPipelineVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateRepositoryPipelineVariableRequest` | `src/Bitbucket/Requests/Pipelines/UpdateRepositoryPipelineVariableRequest.cs` |
| `PipelineVariable` | `src/Bitbucket/Models/AllOf/PipelineVariable.cs` |
| `UpdateRepositoryPipelineVariableError` | `src/Bitbucket/Errors/UpdateRepositoryPipelineVariableError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### UpdateRepositoryRunner

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `UpdateRepositoryRunner(UpdateRepositoryRunnerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `RunnerUuid`
- **Returns**: `PipelineRunner`
- **Error**: `ApiException<UpdateRepositoryRunnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateRepositoryRunnerRequest` | `src/Bitbucket/Requests/Pipelines/UpdateRepositoryRunnerRequest.cs` |
| `PipelineRunner` | `src/Bitbucket/Models/AllOf/PipelineRunner.cs` |
| `UpdateRepositoryRunnerError` | `src/Bitbucket/Errors/UpdateRepositoryRunnerError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### UpdateWorkspaceRunner

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `UpdateWorkspaceRunner(UpdateWorkspaceRunnerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RunnerUuid`
- **Returns**: `PipelineRunner`
- **Error**: `ApiException<UpdateWorkspaceRunnerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateWorkspaceRunnerRequest` | `src/Bitbucket/Requests/Pipelines/UpdateWorkspaceRunnerRequest.cs` |
| `PipelineRunner` | `src/Bitbucket/Models/AllOf/PipelineRunner.cs` |
| `UpdateWorkspaceRunnerError` | `src/Bitbucket/Errors/UpdateWorkspaceRunnerError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

