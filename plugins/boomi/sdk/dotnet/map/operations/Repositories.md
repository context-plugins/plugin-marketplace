<!-- Generated file — do not edit; regenerated with the SDK. -->

# Repositories — operations

Accessor: `client.Repositories` · Source: `src/Boomi/Api/Repositories.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateRepository

- **Server group**: `DefaultBoomiDataHubGoldenRecordsApi`
- **Auth**: `options.BasicAuth` OR `options.BearerAuth`
- **Signature**: `CreateRepository(CreateRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Repository`
- **Error**: `ApiException<CreateRepositoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBoomiDataHubGoldenRecordsApi([NotNullWhen(true)] out ErrorResponseBoomiDataHubGoldenRecordsApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateRepositoryRequest` | `src/Boomi/Requests/Repositories/CreateRepositoryRequest.cs` |
| `RepositoryInput` | `src/Boomi/Models/RepositoryInput.cs` |
| `Repository` | `src/Boomi/Models/Repository.cs` |
| `CreateRepositoryError` | `src/Boomi/Errors/CreateRepositoryError.cs` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `src/Boomi/Models/ErrorResponseBoomiDataHubGoldenRecordsApi.cs` |

### DeleteRepository

- **Server group**: `DefaultBoomiDataHubGoldenRecordsApi`
- **Auth**: `options.BasicAuth` OR `options.BearerAuth`
- **Signature**: `DeleteRepository(DeleteRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepositoryId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteRepositoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBoomiDataHubGoldenRecordsApi([NotNullWhen(true)] out ErrorResponseBoomiDataHubGoldenRecordsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRepositoryRequest` | `src/Boomi/Requests/Repositories/DeleteRepositoryRequest.cs` |
| `DeleteRepositoryError` | `src/Boomi/Errors/DeleteRepositoryError.cs` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `src/Boomi/Models/ErrorResponseBoomiDataHubGoldenRecordsApi.cs` |

### GetRepository

- **Server group**: `DefaultBoomiDataHubGoldenRecordsApi`
- **Auth**: `options.BasicAuth` OR `options.BearerAuth`
- **Signature**: `GetRepository(GetRepositoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepositoryId`
- **Returns**: `Repository`
- **Error**: `ApiException<GetRepositoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBoomiDataHubGoldenRecordsApi([NotNullWhen(true)] out ErrorResponseBoomiDataHubGoldenRecordsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRepositoryRequest` | `src/Boomi/Requests/Repositories/GetRepositoryRequest.cs` |
| `Repository` | `src/Boomi/Models/Repository.cs` |
| `GetRepositoryError` | `src/Boomi/Errors/GetRepositoryError.cs` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `src/Boomi/Models/ErrorResponseBoomiDataHubGoldenRecordsApi.cs` |

### ListRepositories

- **Server group**: `DefaultBoomiDataHubGoldenRecordsApi`
- **Auth**: `options.BasicAuth` OR `options.BearerAuth`
- **Signature**: `ListRepositories(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `RepositoriesResponse`
- **Error**: `ApiException<ListRepositoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBoomiDataHubGoldenRecordsApi([NotNullWhen(true)] out ErrorResponseBoomiDataHubGoldenRecordsApi? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RepositoriesResponse` | `src/Boomi/Models/RepositoriesResponse.cs` |
| `ListRepositoriesError` | `src/Boomi/Errors/ListRepositoriesError.cs` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `src/Boomi/Models/ErrorResponseBoomiDataHubGoldenRecordsApi.cs` |

