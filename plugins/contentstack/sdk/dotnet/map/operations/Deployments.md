<!-- Generated file — do not edit; regenerated with the SDK. -->

# Deployments — operations

Accessor: `client.Deployments` · Source: `src/Contentstack/Api/Deployments.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateDeployment

- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `CreateDeployment(CreateDeploymentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectUid`, `EnvUid`, `Body`
- **Returns**: `Deployment`
- **Error**: `ApiException<CreateDeploymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDeploymentOperationRequest` | `src/Contentstack/Requests/Deployments/CreateDeploymentOperationRequest.cs` |
| `CreateDeploymentRequest` | `src/Contentstack/Models/CreateDeploymentRequest.cs` |
| `Deployment` | `src/Contentstack/Models/Deployment.cs` |
| `CreateDeploymentError` | `src/Contentstack/Errors/CreateDeploymentError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### GetAllDeployments

- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetAllDeployments(GetAllDeploymentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectUid`, `EnvUid`
- **Returns**: `DeploymentList`
- **Error**: `ApiException<GetAllDeploymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAllDeploymentsRequest` | `src/Contentstack/Requests/Deployments/GetAllDeploymentsRequest.cs` |
| `DeploymentList` | `src/Contentstack/Models/DeploymentList.cs` |
| `GetAllDeploymentsError` | `src/Contentstack/Errors/GetAllDeploymentsError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### GetDeployment

- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetDeployment(GetDeploymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectUid`, `EnvUid`, `DeployUid`
- **Returns**: `Deployment`
- **Error**: `ApiException<GetDeploymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDeploymentRequest` | `src/Contentstack/Requests/Deployments/GetDeploymentRequest.cs` |
| `Deployment` | `src/Contentstack/Models/Deployment.cs` |
| `GetDeploymentError` | `src/Contentstack/Errors/GetDeploymentError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### GetDeploymentLogs

- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetDeploymentLogs(GetDeploymentLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectUid`, `EnvUid`, `DeployUid`
- **Returns**: `LogResponse`
- **Error**: `ApiException<GetDeploymentLogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDeploymentLogsRequest` | `src/Contentstack/Requests/Deployments/GetDeploymentLogsRequest.cs` |
| `LogResponse` | `src/Contentstack/Models/LogResponse.cs` |
| `GetDeploymentLogsError` | `src/Contentstack/Errors/GetDeploymentLogsError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

### GetServerLogs

- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetServerLogs(GetServerLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectUid`, `EnvUid`, `DeployUid`
- **Returns**: `LogResponse`
- **Error**: `ApiException<GetServerLogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetServerLogsRequest` | `src/Contentstack/Requests/Deployments/GetServerLogsRequest.cs` |
| `LogResponse` | `src/Contentstack/Models/LogResponse.cs` |
| `GetServerLogsError` | `src/Contentstack/Errors/GetServerLogsError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

