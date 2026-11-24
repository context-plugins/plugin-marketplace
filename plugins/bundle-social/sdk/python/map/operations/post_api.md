<!-- Generated file — do not edit; regenerated with the SDK. -->

# PostApi — operations

Accessor: `client.post_api` · Source: `bundle_social/apis/post_api.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.post_api.post_create

- **Route**: `POST /api/v1/post/`
- **Auth**: `api_key_auth`
- **Signature**: `def post_create(*, body: ApiV1PostRequest1 | ApiV1PostRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1PostResponse1`
- **Returns (raw)**: `ApiResult[ApiV1PostResponse1, PostCreateErrorBody]`
- **Error**: `PostCreateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Post400Error1` [400] · `ApiV1Post401Error1` [401] · `ApiV1Post403Error1` [403] · `ApiV1Post404Error1` [404] · `ApiV1Post409Error1` [409] · `ApiV1Post429Error1` [429] · `ApiV1Post500Error1` [500] · `ApiV1Post502Error1` [502] · `ApiV1Post503Error1` [503] · `ApiV1Post504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PostRequest1` | `bundle_social/models/api_v1_post_request1.py` |
| `ApiV1PostRequest1Dict` | `bundle_social/models/api_v1_post_request1.py` |
| `ApiV1PostResponse1` | `bundle_social/models/api_v1_post_response1.py` |
| `PostCreateErrorBody` | `bundle_social/errors/post_create_error.py` |
| `ApiV1Post400Error1` | `bundle_social/models/api_v1_post400_error1.py` |
| `ApiV1Post401Error1` | `bundle_social/models/api_v1_post401_error1.py` |
| `ApiV1Post403Error1` | `bundle_social/models/api_v1_post403_error1.py` |
| `ApiV1Post404Error1` | `bundle_social/models/api_v1_post404_error1.py` |
| `ApiV1Post409Error1` | `bundle_social/models/api_v1_post409_error1.py` |
| `ApiV1Post429Error1` | `bundle_social/models/api_v1_post429_error1.py` |
| `ApiV1Post500Error1` | `bundle_social/models/api_v1_post500_error1.py` |
| `ApiV1Post502Error1` | `bundle_social/models/api_v1_post502_error1.py` |
| `ApiV1Post503Error1` | `bundle_social/models/api_v1_post503_error1.py` |
| `ApiV1Post504Error1` | `bundle_social/models/api_v1_post504_error1.py` |

### client.post_api.post_delete

- **Route**: `DELETE /api/v1/post/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def post_delete(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1PostResponse2`
- **Returns (raw)**: `ApiResult[ApiV1PostResponse2, PostDeleteErrorBody]`
- **Error**: `PostDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Post400Error1` [400] · `ApiV1Post401Error1` [401] · `ApiV1Post403Error1` [403] · `ApiV1Post404Error1` [404] · `ApiV1Post429Error1` [429] · `ApiV1Post500Error1` [500] · `ApiV1Post502Error1` [502] · `ApiV1Post503Error1` [503] · `ApiV1Post504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PostResponse2` | `bundle_social/models/api_v1_post_response2.py` |
| `PostDeleteErrorBody` | `bundle_social/errors/post_delete_error.py` |
| `ApiV1Post400Error1` | `bundle_social/models/api_v1_post400_error1.py` |
| `ApiV1Post401Error1` | `bundle_social/models/api_v1_post401_error1.py` |
| `ApiV1Post403Error1` | `bundle_social/models/api_v1_post403_error1.py` |
| `ApiV1Post404Error1` | `bundle_social/models/api_v1_post404_error1.py` |
| `ApiV1Post429Error1` | `bundle_social/models/api_v1_post429_error1.py` |
| `ApiV1Post500Error1` | `bundle_social/models/api_v1_post500_error1.py` |
| `ApiV1Post502Error1` | `bundle_social/models/api_v1_post502_error1.py` |
| `ApiV1Post503Error1` | `bundle_social/models/api_v1_post503_error1.py` |
| `ApiV1Post504Error1` | `bundle_social/models/api_v1_post504_error1.py` |

### client.post_api.post_get

- **Route**: `GET /api/v1/post/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def post_get(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1PostResponse`
- **Returns (raw)**: `ApiResult[ApiV1PostResponse, PostGetErrorBody]`
- **Error**: `PostGetErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Post400Error1` [400] · `ApiV1Post401Error1` [401] · `ApiV1Post403Error1` [403] · `ApiV1Post404Error1` [404] · `ApiV1Post429Error1` [429] · `ApiV1Post500Error1` [500] · `ApiV1Post502Error1` [502] · `ApiV1Post503Error1` [503] · `ApiV1Post504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PostResponse` | `bundle_social/models/api_v1_post_response.py` |
| `PostGetErrorBody` | `bundle_social/errors/post_get_error.py` |
| `ApiV1Post400Error1` | `bundle_social/models/api_v1_post400_error1.py` |
| `ApiV1Post401Error1` | `bundle_social/models/api_v1_post401_error1.py` |
| `ApiV1Post403Error1` | `bundle_social/models/api_v1_post403_error1.py` |
| `ApiV1Post404Error1` | `bundle_social/models/api_v1_post404_error1.py` |
| `ApiV1Post429Error1` | `bundle_social/models/api_v1_post429_error1.py` |
| `ApiV1Post500Error1` | `bundle_social/models/api_v1_post500_error1.py` |
| `ApiV1Post502Error1` | `bundle_social/models/api_v1_post502_error1.py` |
| `ApiV1Post503Error1` | `bundle_social/models/api_v1_post503_error1.py` |
| `ApiV1Post504Error1` | `bundle_social/models/api_v1_post504_error1.py` |

### client.post_api.post_get_by_reference_key

- **Route**: `GET /api/v1/post/reference-key/{referenceKey}`
- **Auth**: `api_key_auth`
- **Signature**: `def post_get_by_reference_key(reference_key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `reference_key`
- **Params**: `reference_key` — path `referenceKey`
- **Returns (parsed)**: `ApiV1PostReferenceKeyResponse`
- **Returns (raw)**: `ApiResult[ApiV1PostReferenceKeyResponse, PostGetByReferenceKeyErrorBody]`
- **Error**: `PostGetByReferenceKeyErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PostReferenceKey400Error1` [400] · `ApiV1PostReferenceKey401Error1` [401] · `ApiV1PostReferenceKey403Error1` [403] · `ApiV1PostReferenceKey404Error1` [404] · `ApiV1PostReferenceKey429Error1` [429] · `ApiV1PostReferenceKey500Error1` [500] · `ApiV1PostReferenceKey502Error1` [502] · `ApiV1PostReferenceKey503Error1` [503] · `ApiV1PostReferenceKey504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PostReferenceKeyResponse` | `bundle_social/models/api_v1_post_reference_key_response.py` |
| `PostGetByReferenceKeyErrorBody` | `bundle_social/errors/post_get_by_reference_key_error.py` |
| `ApiV1PostReferenceKey400Error1` | `bundle_social/models/api_v1_post_reference_key400_error1.py` |
| `ApiV1PostReferenceKey401Error1` | `bundle_social/models/api_v1_post_reference_key401_error1.py` |
| `ApiV1PostReferenceKey403Error1` | `bundle_social/models/api_v1_post_reference_key403_error1.py` |
| `ApiV1PostReferenceKey404Error1` | `bundle_social/models/api_v1_post_reference_key404_error1.py` |
| `ApiV1PostReferenceKey429Error1` | `bundle_social/models/api_v1_post_reference_key429_error1.py` |
| `ApiV1PostReferenceKey500Error1` | `bundle_social/models/api_v1_post_reference_key500_error1.py` |
| `ApiV1PostReferenceKey502Error1` | `bundle_social/models/api_v1_post_reference_key502_error1.py` |
| `ApiV1PostReferenceKey503Error1` | `bundle_social/models/api_v1_post_reference_key503_error1.py` |
| `ApiV1PostReferenceKey504Error1` | `bundle_social/models/api_v1_post_reference_key504_error1.py` |

### client.post_api.post_get_list

- **Route**: `GET /api/v1/post/`
- **Auth**: `api_key_auth`
- **Signature**: `def post_get_list(team_id: str, *, status: StatusOrStr | None = None, order_by: OrderByBundleSocialPostApiOrStr | None = None, order: OrderOrStr | None = None, q: str | None = None, platforms: list[PlatformBundleSocialPostApiOrStr] | None = None, post_date_from: RFC3339DateTime | None = None, post_date_to: RFC3339DateTime | None = None, offset: float | None = 0.0, limit: float | None = 10.0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`
- **Params**: `team_id` — query `teamId` · `status` — query · `order_by` — query `orderBy` · `order` — query · `q` — query · `platforms` — query · `post_date_from` — query `postDateFrom` · `post_date_to` — query `postDateTo` · `offset` — query · `limit` — query
- **Returns (parsed)**: `ApiV1PostResponse3`
- **Returns (raw)**: `ApiResult[ApiV1PostResponse3, PostGetListErrorBody]`
- **Error**: `PostGetListErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Post400Error1` [400] · `ApiV1Post401Error1` [401] · `ApiV1Post403Error1` [403] · `ApiV1Post404Error1` [404] · `ApiV1Post429Error1` [429] · `ApiV1Post500Error1` [500] · `ApiV1Post502Error1` [502] · `ApiV1Post503Error1` [503] · `ApiV1Post504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StatusOrStr` | `bundle_social/models/enums/status.py` |
| `OrderByBundleSocialPostApiOrStr` | `bundle_social/models/enums/order_by_bundle_social_post_api.py` |
| `OrderOrStr` | `bundle_social/models/enums/order.py` |
| `PlatformBundleSocialPostApiOrStr` | `bundle_social/models/enums/platform_bundle_social_post_api.py` |
| `ApiV1PostResponse3` | `bundle_social/models/api_v1_post_response3.py` |
| `PostGetListErrorBody` | `bundle_social/errors/post_get_list_error.py` |
| `ApiV1Post400Error1` | `bundle_social/models/api_v1_post400_error1.py` |
| `ApiV1Post401Error1` | `bundle_social/models/api_v1_post401_error1.py` |
| `ApiV1Post403Error1` | `bundle_social/models/api_v1_post403_error1.py` |
| `ApiV1Post404Error1` | `bundle_social/models/api_v1_post404_error1.py` |
| `ApiV1Post429Error1` | `bundle_social/models/api_v1_post429_error1.py` |
| `ApiV1Post500Error1` | `bundle_social/models/api_v1_post500_error1.py` |
| `ApiV1Post502Error1` | `bundle_social/models/api_v1_post502_error1.py` |
| `ApiV1Post503Error1` | `bundle_social/models/api_v1_post503_error1.py` |
| `ApiV1Post504Error1` | `bundle_social/models/api_v1_post504_error1.py` |

### client.post_api.post_get_reconnect_social_account_candidates

- **Route**: `GET /api/v1/post/reconnect-social-account/candidates`
- **Auth**: `api_key_auth`
- **Signature**: `def post_get_reconnect_social_account_candidates(team_id: str, type_: TypeOrStr, *, offset: float | None = 0.0, limit: float | None = 10.0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`, `type_`
- **Params**: `team_id` — query `teamId` · `type_` — query `type` · `offset` — query · `limit` — query
- **Returns (parsed)**: `ApiV1PostReconnectSocialAccountCandidatesResponse`
- **Returns (raw)**: `ApiResult[ApiV1PostReconnectSocialAccountCandidatesResponse, PostGetReconnectSocialAccountCandidatesErrorBody]`
- **Error**: `PostGetReconnectSocialAccountCandidatesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PostReconnectSocialAccountCandidates400Error1` [400] · `ApiV1PostReconnectSocialAccountCandidates401Error1` [401] · `ApiV1PostReconnectSocialAccountCandidates403Error1` [403] · `ApiV1PostReconnectSocialAccountCandidates404Error1` [404] · `ApiV1PostReconnectSocialAccountCandidates429Error1` [429] · `ApiV1PostReconnectSocialAccountCandidates500Error1` [500] · `ApiV1PostReconnectSocialAccountCandidates502Error1` [502] · `ApiV1PostReconnectSocialAccountCandidates503Error1` [503] · `ApiV1PostReconnectSocialAccountCandidates504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TypeOrStr` | `bundle_social/models/enums/type.py` |
| `ApiV1PostReconnectSocialAccountCandidatesResponse` | `bundle_social/models/api_v1_post_reconnect_social_account_candidates_response.py` |
| `PostGetReconnectSocialAccountCandidatesErrorBody` | `bundle_social/errors/post_get_reconnect_social_account_candidates_error.py` |
| `ApiV1PostReconnectSocialAccountCandidates400Error1` | `bundle_social/models/api_v1_post_reconnect_social_account_candidates400_error1.py` |
| `ApiV1PostReconnectSocialAccountCandidates401Error1` | `bundle_social/models/api_v1_post_reconnect_social_account_candidates401_error1.py` |
| `ApiV1PostReconnectSocialAccountCandidates403Error1` | `bundle_social/models/api_v1_post_reconnect_social_account_candidates403_error1.py` |
| `ApiV1PostReconnectSocialAccountCandidates404Error1` | `bundle_social/models/api_v1_post_reconnect_social_account_candidates404_error1.py` |
| `ApiV1PostReconnectSocialAccountCandidates429Error1` | `bundle_social/models/api_v1_post_reconnect_social_account_candidates429_error1.py` |
| `ApiV1PostReconnectSocialAccountCandidates500Error1` | `bundle_social/models/api_v1_post_reconnect_social_account_candidates500_error1.py` |
| `ApiV1PostReconnectSocialAccountCandidates502Error1` | `bundle_social/models/api_v1_post_reconnect_social_account_candidates502_error1.py` |
| `ApiV1PostReconnectSocialAccountCandidates503Error1` | `bundle_social/models/api_v1_post_reconnect_social_account_candidates503_error1.py` |
| `ApiV1PostReconnectSocialAccountCandidates504Error1` | `bundle_social/models/api_v1_post_reconnect_social_account_candidates504_error1.py` |

### client.post_api.post_reconnect_social_account

- **Route**: `POST /api/v1/post/reconnect-social-account`
- **Auth**: `api_key_auth`
- **Signature**: `def post_reconnect_social_account(*, body: ApiV1PostReconnectSocialAccountRequest | ApiV1PostReconnectSocialAccountRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1PostReconnectSocialAccountResponse`
- **Returns (raw)**: `ApiResult[ApiV1PostReconnectSocialAccountResponse, PostReconnectSocialAccountErrorBody]`
- **Error**: `PostReconnectSocialAccountErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PostReconnectSocialAccount400Error1` [400] · `ApiV1PostReconnectSocialAccount401Error1` [401] · `ApiV1PostReconnectSocialAccount403Error1` [403] · `ApiV1PostReconnectSocialAccount404Error1` [404] · `ApiV1PostReconnectSocialAccount429Error1` [429] · `ApiV1PostReconnectSocialAccount500Error1` [500] · `ApiV1PostReconnectSocialAccount502Error1` [502] · `ApiV1PostReconnectSocialAccount503Error1` [503] · `ApiV1PostReconnectSocialAccount504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PostReconnectSocialAccountRequest` | `bundle_social/models/api_v1_post_reconnect_social_account_request.py` |
| `ApiV1PostReconnectSocialAccountRequestDict` | `bundle_social/models/api_v1_post_reconnect_social_account_request.py` |
| `ApiV1PostReconnectSocialAccountResponse` | `bundle_social/models/api_v1_post_reconnect_social_account_response.py` |
| `PostReconnectSocialAccountErrorBody` | `bundle_social/errors/post_reconnect_social_account_error.py` |
| `ApiV1PostReconnectSocialAccount400Error1` | `bundle_social/models/api_v1_post_reconnect_social_account400_error1.py` |
| `ApiV1PostReconnectSocialAccount401Error1` | `bundle_social/models/api_v1_post_reconnect_social_account401_error1.py` |
| `ApiV1PostReconnectSocialAccount403Error1` | `bundle_social/models/api_v1_post_reconnect_social_account403_error1.py` |
| `ApiV1PostReconnectSocialAccount404Error1` | `bundle_social/models/api_v1_post_reconnect_social_account404_error1.py` |
| `ApiV1PostReconnectSocialAccount429Error1` | `bundle_social/models/api_v1_post_reconnect_social_account429_error1.py` |
| `ApiV1PostReconnectSocialAccount500Error1` | `bundle_social/models/api_v1_post_reconnect_social_account500_error1.py` |
| `ApiV1PostReconnectSocialAccount502Error1` | `bundle_social/models/api_v1_post_reconnect_social_account502_error1.py` |
| `ApiV1PostReconnectSocialAccount503Error1` | `bundle_social/models/api_v1_post_reconnect_social_account503_error1.py` |
| `ApiV1PostReconnectSocialAccount504Error1` | `bundle_social/models/api_v1_post_reconnect_social_account504_error1.py` |

### client.post_api.post_retry

- **Route**: `POST /api/v1/post/{id}/retry`
- **Auth**: `api_key_auth`
- **Signature**: `def post_retry(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1PostRetryResponse`
- **Returns (raw)**: `ApiResult[ApiV1PostRetryResponse, PostRetryErrorBody]`
- **Error**: `PostRetryErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1PostRetry400Error1` [400] · `ApiV1PostRetry401Error1` [401] · `ApiV1PostRetry403Error1` [403] · `ApiV1PostRetry404Error1` [404] · `ApiV1PostRetry429Error1` [429] · `ApiV1PostRetry500Error1` [500] · `ApiV1PostRetry502Error1` [502] · `ApiV1PostRetry503Error1` [503] · `ApiV1PostRetry504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PostRetryResponse` | `bundle_social/models/api_v1_post_retry_response.py` |
| `PostRetryErrorBody` | `bundle_social/errors/post_retry_error.py` |
| `ApiV1PostRetry400Error1` | `bundle_social/models/api_v1_post_retry400_error1.py` |
| `ApiV1PostRetry401Error1` | `bundle_social/models/api_v1_post_retry401_error1.py` |
| `ApiV1PostRetry403Error1` | `bundle_social/models/api_v1_post_retry403_error1.py` |
| `ApiV1PostRetry404Error1` | `bundle_social/models/api_v1_post_retry404_error1.py` |
| `ApiV1PostRetry429Error1` | `bundle_social/models/api_v1_post_retry429_error1.py` |
| `ApiV1PostRetry500Error1` | `bundle_social/models/api_v1_post_retry500_error1.py` |
| `ApiV1PostRetry502Error1` | `bundle_social/models/api_v1_post_retry502_error1.py` |
| `ApiV1PostRetry503Error1` | `bundle_social/models/api_v1_post_retry503_error1.py` |
| `ApiV1PostRetry504Error1` | `bundle_social/models/api_v1_post_retry504_error1.py` |

### client.post_api.post_update

- **Route**: `PATCH /api/v1/post/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def post_update(id_: str, *, body: ApiV1PostRequest | ApiV1PostRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1PostResponse1`
- **Returns (raw)**: `ApiResult[ApiV1PostResponse1, PostUpdateErrorBody]`
- **Error**: `PostUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Post400Error1` [400] · `ApiV1Post401Error1` [401] · `ApiV1Post403Error1` [403] · `ApiV1Post404Error1` [404] · `ApiV1Post409Error1` [409] · `ApiV1Post429Error1` [429] · `ApiV1Post500Error1` [500] · `ApiV1Post502Error1` [502] · `ApiV1Post503Error1` [503] · `ApiV1Post504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PostRequest` | `bundle_social/models/api_v1_post_request.py` |
| `ApiV1PostRequestDict` | `bundle_social/models/api_v1_post_request.py` |
| `ApiV1PostResponse1` | `bundle_social/models/api_v1_post_response1.py` |
| `PostUpdateErrorBody` | `bundle_social/errors/post_update_error.py` |
| `ApiV1Post400Error1` | `bundle_social/models/api_v1_post400_error1.py` |
| `ApiV1Post401Error1` | `bundle_social/models/api_v1_post401_error1.py` |
| `ApiV1Post403Error1` | `bundle_social/models/api_v1_post403_error1.py` |
| `ApiV1Post404Error1` | `bundle_social/models/api_v1_post404_error1.py` |
| `ApiV1Post409Error1` | `bundle_social/models/api_v1_post409_error1.py` |
| `ApiV1Post429Error1` | `bundle_social/models/api_v1_post429_error1.py` |
| `ApiV1Post500Error1` | `bundle_social/models/api_v1_post500_error1.py` |
| `ApiV1Post502Error1` | `bundle_social/models/api_v1_post502_error1.py` |
| `ApiV1Post503Error1` | `bundle_social/models/api_v1_post503_error1.py` |
| `ApiV1Post504Error1` | `bundle_social/models/api_v1_post504_error1.py` |

