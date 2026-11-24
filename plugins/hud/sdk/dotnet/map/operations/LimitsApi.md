<!-- Generated file — do not edit; regenerated with the SDK. -->

# LimitsApi — operations

Accessor: `client.LimitsApi` · Source: `src/Hud/Api/LimitsApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSpendLimitV2LimitsPost

- **Signature**: `CreateSpendLimitV2LimitsPost(CreateSpendLimitV2LimitsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SpendLimitItem`
- **Error**: `ApiException<CreateSpendLimitV2LimitsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSpendLimitV2LimitsPostRequest` | `src/Hud/Requests/LimitsApi/CreateSpendLimitV2LimitsPostRequest.cs` |
| `SpendLimitCreateRequest` | `src/Hud/Models/SpendLimitCreateRequest.cs` |
| `SpendLimitItem` | `src/Hud/Models/SpendLimitItem.cs` |
| `CreateSpendLimitV2LimitsPostError` | `src/Hud/Errors/CreateSpendLimitV2LimitsPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### DeleteSpendLimitV2LimitsLimitIdDelete

- **Signature**: `DeleteSpendLimitV2LimitsLimitIdDelete(DeleteSpendLimitV2LimitsLimitIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LimitId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteSpendLimitV2LimitsLimitIdDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteSpendLimitV2LimitsLimitIdDeleteRequest` | `src/Hud/Requests/LimitsApi/DeleteSpendLimitV2LimitsLimitIdDeleteRequest.cs` |
| `DeleteSpendLimitV2LimitsLimitIdDeleteError` | `src/Hud/Errors/DeleteSpendLimitV2LimitsLimitIdDeleteError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListSpendLimitsV2LimitsGet

- **Signature**: `ListSpendLimitsV2LimitsGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `SpendLimitListResponse`
- **Error**: `ApiException<ListSpendLimitsV2LimitsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SpendLimitListResponse` | `src/Hud/Models/SpendLimitListResponse.cs` |
| `ListSpendLimitsV2LimitsGetError` | `src/Hud/Errors/ListSpendLimitsV2LimitsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |

### ResetSpendLimitV2LimitsLimitIdResetPost

- **Signature**: `ResetSpendLimitV2LimitsLimitIdResetPost(ResetSpendLimitV2LimitsLimitIdResetPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LimitId`
- **Returns**: `SpendLimitItem`
- **Error**: `ApiException<ResetSpendLimitV2LimitsLimitIdResetPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResetSpendLimitV2LimitsLimitIdResetPostRequest` | `src/Hud/Requests/LimitsApi/ResetSpendLimitV2LimitsLimitIdResetPostRequest.cs` |
| `SpendLimitItem` | `src/Hud/Models/SpendLimitItem.cs` |
| `ResetSpendLimitV2LimitsLimitIdResetPostError` | `src/Hud/Errors/ResetSpendLimitV2LimitsLimitIdResetPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### UpdateSpendLimitV2LimitsLimitIdPatch

- **Signature**: `UpdateSpendLimitV2LimitsLimitIdPatch(UpdateSpendLimitV2LimitsLimitIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `LimitId`, `Body`
- **Returns**: `SpendLimitItem`
- **Error**: `ApiException<UpdateSpendLimitV2LimitsLimitIdPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateSpendLimitV2LimitsLimitIdPatchRequest` | `src/Hud/Requests/LimitsApi/UpdateSpendLimitV2LimitsLimitIdPatchRequest.cs` |
| `SpendLimitUpdateRequest` | `src/Hud/Models/SpendLimitUpdateRequest.cs` |
| `SpendLimitItem` | `src/Hud/Models/SpendLimitItem.cs` |
| `UpdateSpendLimitV2LimitsLimitIdPatchError` | `src/Hud/Errors/UpdateSpendLimitV2LimitsLimitIdPatchError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

