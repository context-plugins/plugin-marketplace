<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pulse — operations

Accessor: `client.Pulse` · Source: `src/PlinthUsGrantsData/Api/Pulse.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePulse

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CreatePulse(CreatePulseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `object`
- **Error**: `ApiException<CreatePulseError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreatePulseRequest` | `src/PlinthUsGrantsData/Requests/Pulse/CreatePulseRequest.cs` |
| `PulseCreate` | `src/PlinthUsGrantsData/Models/PulseCreate.cs` |
| `CreatePulseError` | `src/PlinthUsGrantsData/Errors/CreatePulseError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### DeletePulse

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `DeletePulse(DeletePulseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubId`
- **Returns**: `object`
- **Error**: `ApiException<DeletePulseError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeletePulseRequest` | `src/PlinthUsGrantsData/Requests/Pulse/DeletePulseRequest.cs` |
| `DeletePulseError` | `src/PlinthUsGrantsData/Errors/DeletePulseError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### GetPulse

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetPulse(GetPulseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubId`
- **Returns**: `object`
- **Error**: `ApiException<GetPulseError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPulseRequest` | `src/PlinthUsGrantsData/Requests/Pulse/GetPulseRequest.cs` |
| `GetPulseError` | `src/PlinthUsGrantsData/Errors/GetPulseError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### GetPulseLatest

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetPulseLatest(GetPulseLatestRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubId`
- **Query params (wire ← C#)**: `format` ← `Format`
- **Returns**: `object`
- **Error**: `ApiException<GetPulseLatestError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPulseLatestRequest` | `src/PlinthUsGrantsData/Requests/Pulse/GetPulseLatestRequest.cs` |
| `Format1` | `src/PlinthUsGrantsData/Models/AnyOf/Format1.cs` |
| `GetPulseLatestError` | `src/PlinthUsGrantsData/Errors/GetPulseLatestError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### GetPulseRun

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetPulseRun(GetPulseRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubId`, `RunId`
- **Query params (wire ← C#)**: `format` ← `Format`
- **Returns**: `object`
- **Error**: `ApiException<GetPulseRunError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPulseRunRequest` | `src/PlinthUsGrantsData/Requests/Pulse/GetPulseRunRequest.cs` |
| `Format1` | `src/PlinthUsGrantsData/Models/AnyOf/Format1.cs` |
| `GetPulseRunError` | `src/PlinthUsGrantsData/Errors/GetPulseRunError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### ListPulse

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListPulse(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<ListPulseError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPulseError` | `src/PlinthUsGrantsData/Errors/ListPulseError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |

### ListPulseRuns

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ListPulseRuns(ListPulseRunsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubId`
- **Returns**: `object`
- **Error**: `ApiException<ListPulseRunsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPulseRunsRequest` | `src/PlinthUsGrantsData/Requests/Pulse/ListPulseRunsRequest.cs` |
| `ListPulseRunsError` | `src/PlinthUsGrantsData/Errors/ListPulseRunsError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### RunPulse

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `RunPulse(RunPulseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubId`
- **Query params (wire ← C#)**: `checks` ← `Checks`, `format` ← `Format`
- **Returns**: `object`
- **Error**: `ApiException<RunPulseError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RunPulseRequest` | `src/PlinthUsGrantsData/Requests/Pulse/RunPulseRequest.cs` |
| `Checks2` | `src/PlinthUsGrantsData/Models/AnyOf/Checks2.cs` |
| `Format1` | `src/PlinthUsGrantsData/Models/AnyOf/Format1.cs` |
| `RunPulseError` | `src/PlinthUsGrantsData/Errors/RunPulseError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

### UpdatePulse

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `UpdatePulse(UpdatePulseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `SubId`, `Body`
- **Returns**: `object`
- **Error**: `ApiException<UpdatePulseError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [401, 402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdatePulseRequest` | `src/PlinthUsGrantsData/Requests/Pulse/UpdatePulseRequest.cs` |
| `PulsePatch` | `src/PlinthUsGrantsData/Models/PulsePatch.cs` |
| `UpdatePulseError` | `src/PlinthUsGrantsData/Errors/UpdatePulseError.cs` |
| `ApiErrorModel` | `src/PlinthUsGrantsData/Models/ApiErrorModel.cs` |
| `HttpValidationError` | `src/PlinthUsGrantsData/Models/HttpValidationError.cs` |

