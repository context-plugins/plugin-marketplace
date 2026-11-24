<!-- Generated file — do not edit; regenerated with the SDK. -->

# ImageAnalysis — operations

Accessor: `client.ImageAnalysis` · Source: `src/AmazonRekognition/Api/ImageAnalysis.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DetectLabels

- **Auth**: `options.Sigv4`
- **Signature**: `DetectLabels(DetectLabelsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectLabelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectLabelsOperationRequest` | `src/AmazonRekognition/Requests/ImageAnalysis/DetectLabelsOperationRequest.cs` |
| `XAmzTargetAmazonRekognitionImageAnalysisApi` | `src/AmazonRekognition/Models/Enums/XAmzTargetAmazonRekognitionImageAnalysisApi.cs` |
| `DetectLabelsError` | `src/AmazonRekognition/Errors/DetectLabelsError.cs` |

