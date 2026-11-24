<!-- Generated file — do not edit; regenerated with the SDK. -->

# ResourceClassApi — operations

Accessor: `client.ResourceClassApi` · Source: `src/CircleCi/Api/ResourceClassApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateResourceClass

- **Auth**: `options.ApiToken`
- **Signature**: `CreateResourceClass(CreateResourceClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ResourceClassCreation`
- **Error**: `ApiException<CreateResourceClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateResourceClassRequest` | `src/CircleCi/Requests/ResourceClassApi/CreateResourceClassRequest.cs` |
| `RunnerResourceClassRequest` | `src/CircleCi/Models/RunnerResourceClassRequest.cs` |
| `ResourceClassCreation` | `src/CircleCi/Models/ResourceClassCreation.cs` |
| `CreateResourceClassError` | `src/CircleCi/Errors/CreateResourceClassError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### DeleteResourceClass

- **Auth**: `options.ApiToken`
- **Signature**: `DeleteResourceClass(DeleteResourceClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceClass`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteResourceClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteResourceClassRequest` | `src/CircleCi/Requests/ResourceClassApi/DeleteResourceClassRequest.cs` |
| `DeleteResourceClassError` | `src/CircleCi/Errors/DeleteResourceClassError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### GetResourceClass

- **Auth**: `options.ApiToken`
- **Signature**: `GetResourceClass(GetResourceClassRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceClass`
- **Returns**: `ResourceClass`
- **Error**: `ApiException<GetResourceClassError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetResourceClassRequest` | `src/CircleCi/Requests/ResourceClassApi/GetResourceClassRequest.cs` |
| `ResourceClass` | `src/CircleCi/Models/ResourceClass.cs` |
| `GetResourceClassError` | `src/CircleCi/Errors/GetResourceClassError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### ListResourceClasses

- **Auth**: `options.ApiToken`
- **Signature**: `ListResourceClasses(ListResourceClassesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Namespace`
- **Query params (wire ← C#)**: `namespace` ← `Namespace`
- **Returns**: `RunnerResourceClassResponse`
- **Error**: `ApiException<ListResourceClassesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListResourceClassesRequest` | `src/CircleCi/Requests/ResourceClassApi/ListResourceClassesRequest.cs` |
| `RunnerResourceClassResponse` | `src/CircleCi/Models/RunnerResourceClassResponse.cs` |
| `ListResourceClassesError` | `src/CircleCi/Errors/ListResourceClassesError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

