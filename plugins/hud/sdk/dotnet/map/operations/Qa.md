<!-- Generated file — do not edit; regenerated with the SDK. -->

# Qa — operations

Accessor: `client.Qa` · Source: `src/Hud/Api/Qa.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListQaChecksV2QaChecksGet

- **Signature**: `ListQaChecksV2QaChecksGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `QaCheckListResponse`
- **Error**: `ApiException<ListQaChecksV2QaChecksGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `QaCheckListResponse` | `src/Hud/Models/QaCheckListResponse.cs` |
| `ListQaChecksV2QaChecksGetError` | `src/Hud/Errors/ListQaChecksV2QaChecksGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |

### ListQaResultsV2QaResultsGet

- **Signature**: `ListQaResultsV2QaResultsGet(ListQaResultsV2QaResultsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `trace_ids` ← `TraceIds`, `task_ids` ← `TaskIds`, `include_history` ← `IncludeHistory`
- **Returns**: `QaResultListResponse`
- **Error**: `ApiException<ListQaResultsV2QaResultsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListQaResultsV2QaResultsGetRequest` | `src/Hud/Requests/Qa/ListQaResultsV2QaResultsGetRequest.cs` |
| `TraceIds` | `src/Hud/Models/AnyOf/TraceIds.cs` |
| `TaskIds` | `src/Hud/Models/AnyOf/TaskIds.cs` |
| `QaResultListResponse` | `src/Hud/Models/QaResultListResponse.cs` |
| `ListQaResultsV2QaResultsGetError` | `src/Hud/Errors/ListQaResultsV2QaResultsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### RunQaChecksV2QaRunsPost

- **Signature**: `RunQaChecksV2QaRunsPost(RunQaChecksV2QaRunsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `QaResultListResponse`
- **Error**: `ApiException<RunQaChecksV2QaRunsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RunQaChecksV2QaRunsPostRequest` | `src/Hud/Requests/Qa/RunQaChecksV2QaRunsPostRequest.cs` |
| `QaRunCreateRequest` | `src/Hud/Models/QaRunCreateRequest.cs` |
| `QaResultListResponse` | `src/Hud/Models/QaResultListResponse.cs` |
| `RunQaChecksV2QaRunsPostError` | `src/Hud/Errors/RunQaChecksV2QaRunsPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

