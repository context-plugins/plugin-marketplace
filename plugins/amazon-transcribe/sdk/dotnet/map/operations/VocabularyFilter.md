<!-- Generated file — do not edit; regenerated with the SDK. -->

# VocabularyFilter — operations

Accessor: `client.VocabularyFilter` · Source: `src/AmazonTranscribe/Api/VocabularyFilter.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateVocabularyFilter

- **Auth**: `options.Sigv4`
- **Signature**: `CreateVocabularyFilter(CreateVocabularyFilterOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateVocabularyFilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateVocabularyFilterOperationRequest` | `src/AmazonTranscribe/Requests/VocabularyFilter/CreateVocabularyFilterOperationRequest.cs` |
| `XAmzTargetAmazonTranscribeServiceVocabularyFilterApi` | `src/AmazonTranscribe/Models/Enums/XAmzTargetAmazonTranscribeServiceVocabularyFilterApi.cs` |
| `CreateVocabularyFilterError` | `src/AmazonTranscribe/Errors/CreateVocabularyFilterError.cs` |

### DeleteVocabularyFilter

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteVocabularyFilter(DeleteVocabularyFilterOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteVocabularyFilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteVocabularyFilterOperationRequest` | `src/AmazonTranscribe/Requests/VocabularyFilter/DeleteVocabularyFilterOperationRequest.cs` |
| `XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi.cs` |
| `DeleteVocabularyFilterError` | `src/AmazonTranscribe/Errors/DeleteVocabularyFilterError.cs` |

### GetVocabularyFilter

- **Auth**: `options.Sigv4`
- **Signature**: `GetVocabularyFilter(GetVocabularyFilterOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetVocabularyFilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetVocabularyFilterOperationRequest` | `src/AmazonTranscribe/Requests/VocabularyFilter/GetVocabularyFilterOperationRequest.cs` |
| `XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi.cs` |
| `GetVocabularyFilterError` | `src/AmazonTranscribe/Errors/GetVocabularyFilterError.cs` |

### ListVocabularyFilters

- **Auth**: `options.Sigv4`
- **Signature**: `ListVocabularyFilters(ListVocabularyFiltersOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListVocabularyFiltersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListVocabularyFiltersOperationRequest` | `src/AmazonTranscribe/Requests/VocabularyFilter/ListVocabularyFiltersOperationRequest.cs` |
| `XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi.cs` |
| `ListVocabularyFiltersError` | `src/AmazonTranscribe/Errors/ListVocabularyFiltersError.cs` |

### UpdateVocabularyFilter

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateVocabularyFilter(UpdateVocabularyFilterOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateVocabularyFilterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateVocabularyFilterOperationRequest` | `src/AmazonTranscribe/Requests/VocabularyFilter/UpdateVocabularyFilterOperationRequest.cs` |
| `XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi.cs` |
| `UpdateVocabularyFilterError` | `src/AmazonTranscribe/Errors/UpdateVocabularyFilterError.cs` |

