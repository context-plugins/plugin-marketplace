<!-- Generated file — do not edit; regenerated with the SDK. -->

# FaceSearch — operations

Accessor: `client.FaceSearch` · Source: `src/AmazonRekognition/Api/FaceSearch.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetFaceSearch

- **Auth**: `options.Sigv4`
- **Signature**: `GetFaceSearch(GetFaceSearchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetFaceSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFaceSearchOperationRequest` | `src/AmazonRekognition/Requests/FaceSearch/GetFaceSearchOperationRequest.cs` |
| `XAmzTargetAmazonRekognitionFaceSearchApi` | `src/AmazonRekognition/Models/Enums/XAmzTargetAmazonRekognitionFaceSearchApi.cs` |
| `GetFaceSearchError` | `src/AmazonRekognition/Errors/GetFaceSearchError.cs` |

### SearchFacesByImage2

- **Auth**: `options.Sigv4`
- **Signature**: `SearchFacesByImage2(SearchFacesByImage2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SearchFacesByImage2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchFacesByImage2Request` | `src/AmazonRekognition/Requests/FaceSearch/SearchFacesByImage2Request.cs` |
| `XAmzTarget2AmazonRekognitionFaceSearchApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget2AmazonRekognitionFaceSearchApi.cs` |
| `SearchFacesByImage2Error` | `src/AmazonRekognition/Errors/SearchFacesByImage2Error.cs` |

### StartFaceSearch

- **Auth**: `options.Sigv4`
- **Signature**: `StartFaceSearch(StartFaceSearchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartFaceSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartFaceSearchOperationRequest` | `src/AmazonRekognition/Requests/FaceSearch/StartFaceSearchOperationRequest.cs` |
| `XAmzTarget1AmazonRekognitionFaceSearchApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget1AmazonRekognitionFaceSearchApi.cs` |
| `StartFaceSearchError` | `src/AmazonRekognition/Errors/StartFaceSearchError.cs` |

