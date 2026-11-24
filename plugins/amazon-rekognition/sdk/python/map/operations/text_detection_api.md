<!-- Generated file — do not edit; regenerated with the SDK. -->

# TextDetectionApi — operations

Accessor: `client.text_detection_api` · Source: `amazon_rekognition/apis/text_detection_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.text_detection_api.detect_text2

- **Route**: `POST /#DetectText`
- **Auth**: `sigv4`
- **Signature**: `def detect_text2(x_amz_target: XAmzTarget2AmazonRekognitionTextDetectionApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectText2ErrorBody]`
- **Error**: `DetectText2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonRekognitionTextDetectionApiOrStr` | `amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_text_detection_api.py` |
| `DetectText2ErrorBody` | `amazon_rekognition/errors/detect_text2_error.py` |

### client.text_detection_api.get_text_detection

- **Route**: `POST /#GetTextDetection`
- **Auth**: `sigv4`
- **Signature**: `def get_text_detection(x_amz_target: XAmzTargetAmazonRekognitionTextDetectionApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetTextDetectionErrorBody]`
- **Error**: `GetTextDetectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonRekognitionTextDetectionApiOrStr` | `amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_text_detection_api.py` |
| `GetTextDetectionErrorBody` | `amazon_rekognition/errors/get_text_detection_error.py` |

### client.text_detection_api.start_text_detection

- **Route**: `POST /#StartTextDetection`
- **Auth**: `sigv4`
- **Signature**: `def start_text_detection(x_amz_target: XAmzTarget1AmazonRekognitionTextDetectionApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartTextDetectionErrorBody]`
- **Error**: `StartTextDetectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonRekognitionTextDetectionApiOrStr` | `amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_text_detection_api.py` |
| `StartTextDetectionErrorBody` | `amazon_rekognition/errors/start_text_detection_error.py` |

