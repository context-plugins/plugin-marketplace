<!-- Generated file — do not edit; regenerated with the SDK. -->

# Deployments — operations

Accessor: `client.Deployments` · Source: `src/Boomi/Api/Deployments.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateDeployedPackage

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateDeployedPackage(CreateDeployedPackageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DeployedPackage`
- **Error**: `ApiException<CreateDeployedPackageError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDeployedPackageRequest` | `src/Boomi/Requests/Deployments/CreateDeployedPackageRequest.cs` |
| `DeployedPackageInput` | `src/Boomi/Models/DeployedPackageInput.cs` |
| `DeployedPackage` | `src/Boomi/Models/DeployedPackage.cs` |
| `CreateDeployedPackageError` | `src/Boomi/Errors/CreateDeployedPackageError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

### DeleteDeployedPackage

- **Auth**: `options.BasicAuth`
- **Signature**: `DeleteDeployedPackage(DeleteDeployedPackageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteDeployedPackageError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDeployedPackageRequest` | `src/Boomi/Requests/Deployments/DeleteDeployedPackageRequest.cs` |
| `DeleteDeployedPackageError` | `src/Boomi/Errors/DeleteDeployedPackageError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

### GetDeployedPackage

- **Auth**: `options.BasicAuth`
- **Signature**: `GetDeployedPackage(GetDeployedPackageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `DeployedPackage`
- **Error**: `ApiException<GetDeployedPackageError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDeployedPackageRequest` | `src/Boomi/Requests/Deployments/GetDeployedPackageRequest.cs` |
| `DeployedPackage` | `src/Boomi/Models/DeployedPackage.cs` |
| `GetDeployedPackageError` | `src/Boomi/Errors/GetDeployedPackageError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

### QueryDeployedPackages

- **Auth**: `options.BasicAuth`
- **Signature**: `QueryDeployedPackages(QueryDeployedPackagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DeployedPackageQueryResult`
- **Error**: `ApiException<QueryDeployedPackagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `QueryDeployedPackagesRequest` | `src/Boomi/Requests/Deployments/QueryDeployedPackagesRequest.cs` |
| `QueryRequest` | `src/Boomi/Models/QueryRequest.cs` |
| `DeployedPackageQueryResult` | `src/Boomi/Models/DeployedPackageQueryResult.cs` |
| `QueryDeployedPackagesError` | `src/Boomi/Errors/QueryDeployedPackagesError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

