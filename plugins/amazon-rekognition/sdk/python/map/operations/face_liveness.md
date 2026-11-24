<!-- Generated file — do not edit; regenerated with the SDK. -->

# FaceLiveness — operations

Accessor: `client.face_liveness` · Source: `amazon_rekognition/apis/face_liveness.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.face_liveness.create_face_liveness_session

- **Route**: `POST /#CreateFaceLivenessSession`
- **Auth**: `sigv4`
- **Signature**: `def create_face_liveness_session(x_amz_target: XAmzTargetAmazonRekognitionFaceLivenessApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateFaceLivenessSessionErrorBody]`
- **Error**: `CreateFaceLivenessSessionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonRekognitionFaceLivenessApiOrStr` | `amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_face_liveness_api.py` |
| `CreateFaceLivenessSessionErrorBody` | `amazon_rekognition/errors/create_face_liveness_session_error.py` |

### client.face_liveness.get_face_liveness_session_results

- **Route**: `POST /#GetFaceLivenessSessionResults`
- **Auth**: `sigv4`
- **Signature**: `def get_face_liveness_session_results(x_amz_target: XAmzTarget1AmazonRekognitionFaceLivenessApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetFaceLivenessSessionResultsErrorBody]`
- **Error**: `GetFaceLivenessSessionResultsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonRekognitionFaceLivenessApiOrStr` | `amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_face_liveness_api.py` |
| `GetFaceLivenessSessionResultsErrorBody` | `amazon_rekognition/errors/get_face_liveness_session_results_error.py` |

