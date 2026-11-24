<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.Jobs` · Source: `src/UiPath/Api/Jobs.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetJob

- **Auth**: `options.BearerAuth`
- **Signature**: `GetJob(GetJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Key`
- **Returns**: `Job`
- **Error**: `ApiException<GetJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetJobRequest` | `src/UiPath/Requests/Jobs/GetJobRequest.cs` |
| `Job` | `src/UiPath/Models/Job.cs` |
| `GetJobError` | `src/UiPath/Errors/GetJobError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

### ListJobs

- **Auth**: `options.BearerAuth`
- **Signature**: `ListJobs(ListJobsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `$filter` ← `Filter`, `$orderby` ← `Orderby`, `$top` ← `Top`, `$skip` ← `Skip`, `$select` ← `Select`
- **Returns**: `ODataJobCollection`
- **Error**: `ApiException<ListJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListJobsRequest` | `src/UiPath/Requests/Jobs/ListJobsRequest.cs` |
| `ODataJobCollection` | `src/UiPath/Models/ODataJobCollection.cs` |
| `ListJobsError` | `src/UiPath/Errors/ListJobsError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

### StartJobs

- **Auth**: `options.BearerAuth`
- **Signature**: `StartJobs(StartJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ODataJobCollection`
- **Error**: `ApiException<StartJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartJobsOperationRequest` | `src/UiPath/Requests/Jobs/StartJobsOperationRequest.cs` |
| `StartJobsRequest` | `src/UiPath/Models/StartJobsRequest.cs` |
| `ODataJobCollection` | `src/UiPath/Models/ODataJobCollection.cs` |
| `StartJobsError` | `src/UiPath/Errors/StartJobsError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

### StopJob

- **Auth**: `options.BearerAuth`
- **Signature**: `StopJob(StopJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StopJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopJobOperationRequest` | `src/UiPath/Requests/Jobs/StopJobOperationRequest.cs` |
| `StopJobRequest` | `src/UiPath/Models/StopJobRequest.cs` |
| `StopJobError` | `src/UiPath/Errors/StopJobError.cs` |
| `ErrorResponseModel` | `src/UiPath/Models/ErrorResponseModel.cs` |

