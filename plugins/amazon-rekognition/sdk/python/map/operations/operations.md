<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `amazon_rekognition/apis/operations.py` · 26 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.operations.compare_faces2

- **Route**: `POST /#CompareFaces`
- **Auth**: `sigv4`
- **Signature**: `def compare_faces2(x_amz_target: XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CompareFaces2ErrorBody]`
- **Error**: `CompareFaces2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr` | `amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_facial_analysis_api.py` |
| `CompareFaces2ErrorBody` | `amazon_rekognition/errors/compare_faces2_error.py` |

### client.operations.copy_project_version

- **Route**: `POST /#CopyProjectVersion`
- **Auth**: `sigv4`
- **Signature**: `def copy_project_version(x_amz_target: XAmzTarget1AmazonRekognitionOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CopyProjectVersionErrorBody]`
- **Error**: `CopyProjectVersionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonRekognitionOperationsApiOrStr` | `amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_operations_api.py` |
| `CopyProjectVersionErrorBody` | `amazon_rekognition/errors/copy_project_version_error.py` |

### client.operations.delete_collection

- **Route**: `POST /#DeleteCollection`
- **Auth**: `sigv4`
- **Signature**: `def delete_collection(x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteCollectionErrorBody]`
- **Error**: `DeleteCollectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget11OrStr` | `amazon_rekognition/models/enums/x_amz_target11.py` |
| `DeleteCollectionErrorBody` | `amazon_rekognition/errors/delete_collection_error.py` |

### client.operations.describe_collection

- **Route**: `POST /#DescribeCollection`
- **Auth**: `sigv4`
- **Signature**: `def describe_collection(x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeCollectionErrorBody]`
- **Error**: `DescribeCollectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget12OrStr` | `amazon_rekognition/models/enums/x_amz_target12.py` |
| `DescribeCollectionErrorBody` | `amazon_rekognition/errors/describe_collection_error.py` |

### client.operations.detect_custom_labels2

- **Route**: `POST /#DetectCustomLabels`
- **Auth**: `sigv4`
- **Signature**: `def detect_custom_labels2(x_amz_target: XAmzTarget2AmazonRekognitionOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectCustomLabels2ErrorBody]`
- **Error**: `DetectCustomLabels2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonRekognitionOperationsApiOrStr` | `amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_operations_api.py` |
| `DetectCustomLabels2ErrorBody` | `amazon_rekognition/errors/detect_custom_labels2_error.py` |

### client.operations.detect_faces2

- **Route**: `POST /#DetectFaces`
- **Auth**: `sigv4`
- **Signature**: `def detect_faces2(x_amz_target: XAmzTarget3AmazonRekognitionOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectFaces2ErrorBody]`
- **Error**: `DetectFaces2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonRekognitionOperationsApiOrStr` | `amazon_rekognition/models/enums/x_amz_target3_amazon_rekognition_operations_api.py` |
| `DetectFaces2ErrorBody` | `amazon_rekognition/errors/detect_faces2_error.py` |

### client.operations.detect_labels2

- **Route**: `POST /#DetectLabels`
- **Auth**: `sigv4`
- **Signature**: `def detect_labels2(x_amz_target: XAmzTarget4AmazonRekognitionOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectLabels2ErrorBody]`
- **Error**: `DetectLabels2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AmazonRekognitionOperationsApiOrStr` | `amazon_rekognition/models/enums/x_amz_target4_amazon_rekognition_operations_api.py` |
| `DetectLabels2ErrorBody` | `amazon_rekognition/errors/detect_labels2_error.py` |

### client.operations.detect_moderation_labels2

- **Route**: `POST /#DetectModerationLabels`
- **Auth**: `sigv4`
- **Signature**: `def detect_moderation_labels2(x_amz_target: XAmzTarget5AmazonRekognitionOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectModerationLabels2ErrorBody]`
- **Error**: `DetectModerationLabels2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 402, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget5AmazonRekognitionOperationsApiOrStr` | `amazon_rekognition/models/enums/x_amz_target5_amazon_rekognition_operations_api.py` |
| `DetectModerationLabels2ErrorBody` | `amazon_rekognition/errors/detect_moderation_labels2_error.py` |

### client.operations.detect_protective_equipment

- **Route**: `POST /#DetectProtectiveEquipment`
- **Auth**: `sigv4`
- **Signature**: `def detect_protective_equipment(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectProtectiveEquipmentErrorBody]`
- **Error**: `DetectProtectiveEquipmentErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget6OrStr` | `amazon_rekognition/models/enums/x_amz_target6.py` |
| `DetectProtectiveEquipmentErrorBody` | `amazon_rekognition/errors/detect_protective_equipment_error.py` |

### client.operations.detect_text

- **Route**: `POST /#DetectText`
- **Auth**: `sigv4`
- **Signature**: `def detect_text(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectTextErrorBody]`
- **Error**: `DetectTextErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget7OrStr` | `amazon_rekognition/models/enums/x_amz_target7.py` |
| `DetectTextErrorBody` | `amazon_rekognition/errors/detect_text_error.py` |

### client.operations.distribute_dataset_entries

- **Route**: `POST /#DistributeDatasetEntries`
- **Auth**: `sigv4`
- **Signature**: `def distribute_dataset_entries(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DistributeDatasetEntriesErrorBody]`
- **Error**: `DistributeDatasetEntriesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget8OrStr` | `amazon_rekognition/models/enums/x_amz_target8.py` |
| `DistributeDatasetEntriesErrorBody` | `amazon_rekognition/errors/distribute_dataset_entries_error.py` |

### client.operations.get_celebrity_info

- **Route**: `POST /#GetCelebrityInfo`
- **Auth**: `sigv4`
- **Signature**: `def get_celebrity_info(x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetCelebrityInfoErrorBody]`
- **Error**: `GetCelebrityInfoErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget13OrStr` | `amazon_rekognition/models/enums/x_amz_target13.py` |
| `GetCelebrityInfoErrorBody` | `amazon_rekognition/errors/get_celebrity_info_error.py` |

### client.operations.get_face_detection

- **Route**: `POST /#GetFaceDetection`
- **Auth**: `sigv4`
- **Signature**: `def get_face_detection(x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetFaceDetectionErrorBody]`
- **Error**: `GetFaceDetectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget14OrStr` | `amazon_rekognition/models/enums/x_amz_target14.py` |
| `GetFaceDetectionErrorBody` | `amazon_rekognition/errors/get_face_detection_error.py` |

### client.operations.get_person_tracking

- **Route**: `POST /#GetPersonTracking`
- **Auth**: `sigv4`
- **Signature**: `def get_person_tracking(x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetPersonTrackingErrorBody]`
- **Error**: `GetPersonTrackingErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget16OrStr` | `amazon_rekognition/models/enums/x_amz_target16.py` |
| `GetPersonTrackingErrorBody` | `amazon_rekognition/errors/get_person_tracking_error.py` |

### client.operations.get_segment_detection

- **Route**: `POST /#GetSegmentDetection`
- **Auth**: `sigv4`
- **Signature**: `def get_segment_detection(x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetSegmentDetectionErrorBody]`
- **Error**: `GetSegmentDetectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget18OrStr` | `amazon_rekognition/models/enums/x_amz_target18.py` |
| `GetSegmentDetectionErrorBody` | `amazon_rekognition/errors/get_segment_detection_error.py` |

### client.operations.index_faces2

- **Route**: `POST /#IndexFaces`
- **Auth**: `sigv4`
- **Signature**: `def index_faces2(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, IndexFaces2ErrorBody]`
- **Error**: `IndexFaces2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget9OrStr` | `amazon_rekognition/models/enums/x_amz_target9.py` |
| `IndexFaces2ErrorBody` | `amazon_rekognition/errors/index_faces2_error.py` |

### client.operations.list_dataset_entries

- **Route**: `POST /#ListDatasetEntries`
- **Auth**: `sigv4`
- **Signature**: `def list_dataset_entries(x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListDatasetEntriesErrorBody]`
- **Error**: `ListDatasetEntriesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget20OrStr` | `amazon_rekognition/models/enums/x_amz_target20.py` |
| `ListDatasetEntriesErrorBody` | `amazon_rekognition/errors/list_dataset_entries_error.py` |

### client.operations.list_dataset_labels

- **Route**: `POST /#ListDatasetLabels`
- **Auth**: `sigv4`
- **Signature**: `def list_dataset_labels(x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListDatasetLabelsErrorBody]`
- **Error**: `ListDatasetLabelsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget22OrStr` | `amazon_rekognition/models/enums/x_amz_target22.py` |
| `ListDatasetLabelsErrorBody` | `amazon_rekognition/errors/list_dataset_labels_error.py` |

### client.operations.list_tags_for_resource

- **Route**: `POST /#ListTagsForResource`
- **Auth**: `sigv4`
- **Signature**: `def list_tags_for_resource(x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListTagsForResourceErrorBody]`
- **Error**: `ListTagsForResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget23OrStr` | `amazon_rekognition/models/enums/x_amz_target23.py` |
| `ListTagsForResourceErrorBody` | `amazon_rekognition/errors/list_tags_for_resource_error.py` |

### client.operations.recognize_celebrities2

- **Route**: `POST /#RecognizeCelebrities`
- **Auth**: `sigv4`
- **Signature**: `def recognize_celebrities2(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RecognizeCelebrities2ErrorBody]`
- **Error**: `RecognizeCelebrities2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2OrStr` | `amazon_rekognition/models/enums/x_amz_target2.py` |
| `RecognizeCelebrities2ErrorBody` | `amazon_rekognition/errors/recognize_celebrities2_error.py` |

### client.operations.start_face_detection

- **Route**: `POST /#StartFaceDetection`
- **Auth**: `sigv4`
- **Signature**: `def start_face_detection(x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartFaceDetectionErrorBody]`
- **Error**: `StartFaceDetectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget15OrStr` | `amazon_rekognition/models/enums/x_amz_target15.py` |
| `StartFaceDetectionErrorBody` | `amazon_rekognition/errors/start_face_detection_error.py` |

### client.operations.start_person_tracking

- **Route**: `POST /#StartPersonTracking`
- **Auth**: `sigv4`
- **Signature**: `def start_person_tracking(x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartPersonTrackingErrorBody]`
- **Error**: `StartPersonTrackingErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget17OrStr` | `amazon_rekognition/models/enums/x_amz_target17.py` |
| `StartPersonTrackingErrorBody` | `amazon_rekognition/errors/start_person_tracking_error.py` |

### client.operations.start_segment_detection

- **Route**: `POST /#StartSegmentDetection`
- **Auth**: `sigv4`
- **Signature**: `def start_segment_detection(x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartSegmentDetectionErrorBody]`
- **Error**: `StartSegmentDetectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget19OrStr` | `amazon_rekognition/models/enums/x_amz_target19.py` |
| `StartSegmentDetectionErrorBody` | `amazon_rekognition/errors/start_segment_detection_error.py` |

### client.operations.tag_resource

- **Route**: `POST /#TagResource`
- **Auth**: `sigv4`
- **Signature**: `def tag_resource(x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TagResourceErrorBody]`
- **Error**: `TagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget24OrStr` | `amazon_rekognition/models/enums/x_amz_target24.py` |
| `TagResourceErrorBody` | `amazon_rekognition/errors/tag_resource_error.py` |

### client.operations.untag_resource

- **Route**: `POST /#UntagResource`
- **Auth**: `sigv4`
- **Signature**: `def untag_resource(x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UntagResourceErrorBody]`
- **Error**: `UntagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget25OrStr` | `amazon_rekognition/models/enums/x_amz_target25.py` |
| `UntagResourceErrorBody` | `amazon_rekognition/errors/untag_resource_error.py` |

### client.operations.update_dataset_entries

- **Route**: `POST /#UpdateDatasetEntries`
- **Auth**: `sigv4`
- **Signature**: `def update_dataset_entries(x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateDatasetEntriesErrorBody]`
- **Error**: `UpdateDatasetEntriesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget21OrStr` | `amazon_rekognition/models/enums/x_amz_target21.py` |
| `UpdateDatasetEntriesErrorBody` | `amazon_rekognition/errors/update_dataset_entries_error.py` |

