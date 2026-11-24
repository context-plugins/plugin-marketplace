<!-- Generated file — do not edit; regenerated with the SDK. -->

# MedicalVocabulary — operations

Accessor: `client.MedicalVocabulary` · Source: `src/AmazonTranscribe/Api/MedicalVocabulary.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateMedicalVocabulary

- **Auth**: `options.Sigv4`
- **Signature**: `CreateMedicalVocabulary(CreateMedicalVocabularyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateMedicalVocabularyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateMedicalVocabularyOperationRequest` | `src/AmazonTranscribe/Requests/MedicalVocabulary/CreateMedicalVocabularyOperationRequest.cs` |
| `XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi` | `src/AmazonTranscribe/Models/Enums/XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi.cs` |
| `CreateMedicalVocabularyError` | `src/AmazonTranscribe/Errors/CreateMedicalVocabularyError.cs` |

### DeleteMedicalVocabulary

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteMedicalVocabulary(DeleteMedicalVocabularyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteMedicalVocabularyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteMedicalVocabularyOperationRequest` | `src/AmazonTranscribe/Requests/MedicalVocabulary/DeleteMedicalVocabularyOperationRequest.cs` |
| `XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi.cs` |
| `DeleteMedicalVocabularyError` | `src/AmazonTranscribe/Errors/DeleteMedicalVocabularyError.cs` |

### GetMedicalVocabulary

- **Auth**: `options.Sigv4`
- **Signature**: `GetMedicalVocabulary(GetMedicalVocabularyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetMedicalVocabularyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMedicalVocabularyOperationRequest` | `src/AmazonTranscribe/Requests/MedicalVocabulary/GetMedicalVocabularyOperationRequest.cs` |
| `XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi.cs` |
| `GetMedicalVocabularyError` | `src/AmazonTranscribe/Errors/GetMedicalVocabularyError.cs` |

### ListMedicalVocabularies

- **Auth**: `options.Sigv4`
- **Signature**: `ListMedicalVocabularies(ListMedicalVocabulariesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListMedicalVocabulariesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListMedicalVocabulariesOperationRequest` | `src/AmazonTranscribe/Requests/MedicalVocabulary/ListMedicalVocabulariesOperationRequest.cs` |
| `XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi.cs` |
| `ListMedicalVocabulariesError` | `src/AmazonTranscribe/Errors/ListMedicalVocabulariesError.cs` |

### UpdateMedicalVocabulary

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateMedicalVocabulary(UpdateMedicalVocabularyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateMedicalVocabularyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateMedicalVocabularyOperationRequest` | `src/AmazonTranscribe/Requests/MedicalVocabulary/UpdateMedicalVocabularyOperationRequest.cs` |
| `XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi.cs` |
| `UpdateMedicalVocabularyError` | `src/AmazonTranscribe/Errors/UpdateMedicalVocabularyError.cs` |

