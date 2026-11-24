<!-- Generated file — do not edit; regenerated with the SDK. -->

# FaceCollections — operations

Accessor: `client.FaceCollections` · Source: `src/AmazonRekognition/Api/FaceCollections.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCollection

- **Auth**: `options.Sigv4`
- **Signature**: `CreateCollection(CreateCollectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCollectionOperationRequest` | `src/AmazonRekognition/Requests/FaceCollections/CreateCollectionOperationRequest.cs` |
| `XAmzTarget1AmazonRekognitionFaceCollectionsApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget1AmazonRekognitionFaceCollectionsApi.cs` |
| `CreateCollectionError` | `src/AmazonRekognition/Errors/CreateCollectionError.cs` |

### IndexFaces

- **Auth**: `options.Sigv4`
- **Signature**: `IndexFaces(IndexFacesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<IndexFacesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IndexFacesOperationRequest` | `src/AmazonRekognition/Requests/FaceCollections/IndexFacesOperationRequest.cs` |
| `XAmzTargetAmazonRekognitionFaceCollectionsApi` | `src/AmazonRekognition/Models/Enums/XAmzTargetAmazonRekognitionFaceCollectionsApi.cs` |
| `IndexFacesError` | `src/AmazonRekognition/Errors/IndexFacesError.cs` |

### ListCollections

- **Auth**: `options.Sigv4`
- **Signature**: `ListCollections(ListCollectionsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListCollectionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCollectionsOperationRequest` | `src/AmazonRekognition/Requests/FaceCollections/ListCollectionsOperationRequest.cs` |
| `XAmzTarget2AmazonRekognitionFaceCollectionsApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget2AmazonRekognitionFaceCollectionsApi.cs` |
| `ListCollectionsError` | `src/AmazonRekognition/Errors/ListCollectionsError.cs` |

