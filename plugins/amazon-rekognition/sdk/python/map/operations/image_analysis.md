<!-- Generated file — do not edit; regenerated with the SDK. -->

# ImageAnalysis — operations

Accessor: `client.image_analysis` · Source: `amazon_rekognition/apis/image_analysis.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.image_analysis.detect_labels

- **Route**: `POST /#DetectLabels`
- **Auth**: `sigv4`
- **Signature**: `def detect_labels(x_amz_target: XAmzTargetAmazonRekognitionImageAnalysisApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectLabelsErrorBody]`
- **Error**: `DetectLabelsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonRekognitionImageAnalysisApiOrStr` | `amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_image_analysis_api.py` |
| `DetectLabelsErrorBody` | `amazon_rekognition/errors/detect_labels_error.py` |

