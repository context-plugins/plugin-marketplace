<!-- Generated file — do not edit; regenerated with the SDK. -->

# FaceSearch — operations

Accessor: `client.face_search` · Source: `amazon_rekognition/apis/face_search.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.face_search.get_face_search

- **Route**: `POST /#GetFaceSearch`
- **Auth**: `sigv4`
- **Signature**: `def get_face_search(x_amz_target: XAmzTargetAmazonRekognitionFaceSearchApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetFaceSearchErrorBody]`
- **Error**: `GetFaceSearchErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonRekognitionFaceSearchApiOrStr` | `amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_face_search_api.py` |
| `GetFaceSearchErrorBody` | `amazon_rekognition/errors/get_face_search_error.py` |

### client.face_search.search_faces_by_image2

- **Route**: `POST /#SearchFacesByImage`
- **Auth**: `sigv4`
- **Signature**: `def search_faces_by_image2(x_amz_target: XAmzTarget2AmazonRekognitionFaceSearchApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SearchFacesByImage2ErrorBody]`
- **Error**: `SearchFacesByImage2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonRekognitionFaceSearchApiOrStr` | `amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_face_search_api.py` |
| `SearchFacesByImage2ErrorBody` | `amazon_rekognition/errors/search_faces_by_image2_error.py` |

### client.face_search.start_face_search

- **Route**: `POST /#StartFaceSearch`
- **Auth**: `sigv4`
- **Signature**: `def start_face_search(x_amz_target: XAmzTarget1AmazonRekognitionFaceSearchApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartFaceSearchErrorBody]`
- **Error**: `StartFaceSearchErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonRekognitionFaceSearchApiOrStr` | `amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_face_search_api.py` |
| `StartFaceSearchErrorBody` | `amazon_rekognition/errors/start_face_search_error.py` |

