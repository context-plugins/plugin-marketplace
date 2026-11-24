<!-- Generated file — do not edit; regenerated with the SDK. -->

# FaceCollections — operations

Accessor: `client.face_collections` · Source: `amazon_rekognition/apis/face_collections.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.face_collections.create_collection

- **Route**: `POST /#CreateCollection`
- **Auth**: `sigv4`
- **Signature**: `def create_collection(x_amz_target: XAmzTarget1AmazonRekognitionFaceCollectionsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateCollectionErrorBody]`
- **Error**: `CreateCollectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonRekognitionFaceCollectionsApiOrStr` | `amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_face_collections_api.py` |
| `CreateCollectionErrorBody` | `amazon_rekognition/errors/create_collection_error.py` |

### client.face_collections.index_faces

- **Route**: `POST /#IndexFaces`
- **Auth**: `sigv4`
- **Signature**: `def index_faces(x_amz_target: XAmzTargetAmazonRekognitionFaceCollectionsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, IndexFacesErrorBody]`
- **Error**: `IndexFacesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonRekognitionFaceCollectionsApiOrStr` | `amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_face_collections_api.py` |
| `IndexFacesErrorBody` | `amazon_rekognition/errors/index_faces_error.py` |

### client.face_collections.list_collections

- **Route**: `POST /#ListCollections`
- **Auth**: `sigv4`
- **Signature**: `def list_collections(x_amz_target: XAmzTarget2AmazonRekognitionFaceCollectionsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListCollectionsErrorBody]`
- **Error**: `ListCollectionsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonRekognitionFaceCollectionsApiOrStr` | `amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_face_collections_api.py` |
| `ListCollectionsErrorBody` | `amazon_rekognition/errors/list_collections_error.py` |

