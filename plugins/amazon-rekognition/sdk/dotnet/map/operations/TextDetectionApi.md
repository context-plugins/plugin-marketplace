<!-- Generated file — do not edit; regenerated with the SDK. -->

# TextDetectionApi — operations

Accessor: `client.TextDetectionApi` · Source: `src/AmazonRekognition/Api/TextDetectionApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DetectText2

- **Auth**: `options.Sigv4`
- **Signature**: `DetectText2(DetectText2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectText2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectText2Request` | `src/AmazonRekognition/Requests/TextDetectionApi/DetectText2Request.cs` |
| `XAmzTarget2AmazonRekognitionTextDetectionApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget2AmazonRekognitionTextDetectionApi.cs` |
| `DetectText2Error` | `src/AmazonRekognition/Errors/DetectText2Error.cs` |

### GetTextDetection

- **Auth**: `options.Sigv4`
- **Signature**: `GetTextDetection(GetTextDetectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetTextDetectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTextDetectionOperationRequest` | `src/AmazonRekognition/Requests/TextDetectionApi/GetTextDetectionOperationRequest.cs` |
| `XAmzTargetAmazonRekognitionTextDetectionApi` | `src/AmazonRekognition/Models/Enums/XAmzTargetAmazonRekognitionTextDetectionApi.cs` |
| `GetTextDetectionError` | `src/AmazonRekognition/Errors/GetTextDetectionError.cs` |

### StartTextDetection

- **Auth**: `options.Sigv4`
- **Signature**: `StartTextDetection(StartTextDetectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartTextDetectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartTextDetectionOperationRequest` | `src/AmazonRekognition/Requests/TextDetectionApi/StartTextDetectionOperationRequest.cs` |
| `XAmzTarget1AmazonRekognitionTextDetectionApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget1AmazonRekognitionTextDetectionApi.cs` |
| `StartTextDetectionError` | `src/AmazonRekognition/Errors/StartTextDetectionError.cs` |

