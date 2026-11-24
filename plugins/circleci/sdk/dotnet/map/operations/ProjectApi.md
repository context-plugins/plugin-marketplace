<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProjectApi — operations

Accessor: `client.ProjectApi` · Source: `src/CircleCi/Api/ProjectApi.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCheckoutKey

- **Auth**: `options.ApiToken`
- **Signature**: `CreateCheckoutKey(CreateCheckoutKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`, `Body`
- **Returns**: `CheckoutKey`
- **Error**: `ApiException<CreateCheckoutKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCheckoutKeyRequest` | `src/CircleCi/Requests/ProjectApi/CreateCheckoutKeyRequest.cs` |
| `ProjectCheckoutKeyRequest` | `src/CircleCi/Models/ProjectCheckoutKeyRequest.cs` |
| `CheckoutKey` | `src/CircleCi/Models/CheckoutKey.cs` |
| `CreateCheckoutKeyError` | `src/CircleCi/Errors/CreateCheckoutKeyError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### CreateProjectEnvironmentVariable

- **Auth**: `options.ApiToken`
- **Signature**: `CreateProjectEnvironmentVariable(CreateProjectEnvironmentVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`, `Body`
- **Returns**: `ProjectEnvVar`
- **Error**: `ApiException<CreateProjectEnvironmentVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateProjectEnvironmentVariableRequest` | `src/CircleCi/Requests/ProjectApi/CreateProjectEnvironmentVariableRequest.cs` |
| `ProjectEnvvarRequest` | `src/CircleCi/Models/ProjectEnvvarRequest.cs` |
| `ProjectEnvVar` | `src/CircleCi/Models/ProjectEnvVar.cs` |
| `CreateProjectEnvironmentVariableError` | `src/CircleCi/Errors/CreateProjectEnvironmentVariableError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### DeleteCheckoutKey

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteCheckoutKey(DeleteCheckoutKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`, `Fingerprint`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<DeleteCheckoutKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCheckoutKeyRequest` | `src/CircleCi/Requests/ProjectApi/DeleteCheckoutKeyRequest.cs` |
| `MessageResponse` | `src/CircleCi/Models/MessageResponse.cs` |
| `DeleteCheckoutKeyError` | `src/CircleCi/Errors/DeleteCheckoutKeyError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### DeleteProjectEnvironmentVariable

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteProjectEnvironmentVariable(DeleteProjectEnvironmentVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`, `Name`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<DeleteProjectEnvironmentVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteProjectEnvironmentVariableRequest` | `src/CircleCi/Requests/ProjectApi/DeleteProjectEnvironmentVariableRequest.cs` |
| `MessageResponse` | `src/CircleCi/Models/MessageResponse.cs` |
| `DeleteProjectEnvironmentVariableError` | `src/CircleCi/Errors/DeleteProjectEnvironmentVariableError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### FollowProject

- **Auth**: `options.ApiToken`
- **Signature**: `FollowProject(FollowProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VcsType`, `Username`, `Project`
- **Returns**: `ProjectProjectFollowResponse`
- **Error**: `ApiException<FollowProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FollowProjectRequest` | `src/CircleCi/Requests/ProjectApi/FollowProjectRequest.cs` |
| `VcsType` | `src/CircleCi/Models/Enums/VcsType.cs` |
| `ProjectProjectFollowResponse` | `src/CircleCi/Models/ProjectProjectFollowResponse.cs` |
| `FollowProjectError` | `src/CircleCi/Errors/FollowProjectError.cs` |

### GetCheckoutKey

- **Auth**: `options.ApiToken`
- **Signature**: `GetCheckoutKey(GetCheckoutKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`, `Fingerprint`
- **Returns**: `CheckoutKey`
- **Error**: `ApiException<GetCheckoutKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCheckoutKeyRequest` | `src/CircleCi/Requests/ProjectApi/GetCheckoutKeyRequest.cs` |
| `CheckoutKey` | `src/CircleCi/Models/CheckoutKey.cs` |
| `GetCheckoutKeyError` | `src/CircleCi/Errors/GetCheckoutKeyError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### GetProject

- **Auth**: `options.ApiToken`
- **Signature**: `GetProject(GetProjectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`
- **Returns**: `Project2`
- **Error**: `ApiException<GetProjectError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectRequest` | `src/CircleCi/Requests/ProjectApi/GetProjectRequest.cs` |
| `Project2` | `src/CircleCi/Models/Project2.cs` |
| `GetProjectError` | `src/CircleCi/Errors/GetProjectError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### GetProjectEnvironmentVariable

- **Auth**: `options.ApiToken`
- **Signature**: `GetProjectEnvironmentVariable(GetProjectEnvironmentVariableRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`, `Name`
- **Returns**: `ProjectEnvVar`
- **Error**: `ApiException<GetProjectEnvironmentVariableError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProjectEnvironmentVariableRequest` | `src/CircleCi/Requests/ProjectApi/GetProjectEnvironmentVariableRequest.cs` |
| `ProjectEnvVar` | `src/CircleCi/Models/ProjectEnvVar.cs` |
| `GetProjectEnvironmentVariableError` | `src/CircleCi/Errors/GetProjectEnvironmentVariableError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### ListCheckoutKeys

- **Auth**: `options.ApiToken`
- **Signature**: `ListCheckoutKeys(ListCheckoutKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`
- **Returns**: `CheckoutKeyList`
- **Error**: `ApiException<ListCheckoutKeysError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCheckoutKeysRequest` | `src/CircleCi/Requests/ProjectApi/ListCheckoutKeysRequest.cs` |
| `CheckoutKeyList` | `src/CircleCi/Models/CheckoutKeyList.cs` |
| `ListCheckoutKeysError` | `src/CircleCi/Errors/ListCheckoutKeysError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### ListProjectEnvironmentVariables

- **Auth**: `options.ApiToken`
- **Signature**: `ListProjectEnvironmentVariables(ListProjectEnvironmentVariablesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`
- **Returns**: `ProjectEnvVarList`
- **Error**: `ApiException<ListProjectEnvironmentVariablesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListProjectEnvironmentVariablesRequest` | `src/CircleCi/Requests/ProjectApi/ListProjectEnvironmentVariablesRequest.cs` |
| `ProjectEnvVarList` | `src/CircleCi/Models/ProjectEnvVarList.cs` |
| `ListProjectEnvironmentVariablesError` | `src/CircleCi/Errors/ListProjectEnvironmentVariablesError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### ListProjects

- **Auth**: `options.ApiToken`
- **Signature**: `ListProjects(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<ProjectCircleciProjectApi>`
- **Error**: `ApiException<ListProjectsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ProjectCircleciProjectApi` | `src/CircleCi/Models/ProjectCircleciProjectApi.cs` |
| `ListProjectsError` | `src/CircleCi/Errors/ListProjectsError.cs` |

