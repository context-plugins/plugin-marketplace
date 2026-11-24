<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContentModeration — operations

Accessor: `client.ContentModeration` · Source: `src/AmazonRekognition/Api/ContentModeration.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DetectModerationLabels

- **Auth**: `options.Sigv4`
- **Signature**: `DetectModerationLabels(DetectModerationLabelsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectModerationLabelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 402, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectModerationLabelsOperationRequest` | `src/AmazonRekognition/Requests/ContentModeration/DetectModerationLabelsOperationRequest.cs` |
| `XAmzTarget2AmazonRekognitionContentModerationApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget2AmazonRekognitionContentModerationApi.cs` |
| `DetectModerationLabelsError` | `src/AmazonRekognition/Errors/DetectModerationLabelsError.cs` |

### GetContentModeration

- **Auth**: `options.Sigv4`
- **Signature**: `GetContentModeration(GetContentModerationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetContentModerationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetContentModerationOperationRequest` | `src/AmazonRekognition/Requests/ContentModeration/GetContentModerationOperationRequest.cs` |
| `XAmzTargetAmazonRekognitionContentModerationApi` | `src/AmazonRekognition/Models/Enums/XAmzTargetAmazonRekognitionContentModerationApi.cs` |
| `GetContentModerationError` | `src/AmazonRekognition/Errors/GetContentModerationError.cs` |

### StartContentModeration

- **Auth**: `options.Sigv4`
- **Signature**: `StartContentModeration(StartContentModerationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartContentModerationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartContentModerationOperationRequest` | `src/AmazonRekognition/Requests/ContentModeration/StartContentModerationOperationRequest.cs` |
| `XAmzTarget1AmazonRekognitionContentModerationApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget1AmazonRekognitionContentModerationApi.cs` |
| `StartContentModerationError` | `src/AmazonRekognition/Errors/StartContentModerationError.cs` |

