<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.analytics` · Source: `bundle_social/apis/analytics.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.analytics.analytics_force_post_analytics

- **Route**: `POST /api/v1/analytics/post/force`
- **Auth**: `api_key_auth`
- **Signature**: `def analytics_force_post_analytics(*, body: ApiV1AnalyticsPostForceRequest | ApiV1AnalyticsPostForceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1AnalyticsPostForceResponse`
- **Returns (raw)**: `ApiResult[ApiV1AnalyticsPostForceResponse, AnalyticsForcePostAnalyticsErrorBody]`
- **Error**: `AnalyticsForcePostAnalyticsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1AnalyticsPostForce400Error1` [400] · `ApiV1AnalyticsPostForce401Error1` [401] · `ApiV1AnalyticsPostForce403Error1` [403] · `ApiV1AnalyticsPostForce404Error1` [404] · `ApiV1AnalyticsPostForce429Error1` [429] · `ApiV1AnalyticsPostForce500Error1` [500] · `ApiV1AnalyticsPostForce502Error1` [502] · `ApiV1AnalyticsPostForce503Error1` [503] · `ApiV1AnalyticsPostForce504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AnalyticsPostForceRequest` | `bundle_social/models/api_v1_analytics_post_force_request.py` |
| `ApiV1AnalyticsPostForceRequestDict` | `bundle_social/models/api_v1_analytics_post_force_request.py` |
| `ApiV1AnalyticsPostForceResponse` | `bundle_social/models/api_v1_analytics_post_force_response.py` |
| `AnalyticsForcePostAnalyticsErrorBody` | `bundle_social/errors/analytics_force_post_analytics_error.py` |
| `ApiV1AnalyticsPostForce400Error1` | `bundle_social/models/api_v1_analytics_post_force400_error1.py` |
| `ApiV1AnalyticsPostForce401Error1` | `bundle_social/models/api_v1_analytics_post_force401_error1.py` |
| `ApiV1AnalyticsPostForce403Error1` | `bundle_social/models/api_v1_analytics_post_force403_error1.py` |
| `ApiV1AnalyticsPostForce404Error1` | `bundle_social/models/api_v1_analytics_post_force404_error1.py` |
| `ApiV1AnalyticsPostForce429Error1` | `bundle_social/models/api_v1_analytics_post_force429_error1.py` |
| `ApiV1AnalyticsPostForce500Error1` | `bundle_social/models/api_v1_analytics_post_force500_error1.py` |
| `ApiV1AnalyticsPostForce502Error1` | `bundle_social/models/api_v1_analytics_post_force502_error1.py` |
| `ApiV1AnalyticsPostForce503Error1` | `bundle_social/models/api_v1_analytics_post_force503_error1.py` |
| `ApiV1AnalyticsPostForce504Error1` | `bundle_social/models/api_v1_analytics_post_force504_error1.py` |

### client.analytics.analytics_force_social_account_analytics

- **Route**: `POST /api/v1/analytics/social-account/force`
- **Auth**: `api_key_auth`
- **Signature**: `def analytics_force_social_account_analytics(*, body: ApiV1AnalyticsSocialAccountForceRequest | ApiV1AnalyticsSocialAccountForceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1AnalyticsSocialAccountForceResponse`
- **Returns (raw)**: `ApiResult[ApiV1AnalyticsSocialAccountForceResponse, AnalyticsForceSocialAccountAnalyticsErrorBody]`
- **Error**: `AnalyticsForceSocialAccountAnalyticsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1AnalyticsSocialAccountForce400Error1` [400] · `ApiV1AnalyticsSocialAccountForce401Error1` [401] · `ApiV1AnalyticsSocialAccountForce403Error1` [403] · `ApiV1AnalyticsSocialAccountForce404Error1` [404] · `ApiV1AnalyticsSocialAccountForce429Error1` [429] · `ApiV1AnalyticsSocialAccountForce500Error1` [500] · `ApiV1AnalyticsSocialAccountForce502Error1` [502] · `ApiV1AnalyticsSocialAccountForce503Error1` [503] · `ApiV1AnalyticsSocialAccountForce504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AnalyticsSocialAccountForceRequest` | `bundle_social/models/api_v1_analytics_social_account_force_request.py` |
| `ApiV1AnalyticsSocialAccountForceRequestDict` | `bundle_social/models/api_v1_analytics_social_account_force_request.py` |
| `ApiV1AnalyticsSocialAccountForceResponse` | `bundle_social/models/api_v1_analytics_social_account_force_response.py` |
| `AnalyticsForceSocialAccountAnalyticsErrorBody` | `bundle_social/errors/analytics_force_social_account_analytics_error.py` |
| `ApiV1AnalyticsSocialAccountForce400Error1` | `bundle_social/models/api_v1_analytics_social_account_force400_error1.py` |
| `ApiV1AnalyticsSocialAccountForce401Error1` | `bundle_social/models/api_v1_analytics_social_account_force401_error1.py` |
| `ApiV1AnalyticsSocialAccountForce403Error1` | `bundle_social/models/api_v1_analytics_social_account_force403_error1.py` |
| `ApiV1AnalyticsSocialAccountForce404Error1` | `bundle_social/models/api_v1_analytics_social_account_force404_error1.py` |
| `ApiV1AnalyticsSocialAccountForce429Error1` | `bundle_social/models/api_v1_analytics_social_account_force429_error1.py` |
| `ApiV1AnalyticsSocialAccountForce500Error1` | `bundle_social/models/api_v1_analytics_social_account_force500_error1.py` |
| `ApiV1AnalyticsSocialAccountForce502Error1` | `bundle_social/models/api_v1_analytics_social_account_force502_error1.py` |
| `ApiV1AnalyticsSocialAccountForce503Error1` | `bundle_social/models/api_v1_analytics_social_account_force503_error1.py` |
| `ApiV1AnalyticsSocialAccountForce504Error1` | `bundle_social/models/api_v1_analytics_social_account_force504_error1.py` |

### client.analytics.analytics_get_bulk_post_analytics

- **Route**: `GET /api/v1/analytics/post/bulk`
- **Auth**: `api_key_auth`
- **Signature**: `def analytics_get_bulk_post_analytics(post_ids: list[str], platform_type: PlatformTypeOrStr, *, page: float | None = 1.0, limit: float | None = 20.0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `post_ids`, `platform_type`
- **Params**: `post_ids` — query `postIds` · `platform_type` — query `platformType` · `page` — query · `limit` — query
- **Returns (parsed)**: `ApiV1AnalyticsPostBulkResponse`
- **Returns (raw)**: `ApiResult[ApiV1AnalyticsPostBulkResponse, AnalyticsGetBulkPostAnalyticsErrorBody]`
- **Error**: `AnalyticsGetBulkPostAnalyticsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1AnalyticsPostBulk400Error1` [400] · `ApiV1AnalyticsPostBulk401Error1` [401] · `ApiV1AnalyticsPostBulk403Error1` [403] · `ApiV1AnalyticsPostBulk404Error1` [404] · `ApiV1AnalyticsPostBulk429Error1` [429] · `ApiV1AnalyticsPostBulk500Error1` [500] · `ApiV1AnalyticsPostBulk502Error1` [502] · `ApiV1AnalyticsPostBulk503Error1` [503] · `ApiV1AnalyticsPostBulk504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlatformTypeOrStr` | `bundle_social/models/enums/platform_type.py` |
| `ApiV1AnalyticsPostBulkResponse` | `bundle_social/models/api_v1_analytics_post_bulk_response.py` |
| `AnalyticsGetBulkPostAnalyticsErrorBody` | `bundle_social/errors/analytics_get_bulk_post_analytics_error.py` |
| `ApiV1AnalyticsPostBulk400Error1` | `bundle_social/models/api_v1_analytics_post_bulk400_error1.py` |
| `ApiV1AnalyticsPostBulk401Error1` | `bundle_social/models/api_v1_analytics_post_bulk401_error1.py` |
| `ApiV1AnalyticsPostBulk403Error1` | `bundle_social/models/api_v1_analytics_post_bulk403_error1.py` |
| `ApiV1AnalyticsPostBulk404Error1` | `bundle_social/models/api_v1_analytics_post_bulk404_error1.py` |
| `ApiV1AnalyticsPostBulk429Error1` | `bundle_social/models/api_v1_analytics_post_bulk429_error1.py` |
| `ApiV1AnalyticsPostBulk500Error1` | `bundle_social/models/api_v1_analytics_post_bulk500_error1.py` |
| `ApiV1AnalyticsPostBulk502Error1` | `bundle_social/models/api_v1_analytics_post_bulk502_error1.py` |
| `ApiV1AnalyticsPostBulk503Error1` | `bundle_social/models/api_v1_analytics_post_bulk503_error1.py` |
| `ApiV1AnalyticsPostBulk504Error1` | `bundle_social/models/api_v1_analytics_post_bulk504_error1.py` |

### client.analytics.analytics_get_post_analytics

- **Route**: `GET /api/v1/analytics/post`
- **Auth**: `api_key_auth`
- **Signature**: `def analytics_get_post_analytics(*, post_id: str | None = None, platform_type: PlatformTypeOrStr | None = None, imported_post_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `post_id` — query `postId` · `platform_type` — query `platformType` · `imported_post_id` — query `importedPostId`
- **Returns (parsed)**: `ApiV1AnalyticsPostResponse`
- **Returns (raw)**: `ApiResult[ApiV1AnalyticsPostResponse, AnalyticsGetPostAnalyticsErrorBody]`
- **Error**: `AnalyticsGetPostAnalyticsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1AnalyticsPost400Error1` [400] · `ApiV1AnalyticsPost401Error1` [401] · `ApiV1AnalyticsPost403Error1` [403] · `ApiV1AnalyticsPost404Error1` [404] · `ApiV1AnalyticsPost429Error1` [429] · `ApiV1AnalyticsPost500Error1` [500] · `ApiV1AnalyticsPost502Error1` [502] · `ApiV1AnalyticsPost503Error1` [503] · `ApiV1AnalyticsPost504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlatformTypeOrStr` | `bundle_social/models/enums/platform_type.py` |
| `ApiV1AnalyticsPostResponse` | `bundle_social/models/api_v1_analytics_post_response.py` |
| `AnalyticsGetPostAnalyticsErrorBody` | `bundle_social/errors/analytics_get_post_analytics_error.py` |
| `ApiV1AnalyticsPost400Error1` | `bundle_social/models/api_v1_analytics_post400_error1.py` |
| `ApiV1AnalyticsPost401Error1` | `bundle_social/models/api_v1_analytics_post401_error1.py` |
| `ApiV1AnalyticsPost403Error1` | `bundle_social/models/api_v1_analytics_post403_error1.py` |
| `ApiV1AnalyticsPost404Error1` | `bundle_social/models/api_v1_analytics_post404_error1.py` |
| `ApiV1AnalyticsPost429Error1` | `bundle_social/models/api_v1_analytics_post429_error1.py` |
| `ApiV1AnalyticsPost500Error1` | `bundle_social/models/api_v1_analytics_post500_error1.py` |
| `ApiV1AnalyticsPost502Error1` | `bundle_social/models/api_v1_analytics_post502_error1.py` |
| `ApiV1AnalyticsPost503Error1` | `bundle_social/models/api_v1_analytics_post503_error1.py` |
| `ApiV1AnalyticsPost504Error1` | `bundle_social/models/api_v1_analytics_post504_error1.py` |

### client.analytics.analytics_get_post_analytics_raw

- **Route**: `GET /api/v1/analytics/post/raw`
- **Auth**: `api_key_auth`
- **Signature**: `def analytics_get_post_analytics_raw(*, post_id: str | None = None, platform_type: PlatformTypeOrStr | None = None, imported_post_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `post_id` — query `postId` · `platform_type` — query `platformType` · `imported_post_id` — query `importedPostId`
- **Returns (parsed)**: `ApiV1AnalyticsPostRawResponse`
- **Returns (raw)**: `ApiResult[ApiV1AnalyticsPostRawResponse, AnalyticsGetPostAnalyticsRawErrorBody]`
- **Error**: `AnalyticsGetPostAnalyticsRawErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1AnalyticsPostRaw400Error1` [400] · `ApiV1AnalyticsPostRaw401Error1` [401] · `ApiV1AnalyticsPostRaw403Error1` [403] · `ApiV1AnalyticsPostRaw404Error1` [404] · `ApiV1AnalyticsPostRaw429Error1` [429] · `ApiV1AnalyticsPostRaw500Error1` [500] · `ApiV1AnalyticsPostRaw502Error1` [502] · `ApiV1AnalyticsPostRaw503Error1` [503] · `ApiV1AnalyticsPostRaw504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlatformTypeOrStr` | `bundle_social/models/enums/platform_type.py` |
| `ApiV1AnalyticsPostRawResponse` | `bundle_social/models/api_v1_analytics_post_raw_response.py` |
| `AnalyticsGetPostAnalyticsRawErrorBody` | `bundle_social/errors/analytics_get_post_analytics_raw_error.py` |
| `ApiV1AnalyticsPostRaw400Error1` | `bundle_social/models/api_v1_analytics_post_raw400_error1.py` |
| `ApiV1AnalyticsPostRaw401Error1` | `bundle_social/models/api_v1_analytics_post_raw401_error1.py` |
| `ApiV1AnalyticsPostRaw403Error1` | `bundle_social/models/api_v1_analytics_post_raw403_error1.py` |
| `ApiV1AnalyticsPostRaw404Error1` | `bundle_social/models/api_v1_analytics_post_raw404_error1.py` |
| `ApiV1AnalyticsPostRaw429Error1` | `bundle_social/models/api_v1_analytics_post_raw429_error1.py` |
| `ApiV1AnalyticsPostRaw500Error1` | `bundle_social/models/api_v1_analytics_post_raw500_error1.py` |
| `ApiV1AnalyticsPostRaw502Error1` | `bundle_social/models/api_v1_analytics_post_raw502_error1.py` |
| `ApiV1AnalyticsPostRaw503Error1` | `bundle_social/models/api_v1_analytics_post_raw503_error1.py` |
| `ApiV1AnalyticsPostRaw504Error1` | `bundle_social/models/api_v1_analytics_post_raw504_error1.py` |

### client.analytics.analytics_get_social_account_analytics

- **Route**: `GET /api/v1/analytics/social-account`
- **Auth**: `api_key_auth`
- **Signature**: `def analytics_get_social_account_analytics(team_id: str, platform_type: PlatformTypeOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`, `platform_type`
- **Params**: `team_id` — query `teamId` · `platform_type` — query `platformType`
- **Returns (parsed)**: `ApiV1AnalyticsSocialAccountResponse`
- **Returns (raw)**: `ApiResult[ApiV1AnalyticsSocialAccountResponse, AnalyticsGetSocialAccountAnalyticsErrorBody]`
- **Error**: `AnalyticsGetSocialAccountAnalyticsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1AnalyticsSocialAccount400Error1` [400] · `ApiV1AnalyticsSocialAccount401Error1` [401] · `ApiV1AnalyticsSocialAccount403Error1` [403] · `ApiV1AnalyticsSocialAccount404Error1` [404] · `ApiV1AnalyticsSocialAccount429Error1` [429] · `ApiV1AnalyticsSocialAccount500Error1` [500] · `ApiV1AnalyticsSocialAccount502Error1` [502] · `ApiV1AnalyticsSocialAccount503Error1` [503] · `ApiV1AnalyticsSocialAccount504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlatformTypeOrStr` | `bundle_social/models/enums/platform_type.py` |
| `ApiV1AnalyticsSocialAccountResponse` | `bundle_social/models/api_v1_analytics_social_account_response.py` |
| `AnalyticsGetSocialAccountAnalyticsErrorBody` | `bundle_social/errors/analytics_get_social_account_analytics_error.py` |
| `ApiV1AnalyticsSocialAccount400Error1` | `bundle_social/models/api_v1_analytics_social_account400_error1.py` |
| `ApiV1AnalyticsSocialAccount401Error1` | `bundle_social/models/api_v1_analytics_social_account401_error1.py` |
| `ApiV1AnalyticsSocialAccount403Error1` | `bundle_social/models/api_v1_analytics_social_account403_error1.py` |
| `ApiV1AnalyticsSocialAccount404Error1` | `bundle_social/models/api_v1_analytics_social_account404_error1.py` |
| `ApiV1AnalyticsSocialAccount429Error1` | `bundle_social/models/api_v1_analytics_social_account429_error1.py` |
| `ApiV1AnalyticsSocialAccount500Error1` | `bundle_social/models/api_v1_analytics_social_account500_error1.py` |
| `ApiV1AnalyticsSocialAccount502Error1` | `bundle_social/models/api_v1_analytics_social_account502_error1.py` |
| `ApiV1AnalyticsSocialAccount503Error1` | `bundle_social/models/api_v1_analytics_social_account503_error1.py` |
| `ApiV1AnalyticsSocialAccount504Error1` | `bundle_social/models/api_v1_analytics_social_account504_error1.py` |

### client.analytics.analytics_get_social_account_analytics_raw

- **Route**: `GET /api/v1/analytics/social-account/raw`
- **Auth**: `api_key_auth`
- **Signature**: `def analytics_get_social_account_analytics_raw(team_id: str, platform_type: PlatformTypeOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `team_id`, `platform_type`
- **Params**: `team_id` — query `teamId` · `platform_type` — query `platformType`
- **Returns (parsed)**: `ApiV1AnalyticsSocialAccountRawResponse`
- **Returns (raw)**: `ApiResult[ApiV1AnalyticsSocialAccountRawResponse, AnalyticsGetSocialAccountAnalyticsRawErrorBody]`
- **Error**: `AnalyticsGetSocialAccountAnalyticsRawErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1AnalyticsSocialAccountRaw400Error1` [400] · `ApiV1AnalyticsSocialAccountRaw401Error1` [401] · `ApiV1AnalyticsSocialAccountRaw403Error1` [403] · `ApiV1AnalyticsSocialAccountRaw404Error1` [404] · `ApiV1AnalyticsSocialAccountRaw429Error1` [429] · `ApiV1AnalyticsSocialAccountRaw500Error1` [500] · `ApiV1AnalyticsSocialAccountRaw502Error1` [502] · `ApiV1AnalyticsSocialAccountRaw503Error1` [503] · `ApiV1AnalyticsSocialAccountRaw504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlatformTypeOrStr` | `bundle_social/models/enums/platform_type.py` |
| `ApiV1AnalyticsSocialAccountRawResponse` | `bundle_social/models/api_v1_analytics_social_account_raw_response.py` |
| `AnalyticsGetSocialAccountAnalyticsRawErrorBody` | `bundle_social/errors/analytics_get_social_account_analytics_raw_error.py` |
| `ApiV1AnalyticsSocialAccountRaw400Error1` | `bundle_social/models/api_v1_analytics_social_account_raw400_error1.py` |
| `ApiV1AnalyticsSocialAccountRaw401Error1` | `bundle_social/models/api_v1_analytics_social_account_raw401_error1.py` |
| `ApiV1AnalyticsSocialAccountRaw403Error1` | `bundle_social/models/api_v1_analytics_social_account_raw403_error1.py` |
| `ApiV1AnalyticsSocialAccountRaw404Error1` | `bundle_social/models/api_v1_analytics_social_account_raw404_error1.py` |
| `ApiV1AnalyticsSocialAccountRaw429Error1` | `bundle_social/models/api_v1_analytics_social_account_raw429_error1.py` |
| `ApiV1AnalyticsSocialAccountRaw500Error1` | `bundle_social/models/api_v1_analytics_social_account_raw500_error1.py` |
| `ApiV1AnalyticsSocialAccountRaw502Error1` | `bundle_social/models/api_v1_analytics_social_account_raw502_error1.py` |
| `ApiV1AnalyticsSocialAccountRaw503Error1` | `bundle_social/models/api_v1_analytics_social_account_raw503_error1.py` |
| `ApiV1AnalyticsSocialAccountRaw504Error1` | `bundle_social/models/api_v1_analytics_social_account_raw504_error1.py` |

