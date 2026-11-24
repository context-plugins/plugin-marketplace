<!-- Generated file — do not edit; regenerated with the SDK. -->

# FacialAnalysis — operations

Accessor: `client.facial_analysis` · Source: `amazon_rekognition/apis/facial_analysis.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.facial_analysis.compare_faces

- **Route**: `POST /#CompareFaces`
- **Auth**: `sigv4`
- **Signature**: `def compare_faces(x_amz_target: XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CompareFacesErrorBody]`
- **Error**: `CompareFacesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonRekognitionFacialAnalysisApiOrStr` | `amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_facial_analysis_api.py` |
| `CompareFacesErrorBody` | `amazon_rekognition/errors/compare_faces_error.py` |

### client.facial_analysis.detect_faces

- **Route**: `POST /#DetectFaces`
- **Auth**: `sigv4`
- **Signature**: `def detect_faces(x_amz_target: XAmzTarget1AmazonRekognitionFacialAnalysisApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectFacesErrorBody]`
- **Error**: `DetectFacesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonRekognitionFacialAnalysisApiOrStr` | `amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_facial_analysis_api.py` |
| `DetectFacesErrorBody` | `amazon_rekognition/errors/detect_faces_error.py` |

