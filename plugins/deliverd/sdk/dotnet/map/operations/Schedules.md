<!-- Generated file — do not edit; regenerated with the SDK. -->

# Schedules — operations

Accessor: `client.Schedules` · Source: `src/Deliverd/Api/Schedules.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteApiV1SchedulesById

- **Auth**: `options.BearerAuth`
- **Signature**: `DeleteApiV1SchedulesById(DeleteApiV1SchedulesByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteApiV1SchedulesByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteApiV1SchedulesByIdRequest` | `src/Deliverd/Requests/Schedules/DeleteApiV1SchedulesByIdRequest.cs` |
| `DeleteApiV1SchedulesByIdError` | `src/Deliverd/Errors/DeleteApiV1SchedulesByIdError.cs` |

### GetApiV1Schedules

- **Auth**: `options.BearerAuth`
- **Signature**: `GetApiV1Schedules(GetApiV1SchedulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `due` ← `Due`
- **Returns**: `ApiV1SchedulesResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetApiV1SchedulesRequest` | `src/Deliverd/Requests/Schedules/GetApiV1SchedulesRequest.cs` |
| `Due` | `src/Deliverd/Models/Enums/Due.cs` |
| `ApiV1SchedulesResponse` | `src/Deliverd/Models/ApiV1SchedulesResponse.cs` |

### PatchApiV1SchedulesById

- **Auth**: `options.BearerAuth`
- **Signature**: `PatchApiV1SchedulesById(PatchApiV1SchedulesByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV1SchedulesResponse1`
- **Error**: `ApiException<PatchApiV1SchedulesByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PatchApiV1SchedulesByIdRequest` | `src/Deliverd/Requests/Schedules/PatchApiV1SchedulesByIdRequest.cs` |
| `ApiV1SchedulesRequest1` | `src/Deliverd/Models/ApiV1SchedulesRequest1.cs` |
| `ApiV1SchedulesResponse1` | `src/Deliverd/Models/ApiV1SchedulesResponse1.cs` |
| `PatchApiV1SchedulesByIdError` | `src/Deliverd/Errors/PatchApiV1SchedulesByIdError.cs` |

### PostApiV1Schedules

- **Auth**: `options.BearerAuth`
- **Signature**: `PostApiV1Schedules(PostApiV1SchedulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV1SchedulesResponse1`
- **Error**: `ApiException<PostApiV1SchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404, 409] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostApiV1SchedulesRequest` | `src/Deliverd/Requests/Schedules/PostApiV1SchedulesRequest.cs` |
| `ApiV1SchedulesRequest` | `src/Deliverd/Models/ApiV1SchedulesRequest.cs` |
| `ApiV1SchedulesResponse1` | `src/Deliverd/Models/ApiV1SchedulesResponse1.cs` |
| `PostApiV1SchedulesError` | `src/Deliverd/Errors/PostApiV1SchedulesError.cs` |

