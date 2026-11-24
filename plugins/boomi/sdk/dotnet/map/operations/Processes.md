<!-- Generated file — do not edit; regenerated with the SDK. -->

# Processes — operations

Accessor: `client.Processes` · Source: `src/Boomi/Api/Processes.cs` · 7 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateProcess

- **Auth**: `options.BasicAuth`
- **Signature**: `CreateProcess(CreateProcessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `Process`
- **Error**: `ApiException<CreateProcessError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateProcessRequest` | `src/Boomi/Requests/Processes/CreateProcessRequest.cs` |
| `ProcessInput` | `src/Boomi/Models/ProcessInput.cs` |
| `Process` | `src/Boomi/Models/Process.cs` |
| `CreateProcessError` | `src/Boomi/Errors/CreateProcessError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

### DeleteProcess

- **Auth**: `options.BasicAuth`
- **Signature**: `DeleteProcess(DeleteProcessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteProcessError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteProcessRequest` | `src/Boomi/Requests/Processes/DeleteProcessRequest.cs` |
| `DeleteProcessError` | `src/Boomi/Errors/DeleteProcessError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

### GetProcess

- **Auth**: `options.BasicAuth`
- **Signature**: `GetProcess(GetProcessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Process`
- **Error**: `ApiException<GetProcessError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProcessRequest` | `src/Boomi/Requests/Processes/GetProcessRequest.cs` |
| `Process` | `src/Boomi/Models/Process.cs` |
| `GetProcessError` | `src/Boomi/Errors/GetProcessError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

### GetProcessSchedules

- **Auth**: `options.BasicAuth`
- **Signature**: `GetProcessSchedules(GetProcessSchedulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ProcessSchedules`
- **Error**: `ApiException<GetProcessSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetProcessSchedulesRequest` | `src/Boomi/Requests/Processes/GetProcessSchedulesRequest.cs` |
| `ProcessSchedules` | `src/Boomi/Models/ProcessSchedules.cs` |
| `GetProcessSchedulesError` | `src/Boomi/Errors/GetProcessSchedulesError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

### QueryProcesses

- **Auth**: `options.BasicAuth`
- **Signature**: `QueryProcesses(QueryProcessesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ProcessQueryResult`
- **Error**: `ApiException<QueryProcessesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `QueryProcessesRequest` | `src/Boomi/Requests/Processes/QueryProcessesRequest.cs` |
| `QueryRequest` | `src/Boomi/Models/QueryRequest.cs` |
| `ProcessQueryResult` | `src/Boomi/Models/ProcessQueryResult.cs` |
| `QueryProcessesError` | `src/Boomi/Errors/QueryProcessesError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

### UpdateProcess

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateProcess(UpdateProcessRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `Process`
- **Error**: `ApiException<UpdateProcessError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateProcessRequest` | `src/Boomi/Requests/Processes/UpdateProcessRequest.cs` |
| `ProcessInput` | `src/Boomi/Models/ProcessInput.cs` |
| `Process` | `src/Boomi/Models/Process.cs` |
| `UpdateProcessError` | `src/Boomi/Errors/UpdateProcessError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

### UpdateProcessSchedules

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateProcessSchedules(UpdateProcessSchedulesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `ProcessSchedules`
- **Error**: `ApiException<UpdateProcessSchedulesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateProcessSchedulesRequest` | `src/Boomi/Requests/Processes/UpdateProcessSchedulesRequest.cs` |
| `ProcessSchedules` | `src/Boomi/Models/ProcessSchedules.cs` |
| `UpdateProcessSchedulesError` | `src/Boomi/Errors/UpdateProcessSchedulesError.cs` |
| `ErrorResponseModel` | `src/Boomi/Models/ErrorResponseModel.cs` |

