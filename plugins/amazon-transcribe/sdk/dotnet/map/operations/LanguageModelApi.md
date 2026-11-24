<!-- Generated file — do not edit; regenerated with the SDK. -->

# LanguageModelApi — operations

Accessor: `client.LanguageModelApi` · Source: `src/AmazonTranscribe/Api/LanguageModelApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateLanguageModel

- **Auth**: `options.Sigv4`
- **Signature**: `CreateLanguageModel(CreateLanguageModelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateLanguageModelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateLanguageModelOperationRequest` | `src/AmazonTranscribe/Requests/LanguageModelApi/CreateLanguageModelOperationRequest.cs` |
| `XAmzTargetAmazonTranscribeServiceLanguageModelApi` | `src/AmazonTranscribe/Models/Enums/XAmzTargetAmazonTranscribeServiceLanguageModelApi.cs` |
| `CreateLanguageModelError` | `src/AmazonTranscribe/Errors/CreateLanguageModelError.cs` |

### DeleteLanguageModel

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteLanguageModel(DeleteLanguageModelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteLanguageModelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteLanguageModelOperationRequest` | `src/AmazonTranscribe/Requests/LanguageModelApi/DeleteLanguageModelOperationRequest.cs` |
| `XAmzTarget1AmazonTranscribeServiceLanguageModelApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget1AmazonTranscribeServiceLanguageModelApi.cs` |
| `DeleteLanguageModelError` | `src/AmazonTranscribe/Errors/DeleteLanguageModelError.cs` |

### DescribeLanguageModel

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeLanguageModel(DescribeLanguageModelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeLanguageModelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeLanguageModelOperationRequest` | `src/AmazonTranscribe/Requests/LanguageModelApi/DescribeLanguageModelOperationRequest.cs` |
| `XAmzTarget2AmazonTranscribeServiceLanguageModelApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget2AmazonTranscribeServiceLanguageModelApi.cs` |
| `DescribeLanguageModelError` | `src/AmazonTranscribe/Errors/DescribeLanguageModelError.cs` |

### ListLanguageModels

- **Auth**: `options.Sigv4`
- **Signature**: `ListLanguageModels(ListLanguageModelsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListLanguageModelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListLanguageModelsOperationRequest` | `src/AmazonTranscribe/Requests/LanguageModelApi/ListLanguageModelsOperationRequest.cs` |
| `XAmzTarget3AmazonTranscribeServiceLanguageModelApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget3AmazonTranscribeServiceLanguageModelApi.cs` |
| `ListLanguageModelsError` | `src/AmazonTranscribe/Errors/ListLanguageModelsError.cs` |

### UpdateLanguageModel

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateLanguageModel(UpdateLanguageModelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateLanguageModelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 409, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateLanguageModelOperationRequest` | `src/AmazonTranscribe/Requests/LanguageModelApi/UpdateLanguageModelOperationRequest.cs` |
| `XAmzTarget4AmazonTranscribeServiceLanguageModelApi` | `src/AmazonTranscribe/Models/Enums/XAmzTarget4AmazonTranscribeServiceLanguageModelApi.cs` |
| `UpdateLanguageModelError` | `src/AmazonTranscribe/Errors/UpdateLanguageModelError.cs` |

