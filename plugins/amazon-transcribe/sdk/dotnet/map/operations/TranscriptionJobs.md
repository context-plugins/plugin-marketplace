<!-- Generated file — do not edit; regenerated with the SDK. -->

# TranscriptionJobs — operations

Accessor: `client.TranscriptionJobs` · Source: `src/AmazonTranscribe/Api/TranscriptionJobs.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteTranscriptionJob

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteTranscriptionJob(DeleteTranscriptionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteTranscriptionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteTranscriptionJobOperationRequest` | `src/AmazonTranscribe/Requests/TranscriptionJobs/DeleteTranscriptionJobOperationRequest.cs` |
| `XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi` | `src/AmazonTranscribe/Models/Enums/XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi.cs` |
| `DeleteTranscriptionJobError` | `src/AmazonTranscribe/Errors/DeleteTranscriptionJobError.cs` |

### GetTranscriptionJob

- **Auth**: `options.Sigv4`
- **Signature**: `GetTranscriptionJob(GetTranscriptionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetTranscriptionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTranscriptionJobOperationRequest` | `src/AmazonTranscribe/Requests/TranscriptionJobs/GetTranscriptionJobOperationRequest.cs` |
| `XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi.cs` |
| `GetTranscriptionJobError` | `src/AmazonTranscribe/Errors/GetTranscriptionJobError.cs` |

### ListTranscriptionJobs

- **Auth**: `options.Sigv4`
- **Signature**: `ListTranscriptionJobs(ListTranscriptionJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListTranscriptionJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTranscriptionJobsOperationRequest` | `src/AmazonTranscribe/Requests/TranscriptionJobs/ListTranscriptionJobsOperationRequest.cs` |
| `XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi.cs` |
| `ListTranscriptionJobsError` | `src/AmazonTranscribe/Errors/ListTranscriptionJobsError.cs` |

### StartTranscriptionJob

- **Auth**: `options.Sigv4`
- **Signature**: `StartTranscriptionJob(StartTranscriptionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartTranscriptionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartTranscriptionJobOperationRequest` | `src/AmazonTranscribe/Requests/TranscriptionJobs/StartTranscriptionJobOperationRequest.cs` |
| `XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi.cs` |
| `StartTranscriptionJobError` | `src/AmazonTranscribe/Errors/StartTranscriptionJobError.cs` |

