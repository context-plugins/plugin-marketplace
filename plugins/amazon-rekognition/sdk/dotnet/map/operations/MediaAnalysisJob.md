<!-- Generated file — do not edit; regenerated with the SDK. -->

# MediaAnalysisJob — operations

Accessor: `client.MediaAnalysisJob` · Source: `src/AmazonRekognition/Api/MediaAnalysisJob.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMediaAnalysisJob

- **Auth**: `options.Sigv4`
- **Signature**: `GetMediaAnalysisJob(GetMediaAnalysisJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetMediaAnalysisJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMediaAnalysisJobOperationRequest` | `src/AmazonRekognition/Requests/MediaAnalysisJob/GetMediaAnalysisJobOperationRequest.cs` |
| `XAmzTargetAmazonRekognitionMediaAnalysisJobApi` | `src/AmazonRekognition/Models/Enums/XAmzTargetAmazonRekognitionMediaAnalysisJobApi.cs` |
| `GetMediaAnalysisJobError` | `src/AmazonRekognition/Errors/GetMediaAnalysisJobError.cs` |

### ListMediaAnalysisJobs

- **Auth**: `options.Sigv4`
- **Signature**: `ListMediaAnalysisJobs(ListMediaAnalysisJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListMediaAnalysisJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMediaAnalysisJobsOperationRequest` | `src/AmazonRekognition/Requests/MediaAnalysisJob/ListMediaAnalysisJobsOperationRequest.cs` |
| `XAmzTarget1AmazonRekognitionMediaAnalysisJobApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget1AmazonRekognitionMediaAnalysisJobApi.cs` |
| `ListMediaAnalysisJobsError` | `src/AmazonRekognition/Errors/ListMediaAnalysisJobsError.cs` |

### StartMediaAnalysisJob

- **Auth**: `options.Sigv4`
- **Signature**: `StartMediaAnalysisJob(StartMediaAnalysisJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartMediaAnalysisJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartMediaAnalysisJobOperationRequest` | `src/AmazonRekognition/Requests/MediaAnalysisJob/StartMediaAnalysisJobOperationRequest.cs` |
| `XAmzTarget2AmazonRekognitionMediaAnalysisJobApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget2AmazonRekognitionMediaAnalysisJobApi.cs` |
| `StartMediaAnalysisJobError` | `src/AmazonRekognition/Errors/StartMediaAnalysisJobError.cs` |

