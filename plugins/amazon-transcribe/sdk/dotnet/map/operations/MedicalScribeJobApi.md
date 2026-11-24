<!-- Generated file — do not edit; regenerated with the SDK. -->

# MedicalScribeJobApi — operations

Accessor: `client.MedicalScribeJobApi` · Source: `src/AmazonTranscribe/Api/MedicalScribeJobApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteMedicalScribeJob

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteMedicalScribeJob(DeleteMedicalScribeJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteMedicalScribeJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteMedicalScribeJobOperationRequest` | `src/AmazonTranscribe/Requests/MedicalScribeJobApi/DeleteMedicalScribeJobOperationRequest.cs` |
| `XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi` | `src/AmazonTranscribe/Models/Enums/XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi.cs` |
| `DeleteMedicalScribeJobError` | `src/AmazonTranscribe/Errors/DeleteMedicalScribeJobError.cs` |

### GetMedicalScribeJob

- **Auth**: `options.Sigv4`
- **Signature**: `GetMedicalScribeJob(GetMedicalScribeJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetMedicalScribeJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMedicalScribeJobOperationRequest` | `src/AmazonTranscribe/Requests/MedicalScribeJobApi/GetMedicalScribeJobOperationRequest.cs` |
| `XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi.cs` |
| `GetMedicalScribeJobError` | `src/AmazonTranscribe/Errors/GetMedicalScribeJobError.cs` |

### ListMedicalScribeJobs

- **Auth**: `options.Sigv4`
- **Signature**: `ListMedicalScribeJobs(ListMedicalScribeJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListMedicalScribeJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMedicalScribeJobsOperationRequest` | `src/AmazonTranscribe/Requests/MedicalScribeJobApi/ListMedicalScribeJobsOperationRequest.cs` |
| `XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi.cs` |
| `ListMedicalScribeJobsError` | `src/AmazonTranscribe/Errors/ListMedicalScribeJobsError.cs` |

### StartMedicalScribeJob

- **Auth**: `options.Sigv4`
- **Signature**: `StartMedicalScribeJob(StartMedicalScribeJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartMedicalScribeJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartMedicalScribeJobOperationRequest` | `src/AmazonTranscribe/Requests/MedicalScribeJobApi/StartMedicalScribeJobOperationRequest.cs` |
| `XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi.cs` |
| `StartMedicalScribeJobError` | `src/AmazonTranscribe/Errors/StartMedicalScribeJobError.cs` |

