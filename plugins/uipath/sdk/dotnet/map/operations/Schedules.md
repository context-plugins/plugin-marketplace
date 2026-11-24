<!-- Generated file — do not edit; regenerated with the SDK. -->

# Schedules — operations

Accessor: `client.Schedules` · Source: `src/UiPath/Api/Schedules.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListSchedules

- **Auth**: `options.BearerAuth`
- **Signature**: `ListSchedules(ListSchedulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `$filter` ← `Filter`, `$top` ← `Top`, `$skip` ← `Skip`
- **Returns**: `ODataScheduleCollection`
- **Error**: `ApiException<ListSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSchedulesRequest` | `src/UiPath/Requests/Schedules/ListSchedulesRequest.cs` |
| `ODataScheduleCollection` | `src/UiPath/Models/ODataScheduleCollection.cs` |
| `ListSchedulesError` | `src/UiPath/Errors/ListSchedulesError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

