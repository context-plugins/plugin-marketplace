<!-- Generated file — do not edit; regenerated with the SDK. -->

# FaceApi — operations

Accessor: `client.face_api` · Source: `amazon_rekognition/apis/face_api.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.face_api.associate_faces

- **Route**: `POST /#AssociateFaces`
- **Auth**: `sigv4`
- **Signature**: `def associate_faces(x_amz_target: XAmzTargetAmazonRekognitionFaceApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AssociateFacesErrorBody]`
- **Error**: `AssociateFacesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonRekognitionFaceApiOrStr` | `amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_face_api.py` |
| `AssociateFacesErrorBody` | `amazon_rekognition/errors/associate_faces_error.py` |

### client.face_api.delete_faces

- **Route**: `POST /#DeleteFaces`
- **Auth**: `sigv4`
- **Signature**: `def delete_faces(x_amz_target: XAmzTarget1AmazonRekognitionFaceApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteFacesErrorBody]`
- **Error**: `DeleteFacesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonRekognitionFaceApiOrStr` | `amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_face_api.py` |
| `DeleteFacesErrorBody` | `amazon_rekognition/errors/delete_faces_error.py` |

### client.face_api.disassociate_faces

- **Route**: `POST /#DisassociateFaces`
- **Auth**: `sigv4`
- **Signature**: `def disassociate_faces(x_amz_target: XAmzTarget2AmazonRekognitionFaceApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DisassociateFacesErrorBody]`
- **Error**: `DisassociateFacesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonRekognitionFaceApiOrStr` | `amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_face_api.py` |
| `DisassociateFacesErrorBody` | `amazon_rekognition/errors/disassociate_faces_error.py` |

### client.face_api.list_faces

- **Route**: `POST /#ListFaces`
- **Auth**: `sigv4`
- **Signature**: `def list_faces(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListFacesErrorBody]`
- **Error**: `ListFacesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3OrStr` | `amazon_rekognition/models/enums/x_amz_target3.py` |
| `ListFacesErrorBody` | `amazon_rekognition/errors/list_faces_error.py` |

### client.face_api.search_faces

- **Route**: `POST /#SearchFaces`
- **Auth**: `sigv4`
- **Signature**: `def search_faces(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SearchFacesErrorBody]`
- **Error**: `SearchFacesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4OrStr` | `amazon_rekognition/models/enums/x_amz_target4.py` |
| `SearchFacesErrorBody` | `amazon_rekognition/errors/search_faces_error.py` |

### client.face_api.search_faces_by_image

- **Route**: `POST /#SearchFacesByImage`
- **Auth**: `sigv4`
- **Signature**: `def search_faces_by_image(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SearchFacesByImageErrorBody]`
- **Error**: `SearchFacesByImageErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget5OrStr` | `amazon_rekognition/models/enums/x_amz_target5.py` |
| `SearchFacesByImageErrorBody` | `amazon_rekognition/errors/search_faces_by_image_error.py` |

