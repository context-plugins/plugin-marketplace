<!-- Generated file — do not edit; regenerated with the SDK. -->

# FacialAnalysis — operations

Accessor: `client.FacialAnalysis` · Source: `src/AmazonRekognition/Api/FacialAnalysis.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CompareFaces

- **Auth**: `options.Sigv4`
- **Signature**: `CompareFaces(CompareFacesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CompareFacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CompareFacesOperationRequest` | `src/AmazonRekognition/Requests/FacialAnalysis/CompareFacesOperationRequest.cs` |
| `XAmzTargetAmazonRekognitionFacialAnalysisApi` | `src/AmazonRekognition/Models/Enums/XAmzTargetAmazonRekognitionFacialAnalysisApi.cs` |
| `CompareFacesError` | `src/AmazonRekognition/Errors/CompareFacesError.cs` |

### DetectFaces

- **Auth**: `options.Sigv4`
- **Signature**: `DetectFaces(DetectFacesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectFacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectFacesOperationRequest` | `src/AmazonRekognition/Requests/FacialAnalysis/DetectFacesOperationRequest.cs` |
| `XAmzTarget1AmazonRekognitionFacialAnalysisApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget1AmazonRekognitionFacialAnalysisApi.cs` |
| `DetectFacesError` | `src/AmazonRekognition/Errors/DetectFacesError.cs` |

