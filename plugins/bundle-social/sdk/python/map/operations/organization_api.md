<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrganizationApi — operations

Accessor: `client.organization_api` · Source: `bundle_social/apis/organization_api.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.organization_api.organization_get_comments_usage

- **Route**: `GET /api/v1/organization/usage/comments`
- **Auth**: `api_key_auth`
- **Signature**: `def organization_get_comments_usage(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1OrganizationUsageCommentsResponse`
- **Returns (raw)**: `ApiResult[ApiV1OrganizationUsageCommentsResponse, OrganizationGetCommentsUsageErrorBody]`
- **Error**: `OrganizationGetCommentsUsageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1OrganizationUsageComments400Error1` [400] · `ApiV1OrganizationUsageComments401Error1` [401] · `ApiV1OrganizationUsageComments403Error1` [403] · `ApiV1OrganizationUsageComments404Error1` [404] · `ApiV1OrganizationUsageComments429Error1` [429] · `ApiV1OrganizationUsageComments500Error1` [500] · `ApiV1OrganizationUsageComments502Error1` [502] · `ApiV1OrganizationUsageComments503Error1` [503] · `ApiV1OrganizationUsageComments504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1OrganizationUsageCommentsResponse` | `bundle_social/models/api_v1_organization_usage_comments_response.py` |
| `OrganizationGetCommentsUsageErrorBody` | `bundle_social/errors/organization_get_comments_usage_error.py` |
| `ApiV1OrganizationUsageComments400Error1` | `bundle_social/models/api_v1_organization_usage_comments400_error1.py` |
| `ApiV1OrganizationUsageComments401Error1` | `bundle_social/models/api_v1_organization_usage_comments401_error1.py` |
| `ApiV1OrganizationUsageComments403Error1` | `bundle_social/models/api_v1_organization_usage_comments403_error1.py` |
| `ApiV1OrganizationUsageComments404Error1` | `bundle_social/models/api_v1_organization_usage_comments404_error1.py` |
| `ApiV1OrganizationUsageComments429Error1` | `bundle_social/models/api_v1_organization_usage_comments429_error1.py` |
| `ApiV1OrganizationUsageComments500Error1` | `bundle_social/models/api_v1_organization_usage_comments500_error1.py` |
| `ApiV1OrganizationUsageComments502Error1` | `bundle_social/models/api_v1_organization_usage_comments502_error1.py` |
| `ApiV1OrganizationUsageComments503Error1` | `bundle_social/models/api_v1_organization_usage_comments503_error1.py` |
| `ApiV1OrganizationUsageComments504Error1` | `bundle_social/models/api_v1_organization_usage_comments504_error1.py` |

### client.organization_api.organization_get_daily_limits_usage

- **Route**: `GET /api/v1/organization/usage/daily-limits`
- **Auth**: `api_key_auth`
- **Signature**: `def organization_get_daily_limits_usage(social_account_id: str, *, date: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `social_account_id`
- **Params**: `social_account_id` — query `socialAccountId` · `date` — query
- **Returns (parsed)**: `ApiV1OrganizationUsageDailyLimitsResponse`
- **Returns (raw)**: `ApiResult[ApiV1OrganizationUsageDailyLimitsResponse, OrganizationGetDailyLimitsUsageErrorBody]`
- **Error**: `OrganizationGetDailyLimitsUsageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1OrganizationUsageDailyLimits400Error1` [400] · `ApiV1OrganizationUsageDailyLimits401Error1` [401] · `ApiV1OrganizationUsageDailyLimits403Error1` [403] · `ApiV1OrganizationUsageDailyLimits404Error1` [404] · `ApiV1OrganizationUsageDailyLimits429Error1` [429] · `ApiV1OrganizationUsageDailyLimits500Error1` [500] · `ApiV1OrganizationUsageDailyLimits502Error1` [502] · `ApiV1OrganizationUsageDailyLimits503Error1` [503] · `ApiV1OrganizationUsageDailyLimits504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1OrganizationUsageDailyLimitsResponse` | `bundle_social/models/api_v1_organization_usage_daily_limits_response.py` |
| `OrganizationGetDailyLimitsUsageErrorBody` | `bundle_social/errors/organization_get_daily_limits_usage_error.py` |
| `ApiV1OrganizationUsageDailyLimits400Error1` | `bundle_social/models/api_v1_organization_usage_daily_limits400_error1.py` |
| `ApiV1OrganizationUsageDailyLimits401Error1` | `bundle_social/models/api_v1_organization_usage_daily_limits401_error1.py` |
| `ApiV1OrganizationUsageDailyLimits403Error1` | `bundle_social/models/api_v1_organization_usage_daily_limits403_error1.py` |
| `ApiV1OrganizationUsageDailyLimits404Error1` | `bundle_social/models/api_v1_organization_usage_daily_limits404_error1.py` |
| `ApiV1OrganizationUsageDailyLimits429Error1` | `bundle_social/models/api_v1_organization_usage_daily_limits429_error1.py` |
| `ApiV1OrganizationUsageDailyLimits500Error1` | `bundle_social/models/api_v1_organization_usage_daily_limits500_error1.py` |
| `ApiV1OrganizationUsageDailyLimits502Error1` | `bundle_social/models/api_v1_organization_usage_daily_limits502_error1.py` |
| `ApiV1OrganizationUsageDailyLimits503Error1` | `bundle_social/models/api_v1_organization_usage_daily_limits503_error1.py` |
| `ApiV1OrganizationUsageDailyLimits504Error1` | `bundle_social/models/api_v1_organization_usage_daily_limits504_error1.py` |

### client.organization_api.organization_get_imports_usage

- **Route**: `GET /api/v1/organization/usage/imports`
- **Auth**: `api_key_auth`
- **Signature**: `def organization_get_imports_usage(*, page: float | None = 1.0, page_size: float | None = 20.0, team_id: str | None = None, social_account_type: SocialAccountTypeBundleSocialOrganizationApiOrStr | None = None, social_account_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page` — query · `page_size` — query `pageSize` · `team_id` — query `teamId` · `social_account_type` — query `socialAccountType` · `social_account_id` — query `socialAccountId`
- **Returns (parsed)**: `ApiV1OrganizationUsageImportsResponse`
- **Returns (raw)**: `ApiResult[ApiV1OrganizationUsageImportsResponse, OrganizationGetImportsUsageErrorBody]`
- **Error**: `OrganizationGetImportsUsageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1OrganizationUsageImports400Error1` [400] · `ApiV1OrganizationUsageImports401Error1` [401] · `ApiV1OrganizationUsageImports403Error1` [403] · `ApiV1OrganizationUsageImports404Error1` [404] · `ApiV1OrganizationUsageImports429Error1` [429] · `ApiV1OrganizationUsageImports500Error1` [500] · `ApiV1OrganizationUsageImports502Error1` [502] · `ApiV1OrganizationUsageImports503Error1` [503] · `ApiV1OrganizationUsageImports504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SocialAccountTypeBundleSocialOrganizationApiOrStr` | `bundle_social/models/enums/social_account_type_bundle_social_organization_api.py` |
| `ApiV1OrganizationUsageImportsResponse` | `bundle_social/models/api_v1_organization_usage_imports_response.py` |
| `OrganizationGetImportsUsageErrorBody` | `bundle_social/errors/organization_get_imports_usage_error.py` |
| `ApiV1OrganizationUsageImports400Error1` | `bundle_social/models/api_v1_organization_usage_imports400_error1.py` |
| `ApiV1OrganizationUsageImports401Error1` | `bundle_social/models/api_v1_organization_usage_imports401_error1.py` |
| `ApiV1OrganizationUsageImports403Error1` | `bundle_social/models/api_v1_organization_usage_imports403_error1.py` |
| `ApiV1OrganizationUsageImports404Error1` | `bundle_social/models/api_v1_organization_usage_imports404_error1.py` |
| `ApiV1OrganizationUsageImports429Error1` | `bundle_social/models/api_v1_organization_usage_imports429_error1.py` |
| `ApiV1OrganizationUsageImports500Error1` | `bundle_social/models/api_v1_organization_usage_imports500_error1.py` |
| `ApiV1OrganizationUsageImports502Error1` | `bundle_social/models/api_v1_organization_usage_imports502_error1.py` |
| `ApiV1OrganizationUsageImports503Error1` | `bundle_social/models/api_v1_organization_usage_imports503_error1.py` |
| `ApiV1OrganizationUsageImports504Error1` | `bundle_social/models/api_v1_organization_usage_imports504_error1.py` |

### client.organization_api.organization_get_messages_usage

- **Route**: `GET /api/v1/organization/usage/messages`
- **Auth**: `api_key_auth`
- **Signature**: `def organization_get_messages_usage(*, offset: int | None = 0, limit: int | None = 10, team_id: str | None = None, social_account_type: SocialAccountType1BundleSocialOrganizationApiOrStr | None = None, social_account_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `offset` — query · `limit` — query · `team_id` — query `teamId` · `social_account_type` — query `socialAccountType` · `social_account_id` — query `socialAccountId`
- **Returns (parsed)**: `ApiV1OrganizationUsageMessagesResponse`
- **Returns (raw)**: `ApiResult[ApiV1OrganizationUsageMessagesResponse, OrganizationGetMessagesUsageErrorBody]`
- **Error**: `OrganizationGetMessagesUsageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1OrganizationUsageMessages400Error1` [400] · `ApiV1OrganizationUsageMessages401Error1` [401] · `ApiV1OrganizationUsageMessages403Error1` [403] · `ApiV1OrganizationUsageMessages404Error1` [404] · `ApiV1OrganizationUsageMessages429Error1` [429] · `ApiV1OrganizationUsageMessages500Error1` [500] · `ApiV1OrganizationUsageMessages502Error1` [502] · `ApiV1OrganizationUsageMessages503Error1` [503] · `ApiV1OrganizationUsageMessages504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SocialAccountType1BundleSocialOrganizationApiOrStr` | `bundle_social/models/enums/social_account_type1_bundle_social_organization_api.py` |
| `ApiV1OrganizationUsageMessagesResponse` | `bundle_social/models/api_v1_organization_usage_messages_response.py` |
| `OrganizationGetMessagesUsageErrorBody` | `bundle_social/errors/organization_get_messages_usage_error.py` |
| `ApiV1OrganizationUsageMessages400Error1` | `bundle_social/models/api_v1_organization_usage_messages400_error1.py` |
| `ApiV1OrganizationUsageMessages401Error1` | `bundle_social/models/api_v1_organization_usage_messages401_error1.py` |
| `ApiV1OrganizationUsageMessages403Error1` | `bundle_social/models/api_v1_organization_usage_messages403_error1.py` |
| `ApiV1OrganizationUsageMessages404Error1` | `bundle_social/models/api_v1_organization_usage_messages404_error1.py` |
| `ApiV1OrganizationUsageMessages429Error1` | `bundle_social/models/api_v1_organization_usage_messages429_error1.py` |
| `ApiV1OrganizationUsageMessages500Error1` | `bundle_social/models/api_v1_organization_usage_messages500_error1.py` |
| `ApiV1OrganizationUsageMessages502Error1` | `bundle_social/models/api_v1_organization_usage_messages502_error1.py` |
| `ApiV1OrganizationUsageMessages503Error1` | `bundle_social/models/api_v1_organization_usage_messages503_error1.py` |
| `ApiV1OrganizationUsageMessages504Error1` | `bundle_social/models/api_v1_organization_usage_messages504_error1.py` |

### client.organization_api.organization_get_organization

- **Route**: `GET /api/v1/organization/`
- **Auth**: `api_key_auth`
- **Signature**: `def organization_get_organization(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1OrganizationResponse`
- **Returns (raw)**: `ApiResult[ApiV1OrganizationResponse, OrganizationGetOrganizationErrorBody]`
- **Error**: `OrganizationGetOrganizationErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Organization400Error1` [400] · `ApiV1Organization401Error1` [401] · `ApiV1Organization403Error1` [403] · `ApiV1Organization404Error1` [404] · `ApiV1Organization429Error1` [429] · `ApiV1Organization500Error1` [500] · `ApiV1Organization502Error1` [502] · `ApiV1Organization503Error1` [503] · `ApiV1Organization504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1OrganizationResponse` | `bundle_social/models/api_v1_organization_response.py` |
| `OrganizationGetOrganizationErrorBody` | `bundle_social/errors/organization_get_organization_error.py` |
| `ApiV1Organization400Error1` | `bundle_social/models/api_v1_organization400_error1.py` |
| `ApiV1Organization401Error1` | `bundle_social/models/api_v1_organization401_error1.py` |
| `ApiV1Organization403Error1` | `bundle_social/models/api_v1_organization403_error1.py` |
| `ApiV1Organization404Error1` | `bundle_social/models/api_v1_organization404_error1.py` |
| `ApiV1Organization429Error1` | `bundle_social/models/api_v1_organization429_error1.py` |
| `ApiV1Organization500Error1` | `bundle_social/models/api_v1_organization500_error1.py` |
| `ApiV1Organization502Error1` | `bundle_social/models/api_v1_organization502_error1.py` |
| `ApiV1Organization503Error1` | `bundle_social/models/api_v1_organization503_error1.py` |
| `ApiV1Organization504Error1` | `bundle_social/models/api_v1_organization504_error1.py` |

### client.organization_api.organization_get_posts_usage

- **Route**: `GET /api/v1/organization/usage/posts`
- **Auth**: `api_key_auth`
- **Signature**: `def organization_get_posts_usage(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1OrganizationUsagePostsResponse`
- **Returns (raw)**: `ApiResult[ApiV1OrganizationUsagePostsResponse, OrganizationGetPostsUsageErrorBody]`
- **Error**: `OrganizationGetPostsUsageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1OrganizationUsagePosts400Error1` [400] · `ApiV1OrganizationUsagePosts401Error1` [401] · `ApiV1OrganizationUsagePosts403Error1` [403] · `ApiV1OrganizationUsagePosts404Error1` [404] · `ApiV1OrganizationUsagePosts429Error1` [429] · `ApiV1OrganizationUsagePosts500Error1` [500] · `ApiV1OrganizationUsagePosts502Error1` [502] · `ApiV1OrganizationUsagePosts503Error1` [503] · `ApiV1OrganizationUsagePosts504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1OrganizationUsagePostsResponse` | `bundle_social/models/api_v1_organization_usage_posts_response.py` |
| `OrganizationGetPostsUsageErrorBody` | `bundle_social/errors/organization_get_posts_usage_error.py` |
| `ApiV1OrganizationUsagePosts400Error1` | `bundle_social/models/api_v1_organization_usage_posts400_error1.py` |
| `ApiV1OrganizationUsagePosts401Error1` | `bundle_social/models/api_v1_organization_usage_posts401_error1.py` |
| `ApiV1OrganizationUsagePosts403Error1` | `bundle_social/models/api_v1_organization_usage_posts403_error1.py` |
| `ApiV1OrganizationUsagePosts404Error1` | `bundle_social/models/api_v1_organization_usage_posts404_error1.py` |
| `ApiV1OrganizationUsagePosts429Error1` | `bundle_social/models/api_v1_organization_usage_posts429_error1.py` |
| `ApiV1OrganizationUsagePosts500Error1` | `bundle_social/models/api_v1_organization_usage_posts500_error1.py` |
| `ApiV1OrganizationUsagePosts502Error1` | `bundle_social/models/api_v1_organization_usage_posts502_error1.py` |
| `ApiV1OrganizationUsagePosts503Error1` | `bundle_social/models/api_v1_organization_usage_posts503_error1.py` |
| `ApiV1OrganizationUsagePosts504Error1` | `bundle_social/models/api_v1_organization_usage_posts504_error1.py` |

### client.organization_api.organization_get_uploads_usage

- **Route**: `GET /api/v1/organization/usage/uploads`
- **Auth**: `api_key_auth`
- **Signature**: `def organization_get_uploads_usage(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1OrganizationUsageUploadsResponse`
- **Returns (raw)**: `ApiResult[ApiV1OrganizationUsageUploadsResponse, OrganizationGetUploadsUsageErrorBody]`
- **Error**: `OrganizationGetUploadsUsageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1OrganizationUsageUploads400Error1` [400] · `ApiV1OrganizationUsageUploads401Error1` [401] · `ApiV1OrganizationUsageUploads403Error1` [403] · `ApiV1OrganizationUsageUploads404Error1` [404] · `ApiV1OrganizationUsageUploads429Error1` [429] · `ApiV1OrganizationUsageUploads500Error1` [500] · `ApiV1OrganizationUsageUploads502Error1` [502] · `ApiV1OrganizationUsageUploads503Error1` [503] · `ApiV1OrganizationUsageUploads504Error1` [504] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1OrganizationUsageUploadsResponse` | `bundle_social/models/api_v1_organization_usage_uploads_response.py` |
| `OrganizationGetUploadsUsageErrorBody` | `bundle_social/errors/organization_get_uploads_usage_error.py` |
| `ApiV1OrganizationUsageUploads400Error1` | `bundle_social/models/api_v1_organization_usage_uploads400_error1.py` |
| `ApiV1OrganizationUsageUploads401Error1` | `bundle_social/models/api_v1_organization_usage_uploads401_error1.py` |
| `ApiV1OrganizationUsageUploads403Error1` | `bundle_social/models/api_v1_organization_usage_uploads403_error1.py` |
| `ApiV1OrganizationUsageUploads404Error1` | `bundle_social/models/api_v1_organization_usage_uploads404_error1.py` |
| `ApiV1OrganizationUsageUploads429Error1` | `bundle_social/models/api_v1_organization_usage_uploads429_error1.py` |
| `ApiV1OrganizationUsageUploads500Error1` | `bundle_social/models/api_v1_organization_usage_uploads500_error1.py` |
| `ApiV1OrganizationUsageUploads502Error1` | `bundle_social/models/api_v1_organization_usage_uploads502_error1.py` |
| `ApiV1OrganizationUsageUploads503Error1` | `bundle_social/models/api_v1_organization_usage_uploads503_error1.py` |
| `ApiV1OrganizationUsageUploads504Error1` | `bundle_social/models/api_v1_organization_usage_uploads504_error1.py` |

