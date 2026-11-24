<!-- Generated file — do not edit; regenerated with the SDK. -->

# RunnerTask — operations

Accessor: `client.RunnerTask` · Source: `src/CircleCi/Api/RunnerTask.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetRunningTaskCount

- **Auth**: `options.ApiToken`
- **Signature**: `GetRunningTaskCount(GetRunningTaskCountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceClass`
- **Query params (wire ← C#)**: `resource-class` ← `ResourceClass`
- **Returns**: `RunnerTasksRunningResponse`
- **Error**: `ApiException<GetRunningTaskCountError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRunningTaskCountRequest` | `src/CircleCi/Requests/RunnerTask/GetRunningTaskCountRequest.cs` |
| `RunnerTasksRunningResponse` | `src/CircleCi/Models/RunnerTasksRunningResponse.cs` |
| `GetRunningTaskCountError` | `src/CircleCi/Errors/GetRunningTaskCountError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### GetUnclaimedTaskCount

- **Auth**: `options.ApiToken`
- **Signature**: `GetUnclaimedTaskCount(GetUnclaimedTaskCountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceClass`
- **Query params (wire ← C#)**: `resource-class` ← `ResourceClass`
- **Returns**: `RunnerTasksResponse`
- **Error**: `ApiException<GetUnclaimedTaskCountError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUnclaimedTaskCountRequest` | `src/CircleCi/Requests/RunnerTask/GetUnclaimedTaskCountRequest.cs` |
| `RunnerTasksResponse` | `src/CircleCi/Models/RunnerTasksResponse.cs` |
| `GetUnclaimedTaskCountError` | `src/CircleCi/Errors/GetUnclaimedTaskCountError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

