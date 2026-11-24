<!-- Generated file — do not edit; regenerated with the SDK. -->

# Vocabularies — operations

Accessor: `client.Vocabularies` · Source: `src/AmazonTranscribe/Api/Vocabularies.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateVocabulary

- **Auth**: `options.Sigv4`
- **Signature**: `CreateVocabulary(CreateVocabularyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateVocabularyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateVocabularyOperationRequest` | `src/AmazonTranscribe/Requests/Vocabularies/CreateVocabularyOperationRequest.cs` |
| `XAmzTargetAmazonTranscribeServiceVocabulariesApi` | `src/AmazonTranscribe/Models/Enums/XAmzTargetAmazonTranscribeServiceVocabulariesApi.cs` |
| `CreateVocabularyError` | `src/AmazonTranscribe/Errors/CreateVocabularyError.cs` |

### DeleteVocabulary

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteVocabulary(DeleteVocabularyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteVocabularyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteVocabularyOperationRequest` | `src/AmazonTranscribe/Requests/Vocabularies/DeleteVocabularyOperationRequest.cs` |
| `XAmzTarget1AmazonTranscribeServiceVocabulariesApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget1AmazonTranscribeServiceVocabulariesApi.cs` |
| `DeleteVocabularyError` | `src/AmazonTranscribe/Errors/DeleteVocabularyError.cs` |

### GetVocabulary

- **Auth**: `options.Sigv4`
- **Signature**: `GetVocabulary(GetVocabularyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetVocabularyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVocabularyOperationRequest` | `src/AmazonTranscribe/Requests/Vocabularies/GetVocabularyOperationRequest.cs` |
| `XAmzTarget2AmazonTranscribeServiceVocabulariesApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget2AmazonTranscribeServiceVocabulariesApi.cs` |
| `GetVocabularyError` | `src/AmazonTranscribe/Errors/GetVocabularyError.cs` |

### ListVocabularies

- **Auth**: `options.Sigv4`
- **Signature**: `ListVocabularies(ListVocabulariesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListVocabulariesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListVocabulariesOperationRequest` | `src/AmazonTranscribe/Requests/Vocabularies/ListVocabulariesOperationRequest.cs` |
| `XAmzTarget3AmazonTranscribeServiceVocabulariesApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget3AmazonTranscribeServiceVocabulariesApi.cs` |
| `ListVocabulariesError` | `src/AmazonTranscribe/Errors/ListVocabulariesError.cs` |

### UpdateVocabulary

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateVocabulary(UpdateVocabularyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateVocabularyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateVocabularyOperationRequest` | `src/AmazonTranscribe/Requests/Vocabularies/UpdateVocabularyOperationRequest.cs` |
| `XAmzTarget4AmazonTranscribeServiceVocabulariesApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget4AmazonTranscribeServiceVocabulariesApi.cs` |
| `UpdateVocabularyError` | `src/AmazonTranscribe/Errors/UpdateVocabularyError.cs` |

