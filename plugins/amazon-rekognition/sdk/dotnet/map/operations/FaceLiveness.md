<!-- Generated file — do not edit; regenerated with the SDK. -->

# FaceLiveness — operations

Accessor: `client.FaceLiveness` · Source: `src/AmazonRekognition/Api/FaceLiveness.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateFaceLivenessSession

- **Auth**: `options.Sigv4`
- **Signature**: `CreateFaceLivenessSession(CreateFaceLivenessSessionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateFaceLivenessSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateFaceLivenessSessionOperationRequest` | `src/AmazonRekognition/Requests/FaceLiveness/CreateFaceLivenessSessionOperationRequest.cs` |
| `XAmzTargetAmazonRekognitionFaceLivenessApi` | `src/AmazonRekognition/Models/Enums/XAmzTargetAmazonRekognitionFaceLivenessApi.cs` |
| `CreateFaceLivenessSessionError` | `src/AmazonRekognition/Errors/CreateFaceLivenessSessionError.cs` |

### GetFaceLivenessSessionResults

- **Auth**: `options.Sigv4`
- **Signature**: `GetFaceLivenessSessionResults(GetFaceLivenessSessionResultsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetFaceLivenessSessionResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFaceLivenessSessionResultsOperationRequest` | `src/AmazonRekognition/Requests/FaceLiveness/GetFaceLivenessSessionResultsOperationRequest.cs` |
| `XAmzTarget1AmazonRekognitionFaceLivenessApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget1AmazonRekognitionFaceLivenessApi.cs` |
| `GetFaceLivenessSessionResultsError` | `src/AmazonRekognition/Errors/GetFaceLivenessSessionResultsError.cs` |

