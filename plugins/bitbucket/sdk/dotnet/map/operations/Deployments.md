<!-- Generated file — do not edit; regenerated with the SDK. -->

# Deployments — operations

Accessor: `client.Deployments` · Source: `src/Bitbucket/Api/Deployments.cs` · 16 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateEnvironment

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `CreateEnvironment(CreateEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `Body`
- **Returns**: `DeploymentEnvironment`
- **Error**: `ApiException<CreateEnvironmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateEnvironmentRequest` | `src/Bitbucket/Requests/Deployments/CreateEnvironmentRequest.cs` |
| `DeploymentEnvironment` | `src/Bitbucket/Models/AllOf/DeploymentEnvironment.cs` |
| `CreateEnvironmentError` | `src/Bitbucket/Errors/CreateEnvironmentError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteEnvironmentForRepository

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteEnvironmentForRepository(DeleteEnvironmentForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `EnvironmentUuid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteEnvironmentForRepositoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteEnvironmentForRepositoryRequest` | `src/Bitbucket/Requests/Deployments/DeleteEnvironmentForRepositoryRequest.cs` |
| `DeleteEnvironmentForRepositoryError` | `src/Bitbucket/Errors/DeleteEnvironmentForRepositoryError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyId(DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `KeyId`, `RepoSlug`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest` | `src/Bitbucket/Requests/Deployments/DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest.cs` |
| `DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError` | `src/Bitbucket/Errors/DeleteRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyId(DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `KeyId`, `ProjectKey`, `Workspace`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdRequest` | `src/Bitbucket/Requests/Deployments/DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdRequest.cs` |
| `DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdError` | `src/Bitbucket/Errors/DeleteWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetDeploymentForRepository

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetDeploymentForRepository(GetDeploymentForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `DeploymentUuid`
- **Returns**: `Deployment`
- **Error**: `ApiException<GetDeploymentForRepositoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDeploymentForRepositoryRequest` | `src/Bitbucket/Requests/Deployments/GetDeploymentForRepositoryRequest.cs` |
| `Deployment` | `src/Bitbucket/Models/AllOf/Deployment.cs` |
| `GetDeploymentForRepositoryError` | `src/Bitbucket/Errors/GetDeploymentForRepositoryError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetDeploymentsForRepository

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetDeploymentsForRepository(GetDeploymentsForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`
- **Returns**: `PaginatedDeployments`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetDeploymentsForRepositoryRequest` | `src/Bitbucket/Requests/Deployments/GetDeploymentsForRepositoryRequest.cs` |
| `PaginatedDeployments` | `src/Bitbucket/Models/PaginatedDeployments.cs` |

### GetEnvironmentForRepository

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetEnvironmentForRepository(GetEnvironmentForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `EnvironmentUuid`
- **Returns**: `DeploymentEnvironment`
- **Error**: `ApiException<GetEnvironmentForRepositoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEnvironmentForRepositoryRequest` | `src/Bitbucket/Requests/Deployments/GetEnvironmentForRepositoryRequest.cs` |
| `DeploymentEnvironment` | `src/Bitbucket/Models/AllOf/DeploymentEnvironment.cs` |
| `GetEnvironmentForRepositoryError` | `src/Bitbucket/Errors/GetEnvironmentForRepositoryError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetEnvironmentsForRepository

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetEnvironmentsForRepository(GetEnvironmentsForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`
- **Returns**: `PaginatedDeploymentEnvironments`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetEnvironmentsForRepositoryRequest` | `src/Bitbucket/Requests/Deployments/GetEnvironmentsForRepositoryRequest.cs` |
| `PaginatedDeploymentEnvironments` | `src/Bitbucket/Models/PaginatedDeploymentEnvironments.cs` |

### GetRepositoriesByWorkspaceByRepoSlugDeployKeys

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugDeployKeys(GetRepositoriesByWorkspaceByRepoSlugDeployKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `PaginatedDeployKeys`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugDeployKeysError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugDeployKeysRequest` | `src/Bitbucket/Requests/Deployments/GetRepositoriesByWorkspaceByRepoSlugDeployKeysRequest.cs` |
| `PaginatedDeployKeys` | `src/Bitbucket/Models/PaginatedDeployKeys.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugDeployKeysError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugDeployKeysError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyId(GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `KeyId`, `RepoSlug`, `Workspace`
- **Returns**: `DeployKey`
- **Error**: `ApiException<GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest` | `src/Bitbucket/Requests/Deployments/GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest.cs` |
| `DeployKey` | `src/Bitbucket/Models/AllOf/DeployKey.cs` |
| `GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError` | `src/Bitbucket/Errors/GetRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeys

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeys(GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectKey`, `Workspace`
- **Returns**: `PaginatedProjectDeployKeys`
- **Error**: `ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysRequest` | `src/Bitbucket/Requests/Deployments/GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysRequest.cs` |
| `PaginatedProjectDeployKeys` | `src/Bitbucket/Models/PaginatedProjectDeployKeys.cs` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyId(GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `KeyId`, `ProjectKey`, `Workspace`
- **Returns**: `ProjectDeployKey`
- **Error**: `ApiException<GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdRequest` | `src/Bitbucket/Requests/Deployments/GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdRequest.cs` |
| `ProjectDeployKey` | `src/Bitbucket/Models/AllOf/ProjectDeployKey.cs` |
| `GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdError` | `src/Bitbucket/Errors/GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostRepositoriesByWorkspaceByRepoSlugDeployKeys

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostRepositoriesByWorkspaceByRepoSlugDeployKeys(PostRepositoriesByWorkspaceByRepoSlugDeployKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepoSlug`, `Workspace`
- **Returns**: `DeployKey`
- **Error**: `ApiException<PostRepositoriesByWorkspaceByRepoSlugDeployKeysError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403] · `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRepositoriesByWorkspaceByRepoSlugDeployKeysRequest` | `src/Bitbucket/Requests/Deployments/PostRepositoriesByWorkspaceByRepoSlugDeployKeysRequest.cs` |
| `DeployKey` | `src/Bitbucket/Models/AllOf/DeployKey.cs` |
| `PostRepositoriesByWorkspaceByRepoSlugDeployKeysError` | `src/Bitbucket/Errors/PostRepositoriesByWorkspaceByRepoSlugDeployKeysError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeys

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeys(PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectKey`, `Workspace`
- **Returns**: `ProjectDeployKey`
- **Error**: `ApiException<PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysRequest` | `src/Bitbucket/Requests/Deployments/PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysRequest.cs` |
| `ProjectDeployKey` | `src/Bitbucket/Models/AllOf/ProjectDeployKey.cs` |
| `PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysError` | `src/Bitbucket/Errors/PostWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyId

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyId(PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `KeyId`, `RepoSlug`, `Workspace`
- **Returns**: `DeployKey`
- **Error**: `ApiException<PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 404] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest` | `src/Bitbucket/Requests/Deployments/PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdRequest.cs` |
| `DeployKey` | `src/Bitbucket/Models/AllOf/DeployKey.cs` |
| `PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError` | `src/Bitbucket/Errors/PutRepositoriesByWorkspaceByRepoSlugDeployKeysByKeyIdError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

### UpdateEnvironmentForRepository

- **Auth**: `options.Oauth2` OR `options.Basic` OR `options.ApiKey`
- **Signature**: `UpdateEnvironmentForRepository(UpdateEnvironmentForRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Workspace`, `RepoSlug`, `EnvironmentUuid`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateEnvironmentForRepositoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateEnvironmentForRepositoryRequest` | `src/Bitbucket/Requests/Deployments/UpdateEnvironmentForRepositoryRequest.cs` |
| `UpdateEnvironmentForRepositoryError` | `src/Bitbucket/Errors/UpdateEnvironmentForRepositoryError.cs` |
| `Error` | `src/Bitbucket/Models/Error.cs` |

