<!-- Generated file — do not edit; regenerated with the SDK. -->

# StoredVideoAnalysis — operations

Accessor: `client.StoredVideoAnalysis` · Source: `src/AmazonRekognition/Api/StoredVideoAnalysis.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetLabelDetection

- **Auth**: `options.Sigv4`
- **Signature**: `GetLabelDetection(GetLabelDetectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetLabelDetectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetLabelDetectionOperationRequest` | `src/AmazonRekognition/Requests/StoredVideoAnalysis/GetLabelDetectionOperationRequest.cs` |
| `XAmzTargetAmazonRekognitionStoredVideoAnalysisApi` | `src/AmazonRekognition/Models/Enums/XAmzTargetAmazonRekognitionStoredVideoAnalysisApi.cs` |
| `GetLabelDetectionError` | `src/AmazonRekognition/Errors/GetLabelDetectionError.cs` |

### StartLabelDetection

- **Auth**: `options.Sigv4`
- **Signature**: `StartLabelDetection(StartLabelDetectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartLabelDetectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartLabelDetectionOperationRequest` | `src/AmazonRekognition/Requests/StoredVideoAnalysis/StartLabelDetectionOperationRequest.cs` |
| `XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi.cs` |
| `StartLabelDetectionError` | `src/AmazonRekognition/Errors/StartLabelDetectionError.cs` |

