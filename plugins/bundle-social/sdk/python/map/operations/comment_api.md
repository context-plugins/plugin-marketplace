<!-- Generated file — do not edit; regenerated with the SDK. -->

# CommentApi — operations

Accessor: `client.comment_api` · Source: `bundle_social/apis/comment_api.py` · 11 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.comment_api.comment_create

- **Route**: `POST /api/v1/comment/`
- **Auth**: `api_key_auth`
- **Signature**: `def comment_create(*, body: ApiV1CommentRequest1 | ApiV1CommentRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1CommentResponse`
- **Returns (raw)**: `ApiResult[ApiV1CommentResponse, CommentCreateErrorBody]`
- **Error**: `CommentCreateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Comment400Error1` [400] · `ApiV1Comment401Error1` [401] · `ApiV1Comment403Error1` [403] · `ApiV1Comment404Error1` [404] · `ApiV1Comment429Error1` [429] · `ApiV1Comment500Error1` [500] · `ApiV1Comment502Error1` [502] · `ApiV1Comment503Error1` [503] · `ApiV1Comment504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CommentRequest1` | `bundle_social/models/api_v1_comment_request1.py` |
| `ApiV1CommentRequest1Dict` | `bundle_social/models/api_v1_comment_request1.py` |
| `ApiV1CommentResponse` | `bundle_social/models/api_v1_comment_response.py` |
| `CommentCreateErrorBody` | `bundle_social/errors/comment_create_error.py` |
| `ApiV1Comment400Error1` | `bundle_social/models/api_v1_comment400_error1.py` |
| `ApiV1Comment401Error1` | `bundle_social/models/api_v1_comment401_error1.py` |
| `ApiV1Comment403Error1` | `bundle_social/models/api_v1_comment403_error1.py` |
| `ApiV1Comment404Error1` | `bundle_social/models/api_v1_comment404_error1.py` |
| `ApiV1Comment429Error1` | `bundle_social/models/api_v1_comment429_error1.py` |
| `ApiV1Comment500Error1` | `bundle_social/models/api_v1_comment500_error1.py` |
| `ApiV1Comment502Error1` | `bundle_social/models/api_v1_comment502_error1.py` |
| `ApiV1Comment503Error1` | `bundle_social/models/api_v1_comment503_error1.py` |
| `ApiV1Comment504Error1` | `bundle_social/models/api_v1_comment504_error1.py` |

### client.comment_api.comment_delete

- **Route**: `DELETE /api/v1/comment/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def comment_delete(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1CommentResponse`
- **Returns (raw)**: `ApiResult[ApiV1CommentResponse, CommentDeleteErrorBody]`
- **Error**: `CommentDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Comment400Error1` [400] · `ApiV1Comment401Error1` [401] · `ApiV1Comment403Error1` [403] · `ApiV1Comment404Error1` [404] · `ApiV1Comment429Error1` [429] · `ApiV1Comment500Error1` [500] · `ApiV1Comment502Error1` [502] · `ApiV1Comment503Error1` [503] · `ApiV1Comment504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CommentResponse` | `bundle_social/models/api_v1_comment_response.py` |
| `CommentDeleteErrorBody` | `bundle_social/errors/comment_delete_error.py` |
| `ApiV1Comment400Error1` | `bundle_social/models/api_v1_comment400_error1.py` |
| `ApiV1Comment401Error1` | `bundle_social/models/api_v1_comment401_error1.py` |
| `ApiV1Comment403Error1` | `bundle_social/models/api_v1_comment403_error1.py` |
| `ApiV1Comment404Error1` | `bundle_social/models/api_v1_comment404_error1.py` |
| `ApiV1Comment429Error1` | `bundle_social/models/api_v1_comment429_error1.py` |
| `ApiV1Comment500Error1` | `bundle_social/models/api_v1_comment500_error1.py` |
| `ApiV1Comment502Error1` | `bundle_social/models/api_v1_comment502_error1.py` |
| `ApiV1Comment503Error1` | `bundle_social/models/api_v1_comment503_error1.py` |
| `ApiV1Comment504Error1` | `bundle_social/models/api_v1_comment504_error1.py` |

### client.comment_api.comment_get

- **Route**: `GET /api/v1/comment/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def comment_get(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1CommentResponse`
- **Returns (raw)**: `ApiResult[ApiV1CommentResponse, CommentGetErrorBody]`
- **Error**: `CommentGetErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Comment400Error1` [400] · `ApiV1Comment401Error1` [401] · `ApiV1Comment403Error1` [403] · `ApiV1Comment404Error1` [404] · `ApiV1Comment429Error1` [429] · `ApiV1Comment500Error1` [500] · `ApiV1Comment502Error1` [502] · `ApiV1Comment503Error1` [503] · `ApiV1Comment504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CommentResponse` | `bundle_social/models/api_v1_comment_response.py` |
| `CommentGetErrorBody` | `bundle_social/errors/comment_get_error.py` |
| `ApiV1Comment400Error1` | `bundle_social/models/api_v1_comment400_error1.py` |
| `ApiV1Comment401Error1` | `bundle_social/models/api_v1_comment401_error1.py` |
| `ApiV1Comment403Error1` | `bundle_social/models/api_v1_comment403_error1.py` |
| `ApiV1Comment404Error1` | `bundle_social/models/api_v1_comment404_error1.py` |
| `ApiV1Comment429Error1` | `bundle_social/models/api_v1_comment429_error1.py` |
| `ApiV1Comment500Error1` | `bundle_social/models/api_v1_comment500_error1.py` |
| `ApiV1Comment502Error1` | `bundle_social/models/api_v1_comment502_error1.py` |
| `ApiV1Comment503Error1` | `bundle_social/models/api_v1_comment503_error1.py` |
| `ApiV1Comment504Error1` | `bundle_social/models/api_v1_comment504_error1.py` |

### client.comment_api.comment_get_list

- **Route**: `GET /api/v1/comment/`
- **Auth**: `api_key_auth`
- **Signature**: `def comment_get_list(team_id: str, *, post_id: str | None = None, imported_post_id: str | None = None, status: Status4OrStr | None = None, order_by: OrderByOrStr | None = None, order: OrderOrStr | None = None, q: str | None = None, platforms: list[Platform6OrStr] | None = None, offset: float | None = 0.0, limit: float | None = 10.0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId` · `post_id` — query `postId` · `imported_post_id` — query `importedPostId` · `status` — query · `order_by` — query `orderBy` · `order` — query · `q` — query · `platforms` — query · `offset` — query · `limit` — query
- **Returns (parsed)**: `ApiV1CommentResponse3`
- **Returns (raw)**: `ApiResult[ApiV1CommentResponse3, CommentGetListErrorBody]`
- **Error**: `CommentGetListErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Comment400Error1` [400] · `ApiV1Comment401Error1` [401] · `ApiV1Comment403Error1` [403] · `ApiV1Comment404Error1` [404] · `ApiV1Comment429Error1` [429] · `ApiV1Comment500Error1` [500] · `ApiV1Comment502Error1` [502] · `ApiV1Comment503Error1` [503] · `ApiV1Comment504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Status4OrStr` | `bundle_social/models/enums/status4.py` |
| `OrderByOrStr` | `bundle_social/models/enums/order_by.py` |
| `OrderOrStr` | `bundle_social/models/enums/order.py` |
| `Platform6OrStr` | `bundle_social/models/enums/platform6.py` |
| `ApiV1CommentResponse3` | `bundle_social/models/api_v1_comment_response3.py` |
| `CommentGetListErrorBody` | `bundle_social/errors/comment_get_list_error.py` |
| `ApiV1Comment400Error1` | `bundle_social/models/api_v1_comment400_error1.py` |
| `ApiV1Comment401Error1` | `bundle_social/models/api_v1_comment401_error1.py` |
| `ApiV1Comment403Error1` | `bundle_social/models/api_v1_comment403_error1.py` |
| `ApiV1Comment404Error1` | `bundle_social/models/api_v1_comment404_error1.py` |
| `ApiV1Comment429Error1` | `bundle_social/models/api_v1_comment429_error1.py` |
| `ApiV1Comment500Error1` | `bundle_social/models/api_v1_comment500_error1.py` |
| `ApiV1Comment502Error1` | `bundle_social/models/api_v1_comment502_error1.py` |
| `ApiV1Comment503Error1` | `bundle_social/models/api_v1_comment503_error1.py` |
| `ApiV1Comment504Error1` | `bundle_social/models/api_v1_comment504_error1.py` |

### client.comment_api.comment_import_action_fetched_comment

- **Route**: `POST /api/v1/comment/import/comments/{commentId}/action`
- **Auth**: `api_key_auth`
- **Signature**: `def comment_import_action_fetched_comment(comment_id: str, *, body: ApiV1CommentImportCommentsActionRequest | ApiV1CommentImportCommentsActionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `comment_id`
- **Params**: `comment_id` — path `commentId` · `body` — JSON body
- **Returns (parsed)**: `ApiV1CommentImportCommentsActionResponse`
- **Returns (raw)**: `ApiResult[ApiV1CommentImportCommentsActionResponse, CommentImportActionFetchedCommentErrorBody]`
- **Error**: `CommentImportActionFetchedCommentErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1CommentImportCommentsAction400Error1` [400] · `ApiV1CommentImportCommentsAction401Error1` [401] · `ApiV1CommentImportCommentsAction403Error1` [403] · `ApiV1CommentImportCommentsAction404Error1` [404] · `ApiV1CommentImportCommentsAction429Error1` [429] · `ApiV1CommentImportCommentsAction500Error1` [500] · `ApiV1CommentImportCommentsAction502Error1` [502] · `ApiV1CommentImportCommentsAction503Error1` [503] · `ApiV1CommentImportCommentsAction504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CommentImportCommentsActionRequest` | `bundle_social/models/api_v1_comment_import_comments_action_request.py` |
| `ApiV1CommentImportCommentsActionRequestDict` | `bundle_social/models/api_v1_comment_import_comments_action_request.py` |
| `ApiV1CommentImportCommentsActionResponse` | `bundle_social/models/api_v1_comment_import_comments_action_response.py` |
| `CommentImportActionFetchedCommentErrorBody` | `bundle_social/errors/comment_import_action_fetched_comment_error.py` |
| `ApiV1CommentImportCommentsAction400Error1` | `bundle_social/models/api_v1_comment_import_comments_action400_error1.py` |
| `ApiV1CommentImportCommentsAction401Error1` | `bundle_social/models/api_v1_comment_import_comments_action401_error1.py` |
| `ApiV1CommentImportCommentsAction403Error1` | `bundle_social/models/api_v1_comment_import_comments_action403_error1.py` |
| `ApiV1CommentImportCommentsAction404Error1` | `bundle_social/models/api_v1_comment_import_comments_action404_error1.py` |
| `ApiV1CommentImportCommentsAction429Error1` | `bundle_social/models/api_v1_comment_import_comments_action429_error1.py` |
| `ApiV1CommentImportCommentsAction500Error1` | `bundle_social/models/api_v1_comment_import_comments_action500_error1.py` |
| `ApiV1CommentImportCommentsAction502Error1` | `bundle_social/models/api_v1_comment_import_comments_action502_error1.py` |
| `ApiV1CommentImportCommentsAction503Error1` | `bundle_social/models/api_v1_comment_import_comments_action503_error1.py` |
| `ApiV1CommentImportCommentsAction504Error1` | `bundle_social/models/api_v1_comment_import_comments_action504_error1.py` |

### client.comment_api.comment_import_create

- **Route**: `POST /api/v1/comment/import`
- **Auth**: `api_key_auth`
- **Signature**: `def comment_import_create(*, body: ApiV1CommentImportRequest | ApiV1CommentImportRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1CommentImportResponse`
- **Returns (raw)**: `ApiResult[ApiV1CommentImportResponse, CommentImportCreateErrorBody]`
- **Error**: `CommentImportCreateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1CommentImport400Error1` [400] · `ApiV1CommentImport401Error1` [401] · `ApiV1CommentImport403Error1` [403] · `ApiV1CommentImport404Error1` [404] · `ApiV1CommentImport409Error1` [409] · `ApiV1CommentImport429Error1` [429] · `ApiV1CommentImport500Error1` [500] · `ApiV1CommentImport502Error1` [502] · `ApiV1CommentImport503Error1` [503] · `ApiV1CommentImport504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CommentImportRequest` | `bundle_social/models/api_v1_comment_import_request.py` |
| `ApiV1CommentImportRequestDict` | `bundle_social/models/api_v1_comment_import_request.py` |
| `ApiV1CommentImportResponse` | `bundle_social/models/api_v1_comment_import_response.py` |
| `CommentImportCreateErrorBody` | `bundle_social/errors/comment_import_create_error.py` |
| `ApiV1CommentImport400Error1` | `bundle_social/models/api_v1_comment_import400_error1.py` |
| `ApiV1CommentImport401Error1` | `bundle_social/models/api_v1_comment_import401_error1.py` |
| `ApiV1CommentImport403Error1` | `bundle_social/models/api_v1_comment_import403_error1.py` |
| `ApiV1CommentImport404Error1` | `bundle_social/models/api_v1_comment_import404_error1.py` |
| `ApiV1CommentImport409Error1` | `bundle_social/models/api_v1_comment_import409_error1.py` |
| `ApiV1CommentImport429Error1` | `bundle_social/models/api_v1_comment_import429_error1.py` |
| `ApiV1CommentImport500Error1` | `bundle_social/models/api_v1_comment_import500_error1.py` |
| `ApiV1CommentImport502Error1` | `bundle_social/models/api_v1_comment_import502_error1.py` |
| `ApiV1CommentImport503Error1` | `bundle_social/models/api_v1_comment_import503_error1.py` |
| `ApiV1CommentImport504Error1` | `bundle_social/models/api_v1_comment_import504_error1.py` |

### client.comment_api.comment_import_get_by_id

- **Route**: `GET /api/v1/comment/import/{importId}`
- **Auth**: `api_key_auth`
- **Signature**: `def comment_import_get_by_id(import_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `import_id`
- **Params**: `import_id` — path `importId`
- **Returns (parsed)**: `ApiV1CommentImportResponse`
- **Returns (raw)**: `ApiResult[ApiV1CommentImportResponse, CommentImportGetByIdErrorBody]`
- **Error**: `CommentImportGetByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1CommentImport400Error1` [400] · `ApiV1CommentImport401Error1` [401] · `ApiV1CommentImport403Error1` [403] · `ApiV1CommentImport404Error1` [404] · `ApiV1CommentImport429Error1` [429] · `ApiV1CommentImport500Error1` [500] · `ApiV1CommentImport502Error1` [502] · `ApiV1CommentImport503Error1` [503] · `ApiV1CommentImport504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CommentImportResponse` | `bundle_social/models/api_v1_comment_import_response.py` |
| `CommentImportGetByIdErrorBody` | `bundle_social/errors/comment_import_get_by_id_error.py` |
| `ApiV1CommentImport400Error1` | `bundle_social/models/api_v1_comment_import400_error1.py` |
| `ApiV1CommentImport401Error1` | `bundle_social/models/api_v1_comment_import401_error1.py` |
| `ApiV1CommentImport403Error1` | `bundle_social/models/api_v1_comment_import403_error1.py` |
| `ApiV1CommentImport404Error1` | `bundle_social/models/api_v1_comment_import404_error1.py` |
| `ApiV1CommentImport429Error1` | `bundle_social/models/api_v1_comment_import429_error1.py` |
| `ApiV1CommentImport500Error1` | `bundle_social/models/api_v1_comment_import500_error1.py` |
| `ApiV1CommentImport502Error1` | `bundle_social/models/api_v1_comment_import502_error1.py` |
| `ApiV1CommentImport503Error1` | `bundle_social/models/api_v1_comment_import503_error1.py` |
| `ApiV1CommentImport504Error1` | `bundle_social/models/api_v1_comment_import504_error1.py` |

### client.comment_api.comment_import_get_fetched_comments

- **Route**: `GET /api/v1/comment/import/comments`
- **Auth**: `api_key_auth`
- **Signature**: `def comment_import_get_fetched_comments(team_id: str, *, post_id: str | None = None, imported_post_id: str | None = None, platform: PlatformBundleSocialCommentApiOrStr | None = None, social_account_id: str | None = None, offset: float | None = 0.0, limit: float | None = 10.0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId` · `post_id` — query `postId` · `imported_post_id` — query `importedPostId` · `platform` — query · `social_account_id` — query `socialAccountId` · `offset` — query · `limit` — query
- **Returns (parsed)**: `ApiV1CommentImportCommentsResponse`
- **Returns (raw)**: `ApiResult[ApiV1CommentImportCommentsResponse, CommentImportGetFetchedCommentsErrorBody]`
- **Error**: `CommentImportGetFetchedCommentsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1CommentImportComments400Error1` [400] · `ApiV1CommentImportComments401Error1` [401] · `ApiV1CommentImportComments403Error1` [403] · `ApiV1CommentImportComments404Error1` [404] · `ApiV1CommentImportComments429Error1` [429] · `ApiV1CommentImportComments500Error1` [500] · `ApiV1CommentImportComments502Error1` [502] · `ApiV1CommentImportComments503Error1` [503] · `ApiV1CommentImportComments504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlatformBundleSocialCommentApiOrStr` | `bundle_social/models/enums/platform_bundle_social_comment_api.py` |
| `ApiV1CommentImportCommentsResponse` | `bundle_social/models/api_v1_comment_import_comments_response.py` |
| `CommentImportGetFetchedCommentsErrorBody` | `bundle_social/errors/comment_import_get_fetched_comments_error.py` |
| `ApiV1CommentImportComments400Error1` | `bundle_social/models/api_v1_comment_import_comments400_error1.py` |
| `ApiV1CommentImportComments401Error1` | `bundle_social/models/api_v1_comment_import_comments401_error1.py` |
| `ApiV1CommentImportComments403Error1` | `bundle_social/models/api_v1_comment_import_comments403_error1.py` |
| `ApiV1CommentImportComments404Error1` | `bundle_social/models/api_v1_comment_import_comments404_error1.py` |
| `ApiV1CommentImportComments429Error1` | `bundle_social/models/api_v1_comment_import_comments429_error1.py` |
| `ApiV1CommentImportComments500Error1` | `bundle_social/models/api_v1_comment_import_comments500_error1.py` |
| `ApiV1CommentImportComments502Error1` | `bundle_social/models/api_v1_comment_import_comments502_error1.py` |
| `ApiV1CommentImportComments503Error1` | `bundle_social/models/api_v1_comment_import_comments503_error1.py` |
| `ApiV1CommentImportComments504Error1` | `bundle_social/models/api_v1_comment_import_comments504_error1.py` |

### client.comment_api.comment_import_get_list

- **Route**: `GET /api/v1/comment/import`
- **Auth**: `api_key_auth`
- **Signature**: `def comment_import_get_list(team_id: str, *, post_id: str | None = None, imported_post_id: str | None = None, status: StatusBundleSocialCommentApiOrStr | None = None, offset: float | None = 0.0, limit: float | None = 10.0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId` · `post_id` — query `postId` · `imported_post_id` — query `importedPostId` · `status` — query · `offset` — query · `limit` — query
- **Returns (parsed)**: `ApiV1CommentImportResponse1`
- **Returns (raw)**: `ApiResult[ApiV1CommentImportResponse1, CommentImportGetListErrorBody]`
- **Error**: `CommentImportGetListErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1CommentImport400Error1` [400] · `ApiV1CommentImport401Error1` [401] · `ApiV1CommentImport403Error1` [403] · `ApiV1CommentImport404Error1` [404] · `ApiV1CommentImport429Error1` [429] · `ApiV1CommentImport500Error1` [500] · `ApiV1CommentImport502Error1` [502] · `ApiV1CommentImport503Error1` [503] · `ApiV1CommentImport504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StatusBundleSocialCommentApiOrStr` | `bundle_social/models/enums/status_bundle_social_comment_api.py` |
| `ApiV1CommentImportResponse1` | `bundle_social/models/api_v1_comment_import_response1.py` |
| `CommentImportGetListErrorBody` | `bundle_social/errors/comment_import_get_list_error.py` |
| `ApiV1CommentImport400Error1` | `bundle_social/models/api_v1_comment_import400_error1.py` |
| `ApiV1CommentImport401Error1` | `bundle_social/models/api_v1_comment_import401_error1.py` |
| `ApiV1CommentImport403Error1` | `bundle_social/models/api_v1_comment_import403_error1.py` |
| `ApiV1CommentImport404Error1` | `bundle_social/models/api_v1_comment_import404_error1.py` |
| `ApiV1CommentImport429Error1` | `bundle_social/models/api_v1_comment_import429_error1.py` |
| `ApiV1CommentImport500Error1` | `bundle_social/models/api_v1_comment_import500_error1.py` |
| `ApiV1CommentImport502Error1` | `bundle_social/models/api_v1_comment_import502_error1.py` |
| `ApiV1CommentImport503Error1` | `bundle_social/models/api_v1_comment_import503_error1.py` |
| `ApiV1CommentImport504Error1` | `bundle_social/models/api_v1_comment_import504_error1.py` |

### client.comment_api.comment_retry

- **Route**: `POST /api/v1/comment/{id}/retry`
- **Auth**: `api_key_auth`
- **Signature**: `def comment_retry(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1CommentRetryResponse`
- **Returns (raw)**: `ApiResult[ApiV1CommentRetryResponse, CommentRetryErrorBody]`
- **Error**: `CommentRetryErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1CommentRetry400Error1` [400] · `ApiV1CommentRetry401Error1` [401] · `ApiV1CommentRetry403Error1` [403] · `ApiV1CommentRetry404Error1` [404] · `ApiV1CommentRetry429Error1` [429] · `ApiV1CommentRetry500Error1` [500] · `ApiV1CommentRetry502Error1` [502] · `ApiV1CommentRetry503Error1` [503] · `ApiV1CommentRetry504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CommentRetryResponse` | `bundle_social/models/api_v1_comment_retry_response.py` |
| `CommentRetryErrorBody` | `bundle_social/errors/comment_retry_error.py` |
| `ApiV1CommentRetry400Error1` | `bundle_social/models/api_v1_comment_retry400_error1.py` |
| `ApiV1CommentRetry401Error1` | `bundle_social/models/api_v1_comment_retry401_error1.py` |
| `ApiV1CommentRetry403Error1` | `bundle_social/models/api_v1_comment_retry403_error1.py` |
| `ApiV1CommentRetry404Error1` | `bundle_social/models/api_v1_comment_retry404_error1.py` |
| `ApiV1CommentRetry429Error1` | `bundle_social/models/api_v1_comment_retry429_error1.py` |
| `ApiV1CommentRetry500Error1` | `bundle_social/models/api_v1_comment_retry500_error1.py` |
| `ApiV1CommentRetry502Error1` | `bundle_social/models/api_v1_comment_retry502_error1.py` |
| `ApiV1CommentRetry503Error1` | `bundle_social/models/api_v1_comment_retry503_error1.py` |
| `ApiV1CommentRetry504Error1` | `bundle_social/models/api_v1_comment_retry504_error1.py` |

### client.comment_api.comment_update

- **Route**: `PATCH /api/v1/comment/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def comment_update(id_: str, *, body: ApiV1CommentRequest | ApiV1CommentRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1CommentResponse`
- **Returns (raw)**: `ApiResult[ApiV1CommentResponse, CommentUpdateErrorBody]`
- **Error**: `CommentUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Comment400Error1` [400] · `ApiV1Comment401Error1` [401] · `ApiV1Comment403Error1` [403] · `ApiV1Comment404Error1` [404] · `ApiV1Comment429Error1` [429] · `ApiV1Comment500Error1` [500] · `ApiV1Comment502Error1` [502] · `ApiV1Comment503Error1` [503] · `ApiV1Comment504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CommentRequest` | `bundle_social/models/api_v1_comment_request.py` |
| `ApiV1CommentRequestDict` | `bundle_social/models/api_v1_comment_request.py` |
| `ApiV1CommentResponse` | `bundle_social/models/api_v1_comment_response.py` |
| `CommentUpdateErrorBody` | `bundle_social/errors/comment_update_error.py` |
| `ApiV1Comment400Error1` | `bundle_social/models/api_v1_comment400_error1.py` |
| `ApiV1Comment401Error1` | `bundle_social/models/api_v1_comment401_error1.py` |
| `ApiV1Comment403Error1` | `bundle_social/models/api_v1_comment403_error1.py` |
| `ApiV1Comment404Error1` | `bundle_social/models/api_v1_comment404_error1.py` |
| `ApiV1Comment429Error1` | `bundle_social/models/api_v1_comment429_error1.py` |
| `ApiV1Comment500Error1` | `bundle_social/models/api_v1_comment500_error1.py` |
| `ApiV1Comment502Error1` | `bundle_social/models/api_v1_comment502_error1.py` |
| `ApiV1Comment503Error1` | `bundle_social/models/api_v1_comment503_error1.py` |
| `ApiV1Comment504Error1` | `bundle_social/models/api_v1_comment504_error1.py` |

