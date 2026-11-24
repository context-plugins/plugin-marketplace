<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.Operations` · Source: `src/AmazonRekognition/Api/Operations.cs` · 26 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CompareFaces2

- **Auth**: `options.Sigv4`
- **Signature**: `CompareFaces2(CompareFaces2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CompareFaces2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CompareFaces2Request` | `src/AmazonRekognition/Requests/Operations/CompareFaces2Request.cs` |
| `XAmzTargetAmazonRekognitionFacialAnalysisApi` | `src/AmazonRekognition/Models/Enums/XAmzTargetAmazonRekognitionFacialAnalysisApi.cs` |
| `CompareFaces2Error` | `src/AmazonRekognition/Errors/CompareFaces2Error.cs` |

### CopyProjectVersion

- **Auth**: `options.Sigv4`
- **Signature**: `CopyProjectVersion(CopyProjectVersionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CopyProjectVersionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CopyProjectVersionOperationRequest` | `src/AmazonRekognition/Requests/Operations/CopyProjectVersionOperationRequest.cs` |
| `XAmzTarget1AmazonRekognitionOperationsApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget1AmazonRekognitionOperationsApi.cs` |
| `CopyProjectVersionError` | `src/AmazonRekognition/Errors/CopyProjectVersionError.cs` |

### DeleteCollection

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteCollection(DeleteCollectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCollectionOperationRequest` | `src/AmazonRekognition/Requests/Operations/DeleteCollectionOperationRequest.cs` |
| `XAmzTarget11` | `src/AmazonRekognition/Models/Enums/XAmzTarget11.cs` |
| `DeleteCollectionError` | `src/AmazonRekognition/Errors/DeleteCollectionError.cs` |

### DescribeCollection

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeCollection(DescribeCollectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeCollectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeCollectionOperationRequest` | `src/AmazonRekognition/Requests/Operations/DescribeCollectionOperationRequest.cs` |
| `XAmzTarget12` | `src/AmazonRekognition/Models/Enums/XAmzTarget12.cs` |
| `DescribeCollectionError` | `src/AmazonRekognition/Errors/DescribeCollectionError.cs` |

### DetectCustomLabels2

- **Auth**: `options.Sigv4`
- **Signature**: `DetectCustomLabels2(DetectCustomLabels2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectCustomLabels2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectCustomLabels2Request` | `src/AmazonRekognition/Requests/Operations/DetectCustomLabels2Request.cs` |
| `XAmzTarget2AmazonRekognitionOperationsApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget2AmazonRekognitionOperationsApi.cs` |
| `DetectCustomLabels2Error` | `src/AmazonRekognition/Errors/DetectCustomLabels2Error.cs` |

### DetectFaces2

- **Auth**: `options.Sigv4`
- **Signature**: `DetectFaces2(DetectFaces2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectFaces2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectFaces2Request` | `src/AmazonRekognition/Requests/Operations/DetectFaces2Request.cs` |
| `XAmzTarget3AmazonRekognitionOperationsApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget3AmazonRekognitionOperationsApi.cs` |
| `DetectFaces2Error` | `src/AmazonRekognition/Errors/DetectFaces2Error.cs` |

### DetectLabels2

- **Auth**: `options.Sigv4`
- **Signature**: `DetectLabels2(DetectLabels2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectLabels2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectLabels2Request` | `src/AmazonRekognition/Requests/Operations/DetectLabels2Request.cs` |
| `XAmzTarget4AmazonRekognitionOperationsApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget4AmazonRekognitionOperationsApi.cs` |
| `DetectLabels2Error` | `src/AmazonRekognition/Errors/DetectLabels2Error.cs` |

### DetectModerationLabels2

- **Auth**: `options.Sigv4`
- **Signature**: `DetectModerationLabels2(DetectModerationLabels2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectModerationLabels2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 402, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectModerationLabels2Request` | `src/AmazonRekognition/Requests/Operations/DetectModerationLabels2Request.cs` |
| `XAmzTarget5AmazonRekognitionOperationsApi` | `src/AmazonRekognition/Models/Enums/XAmzTarget5AmazonRekognitionOperationsApi.cs` |
| `DetectModerationLabels2Error` | `src/AmazonRekognition/Errors/DetectModerationLabels2Error.cs` |

### DetectProtectiveEquipment

- **Auth**: `options.Sigv4`
- **Signature**: `DetectProtectiveEquipment(DetectProtectiveEquipmentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectProtectiveEquipmentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectProtectiveEquipmentOperationRequest` | `src/AmazonRekognition/Requests/Operations/DetectProtectiveEquipmentOperationRequest.cs` |
| `XAmzTarget6` | `src/AmazonRekognition/Models/Enums/XAmzTarget6.cs` |
| `DetectProtectiveEquipmentError` | `src/AmazonRekognition/Errors/DetectProtectiveEquipmentError.cs` |

### DetectText

- **Auth**: `options.Sigv4`
- **Signature**: `DetectText(DetectTextOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectTextError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectTextOperationRequest` | `src/AmazonRekognition/Requests/Operations/DetectTextOperationRequest.cs` |
| `XAmzTarget7` | `src/AmazonRekognition/Models/Enums/XAmzTarget7.cs` |
| `DetectTextError` | `src/AmazonRekognition/Errors/DetectTextError.cs` |

### DistributeDatasetEntries

- **Auth**: `options.Sigv4`
- **Signature**: `DistributeDatasetEntries(DistributeDatasetEntriesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DistributeDatasetEntriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DistributeDatasetEntriesOperationRequest` | `src/AmazonRekognition/Requests/Operations/DistributeDatasetEntriesOperationRequest.cs` |
| `XAmzTarget8` | `src/AmazonRekognition/Models/Enums/XAmzTarget8.cs` |
| `DistributeDatasetEntriesError` | `src/AmazonRekognition/Errors/DistributeDatasetEntriesError.cs` |

### GetCelebrityInfo

- **Auth**: `options.Sigv4`
- **Signature**: `GetCelebrityInfo(GetCelebrityInfoOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetCelebrityInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCelebrityInfoOperationRequest` | `src/AmazonRekognition/Requests/Operations/GetCelebrityInfoOperationRequest.cs` |
| `XAmzTarget13` | `src/AmazonRekognition/Models/Enums/XAmzTarget13.cs` |
| `GetCelebrityInfoError` | `src/AmazonRekognition/Errors/GetCelebrityInfoError.cs` |

### GetFaceDetection

- **Auth**: `options.Sigv4`
- **Signature**: `GetFaceDetection(GetFaceDetectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetFaceDetectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFaceDetectionOperationRequest` | `src/AmazonRekognition/Requests/Operations/GetFaceDetectionOperationRequest.cs` |
| `XAmzTarget14` | `src/AmazonRekognition/Models/Enums/XAmzTarget14.cs` |
| `GetFaceDetectionError` | `src/AmazonRekognition/Errors/GetFaceDetectionError.cs` |

### GetPersonTracking

- **Auth**: `options.Sigv4`
- **Signature**: `GetPersonTracking(GetPersonTrackingOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetPersonTrackingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPersonTrackingOperationRequest` | `src/AmazonRekognition/Requests/Operations/GetPersonTrackingOperationRequest.cs` |
| `XAmzTarget16` | `src/AmazonRekognition/Models/Enums/XAmzTarget16.cs` |
| `GetPersonTrackingError` | `src/AmazonRekognition/Errors/GetPersonTrackingError.cs` |

### GetSegmentDetection

- **Auth**: `options.Sigv4`
- **Signature**: `GetSegmentDetection(GetSegmentDetectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetSegmentDetectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSegmentDetectionOperationRequest` | `src/AmazonRekognition/Requests/Operations/GetSegmentDetectionOperationRequest.cs` |
| `XAmzTarget18` | `src/AmazonRekognition/Models/Enums/XAmzTarget18.cs` |
| `GetSegmentDetectionError` | `src/AmazonRekognition/Errors/GetSegmentDetectionError.cs` |

### IndexFaces2

- **Auth**: `options.Sigv4`
- **Signature**: `IndexFaces2(IndexFaces2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<IndexFaces2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IndexFaces2Request` | `src/AmazonRekognition/Requests/Operations/IndexFaces2Request.cs` |
| `XAmzTarget9` | `src/AmazonRekognition/Models/Enums/XAmzTarget9.cs` |
| `IndexFaces2Error` | `src/AmazonRekognition/Errors/IndexFaces2Error.cs` |

### ListDatasetEntries

- **Auth**: `options.Sigv4`
- **Signature**: `ListDatasetEntries(ListDatasetEntriesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListDatasetEntriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDatasetEntriesOperationRequest` | `src/AmazonRekognition/Requests/Operations/ListDatasetEntriesOperationRequest.cs` |
| `XAmzTarget20` | `src/AmazonRekognition/Models/Enums/XAmzTarget20.cs` |
| `ListDatasetEntriesError` | `src/AmazonRekognition/Errors/ListDatasetEntriesError.cs` |

### ListDatasetLabels

- **Auth**: `options.Sigv4`
- **Signature**: `ListDatasetLabels(ListDatasetLabelsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListDatasetLabelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDatasetLabelsOperationRequest` | `src/AmazonRekognition/Requests/Operations/ListDatasetLabelsOperationRequest.cs` |
| `XAmzTarget22` | `src/AmazonRekognition/Models/Enums/XAmzTarget22.cs` |
| `ListDatasetLabelsError` | `src/AmazonRekognition/Errors/ListDatasetLabelsError.cs` |

### ListTagsForResource

- **Auth**: `options.Sigv4`
- **Signature**: `ListTagsForResource(ListTagsForResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListTagsForResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTagsForResourceOperationRequest` | `src/AmazonRekognition/Requests/Operations/ListTagsForResourceOperationRequest.cs` |
| `XAmzTarget23` | `src/AmazonRekognition/Models/Enums/XAmzTarget23.cs` |
| `ListTagsForResourceError` | `src/AmazonRekognition/Errors/ListTagsForResourceError.cs` |

### RecognizeCelebrities2

- **Auth**: `options.Sigv4`
- **Signature**: `RecognizeCelebrities2(RecognizeCelebrities2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RecognizeCelebrities2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RecognizeCelebrities2Request` | `src/AmazonRekognition/Requests/Operations/RecognizeCelebrities2Request.cs` |
| `XAmzTarget2` | `src/AmazonRekognition/Models/Enums/XAmzTarget2.cs` |
| `RecognizeCelebrities2Error` | `src/AmazonRekognition/Errors/RecognizeCelebrities2Error.cs` |

### StartFaceDetection

- **Auth**: `options.Sigv4`
- **Signature**: `StartFaceDetection(StartFaceDetectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartFaceDetectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartFaceDetectionOperationRequest` | `src/AmazonRekognition/Requests/Operations/StartFaceDetectionOperationRequest.cs` |
| `XAmzTarget15` | `src/AmazonRekognition/Models/Enums/XAmzTarget15.cs` |
| `StartFaceDetectionError` | `src/AmazonRekognition/Errors/StartFaceDetectionError.cs` |

### StartPersonTracking

- **Auth**: `options.Sigv4`
- **Signature**: `StartPersonTracking(StartPersonTrackingOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartPersonTrackingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartPersonTrackingOperationRequest` | `src/AmazonRekognition/Requests/Operations/StartPersonTrackingOperationRequest.cs` |
| `XAmzTarget17` | `src/AmazonRekognition/Models/Enums/XAmzTarget17.cs` |
| `StartPersonTrackingError` | `src/AmazonRekognition/Errors/StartPersonTrackingError.cs` |

### StartSegmentDetection

- **Auth**: `options.Sigv4`
- **Signature**: `StartSegmentDetection(StartSegmentDetectionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartSegmentDetectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartSegmentDetectionOperationRequest` | `src/AmazonRekognition/Requests/Operations/StartSegmentDetectionOperationRequest.cs` |
| `XAmzTarget19` | `src/AmazonRekognition/Models/Enums/XAmzTarget19.cs` |
| `StartSegmentDetectionError` | `src/AmazonRekognition/Errors/StartSegmentDetectionError.cs` |

### TagResource

- **Auth**: `options.Sigv4`
- **Signature**: `TagResource(TagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TagResourceOperationRequest` | `src/AmazonRekognition/Requests/Operations/TagResourceOperationRequest.cs` |
| `XAmzTarget24` | `src/AmazonRekognition/Models/Enums/XAmzTarget24.cs` |
| `TagResourceError` | `src/AmazonRekognition/Errors/TagResourceError.cs` |

### UntagResource

- **Auth**: `options.Sigv4`
- **Signature**: `UntagResource(UntagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UntagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UntagResourceOperationRequest` | `src/AmazonRekognition/Requests/Operations/UntagResourceOperationRequest.cs` |
| `XAmzTarget25` | `src/AmazonRekognition/Models/Enums/XAmzTarget25.cs` |
| `UntagResourceError` | `src/AmazonRekognition/Errors/UntagResourceError.cs` |

### UpdateDatasetEntries

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateDatasetEntries(UpdateDatasetEntriesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateDatasetEntriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateDatasetEntriesOperationRequest` | `src/AmazonRekognition/Requests/Operations/UpdateDatasetEntriesOperationRequest.cs` |
| `XAmzTarget21` | `src/AmazonRekognition/Models/Enums/XAmzTarget21.cs` |
| `UpdateDatasetEntriesError` | `src/AmazonRekognition/Errors/UpdateDatasetEntriesError.cs` |

