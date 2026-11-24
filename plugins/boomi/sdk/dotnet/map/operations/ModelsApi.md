<!-- Generated file — do not edit; regenerated with the SDK. -->

# ModelsApi — operations

Accessor: `client.ModelsApi` · Source: `src/Boomi/Api/ModelsApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateModel

- **Server group**: `DefaultBoomiDataHubGoldenRecordsApi`
- **Auth**: `options.BasicAuth` OR `options.BearerAuth`
- **Signature**: `CreateModel(CreateModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepositoryId`, `Body`
- **Returns**: `Model`
- **Error**: `ApiException<CreateModelError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBoomiDataHubGoldenRecordsApi([NotNullWhen(true)] out ErrorResponseBoomiDataHubGoldenRecordsApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateModelRequest` | `src/Boomi/Requests/ModelsApi/CreateModelRequest.cs` |
| `ModelInput` | `src/Boomi/Models/ModelInput.cs` |
| `Model` | `src/Boomi/Models/Model.cs` |
| `CreateModelError` | `src/Boomi/Errors/CreateModelError.cs` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `src/Boomi/Models/ErrorResponseBoomiDataHubGoldenRecordsApi.cs` |

### DeleteModel

- **Server group**: `DefaultBoomiDataHubGoldenRecordsApi`
- **Auth**: `options.BasicAuth` OR `options.BearerAuth`
- **Signature**: `DeleteModel(DeleteModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepositoryId`, `ModelId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteModelError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBoomiDataHubGoldenRecordsApi([NotNullWhen(true)] out ErrorResponseBoomiDataHubGoldenRecordsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteModelRequest` | `src/Boomi/Requests/ModelsApi/DeleteModelRequest.cs` |
| `DeleteModelError` | `src/Boomi/Errors/DeleteModelError.cs` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `src/Boomi/Models/ErrorResponseBoomiDataHubGoldenRecordsApi.cs` |

### GetModel

- **Server group**: `DefaultBoomiDataHubGoldenRecordsApi`
- **Auth**: `options.BasicAuth` OR `options.BearerAuth`
- **Signature**: `GetModel(GetModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepositoryId`, `ModelId`
- **Returns**: `Model`
- **Error**: `ApiException<GetModelError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBoomiDataHubGoldenRecordsApi([NotNullWhen(true)] out ErrorResponseBoomiDataHubGoldenRecordsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetModelRequest` | `src/Boomi/Requests/ModelsApi/GetModelRequest.cs` |
| `Model` | `src/Boomi/Models/Model.cs` |
| `GetModelError` | `src/Boomi/Errors/GetModelError.cs` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `src/Boomi/Models/ErrorResponseBoomiDataHubGoldenRecordsApi.cs` |

### ListModels

- **Server group**: `DefaultBoomiDataHubGoldenRecordsApi`
- **Auth**: `options.BasicAuth` OR `options.BearerAuth`
- **Signature**: `ListModels(ListModelsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepositoryId`
- **Returns**: `RepositoriesModelsResponse`
- **Error**: `ApiException<ListModelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBoomiDataHubGoldenRecordsApi([NotNullWhen(true)] out ErrorResponseBoomiDataHubGoldenRecordsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListModelsRequest` | `src/Boomi/Requests/ModelsApi/ListModelsRequest.cs` |
| `RepositoriesModelsResponse` | `src/Boomi/Models/RepositoriesModelsResponse.cs` |
| `ListModelsError` | `src/Boomi/Errors/ListModelsError.cs` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `src/Boomi/Models/ErrorResponseBoomiDataHubGoldenRecordsApi.cs` |

### PublishModel

- **Server group**: `DefaultBoomiDataHubGoldenRecordsApi`
- **Auth**: `options.BasicAuth` OR `options.BearerAuth`
- **Signature**: `PublishModel(PublishModelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RepositoryId`, `ModelId`
- **Returns**: `Model`
- **Error**: `ApiException<PublishModelError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseBoomiDataHubGoldenRecordsApi([NotNullWhen(true)] out ErrorResponseBoomiDataHubGoldenRecordsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PublishModelRequest` | `src/Boomi/Requests/ModelsApi/PublishModelRequest.cs` |
| `Model` | `src/Boomi/Models/Model.cs` |
| `PublishModelError` | `src/Boomi/Errors/PublishModelError.cs` |
| `ErrorResponseBoomiDataHubGoldenRecordsApi` | `src/Boomi/Models/ErrorResponseBoomiDataHubGoldenRecordsApi.cs` |

