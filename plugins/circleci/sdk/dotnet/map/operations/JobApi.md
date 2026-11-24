<!-- Generated file — do not edit; regenerated with the SDK. -->

# JobApi — operations

Accessor: `client.JobApi` · Source: `src/CircleCi/Api/JobApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelJob

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `CancelJob(CancelJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`, `JobNumber`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<CancelJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelJobRequest` | `src/CircleCi/Requests/JobApi/CancelJobRequest.cs` |
| `MessageResponse` | `src/CircleCi/Models/MessageResponse.cs` |
| `CancelJobError` | `src/CircleCi/Errors/CancelJobError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### GetJob

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `GetJob(GetJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`, `JobNumber`
- **Returns**: `Job`
- **Error**: `ApiException<GetJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetJobRequest` | `src/CircleCi/Requests/JobApi/GetJobRequest.cs` |
| `Job` | `src/CircleCi/Models/Job.cs` |
| `GetJobError` | `src/CircleCi/Errors/GetJobError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### ListJobArtifacts

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `ListJobArtifacts(ListJobArtifactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`, `JobNumber`
- **Returns**: `ArtifactList`
- **Error**: `ApiException<ListJobArtifactsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListJobArtifactsRequest` | `src/CircleCi/Requests/JobApi/ListJobArtifactsRequest.cs` |
| `ArtifactList` | `src/CircleCi/Models/ArtifactList.cs` |
| `ListJobArtifactsError` | `src/CircleCi/Errors/ListJobArtifactsError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### ListJobTests

- **Server group**: `DefaultCircleCiRestApiV2ContextApi`
- **Auth**: `options.ApiToken`
- **Signature**: `ListJobTests(ListJobTestsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ProjectSlug`, `JobNumber`
- **Returns**: `TestList`
- **Error**: `ApiException<ListJobTestsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListJobTestsRequest` | `src/CircleCi/Requests/JobApi/ListJobTestsRequest.cs` |
| `TestList` | `src/CircleCi/Models/TestList.cs` |
| `ListJobTestsError` | `src/CircleCi/Errors/ListJobTestsError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

