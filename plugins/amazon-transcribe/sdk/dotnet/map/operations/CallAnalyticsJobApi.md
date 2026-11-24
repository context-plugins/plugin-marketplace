<!-- Generated file — do not edit; regenerated with the SDK. -->

# CallAnalyticsJobApi — operations

Accessor: `client.CallAnalyticsJobApi` · Source: `src/AmazonTranscribe/Api/CallAnalyticsJobApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteCallAnalyticsJob

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteCallAnalyticsJob(DeleteCallAnalyticsJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteCallAnalyticsJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCallAnalyticsJobOperationRequest` | `src/AmazonTranscribe/Requests/CallAnalyticsJobApi/DeleteCallAnalyticsJobOperationRequest.cs` |
| `XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi` | `src/AmazonTranscribe/Models/Enums/XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi.cs` |
| `DeleteCallAnalyticsJobError` | `src/AmazonTranscribe/Errors/DeleteCallAnalyticsJobError.cs` |

### GetCallAnalyticsJob

- **Auth**: `options.Sigv4`
- **Signature**: `GetCallAnalyticsJob(GetCallAnalyticsJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetCallAnalyticsJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCallAnalyticsJobOperationRequest` | `src/AmazonTranscribe/Requests/CallAnalyticsJobApi/GetCallAnalyticsJobOperationRequest.cs` |
| `XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi.cs` |
| `GetCallAnalyticsJobError` | `src/AmazonTranscribe/Errors/GetCallAnalyticsJobError.cs` |

### ListCallAnalyticsJobs

- **Auth**: `options.Sigv4`
- **Signature**: `ListCallAnalyticsJobs(ListCallAnalyticsJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListCallAnalyticsJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCallAnalyticsJobsOperationRequest` | `src/AmazonTranscribe/Requests/CallAnalyticsJobApi/ListCallAnalyticsJobsOperationRequest.cs` |
| `XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi.cs` |
| `ListCallAnalyticsJobsError` | `src/AmazonTranscribe/Errors/ListCallAnalyticsJobsError.cs` |

### StartCallAnalyticsJob

- **Auth**: `options.Sigv4`
- **Signature**: `StartCallAnalyticsJob(StartCallAnalyticsJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartCallAnalyticsJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartCallAnalyticsJobOperationRequest` | `src/AmazonTranscribe/Requests/CallAnalyticsJobApi/StartCallAnalyticsJobOperationRequest.cs` |
| `XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi.cs` |
| `StartCallAnalyticsJobError` | `src/AmazonTranscribe/Errors/StartCallAnalyticsJobError.cs` |

