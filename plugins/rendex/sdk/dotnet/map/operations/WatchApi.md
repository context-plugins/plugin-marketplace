<!-- Generated file — do not edit; regenerated with the SDK. -->

# WatchApi — operations

Accessor: `client.WatchApi` · Source: `src/Rendex/Api/WatchApi.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWatch

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateWatch(CreateWatchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1WatchesResponse`
- **Error**: `ApiException<CreateWatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateWatchOperationRequest` | `src/Rendex/Requests/WatchApi/CreateWatchOperationRequest.cs` |
| `CreateWatchRequest` | `src/Rendex/Models/CreateWatchRequest.cs` |
| `V1WatchesResponse` | `src/Rendex/Models/V1WatchesResponse.cs` |
| `CreateWatchError` | `src/Rendex/Errors/CreateWatchError.cs` |
| `ErrorResponseModel` | `src/Rendex/Models/ErrorResponseModel.cs` |

### DeleteWatch

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteWatch(DeleteWatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteWatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteWatchRequest` | `src/Rendex/Requests/WatchApi/DeleteWatchRequest.cs` |
| `DeleteWatchError` | `src/Rendex/Errors/DeleteWatchError.cs` |
| `ErrorResponseModel` | `src/Rendex/Models/ErrorResponseModel.cs` |

### GetWatch

- **Auth**: `options.BearerAuth`
- **Signature**: `GetWatch(GetWatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `V1WatchesResponse`
- **Error**: `ApiException<GetWatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetWatchRequest` | `src/Rendex/Requests/WatchApi/GetWatchRequest.cs` |
| `V1WatchesResponse` | `src/Rendex/Models/V1WatchesResponse.cs` |
| `GetWatchError` | `src/Rendex/Errors/GetWatchError.cs` |
| `ErrorResponseModel` | `src/Rendex/Models/ErrorResponseModel.cs` |

### ListWatchRuns

- **Auth**: `options.BearerAuth`
- **Signature**: `ListWatchRuns(ListWatchRunsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `cursor` ← `Cursor`, `limit` ← `Limit`
- **Returns**: `V1WatchesRunsResponse`
- **Error**: `ApiException<ListWatchRunsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListWatchRunsRequest` | `src/Rendex/Requests/WatchApi/ListWatchRunsRequest.cs` |
| `V1WatchesRunsResponse` | `src/Rendex/Models/V1WatchesRunsResponse.cs` |
| `ListWatchRunsError` | `src/Rendex/Errors/ListWatchRunsError.cs` |
| `ErrorResponseModel` | `src/Rendex/Models/ErrorResponseModel.cs` |

### ListWatches

- **Auth**: `options.BearerAuth`
- **Signature**: `ListWatches(ListWatchesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `status` ← `Status`, `cursor` ← `Cursor`, `limit` ← `Limit`
- **Returns**: `V1WatchesResponse1`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListWatchesRequest` | `src/Rendex/Requests/WatchApi/ListWatchesRequest.cs` |
| `Status2RendexRenderingWatchApi` | `src/Rendex/Models/Enums/Status2RendexRenderingWatchApi.cs` |
| `V1WatchesResponse1` | `src/Rendex/Models/V1WatchesResponse1.cs` |

### RunWatchNow

- **Auth**: `options.BearerAuth`
- **Signature**: `RunWatchNow(RunWatchNowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `V1WatchesRunResponse`
- **Error**: `ApiException<RunWatchNowError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404, 409, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RunWatchNowRequest` | `src/Rendex/Requests/WatchApi/RunWatchNowRequest.cs` |
| `V1WatchesRunResponse` | `src/Rendex/Models/V1WatchesRunResponse.cs` |
| `RunWatchNowError` | `src/Rendex/Errors/RunWatchNowError.cs` |
| `ErrorResponseModel` | `src/Rendex/Models/ErrorResponseModel.cs` |

### TestWatch

- **Auth**: `options.BearerAuth`
- **Signature**: `TestWatch(TestWatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1WatchesTestResponse`
- **Error**: `ApiException<TestWatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TestWatchRequest` | `src/Rendex/Requests/WatchApi/TestWatchRequest.cs` |
| `CreateWatchRequest` | `src/Rendex/Models/CreateWatchRequest.cs` |
| `V1WatchesTestResponse` | `src/Rendex/Models/V1WatchesTestResponse.cs` |
| `TestWatchError` | `src/Rendex/Errors/TestWatchError.cs` |
| `ErrorResponseModel` | `src/Rendex/Models/ErrorResponseModel.cs` |

### UpdateWatch

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateWatch(UpdateWatchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `V1WatchesResponse`
- **Error**: `ApiException<UpdateWatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateWatchOperationRequest` | `src/Rendex/Requests/WatchApi/UpdateWatchOperationRequest.cs` |
| `UpdateWatchRequest` | `src/Rendex/Models/UpdateWatchRequest.cs` |
| `V1WatchesResponse` | `src/Rendex/Models/V1WatchesResponse.cs` |
| `UpdateWatchError` | `src/Rendex/Errors/UpdateWatchError.cs` |
| `ErrorResponseModel` | `src/Rendex/Models/ErrorResponseModel.cs` |

