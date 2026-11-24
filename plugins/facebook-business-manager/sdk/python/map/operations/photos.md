<!-- Generated file — do not edit; regenerated with the SDK. -->

# Photos — operations

Accessor: `client.photos` · Source: `facebook_business_manager/apis/photos.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.photos.upload_page_photo

- **Route**: `POST /{page_id}/photos`
- **Auth**: `bearer_auth`
- **Signature**: `def upload_page_photo(page_id: str, body: PhotosRequest | PhotosRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `page_id`, `body`
- **Params**: `page_id` — path · `body` — JSON body
- **Returns (parsed)**: `CreateResponse`
- **Returns (raw)**: `ApiResult[CreateResponse, UploadPagePhotoErrorBody]`
- **Error**: `UploadPagePhotoErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PhotosRequest` | `facebook_business_manager/models/photos_request.py` |
| `PhotosRequestDict` | `facebook_business_manager/models/photos_request.py` |
| `CreateResponse` | `facebook_business_manager/models/create_response.py` |
| `UploadPagePhotoErrorBody` | `facebook_business_manager/errors/upload_page_photo_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

