<!-- Generated file — do not edit; regenerated with the SDK. -->

# FaceApi — operations

Accessor: `client.FaceApi` · Source: `src/AmazonRekognition/Api/FaceApi.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AssociateFaces

- **Auth**: `options.Sigv4`
- **Signature**: `AssociateFaces(AssociateFacesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AssociateFacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AssociateFacesOperationRequest` | `src/AmazonRekognition/Requests/FaceApi/AssociateFacesOperationRequest.cs` |
| `XAmzTargetAmazonRekognitionFaceApi` | `src/AmazonRekognition/Models/Enums/XAmzTargetAmazonRekognitionFaceApi.cs` |
| `AssociateFacesError` | `src/AmazonRekognition/Errors/AssociateFacesError.cs` |

### DeleteFaces

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteFaces(DeleteFacesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteFacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteFacesOperationRequest` | `src/AmazonRekognition/Requests/FaceApi/DeleteFacesOperationRequest.cs` |
| `XAmzTarget1AmazonRekognitionFaceApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget1AmazonRekognitionFaceApi.cs` |
| `DeleteFacesError` | `src/AmazonRekognition/Errors/DeleteFacesError.cs` |

### DisassociateFaces

- **Auth**: `options.Sigv4`
- **Signature**: `DisassociateFaces(DisassociateFacesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DisassociateFacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DisassociateFacesOperationRequest` | `src/AmazonRekognition/Requests/FaceApi/DisassociateFacesOperationRequest.cs` |
| `XAmzTarget2AmazonRekognitionFaceApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget2AmazonRekognitionFaceApi.cs` |
| `DisassociateFacesError` | `src/AmazonRekognition/Errors/DisassociateFacesError.cs` |

### ListFaces

- **Auth**: `options.Sigv4`
- **Signature**: `ListFaces(ListFacesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListFacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFacesOperationRequest` | `src/AmazonRekognition/Requests/FaceApi/ListFacesOperationRequest.cs` |
| `XAmzTarget3` | `src/AmazonRekognition/Models/Enums/XAmzTarget3.cs` |
| `ListFacesError` | `src/AmazonRekognition/Errors/ListFacesError.cs` |

### SearchFaces

- **Auth**: `options.Sigv4`
- **Signature**: `SearchFaces(SearchFacesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SearchFacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchFacesOperationRequest` | `src/AmazonRekognition/Requests/FaceApi/SearchFacesOperationRequest.cs` |
| `XAmzTarget4` | `src/AmazonRekognition/Models/Enums/XAmzTarget4.cs` |
| `SearchFacesError` | `src/AmazonRekognition/Errors/SearchFacesError.cs` |

### SearchFacesByImage

- **Auth**: `options.Sigv4`
- **Signature**: `SearchFacesByImage(SearchFacesByImageOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SearchFacesByImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchFacesByImageOperationRequest` | `src/AmazonRekognition/Requests/FaceApi/SearchFacesByImageOperationRequest.cs` |
| `XAmzTarget5` | `src/AmazonRekognition/Models/Enums/XAmzTarget5.cs` |
| `SearchFacesByImageError` | `src/AmazonRekognition/Errors/SearchFacesByImageError.cs` |

