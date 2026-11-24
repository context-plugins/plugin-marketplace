<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.Jobs` · Source: `src/Rendex/Api/Jobs.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetBatchStatus

- **Auth**: `options.BearerAuth`
- **Signature**: `GetBatchStatus(GetBatchStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `BatchId`
- **Returns**: `BatchStatusResponse`
- **Error**: `ApiException<GetBatchStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetBatchStatusRequest` | `src/Rendex/Requests/Jobs/GetBatchStatusRequest.cs` |
| `BatchStatusResponse` | `src/Rendex/Models/BatchStatusResponse.cs` |
| `GetBatchStatusError` | `src/Rendex/Errors/GetBatchStatusError.cs` |
| `ErrorResponseModel` | `src/Rendex/Models/ErrorResponseModel.cs` |

### GetJobStatus

- **Auth**: `options.BearerAuth`
- **Signature**: `GetJobStatus(GetJobStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `JobStatusResponse`
- **Error**: `ApiException<GetJobStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetJobStatusRequest` | `src/Rendex/Requests/Jobs/GetJobStatusRequest.cs` |
| `JobStatusResponse` | `src/Rendex/Models/JobStatusResponse.cs` |
| `GetJobStatusError` | `src/Rendex/Errors/GetJobStatusError.cs` |
| `ErrorResponseModel` | `src/Rendex/Models/ErrorResponseModel.cs` |

