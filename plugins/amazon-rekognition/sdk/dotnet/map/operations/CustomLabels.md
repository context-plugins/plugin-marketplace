<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomLabels — operations

Accessor: `client.CustomLabels` · Source: `src/AmazonRekognition/Api/CustomLabels.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DetectCustomLabels

- **Auth**: `options.Sigv4`
- **Signature**: `DetectCustomLabels(DetectCustomLabelsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectCustomLabelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectCustomLabelsOperationRequest` | `src/AmazonRekognition/Requests/CustomLabels/DetectCustomLabelsOperationRequest.cs` |
| `XAmzTargetAmazonRekognitionCustomLabelsApi` | `src/AmazonRekognition/Models/Enums/XAmzTargetAmazonRekognitionCustomLabelsApi.cs` |
| `DetectCustomLabelsError` | `src/AmazonRekognition/Errors/DetectCustomLabelsError.cs` |

