<!-- Generated file — do not edit; regenerated with the SDK. -->

# Environments — operations

Accessor: `client.Environments` · Source: `src/Boomi/Api/Environments.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateEnvironment

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateEnvironment(CreateEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `EnvironmentModel`
- **Error**: `ApiException<CreateEnvironmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateEnvironmentRequest` | `src/Boomi/Requests/Environments/CreateEnvironmentRequest.cs` |
| `EnvironmentInput` | `src/Boomi/Models/EnvironmentInput.cs` |
| `EnvironmentModel` | `src/Boomi/Models/EnvironmentModel.cs` |
| `CreateEnvironmentError` | `src/Boomi/Errors/CreateEnvironmentError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

### DeleteEnvironment

- **Auth**: `options.BasicAuth`
- **Signature**: `DeleteEnvironment(DeleteEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteEnvironmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteEnvironmentRequest` | `src/Boomi/Requests/Environments/DeleteEnvironmentRequest.cs` |
| `DeleteEnvironmentError` | `src/Boomi/Errors/DeleteEnvironmentError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

### GetEnvironment

- **Auth**: `options.BasicAuth`
- **Signature**: `GetEnvironment(GetEnvironmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `EnvironmentModel`
- **Error**: `ApiException<GetEnvironmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEnvironmentRequest` | `src/Boomi/Requests/Environments/GetEnvironmentRequest.cs` |
| `EnvironmentModel` | `src/Boomi/Models/EnvironmentModel.cs` |
| `GetEnvironmentError` | `src/Boomi/Errors/GetEnvironmentError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

### QueryEnvironments

- **Auth**: `options.BasicAuth`
- **Signature**: `QueryEnvironments(QueryEnvironmentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `EnvironmentQueryResult`
- **Error**: `ApiException<QueryEnvironmentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `QueryEnvironmentsRequest` | `src/Boomi/Requests/Environments/QueryEnvironmentsRequest.cs` |
| `QueryRequest` | `src/Boomi/Models/QueryRequest.cs` |
| `EnvironmentQueryResult` | `src/Boomi/Models/EnvironmentQueryResult.cs` |
| `QueryEnvironmentsError` | `src/Boomi/Errors/QueryEnvironmentsError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

