<!-- Generated file — do not edit; regenerated with the SDK. -->

# StoredVideoAnalysis — operations

Accessor: `client.stored_video_analysis` · Source: `amazon_rekognition/apis/stored_video_analysis.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.stored_video_analysis.get_label_detection

- **Route**: `POST /#GetLabelDetection`
- **Auth**: `sigv4`
- **Signature**: `def get_label_detection(x_amz_target: XAmzTargetAmazonRekognitionStoredVideoAnalysisApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetLabelDetectionErrorBody]`
- **Error**: `GetLabelDetectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonRekognitionStoredVideoAnalysisApiOrStr` | `amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_stored_video_analysis_api.py` |
| `GetLabelDetectionErrorBody` | `amazon_rekognition/errors/get_label_detection_error.py` |

### client.stored_video_analysis.start_label_detection

- **Route**: `POST /#StartLabelDetection`
- **Auth**: `sigv4`
- **Signature**: `def start_label_detection(x_amz_target: XAmzTarget1AmazonRekognitionStoredVideoAnalysisApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartLabelDetectionErrorBody]`
- **Error**: `StartLabelDetectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonRekognitionStoredVideoAnalysisApiOrStr` | `amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_stored_video_analysis_api.py` |
| `StartLabelDetectionErrorBody` | `amazon_rekognition/errors/start_label_detection_error.py` |

