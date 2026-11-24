<!-- Generated file — do not edit; regenerated with the SDK. -->

# ScheduleApi — operations

Accessor: `client.ScheduleApi` · Source: `src/CircleCi/Api/ScheduleApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSchedule

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `CreateSchedule(CreateScheduleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`, `Body`
- **Returns**: `Schedule`
- **Error**: `ApiException<CreateScheduleError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateScheduleOperationRequest` | `src/CircleCi/Requests/ScheduleApi/CreateScheduleOperationRequest.cs` |
| `CreateScheduleRequest` | `src/CircleCi/Models/CreateScheduleRequest.cs` |
| `Schedule` | `src/CircleCi/Models/Schedule.cs` |
| `CreateScheduleError` | `src/CircleCi/Errors/CreateScheduleError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### DeleteSchedule

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `DeleteSchedule(DeleteScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ScheduleId`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<DeleteScheduleError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteScheduleRequest` | `src/CircleCi/Requests/ScheduleApi/DeleteScheduleRequest.cs` |
| `MessageResponse` | `src/CircleCi/Models/MessageResponse.cs` |
| `DeleteScheduleError` | `src/CircleCi/Errors/DeleteScheduleError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### GetSchedule

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `GetSchedule(GetScheduleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ScheduleId`
- **Returns**: `Schedule`
- **Error**: `ApiException<GetScheduleError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetScheduleRequest` | `src/CircleCi/Requests/ScheduleApi/GetScheduleRequest.cs` |
| `Schedule` | `src/CircleCi/Models/Schedule.cs` |
| `GetScheduleError` | `src/CircleCi/Errors/GetScheduleError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### ListSchedules

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `ListSchedules(ListSchedulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`
- **Query params (wire ← C#)**: `page-token` ← `PageToken`
- **Returns**: `ScheduleList`
- **Error**: `ApiException<ListSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSchedulesRequest` | `src/CircleCi/Requests/ScheduleApi/ListSchedulesRequest.cs` |
| `ScheduleList` | `src/CircleCi/Models/ScheduleList.cs` |
| `ListSchedulesError` | `src/CircleCi/Errors/ListSchedulesError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### UpdateSchedule

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `UpdateSchedule(UpdateScheduleOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ScheduleId`, `Body`
- **Returns**: `Schedule`
- **Error**: `ApiException<UpdateScheduleError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateScheduleOperationRequest` | `src/CircleCi/Requests/ScheduleApi/UpdateScheduleOperationRequest.cs` |
| `UpdateScheduleRequest` | `src/CircleCi/Models/UpdateScheduleRequest.cs` |
| `Schedule` | `src/CircleCi/Models/Schedule.cs` |
| `UpdateScheduleError` | `src/CircleCi/Errors/UpdateScheduleError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

