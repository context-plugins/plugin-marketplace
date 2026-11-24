<!-- Generated file — do not edit; regenerated with the SDK. -->

# PostImport — operations

Accessor: `client.post_import` · Source: `bundle_social/apis/post_import.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.post_import.post_import_create

- **Route**: `POST /api/v1/post-history-import/`
- **Auth**: `api_key_auth`
- **Signature**: `def post_import_create(*, body: ApiV1PostHistoryImportRequest | ApiV1PostHistoryImportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1PostHistoryImportResponse`
- **Returns (raw)**: `ApiResult[ApiV1PostHistoryImportResponse, PostImportCreateErrorBody]`
- **Error**: `PostImportCreateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PostHistoryImport400Error1` [400] · `ApiV1PostHistoryImport401Error1` [401] · `ApiV1PostHistoryImport403Error1` [403] · `ApiV1PostHistoryImport404Error1` [404] · `ApiV1PostHistoryImport409Error1` [409] · `ApiV1PostHistoryImport429Error1` [429] · `ApiV1PostHistoryImport500Error1` [500] · `ApiV1PostHistoryImport502Error1` [502] · `ApiV1PostHistoryImport503Error1` [503] · `ApiV1PostHistoryImport504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PostHistoryImportRequest` | `bundle_social/models/api_v1_post_history_import_request.py` |
| `ApiV1PostHistoryImportRequestDict` | `bundle_social/models/api_v1_post_history_import_request.py` |
| `ApiV1PostHistoryImportResponse` | `bundle_social/models/api_v1_post_history_import_response.py` |
| `PostImportCreateErrorBody` | `bundle_social/errors/post_import_create_error.py` |
| `ApiV1PostHistoryImport400Error1` | `bundle_social/models/api_v1_post_history_import400_error1.py` |
| `ApiV1PostHistoryImport401Error1` | `bundle_social/models/api_v1_post_history_import401_error1.py` |
| `ApiV1PostHistoryImport403Error1` | `bundle_social/models/api_v1_post_history_import403_error1.py` |
| `ApiV1PostHistoryImport404Error1` | `bundle_social/models/api_v1_post_history_import404_error1.py` |
| `ApiV1PostHistoryImport409Error1` | `bundle_social/models/api_v1_post_history_import409_error1.py` |
| `ApiV1PostHistoryImport429Error1` | `bundle_social/models/api_v1_post_history_import429_error1.py` |
| `ApiV1PostHistoryImport500Error1` | `bundle_social/models/api_v1_post_history_import500_error1.py` |
| `ApiV1PostHistoryImport502Error1` | `bundle_social/models/api_v1_post_history_import502_error1.py` |
| `ApiV1PostHistoryImport503Error1` | `bundle_social/models/api_v1_post_history_import503_error1.py` |
| `ApiV1PostHistoryImport504Error1` | `bundle_social/models/api_v1_post_history_import504_error1.py` |

### client.post_import.post_import_delete_imported_posts

- **Route**: `DELETE /api/v1/post-history-import/posts`
- **Auth**: `api_key_auth`
- **Signature**: `def post_import_delete_imported_posts(*, body: ApiV1PostHistoryImportPostsRequest | ApiV1PostHistoryImportPostsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1PostHistoryImportPostsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1PostHistoryImportPostsResponse1, PostImportDeleteImportedPostsErrorBody]`
- **Error**: `PostImportDeleteImportedPostsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PostHistoryImportPosts400Error1` [400] · `ApiV1PostHistoryImportPosts401Error1` [401] · `ApiV1PostHistoryImportPosts403Error1` [403] · `ApiV1PostHistoryImportPosts404Error1` [404] · `ApiV1PostHistoryImportPosts429Error1` [429] · `ApiV1PostHistoryImportPosts500Error1` [500] · `ApiV1PostHistoryImportPosts502Error1` [502] · `ApiV1PostHistoryImportPosts503Error1` [503] · `ApiV1PostHistoryImportPosts504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PostHistoryImportPostsRequest` | `bundle_social/models/api_v1_post_history_import_posts_request.py` |
| `ApiV1PostHistoryImportPostsRequestDict` | `bundle_social/models/api_v1_post_history_import_posts_request.py` |
| `ApiV1PostHistoryImportPostsResponse1` | `bundle_social/models/api_v1_post_history_import_posts_response1.py` |
| `PostImportDeleteImportedPostsErrorBody` | `bundle_social/errors/post_import_delete_imported_posts_error.py` |
| `ApiV1PostHistoryImportPosts400Error1` | `bundle_social/models/api_v1_post_history_import_posts400_error1.py` |
| `ApiV1PostHistoryImportPosts401Error1` | `bundle_social/models/api_v1_post_history_import_posts401_error1.py` |
| `ApiV1PostHistoryImportPosts403Error1` | `bundle_social/models/api_v1_post_history_import_posts403_error1.py` |
| `ApiV1PostHistoryImportPosts404Error1` | `bundle_social/models/api_v1_post_history_import_posts404_error1.py` |
| `ApiV1PostHistoryImportPosts429Error1` | `bundle_social/models/api_v1_post_history_import_posts429_error1.py` |
| `ApiV1PostHistoryImportPosts500Error1` | `bundle_social/models/api_v1_post_history_import_posts500_error1.py` |
| `ApiV1PostHistoryImportPosts502Error1` | `bundle_social/models/api_v1_post_history_import_posts502_error1.py` |
| `ApiV1PostHistoryImportPosts503Error1` | `bundle_social/models/api_v1_post_history_import_posts503_error1.py` |
| `ApiV1PostHistoryImportPosts504Error1` | `bundle_social/models/api_v1_post_history_import_posts504_error1.py` |

### client.post_import.post_import_get_by_id

- **Route**: `GET /api/v1/post-history-import/{importId}`
- **Auth**: `api_key_auth`
- **Signature**: `def post_import_get_by_id(import_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `import_id`
- **Params**: `import_id` — path `importId`
- **Returns (parsed)**: `ApiV1PostHistoryImportResponse`
- **Returns (raw)**: `ApiResult[ApiV1PostHistoryImportResponse, PostImportGetByIdErrorBody]`
- **Error**: `PostImportGetByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PostHistoryImport400Error1` [400] · `ApiV1PostHistoryImport401Error1` [401] · `ApiV1PostHistoryImport403Error1` [403] · `ApiV1PostHistoryImport404Error1` [404] · `ApiV1PostHistoryImport429Error1` [429] · `ApiV1PostHistoryImport500Error1` [500] · `ApiV1PostHistoryImport502Error1` [502] · `ApiV1PostHistoryImport503Error1` [503] · `ApiV1PostHistoryImport504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PostHistoryImportResponse` | `bundle_social/models/api_v1_post_history_import_response.py` |
| `PostImportGetByIdErrorBody` | `bundle_social/errors/post_import_get_by_id_error.py` |
| `ApiV1PostHistoryImport400Error1` | `bundle_social/models/api_v1_post_history_import400_error1.py` |
| `ApiV1PostHistoryImport401Error1` | `bundle_social/models/api_v1_post_history_import401_error1.py` |
| `ApiV1PostHistoryImport403Error1` | `bundle_social/models/api_v1_post_history_import403_error1.py` |
| `ApiV1PostHistoryImport404Error1` | `bundle_social/models/api_v1_post_history_import404_error1.py` |
| `ApiV1PostHistoryImport429Error1` | `bundle_social/models/api_v1_post_history_import429_error1.py` |
| `ApiV1PostHistoryImport500Error1` | `bundle_social/models/api_v1_post_history_import500_error1.py` |
| `ApiV1PostHistoryImport502Error1` | `bundle_social/models/api_v1_post_history_import502_error1.py` |
| `ApiV1PostHistoryImport503Error1` | `bundle_social/models/api_v1_post_history_import503_error1.py` |
| `ApiV1PostHistoryImport504Error1` | `bundle_social/models/api_v1_post_history_import504_error1.py` |

### client.post_import.post_import_get_imported_posts

- **Route**: `GET /api/v1/post-history-import/posts`
- **Auth**: `api_key_auth`
- **Signature**: `def post_import_get_imported_posts(team_id: str, social_account_type: SocialAccountTypeBundleSocialPostImportApiOrStr, *, limit: float | None = 50.0, offset: float | None = 0.0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`, `social_account_type`
- **Params**: `team_id` — query `teamId` · `social_account_type` — query `socialAccountType` · `limit` — query · `offset` — query
- **Returns (parsed)**: `ApiV1PostHistoryImportPostsResponse`
- **Returns (raw)**: `ApiResult[ApiV1PostHistoryImportPostsResponse, PostImportGetImportedPostsErrorBody]`
- **Error**: `PostImportGetImportedPostsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PostHistoryImportPosts400Error1` [400] · `ApiV1PostHistoryImportPosts401Error1` [401] · `ApiV1PostHistoryImportPosts403Error1` [403] · `ApiV1PostHistoryImportPosts404Error1` [404] · `ApiV1PostHistoryImportPosts429Error1` [429] · `ApiV1PostHistoryImportPosts500Error1` [500] · `ApiV1PostHistoryImportPosts502Error1` [502] · `ApiV1PostHistoryImportPosts503Error1` [503] · `ApiV1PostHistoryImportPosts504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SocialAccountTypeBundleSocialPostImportApiOrStr` | `bundle_social/models/enums/social_account_type_bundle_social_post_import_api.py` |
| `ApiV1PostHistoryImportPostsResponse` | `bundle_social/models/api_v1_post_history_import_posts_response.py` |
| `PostImportGetImportedPostsErrorBody` | `bundle_social/errors/post_import_get_imported_posts_error.py` |
| `ApiV1PostHistoryImportPosts400Error1` | `bundle_social/models/api_v1_post_history_import_posts400_error1.py` |
| `ApiV1PostHistoryImportPosts401Error1` | `bundle_social/models/api_v1_post_history_import_posts401_error1.py` |
| `ApiV1PostHistoryImportPosts403Error1` | `bundle_social/models/api_v1_post_history_import_posts403_error1.py` |
| `ApiV1PostHistoryImportPosts404Error1` | `bundle_social/models/api_v1_post_history_import_posts404_error1.py` |
| `ApiV1PostHistoryImportPosts429Error1` | `bundle_social/models/api_v1_post_history_import_posts429_error1.py` |
| `ApiV1PostHistoryImportPosts500Error1` | `bundle_social/models/api_v1_post_history_import_posts500_error1.py` |
| `ApiV1PostHistoryImportPosts502Error1` | `bundle_social/models/api_v1_post_history_import_posts502_error1.py` |
| `ApiV1PostHistoryImportPosts503Error1` | `bundle_social/models/api_v1_post_history_import_posts503_error1.py` |
| `ApiV1PostHistoryImportPosts504Error1` | `bundle_social/models/api_v1_post_history_import_posts504_error1.py` |

### client.post_import.post_import_get_status

- **Route**: `GET /api/v1/post-history-import/`
- **Auth**: `api_key_auth`
- **Signature**: `def post_import_get_status(team_id: str, *, social_account_type: SocialAccountTypeBundleSocialPostImportApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId` · `social_account_type` — query `socialAccountType`
- **Returns (parsed)**: `ApiV1PostHistoryImportResponse1`
- **Returns (raw)**: `ApiResult[ApiV1PostHistoryImportResponse1, PostImportGetStatusErrorBody]`
- **Error**: `PostImportGetStatusErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PostHistoryImport400Error1` [400] · `ApiV1PostHistoryImport401Error1` [401] · `ApiV1PostHistoryImport403Error1` [403] · `ApiV1PostHistoryImport404Error1` [404] · `ApiV1PostHistoryImport429Error1` [429] · `ApiV1PostHistoryImport500Error1` [500] · `ApiV1PostHistoryImport502Error1` [502] · `ApiV1PostHistoryImport503Error1` [503] · `ApiV1PostHistoryImport504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SocialAccountTypeBundleSocialPostImportApiOrStr` | `bundle_social/models/enums/social_account_type_bundle_social_post_import_api.py` |
| `ApiV1PostHistoryImportResponse1` | `bundle_social/models/api_v1_post_history_import_response1.py` |
| `PostImportGetStatusErrorBody` | `bundle_social/errors/post_import_get_status_error.py` |
| `ApiV1PostHistoryImport400Error1` | `bundle_social/models/api_v1_post_history_import400_error1.py` |
| `ApiV1PostHistoryImport401Error1` | `bundle_social/models/api_v1_post_history_import401_error1.py` |
| `ApiV1PostHistoryImport403Error1` | `bundle_social/models/api_v1_post_history_import403_error1.py` |
| `ApiV1PostHistoryImport404Error1` | `bundle_social/models/api_v1_post_history_import404_error1.py` |
| `ApiV1PostHistoryImport429Error1` | `bundle_social/models/api_v1_post_history_import429_error1.py` |
| `ApiV1PostHistoryImport500Error1` | `bundle_social/models/api_v1_post_history_import500_error1.py` |
| `ApiV1PostHistoryImport502Error1` | `bundle_social/models/api_v1_post_history_import502_error1.py` |
| `ApiV1PostHistoryImport503Error1` | `bundle_social/models/api_v1_post_history_import503_error1.py` |
| `ApiV1PostHistoryImport504Error1` | `bundle_social/models/api_v1_post_history_import504_error1.py` |

### client.post_import.post_import_retry_import

- **Route**: `POST /api/v1/post-history-import/{importId}/retry`
- **Auth**: `api_key_auth`
- **Signature**: `def post_import_retry_import(import_id: str, *, body: ApiV1PostHistoryImportRetryRequest | ApiV1PostHistoryImportRetryRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `import_id`
- **Params**: `import_id` — path `importId` · `body` — JSON body
- **Returns (parsed)**: `ApiV1PostHistoryImportRetryResponse`
- **Returns (raw)**: `ApiResult[ApiV1PostHistoryImportRetryResponse, PostImportRetryImportErrorBody]`
- **Error**: `PostImportRetryImportErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PostHistoryImportRetry400Error1` [400] · `ApiV1PostHistoryImportRetry401Error1` [401] · `ApiV1PostHistoryImportRetry403Error1` [403] · `ApiV1PostHistoryImportRetry404Error1` [404] · `ApiV1PostHistoryImportRetry429Error1` [429] · `ApiV1PostHistoryImportRetry500Error1` [500] · `ApiV1PostHistoryImportRetry502Error1` [502] · `ApiV1PostHistoryImportRetry503Error1` [503] · `ApiV1PostHistoryImportRetry504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PostHistoryImportRetryRequest` | `bundle_social/models/api_v1_post_history_import_retry_request.py` |
| `ApiV1PostHistoryImportRetryRequestDict` | `bundle_social/models/api_v1_post_history_import_retry_request.py` |
| `ApiV1PostHistoryImportRetryResponse` | `bundle_social/models/api_v1_post_history_import_retry_response.py` |
| `PostImportRetryImportErrorBody` | `bundle_social/errors/post_import_retry_import_error.py` |
| `ApiV1PostHistoryImportRetry400Error1` | `bundle_social/models/api_v1_post_history_import_retry400_error1.py` |
| `ApiV1PostHistoryImportRetry401Error1` | `bundle_social/models/api_v1_post_history_import_retry401_error1.py` |
| `ApiV1PostHistoryImportRetry403Error1` | `bundle_social/models/api_v1_post_history_import_retry403_error1.py` |
| `ApiV1PostHistoryImportRetry404Error1` | `bundle_social/models/api_v1_post_history_import_retry404_error1.py` |
| `ApiV1PostHistoryImportRetry429Error1` | `bundle_social/models/api_v1_post_history_import_retry429_error1.py` |
| `ApiV1PostHistoryImportRetry500Error1` | `bundle_social/models/api_v1_post_history_import_retry500_error1.py` |
| `ApiV1PostHistoryImportRetry502Error1` | `bundle_social/models/api_v1_post_history_import_retry502_error1.py` |
| `ApiV1PostHistoryImportRetry503Error1` | `bundle_social/models/api_v1_post_history_import_retry503_error1.py` |
| `ApiV1PostHistoryImportRetry504Error1` | `bundle_social/models/api_v1_post_history_import_retry504_error1.py` |

