<!-- Generated file — do not edit; regenerated with the SDK. -->

# UploadApi — operations

Accessor: `client.upload_api` · Source: `bundle_social/apis/upload_api.py` · 12 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.upload_api.upload_abort_multipart_upload

- **Route**: `POST /api/v1/upload/multipart/abort`
- **Auth**: `api_key_auth`
- **Signature**: `def upload_abort_multipart_upload(*, body: ApiV1UploadMultipartAbortRequest | ApiV1UploadMultipartAbortRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1UploadMultipartAbortResponse`
- **Returns (raw)**: `ApiResult[ApiV1UploadMultipartAbortResponse, UploadAbortMultipartUploadErrorBody]`
- **Error**: `UploadAbortMultipartUploadErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1UploadMultipartAbort400Error1` [400] · `ApiV1UploadMultipartAbort401Error1` [401] · `ApiV1UploadMultipartAbort403Error1` [403] · `ApiV1UploadMultipartAbort404Error1` [404] · `ApiV1UploadMultipartAbort429Error1` [429] · `ApiV1UploadMultipartAbort500Error1` [500] · `ApiV1UploadMultipartAbort502Error1` [502] · `ApiV1UploadMultipartAbort503Error1` [503] · `ApiV1UploadMultipartAbort504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1UploadMultipartAbortRequest` | `bundle_social/models/api_v1_upload_multipart_abort_request.py` |
| `ApiV1UploadMultipartAbortRequestDict` | `bundle_social/models/api_v1_upload_multipart_abort_request.py` |
| `ApiV1UploadMultipartAbortResponse` | `bundle_social/models/api_v1_upload_multipart_abort_response.py` |
| `UploadAbortMultipartUploadErrorBody` | `bundle_social/errors/upload_abort_multipart_upload_error.py` |
| `ApiV1UploadMultipartAbort400Error1` | `bundle_social/models/api_v1_upload_multipart_abort400_error1.py` |
| `ApiV1UploadMultipartAbort401Error1` | `bundle_social/models/api_v1_upload_multipart_abort401_error1.py` |
| `ApiV1UploadMultipartAbort403Error1` | `bundle_social/models/api_v1_upload_multipart_abort403_error1.py` |
| `ApiV1UploadMultipartAbort404Error1` | `bundle_social/models/api_v1_upload_multipart_abort404_error1.py` |
| `ApiV1UploadMultipartAbort429Error1` | `bundle_social/models/api_v1_upload_multipart_abort429_error1.py` |
| `ApiV1UploadMultipartAbort500Error1` | `bundle_social/models/api_v1_upload_multipart_abort500_error1.py` |
| `ApiV1UploadMultipartAbort502Error1` | `bundle_social/models/api_v1_upload_multipart_abort502_error1.py` |
| `ApiV1UploadMultipartAbort503Error1` | `bundle_social/models/api_v1_upload_multipart_abort503_error1.py` |
| `ApiV1UploadMultipartAbort504Error1` | `bundle_social/models/api_v1_upload_multipart_abort504_error1.py` |

### client.upload_api.upload_complete_multipart_upload

- **Route**: `POST /api/v1/upload/multipart/complete`
- **Auth**: `api_key_auth`
- **Signature**: `def upload_complete_multipart_upload(*, body: ApiV1UploadMultipartCompleteRequest | ApiV1UploadMultipartCompleteRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1UploadMultipartCompleteResponse`
- **Returns (raw)**: `ApiResult[ApiV1UploadMultipartCompleteResponse, UploadCompleteMultipartUploadErrorBody]`
- **Error**: `UploadCompleteMultipartUploadErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1UploadMultipartComplete400Error1` [400] · `ApiV1UploadMultipartComplete401Error1` [401] · `ApiV1UploadMultipartComplete403Error1` [403] · `ApiV1UploadMultipartComplete404Error1` [404] · `ApiV1UploadMultipartComplete429Error1` [429] · `ApiV1UploadMultipartComplete500Error1` [500] · `ApiV1UploadMultipartComplete502Error1` [502] · `ApiV1UploadMultipartComplete503Error1` [503] · `ApiV1UploadMultipartComplete504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1UploadMultipartCompleteRequest` | `bundle_social/models/api_v1_upload_multipart_complete_request.py` |
| `ApiV1UploadMultipartCompleteRequestDict` | `bundle_social/models/api_v1_upload_multipart_complete_request.py` |
| `ApiV1UploadMultipartCompleteResponse` | `bundle_social/models/api_v1_upload_multipart_complete_response.py` |
| `UploadCompleteMultipartUploadErrorBody` | `bundle_social/errors/upload_complete_multipart_upload_error.py` |
| `ApiV1UploadMultipartComplete400Error1` | `bundle_social/models/api_v1_upload_multipart_complete400_error1.py` |
| `ApiV1UploadMultipartComplete401Error1` | `bundle_social/models/api_v1_upload_multipart_complete401_error1.py` |
| `ApiV1UploadMultipartComplete403Error1` | `bundle_social/models/api_v1_upload_multipart_complete403_error1.py` |
| `ApiV1UploadMultipartComplete404Error1` | `bundle_social/models/api_v1_upload_multipart_complete404_error1.py` |
| `ApiV1UploadMultipartComplete429Error1` | `bundle_social/models/api_v1_upload_multipart_complete429_error1.py` |
| `ApiV1UploadMultipartComplete500Error1` | `bundle_social/models/api_v1_upload_multipart_complete500_error1.py` |
| `ApiV1UploadMultipartComplete502Error1` | `bundle_social/models/api_v1_upload_multipart_complete502_error1.py` |
| `ApiV1UploadMultipartComplete503Error1` | `bundle_social/models/api_v1_upload_multipart_complete503_error1.py` |
| `ApiV1UploadMultipartComplete504Error1` | `bundle_social/models/api_v1_upload_multipart_complete504_error1.py` |

### client.upload_api.upload_create

- **Route**: `POST /api/v1/upload/`
- **Auth**: `api_key_auth`
- **Signature**: `def upload_create(*, team_id: str | None = None, file: FileInput | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `team_id` — multipart field `teamId` · `file` — multipart file
- **Returns (parsed)**: `ApiV1UploadResponse1`
- **Returns (raw)**: `ApiResult[ApiV1UploadResponse1, UploadCreateErrorBody]`
- **Error**: `UploadCreateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Upload400Error1` [400] · `ApiV1Upload401Error1` [401] · `ApiV1Upload403Error1` [403] · `ApiV1Upload404Error1` [404] · `ApiV1Upload429Error1` [429] · `ApiV1Upload500Error1` [500] · `ApiV1Upload502Error1` [502] · `ApiV1Upload503Error1` [503] · `ApiV1Upload504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1UploadResponse1` | `bundle_social/models/api_v1_upload_response1.py` |
| `UploadCreateErrorBody` | `bundle_social/errors/upload_create_error.py` |
| `ApiV1Upload400Error1` | `bundle_social/models/api_v1_upload400_error1.py` |
| `ApiV1Upload401Error1` | `bundle_social/models/api_v1_upload401_error1.py` |
| `ApiV1Upload403Error1` | `bundle_social/models/api_v1_upload403_error1.py` |
| `ApiV1Upload404Error1` | `bundle_social/models/api_v1_upload404_error1.py` |
| `ApiV1Upload429Error1` | `bundle_social/models/api_v1_upload429_error1.py` |
| `ApiV1Upload500Error1` | `bundle_social/models/api_v1_upload500_error1.py` |
| `ApiV1Upload502Error1` | `bundle_social/models/api_v1_upload502_error1.py` |
| `ApiV1Upload503Error1` | `bundle_social/models/api_v1_upload503_error1.py` |
| `ApiV1Upload504Error1` | `bundle_social/models/api_v1_upload504_error1.py` |

### client.upload_api.upload_create_from_url

- **Route**: `POST /api/v1/upload/from-url`
- **Auth**: `api_key_auth`
- **Signature**: `def upload_create_from_url(*, body: ApiV1UploadFromUrlRequest | ApiV1UploadFromUrlRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1UploadFromUrlResponse`
- **Returns (raw)**: `ApiResult[ApiV1UploadFromUrlResponse, UploadCreateFromUrlErrorBody]`
- **Error**: `UploadCreateFromUrlErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1UploadFromUrl400Error1` [400] · `ApiV1UploadFromUrl401Error1` [401] · `ApiV1UploadFromUrl403Error1` [403] · `ApiV1UploadFromUrl404Error1` [404] · `ApiV1UploadFromUrl429Error1` [429] · `ApiV1UploadFromUrl500Error1` [500] · `ApiV1UploadFromUrl502Error1` [502] · `ApiV1UploadFromUrl503Error1` [503] · `ApiV1UploadFromUrl504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1UploadFromUrlRequest` | `bundle_social/models/api_v1_upload_from_url_request.py` |
| `ApiV1UploadFromUrlRequestDict` | `bundle_social/models/api_v1_upload_from_url_request.py` |
| `ApiV1UploadFromUrlResponse` | `bundle_social/models/api_v1_upload_from_url_response.py` |
| `UploadCreateFromUrlErrorBody` | `bundle_social/errors/upload_create_from_url_error.py` |
| `ApiV1UploadFromUrl400Error1` | `bundle_social/models/api_v1_upload_from_url400_error1.py` |
| `ApiV1UploadFromUrl401Error1` | `bundle_social/models/api_v1_upload_from_url401_error1.py` |
| `ApiV1UploadFromUrl403Error1` | `bundle_social/models/api_v1_upload_from_url403_error1.py` |
| `ApiV1UploadFromUrl404Error1` | `bundle_social/models/api_v1_upload_from_url404_error1.py` |
| `ApiV1UploadFromUrl429Error1` | `bundle_social/models/api_v1_upload_from_url429_error1.py` |
| `ApiV1UploadFromUrl500Error1` | `bundle_social/models/api_v1_upload_from_url500_error1.py` |
| `ApiV1UploadFromUrl502Error1` | `bundle_social/models/api_v1_upload_from_url502_error1.py` |
| `ApiV1UploadFromUrl503Error1` | `bundle_social/models/api_v1_upload_from_url503_error1.py` |
| `ApiV1UploadFromUrl504Error1` | `bundle_social/models/api_v1_upload_from_url504_error1.py` |

### client.upload_api.upload_delete

- **Route**: `DELETE /api/v1/upload/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def upload_delete(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1UploadResponse1`
- **Returns (raw)**: `ApiResult[ApiV1UploadResponse1, UploadDeleteErrorBody]`
- **Error**: `UploadDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Upload400Error1` [400] · `ApiV1Upload401Error1` [401] · `ApiV1Upload403Error1` [403] · `ApiV1Upload404Error1` [404] · `ApiV1Upload429Error1` [429] · `ApiV1Upload500Error1` [500] · `ApiV1Upload502Error1` [502] · `ApiV1Upload503Error1` [503] · `ApiV1Upload504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1UploadResponse1` | `bundle_social/models/api_v1_upload_response1.py` |
| `UploadDeleteErrorBody` | `bundle_social/errors/upload_delete_error.py` |
| `ApiV1Upload400Error1` | `bundle_social/models/api_v1_upload400_error1.py` |
| `ApiV1Upload401Error1` | `bundle_social/models/api_v1_upload401_error1.py` |
| `ApiV1Upload403Error1` | `bundle_social/models/api_v1_upload403_error1.py` |
| `ApiV1Upload404Error1` | `bundle_social/models/api_v1_upload404_error1.py` |
| `ApiV1Upload429Error1` | `bundle_social/models/api_v1_upload429_error1.py` |
| `ApiV1Upload500Error1` | `bundle_social/models/api_v1_upload500_error1.py` |
| `ApiV1Upload502Error1` | `bundle_social/models/api_v1_upload502_error1.py` |
| `ApiV1Upload503Error1` | `bundle_social/models/api_v1_upload503_error1.py` |
| `ApiV1Upload504Error1` | `bundle_social/models/api_v1_upload504_error1.py` |

### client.upload_api.upload_delete_many

- **Route**: `DELETE /api/v1/upload/`
- **Auth**: `api_key_auth`
- **Signature**: `def upload_delete_many(*, body: ApiV1UploadRequest | ApiV1UploadRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[ApiV1UploadResponse1]`
- **Returns (raw)**: `ApiResult[list[ApiV1UploadResponse1], UploadDeleteManyErrorBody]`
- **Error**: `UploadDeleteManyErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Upload400Error1` [400] · `ApiV1Upload401Error1` [401] · `ApiV1Upload403Error1` [403] · `ApiV1Upload404Error1` [404] · `ApiV1Upload429Error1` [429] · `ApiV1Upload500Error1` [500] · `ApiV1Upload502Error1` [502] · `ApiV1Upload503Error1` [503] · `ApiV1Upload504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1UploadRequest` | `bundle_social/models/api_v1_upload_request.py` |
| `ApiV1UploadRequestDict` | `bundle_social/models/api_v1_upload_request.py` |
| `ApiV1UploadResponse1` | `bundle_social/models/api_v1_upload_response1.py` |
| `UploadDeleteManyErrorBody` | `bundle_social/errors/upload_delete_many_error.py` |
| `ApiV1Upload400Error1` | `bundle_social/models/api_v1_upload400_error1.py` |
| `ApiV1Upload401Error1` | `bundle_social/models/api_v1_upload401_error1.py` |
| `ApiV1Upload403Error1` | `bundle_social/models/api_v1_upload403_error1.py` |
| `ApiV1Upload404Error1` | `bundle_social/models/api_v1_upload404_error1.py` |
| `ApiV1Upload429Error1` | `bundle_social/models/api_v1_upload429_error1.py` |
| `ApiV1Upload500Error1` | `bundle_social/models/api_v1_upload500_error1.py` |
| `ApiV1Upload502Error1` | `bundle_social/models/api_v1_upload502_error1.py` |
| `ApiV1Upload503Error1` | `bundle_social/models/api_v1_upload503_error1.py` |
| `ApiV1Upload504Error1` | `bundle_social/models/api_v1_upload504_error1.py` |

### client.upload_api.upload_finalize_large_upload

- **Route**: `POST /api/v1/upload/finalize`
- **Auth**: `api_key_auth`
- **Signature**: `def upload_finalize_large_upload(*, body: ApiV1UploadFinalizeRequest | ApiV1UploadFinalizeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1UploadFinalizeResponse`
- **Returns (raw)**: `ApiResult[ApiV1UploadFinalizeResponse, UploadFinalizeLargeUploadErrorBody]`
- **Error**: `UploadFinalizeLargeUploadErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1UploadFinalize400Error1` [400] · `ApiV1UploadFinalize401Error1` [401] · `ApiV1UploadFinalize403Error1` [403] · `ApiV1UploadFinalize404Error1` [404] · `ApiV1UploadFinalize429Error1` [429] · `ApiV1UploadFinalize500Error1` [500] · `ApiV1UploadFinalize502Error1` [502] · `ApiV1UploadFinalize503Error1` [503] · `ApiV1UploadFinalize504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1UploadFinalizeRequest` | `bundle_social/models/api_v1_upload_finalize_request.py` |
| `ApiV1UploadFinalizeRequestDict` | `bundle_social/models/api_v1_upload_finalize_request.py` |
| `ApiV1UploadFinalizeResponse` | `bundle_social/models/api_v1_upload_finalize_response.py` |
| `UploadFinalizeLargeUploadErrorBody` | `bundle_social/errors/upload_finalize_large_upload_error.py` |
| `ApiV1UploadFinalize400Error1` | `bundle_social/models/api_v1_upload_finalize400_error1.py` |
| `ApiV1UploadFinalize401Error1` | `bundle_social/models/api_v1_upload_finalize401_error1.py` |
| `ApiV1UploadFinalize403Error1` | `bundle_social/models/api_v1_upload_finalize403_error1.py` |
| `ApiV1UploadFinalize404Error1` | `bundle_social/models/api_v1_upload_finalize404_error1.py` |
| `ApiV1UploadFinalize429Error1` | `bundle_social/models/api_v1_upload_finalize429_error1.py` |
| `ApiV1UploadFinalize500Error1` | `bundle_social/models/api_v1_upload_finalize500_error1.py` |
| `ApiV1UploadFinalize502Error1` | `bundle_social/models/api_v1_upload_finalize502_error1.py` |
| `ApiV1UploadFinalize503Error1` | `bundle_social/models/api_v1_upload_finalize503_error1.py` |
| `ApiV1UploadFinalize504Error1` | `bundle_social/models/api_v1_upload_finalize504_error1.py` |

### client.upload_api.upload_get

- **Route**: `GET /api/v1/upload/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def upload_get(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1UploadResponse`
- **Returns (raw)**: `ApiResult[ApiV1UploadResponse, UploadGetErrorBody]`
- **Error**: `UploadGetErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Upload400Error1` [400] · `ApiV1Upload401Error1` [401] · `ApiV1Upload403Error1` [403] · `ApiV1Upload404Error1` [404] · `ApiV1Upload429Error1` [429] · `ApiV1Upload500Error1` [500] · `ApiV1Upload502Error1` [502] · `ApiV1Upload503Error1` [503] · `ApiV1Upload504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1UploadResponse` | `bundle_social/models/api_v1_upload_response.py` |
| `UploadGetErrorBody` | `bundle_social/errors/upload_get_error.py` |
| `ApiV1Upload400Error1` | `bundle_social/models/api_v1_upload400_error1.py` |
| `ApiV1Upload401Error1` | `bundle_social/models/api_v1_upload401_error1.py` |
| `ApiV1Upload403Error1` | `bundle_social/models/api_v1_upload403_error1.py` |
| `ApiV1Upload404Error1` | `bundle_social/models/api_v1_upload404_error1.py` |
| `ApiV1Upload429Error1` | `bundle_social/models/api_v1_upload429_error1.py` |
| `ApiV1Upload500Error1` | `bundle_social/models/api_v1_upload500_error1.py` |
| `ApiV1Upload502Error1` | `bundle_social/models/api_v1_upload502_error1.py` |
| `ApiV1Upload503Error1` | `bundle_social/models/api_v1_upload503_error1.py` |
| `ApiV1Upload504Error1` | `bundle_social/models/api_v1_upload504_error1.py` |

### client.upload_api.upload_get_list

- **Route**: `GET /api/v1/upload/`
- **Auth**: `api_key_auth`
- **Signature**: `def upload_get_list(*, team_id: str | None = None, type_: TypeBundleSocialUploadApiOrStr | None = None, types: list[TypeBundleSocialUploadApiOrStr] | None = None, status: StatusBundleSocialUploadApiOrStr | None = None, ids: list[str] | None = None, urls: list[str] | None = None, limit: int | None = None, include_posts: IncludePosts2 | IncludePosts2Dict | None = None, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `team_id` — query `teamId` · `type_` — query `type` · `types` — query · `status` — query · `ids` — query · `urls` — query · `limit` — query · `include_posts` — query `includePosts` · `offset` — query
- **Returns (parsed)**: `list[ApiV1UploadResponse]`
- **Returns (raw)**: `ApiResult[list[ApiV1UploadResponse], UploadGetListErrorBody]`
- **Error**: `UploadGetListErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Upload400Error1` [400] · `ApiV1Upload401Error1` [401] · `ApiV1Upload403Error1` [403] · `ApiV1Upload404Error1` [404] · `ApiV1Upload429Error1` [429] · `ApiV1Upload500Error1` [500] · `ApiV1Upload502Error1` [502] · `ApiV1Upload503Error1` [503] · `ApiV1Upload504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TypeBundleSocialUploadApiOrStr` | `bundle_social/models/enums/type_bundle_social_upload_api.py` |
| `StatusBundleSocialUploadApiOrStr` | `bundle_social/models/enums/status_bundle_social_upload_api.py` |
| `IncludePosts2` | `bundle_social/models/unions/include_posts2.py` |
| `IncludePosts2Dict` | `bundle_social/models/unions/include_posts2.py` |
| `ApiV1UploadResponse` | `bundle_social/models/api_v1_upload_response.py` |
| `UploadGetListErrorBody` | `bundle_social/errors/upload_get_list_error.py` |
| `ApiV1Upload400Error1` | `bundle_social/models/api_v1_upload400_error1.py` |
| `ApiV1Upload401Error1` | `bundle_social/models/api_v1_upload401_error1.py` |
| `ApiV1Upload403Error1` | `bundle_social/models/api_v1_upload403_error1.py` |
| `ApiV1Upload404Error1` | `bundle_social/models/api_v1_upload404_error1.py` |
| `ApiV1Upload429Error1` | `bundle_social/models/api_v1_upload429_error1.py` |
| `ApiV1Upload500Error1` | `bundle_social/models/api_v1_upload500_error1.py` |
| `ApiV1Upload502Error1` | `bundle_social/models/api_v1_upload502_error1.py` |
| `ApiV1Upload503Error1` | `bundle_social/models/api_v1_upload503_error1.py` |
| `ApiV1Upload504Error1` | `bundle_social/models/api_v1_upload504_error1.py` |

### client.upload_api.upload_init_large_upload

- **Route**: `POST /api/v1/upload/init`
- **Auth**: `api_key_auth`
- **Signature**: `def upload_init_large_upload(*, body: ApiV1UploadInitRequest | ApiV1UploadInitRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1UploadInitResponse`
- **Returns (raw)**: `ApiResult[ApiV1UploadInitResponse, UploadInitLargeUploadErrorBody]`
- **Error**: `UploadInitLargeUploadErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1UploadInit400Error1` [400] · `ApiV1UploadInit401Error1` [401] · `ApiV1UploadInit403Error1` [403] · `ApiV1UploadInit404Error1` [404] · `ApiV1UploadInit429Error1` [429] · `ApiV1UploadInit500Error1` [500] · `ApiV1UploadInit502Error1` [502] · `ApiV1UploadInit503Error1` [503] · `ApiV1UploadInit504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1UploadInitRequest` | `bundle_social/models/api_v1_upload_init_request.py` |
| `ApiV1UploadInitRequestDict` | `bundle_social/models/api_v1_upload_init_request.py` |
| `ApiV1UploadInitResponse` | `bundle_social/models/api_v1_upload_init_response.py` |
| `UploadInitLargeUploadErrorBody` | `bundle_social/errors/upload_init_large_upload_error.py` |
| `ApiV1UploadInit400Error1` | `bundle_social/models/api_v1_upload_init400_error1.py` |
| `ApiV1UploadInit401Error1` | `bundle_social/models/api_v1_upload_init401_error1.py` |
| `ApiV1UploadInit403Error1` | `bundle_social/models/api_v1_upload_init403_error1.py` |
| `ApiV1UploadInit404Error1` | `bundle_social/models/api_v1_upload_init404_error1.py` |
| `ApiV1UploadInit429Error1` | `bundle_social/models/api_v1_upload_init429_error1.py` |
| `ApiV1UploadInit500Error1` | `bundle_social/models/api_v1_upload_init500_error1.py` |
| `ApiV1UploadInit502Error1` | `bundle_social/models/api_v1_upload_init502_error1.py` |
| `ApiV1UploadInit503Error1` | `bundle_social/models/api_v1_upload_init503_error1.py` |
| `ApiV1UploadInit504Error1` | `bundle_social/models/api_v1_upload_init504_error1.py` |

### client.upload_api.upload_init_multipart_upload

- **Route**: `POST /api/v1/upload/multipart/init`
- **Auth**: `api_key_auth`
- **Signature**: `def upload_init_multipart_upload(*, body: ApiV1UploadMultipartInitRequest | ApiV1UploadMultipartInitRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1UploadMultipartInitResponse`
- **Returns (raw)**: `ApiResult[ApiV1UploadMultipartInitResponse, UploadInitMultipartUploadErrorBody]`
- **Error**: `UploadInitMultipartUploadErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1UploadMultipartInit400Error1` [400] · `ApiV1UploadMultipartInit401Error1` [401] · `ApiV1UploadMultipartInit403Error1` [403] · `ApiV1UploadMultipartInit404Error1` [404] · `ApiV1UploadMultipartInit429Error1` [429] · `ApiV1UploadMultipartInit500Error1` [500] · `ApiV1UploadMultipartInit502Error1` [502] · `ApiV1UploadMultipartInit503Error1` [503] · `ApiV1UploadMultipartInit504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1UploadMultipartInitRequest` | `bundle_social/models/api_v1_upload_multipart_init_request.py` |
| `ApiV1UploadMultipartInitRequestDict` | `bundle_social/models/api_v1_upload_multipart_init_request.py` |
| `ApiV1UploadMultipartInitResponse` | `bundle_social/models/api_v1_upload_multipart_init_response.py` |
| `UploadInitMultipartUploadErrorBody` | `bundle_social/errors/upload_init_multipart_upload_error.py` |
| `ApiV1UploadMultipartInit400Error1` | `bundle_social/models/api_v1_upload_multipart_init400_error1.py` |
| `ApiV1UploadMultipartInit401Error1` | `bundle_social/models/api_v1_upload_multipart_init401_error1.py` |
| `ApiV1UploadMultipartInit403Error1` | `bundle_social/models/api_v1_upload_multipart_init403_error1.py` |
| `ApiV1UploadMultipartInit404Error1` | `bundle_social/models/api_v1_upload_multipart_init404_error1.py` |
| `ApiV1UploadMultipartInit429Error1` | `bundle_social/models/api_v1_upload_multipart_init429_error1.py` |
| `ApiV1UploadMultipartInit500Error1` | `bundle_social/models/api_v1_upload_multipart_init500_error1.py` |
| `ApiV1UploadMultipartInit502Error1` | `bundle_social/models/api_v1_upload_multipart_init502_error1.py` |
| `ApiV1UploadMultipartInit503Error1` | `bundle_social/models/api_v1_upload_multipart_init503_error1.py` |
| `ApiV1UploadMultipartInit504Error1` | `bundle_social/models/api_v1_upload_multipart_init504_error1.py` |

### client.upload_api.upload_sign_multipart_parts

- **Route**: `POST /api/v1/upload/multipart/sign`
- **Auth**: `api_key_auth`
- **Signature**: `def upload_sign_multipart_parts(*, body: ApiV1UploadMultipartSignRequest | ApiV1UploadMultipartSignRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1UploadMultipartSignResponse`
- **Returns (raw)**: `ApiResult[ApiV1UploadMultipartSignResponse, UploadSignMultipartPartsErrorBody]`
- **Error**: `UploadSignMultipartPartsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1UploadMultipartSign400Error1` [400] · `ApiV1UploadMultipartSign401Error1` [401] · `ApiV1UploadMultipartSign403Error1` [403] · `ApiV1UploadMultipartSign404Error1` [404] · `ApiV1UploadMultipartSign429Error1` [429] · `ApiV1UploadMultipartSign500Error1` [500] · `ApiV1UploadMultipartSign502Error1` [502] · `ApiV1UploadMultipartSign503Error1` [503] · `ApiV1UploadMultipartSign504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1UploadMultipartSignRequest` | `bundle_social/models/api_v1_upload_multipart_sign_request.py` |
| `ApiV1UploadMultipartSignRequestDict` | `bundle_social/models/api_v1_upload_multipart_sign_request.py` |
| `ApiV1UploadMultipartSignResponse` | `bundle_social/models/api_v1_upload_multipart_sign_response.py` |
| `UploadSignMultipartPartsErrorBody` | `bundle_social/errors/upload_sign_multipart_parts_error.py` |
| `ApiV1UploadMultipartSign400Error1` | `bundle_social/models/api_v1_upload_multipart_sign400_error1.py` |
| `ApiV1UploadMultipartSign401Error1` | `bundle_social/models/api_v1_upload_multipart_sign401_error1.py` |
| `ApiV1UploadMultipartSign403Error1` | `bundle_social/models/api_v1_upload_multipart_sign403_error1.py` |
| `ApiV1UploadMultipartSign404Error1` | `bundle_social/models/api_v1_upload_multipart_sign404_error1.py` |
| `ApiV1UploadMultipartSign429Error1` | `bundle_social/models/api_v1_upload_multipart_sign429_error1.py` |
| `ApiV1UploadMultipartSign500Error1` | `bundle_social/models/api_v1_upload_multipart_sign500_error1.py` |
| `ApiV1UploadMultipartSign502Error1` | `bundle_social/models/api_v1_upload_multipart_sign502_error1.py` |
| `ApiV1UploadMultipartSign503Error1` | `bundle_social/models/api_v1_upload_multipart_sign503_error1.py` |
| `ApiV1UploadMultipartSign504Error1` | `bundle_social/models/api_v1_upload_multipart_sign504_error1.py` |

