<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomLabels — operations

Accessor: `client.custom_labels` · Source: `amazon_rekognition/apis/custom_labels.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.custom_labels.detect_custom_labels

- **Route**: `POST /#DetectCustomLabels`
- **Auth**: `sigv4`
- **Signature**: `def detect_custom_labels(x_amz_target: XAmzTargetAmazonRekognitionCustomLabelsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectCustomLabelsErrorBody]`
- **Error**: `DetectCustomLabelsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonRekognitionCustomLabelsApiOrStr` | `amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_custom_labels_api.py` |
| `DetectCustomLabelsErrorBody` | `amazon_rekognition/errors/detect_custom_labels_error.py` |

