<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdImages — operations

Accessor: `client.ad_images` · Source: `facebook_business_manager/apis/ad_images.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.ad_images.upload_ad_image

- **Route**: `POST /act_{ad_account_id}/adimages`
- **Auth**: `bearer_auth`
- **Signature**: `def upload_ad_image(ad_account_id: str, *, filename: FileInput | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ad_account_id`
- **Params**: `ad_account_id` — path · `filename` — multipart file
- **Returns (parsed)**: `ActAdimagesResponse`
- **Returns (raw)**: `ApiResult[ActAdimagesResponse, UploadAdImageErrorBody]`
- **Error**: `UploadAdImageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ActAdimagesResponse` | `facebook_business_manager/models/act_adimages_response.py` |
| `UploadAdImageErrorBody` | `facebook_business_manager/errors/upload_ad_image_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

