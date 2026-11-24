<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.Operations` · Source: `src/AmazonComprehend/Api/Operations.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ClassifyDocument2

- **Auth**: `options.Sigv4`
- **Signature**: `ClassifyDocument2(ClassifyDocument2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ClassifyDocument2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ClassifyDocument2Request` | `src/AmazonComprehend/Requests/Operations/ClassifyDocument2Request.cs` |
| `XAmzTargetAmazonComprehendOperationsApi` | `src/AmazonComprehend/Models/Enums/XAmzTargetAmazonComprehendOperationsApi.cs` |
| `ClassifyDocument2Error` | `src/AmazonComprehend/Errors/ClassifyDocument2Error.cs` |

### ContainsPiiEntities2

- **Auth**: `options.Sigv4`
- **Signature**: `ContainsPiiEntities2(ContainsPiiEntities2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ContainsPiiEntities2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContainsPiiEntities2Request` | `src/AmazonComprehend/Requests/Operations/ContainsPiiEntities2Request.cs` |
| `XAmzTarget1AmazonComprehendOperationsApi` | `src/AmazonComprehend/Models/Enums/XAmzTarget1AmazonComprehendOperationsApi.cs` |
| `ContainsPiiEntities2Error` | `src/AmazonComprehend/Errors/ContainsPiiEntities2Error.cs` |

### DetectDominantLanguage2

- **Auth**: `options.Sigv4`
- **Signature**: `DetectDominantLanguage2(DetectDominantLanguage2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectDominantLanguage2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectDominantLanguage2Request` | `src/AmazonComprehend/Requests/Operations/DetectDominantLanguage2Request.cs` |
| `XAmzTarget2AmazonComprehendOperationsApi` | `src/AmazonComprehend/Models/Enums/XAmzTarget2AmazonComprehendOperationsApi.cs` |
| `DetectDominantLanguage2Error` | `src/AmazonComprehend/Errors/DetectDominantLanguage2Error.cs` |

### DetectEntities2

- **Auth**: `options.Sigv4`
- **Signature**: `DetectEntities2(DetectEntities2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectEntities2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectEntities2Request` | `src/AmazonComprehend/Requests/Operations/DetectEntities2Request.cs` |
| `XAmzTarget3AmazonComprehendOperationsApi` | `src/AmazonComprehend/Models/Enums/XAmzTarget3AmazonComprehendOperationsApi.cs` |
| `DetectEntities2Error` | `src/AmazonComprehend/Errors/DetectEntities2Error.cs` |

### DetectKeyPhrases2

- **Auth**: `options.Sigv4`
- **Signature**: `DetectKeyPhrases2(DetectKeyPhrases2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectKeyPhrases2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectKeyPhrases2Request` | `src/AmazonComprehend/Requests/Operations/DetectKeyPhrases2Request.cs` |
| `XAmzTarget4AmazonComprehendOperationsApi` | `src/AmazonComprehend/Models/Enums/XAmzTarget4AmazonComprehendOperationsApi.cs` |
| `DetectKeyPhrases2Error` | `src/AmazonComprehend/Errors/DetectKeyPhrases2Error.cs` |

### DetectPiiEntities2

- **Auth**: `options.Sigv4`
- **Signature**: `DetectPiiEntities2(DetectPiiEntities2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectPiiEntities2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectPiiEntities2Request` | `src/AmazonComprehend/Requests/Operations/DetectPiiEntities2Request.cs` |
| `XAmzTarget5AmazonComprehendOperationsApi` | `src/AmazonComprehend/Models/Enums/XAmzTarget5AmazonComprehendOperationsApi.cs` |
| `DetectPiiEntities2Error` | `src/AmazonComprehend/Errors/DetectPiiEntities2Error.cs` |

### DetectSentiment2

- **Auth**: `options.Sigv4`
- **Signature**: `DetectSentiment2(DetectSentiment2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectSentiment2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectSentiment2Request` | `src/AmazonComprehend/Requests/Operations/DetectSentiment2Request.cs` |
| `XAmzTarget6AmazonComprehendOperationsApi` | `src/AmazonComprehend/Models/Enums/XAmzTarget6AmazonComprehendOperationsApi.cs` |
| `DetectSentiment2Error` | `src/AmazonComprehend/Errors/DetectSentiment2Error.cs` |

### DetectSyntax2

- **Auth**: `options.Sigv4`
- **Signature**: `DetectSyntax2(DetectSyntax2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectSyntax2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectSyntax2Request` | `src/AmazonComprehend/Requests/Operations/DetectSyntax2Request.cs` |
| `XAmzTarget7AmazonComprehendOperationsApi` | `src/AmazonComprehend/Models/Enums/XAmzTarget7AmazonComprehendOperationsApi.cs` |
| `DetectSyntax2Error` | `src/AmazonComprehend/Errors/DetectSyntax2Error.cs` |

### DetectTargetedSentiment2

- **Auth**: `options.Sigv4`
- **Signature**: `DetectTargetedSentiment2(DetectTargetedSentiment2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectTargetedSentiment2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectTargetedSentiment2Request` | `src/AmazonComprehend/Requests/Operations/DetectTargetedSentiment2Request.cs` |
| `XAmzTarget8AmazonComprehendOperationsApi` | `src/AmazonComprehend/Models/Enums/XAmzTarget8AmazonComprehendOperationsApi.cs` |
| `DetectTargetedSentiment2Error` | `src/AmazonComprehend/Errors/DetectTargetedSentiment2Error.cs` |

### DetectToxicContent

- **Auth**: `options.Sigv4`
- **Signature**: `DetectToxicContent(DetectToxicContentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectToxicContentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectToxicContentOperationRequest` | `src/AmazonComprehend/Requests/Operations/DetectToxicContentOperationRequest.cs` |
| `XAmzTarget9AmazonComprehendOperationsApi` | `src/AmazonComprehend/Models/Enums/XAmzTarget9AmazonComprehendOperationsApi.cs` |
| `DetectToxicContentError` | `src/AmazonComprehend/Errors/DetectToxicContentError.cs` |

