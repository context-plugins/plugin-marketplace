<!-- Generated file — do not edit; regenerated with the SDK. -->

# MedicalTranscriptionJobApi — operations

Accessor: `client.MedicalTranscriptionJobApi` · Source: `src/AmazonTranscribe/Api/MedicalTranscriptionJobApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteMedicalTranscriptionJob

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteMedicalTranscriptionJob(DeleteMedicalTranscriptionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteMedicalTranscriptionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteMedicalTranscriptionJobOperationRequest` | `src/AmazonTranscribe/Requests/MedicalTranscriptionJobApi/DeleteMedicalTranscriptionJobOperationRequest.cs` |
| `XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi` | `src/AmazonTranscribe/Models/Enums/XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi.cs` |
| `DeleteMedicalTranscriptionJobError` | `src/AmazonTranscribe/Errors/DeleteMedicalTranscriptionJobError.cs` |

### GetMedicalTranscriptionJob

- **Auth**: `options.Sigv4`
- **Signature**: `GetMedicalTranscriptionJob(GetMedicalTranscriptionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetMedicalTranscriptionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMedicalTranscriptionJobOperationRequest` | `src/AmazonTranscribe/Requests/MedicalTranscriptionJobApi/GetMedicalTranscriptionJobOperationRequest.cs` |
| `XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi.cs` |
| `GetMedicalTranscriptionJobError` | `src/AmazonTranscribe/Errors/GetMedicalTranscriptionJobError.cs` |

### ListMedicalTranscriptionJobs

- **Auth**: `options.Sigv4`
- **Signature**: `ListMedicalTranscriptionJobs(ListMedicalTranscriptionJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListMedicalTranscriptionJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMedicalTranscriptionJobsOperationRequest` | `src/AmazonTranscribe/Requests/MedicalTranscriptionJobApi/ListMedicalTranscriptionJobsOperationRequest.cs` |
| `XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi.cs` |
| `ListMedicalTranscriptionJobsError` | `src/AmazonTranscribe/Errors/ListMedicalTranscriptionJobsError.cs` |

### StartMedicalTranscriptionJob

- **Auth**: `options.Sigv4`
- **Signature**: `StartMedicalTranscriptionJob(StartMedicalTranscriptionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartMedicalTranscriptionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartMedicalTranscriptionJobOperationRequest` | `src/AmazonTranscribe/Requests/MedicalTranscriptionJobApi/StartMedicalTranscriptionJobOperationRequest.cs` |
| `XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi.cs` |
| `StartMedicalTranscriptionJobError` | `src/AmazonTranscribe/Errors/StartMedicalTranscriptionJobError.cs` |

