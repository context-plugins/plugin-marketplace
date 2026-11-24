<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContentModeration — operations

Accessor: `client.content_moderation` · Source: `amazon_rekognition/apis/content_moderation.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.content_moderation.detect_moderation_labels

- **Route**: `POST /#DetectModerationLabels`
- **Auth**: `sigv4`
- **Signature**: `def detect_moderation_labels(x_amz_target: XAmzTarget2AmazonRekognitionContentModerationApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectModerationLabelsErrorBody]`
- **Error**: `DetectModerationLabelsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 402, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonRekognitionContentModerationApiOrStr` | `amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_content_moderation_api.py` |
| `DetectModerationLabelsErrorBody` | `amazon_rekognition/errors/detect_moderation_labels_error.py` |

### client.content_moderation.get_content_moderation

- **Route**: `POST /#GetContentModeration`
- **Auth**: `sigv4`
- **Signature**: `def get_content_moderation(x_amz_target: XAmzTargetAmazonRekognitionContentModerationApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetContentModerationErrorBody]`
- **Error**: `GetContentModerationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonRekognitionContentModerationApiOrStr` | `amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_content_moderation_api.py` |
| `GetContentModerationErrorBody` | `amazon_rekognition/errors/get_content_moderation_error.py` |

### client.content_moderation.start_content_moderation

- **Route**: `POST /#StartContentModeration`
- **Auth**: `sigv4`
- **Signature**: `def start_content_moderation(x_amz_target: XAmzTarget1AmazonRekognitionContentModerationApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartContentModerationErrorBody]`
- **Error**: `StartContentModerationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonRekognitionContentModerationApiOrStr` | `amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_content_moderation_api.py` |
| `StartContentModerationErrorBody` | `amazon_rekognition/errors/start_content_moderation_error.py` |

