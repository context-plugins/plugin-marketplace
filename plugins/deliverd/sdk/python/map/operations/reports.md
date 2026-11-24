<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.reports` · Source: `deliverd/apis/reports.py` · 21 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.reports.delete_api_v1_reports_by_id_or_slug_comments_by_comment_id

- **Route**: `DELETE /api/v1/reports/{idOrSlug}/comments/{commentId}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_api_v1_reports_by_id_or_slug_comments_by_comment_id(id_or_slug: str, comment_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_or_slug`, `comment_id`
- **Params**: `id_or_slug` — path `idOrSlug` · `comment_id` — path `commentId`
- **Returns (parsed)**: `ApiV1ReportsCommentsResponse2`
- **Returns (raw)**: `ApiResult[ApiV1ReportsCommentsResponse2, DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdErrorBody]`
- **Error**: `DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ReportsCommentsResponse2` | `deliverd/models/api_v1_reports_comments_response2.py` |
| `DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdErrorBody` | `deliverd/errors/delete_api_v1_reports_by_id_or_slug_comments_by_comment_id_error.py` |

### client.reports.delete_api_v1_reports_by_id_or_slug_data_by_name

- **Route**: `DELETE /api/v1/reports/{idOrSlug}/data/{name}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_api_v1_reports_by_id_or_slug_data_by_name(id_or_slug: str, name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_or_slug`, `name`
- **Params**: `id_or_slug` — path `idOrSlug` · `name` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.reports.delete_api_v1_reports_by_id_or_slug_share

- **Route**: `DELETE /api/v1/reports/{idOrSlug}/share`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_api_v1_reports_by_id_or_slug_share(id_or_slug: str, *, body: ApiV1ReportsShareRequest1 | ApiV1ReportsShareRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_or_slug`
- **Params**: `id_or_slug` — path `idOrSlug` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ReportsShareResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ReportsShareResponse1, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1ReportsShareRequest1` | `deliverd/models/api_v1_reports_share_request1.py` |
| `ApiV1ReportsShareRequest1Dict` | `deliverd/models/api_v1_reports_share_request1.py` |
| `ApiV1ReportsShareResponse1` | `deliverd/models/api_v1_reports_share_response1.py` |

### client.reports.get_api_v1_reports

- **Route**: `GET /api/v1/reports`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_reports(*, q: str | None = None, limit: int | None = None, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `limit` — query · `cursor` — query
- **Returns (parsed)**: `ApiV1ReportsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ReportsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1ReportsResponse` | `deliverd/models/api_v1_reports_response.py` |

### client.reports.get_api_v1_reports_by_id_or_slug

- **Route**: `GET /api/v1/reports/{idOrSlug}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_reports_by_id_or_slug(id_or_slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_or_slug`
- **Params**: `id_or_slug` — path `idOrSlug`
- **Returns (parsed)**: `ApiV1ReportsResponse4`
- **Returns (raw)**: `ApiResult[ApiV1ReportsResponse4, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1ReportsResponse4` | `deliverd/models/api_v1_reports_response4.py` |

### client.reports.get_api_v1_reports_by_id_or_slug_analytics

- **Route**: `GET /api/v1/reports/{idOrSlug}/analytics`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_reports_by_id_or_slug_analytics(id_or_slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_or_slug`
- **Params**: `id_or_slug` — path `idOrSlug`
- **Returns (parsed)**: `ApiV1ReportsAnalyticsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ReportsAnalyticsResponse, GetApiV1ReportsByIdOrSlugAnalyticsErrorBody]`
- **Error**: `GetApiV1ReportsByIdOrSlugAnalyticsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ReportsAnalyticsResponse` | `deliverd/models/api_v1_reports_analytics_response.py` |
| `GetApiV1ReportsByIdOrSlugAnalyticsErrorBody` | `deliverd/errors/get_api_v1_reports_by_id_or_slug_analytics_error.py` |

### client.reports.get_api_v1_reports_by_id_or_slug_comments

- **Route**: `GET /api/v1/reports/{idOrSlug}/comments`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_reports_by_id_or_slug_comments(id_or_slug: str, *, status: Status12OrStr | None = None, limit: int | None = None, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_or_slug`
- **Params**: `id_or_slug` — path `idOrSlug` · `status` — query · `limit` — query · `cursor` — query
- **Returns (parsed)**: `ApiV1ReportsCommentsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ReportsCommentsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Status12OrStr` | `deliverd/models/enums/status12.py` |
| `ApiV1ReportsCommentsResponse` | `deliverd/models/api_v1_reports_comments_response.py` |

### client.reports.get_api_v1_reports_by_id_or_slug_data

- **Route**: `GET /api/v1/reports/{idOrSlug}/data`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_reports_by_id_or_slug_data(id_or_slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_or_slug`
- **Params**: `id_or_slug` — path `idOrSlug`
- **Returns (parsed)**: `ApiV1ReportsDataResponse`
- **Returns (raw)**: `ApiResult[ApiV1ReportsDataResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1ReportsDataResponse` | `deliverd/models/api_v1_reports_data_response.py` |

### client.reports.get_api_v1_reports_by_id_or_slug_evidence

- **Route**: `GET /api/v1/reports/{idOrSlug}/evidence`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_reports_by_id_or_slug_evidence(id_or_slug: str, *, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_or_slug`
- **Params**: `id_or_slug` — path `idOrSlug` · `format_` — query `format`
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], GetApiV1ReportsByIdOrSlugEvidenceErrorBody]`
- **Error**: `GetApiV1ReportsByIdOrSlugEvidenceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `deliverd/models/enums/format.py` |
| `GetApiV1ReportsByIdOrSlugEvidenceErrorBody` | `deliverd/errors/get_api_v1_reports_by_id_or_slug_evidence_error.py` |

### client.reports.get_api_v1_reports_by_id_or_slug_versions

- **Route**: `GET /api/v1/reports/{idOrSlug}/versions`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_reports_by_id_or_slug_versions(id_or_slug: str, *, limit: int | None = None, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_or_slug`
- **Params**: `id_or_slug` — path `idOrSlug` · `limit` — query · `cursor` — query
- **Returns (parsed)**: `ApiV1ReportsVersionsResponse2`
- **Returns (raw)**: `ApiResult[ApiV1ReportsVersionsResponse2, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1ReportsVersionsResponse2` | `deliverd/models/api_v1_reports_versions_response2.py` |

### client.reports.patch_api_v1_reports_by_id_or_slug

- **Route**: `PATCH /api/v1/reports/{idOrSlug}`
- **Auth**: `bearer_auth`
- **Signature**: `def patch_api_v1_reports_by_id_or_slug(id_or_slug: str, *, body: ApiV1ReportsRequest1 | ApiV1ReportsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_or_slug`
- **Params**: `id_or_slug` — path `idOrSlug` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ReportsResponse3`
- **Returns (raw)**: `ApiResult[ApiV1ReportsResponse3, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1ReportsRequest1` | `deliverd/models/api_v1_reports_request1.py` |
| `ApiV1ReportsRequest1Dict` | `deliverd/models/api_v1_reports_request1.py` |
| `ApiV1ReportsResponse3` | `deliverd/models/api_v1_reports_response3.py` |

### client.reports.post_api_v1_reports

- **Route**: `POST /api/v1/reports`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_reports(*, body: ApiV1ReportsRequest | ApiV1ReportsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ReportsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ReportsResponse1, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1ReportsRequest` | `deliverd/models/api_v1_reports_request.py` |
| `ApiV1ReportsRequestDict` | `deliverd/models/api_v1_reports_request.py` |
| `ApiV1ReportsResponse1` | `deliverd/models/api_v1_reports_response1.py` |

### client.reports.post_api_v1_reports_by_id_or_slug_archive

- **Route**: `POST /api/v1/reports/{idOrSlug}/archive`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_reports_by_id_or_slug_archive(id_or_slug: str, *, body: ApiV1ReportsArchiveRequest | ApiV1ReportsArchiveRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_or_slug`
- **Params**: `id_or_slug` — path `idOrSlug` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ReportsArchiveResponse`
- **Returns (raw)**: `ApiResult[ApiV1ReportsArchiveResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1ReportsArchiveRequest` | `deliverd/models/api_v1_reports_archive_request.py` |
| `ApiV1ReportsArchiveRequestDict` | `deliverd/models/api_v1_reports_archive_request.py` |
| `ApiV1ReportsArchiveResponse` | `deliverd/models/api_v1_reports_archive_response.py` |

### client.reports.post_api_v1_reports_by_id_or_slug_comments

- **Route**: `POST /api/v1/reports/{idOrSlug}/comments`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_reports_by_id_or_slug_comments(id_or_slug: str, *, body: ApiV1ReportsCommentsRequest | ApiV1ReportsCommentsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_or_slug`
- **Params**: `id_or_slug` — path `idOrSlug` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ReportsCommentsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ReportsCommentsResponse1, PostApiV1ReportsByIdOrSlugCommentsErrorBody]`
- **Error**: `PostApiV1ReportsByIdOrSlugCommentsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ReportsCommentsRequest` | `deliverd/models/api_v1_reports_comments_request.py` |
| `ApiV1ReportsCommentsRequestDict` | `deliverd/models/api_v1_reports_comments_request.py` |
| `ApiV1ReportsCommentsResponse1` | `deliverd/models/api_v1_reports_comments_response1.py` |
| `PostApiV1ReportsByIdOrSlugCommentsErrorBody` | `deliverd/errors/post_api_v1_reports_by_id_or_slug_comments_error.py` |

### client.reports.post_api_v1_reports_by_id_or_slug_copy

- **Route**: `POST /api/v1/reports/{idOrSlug}/copy`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_reports_by_id_or_slug_copy(id_or_slug: str, *, body: ApiV1ReportsCopyRequest | ApiV1ReportsCopyRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_or_slug`
- **Params**: `id_or_slug` — path `idOrSlug` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ReportsCopyResponse`
- **Returns (raw)**: `ApiResult[ApiV1ReportsCopyResponse, PostApiV1ReportsByIdOrSlugCopyErrorBody]`
- **Error**: `PostApiV1ReportsByIdOrSlugCopyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ReportsCopyRequest` | `deliverd/models/api_v1_reports_copy_request.py` |
| `ApiV1ReportsCopyRequestDict` | `deliverd/models/api_v1_reports_copy_request.py` |
| `ApiV1ReportsCopyResponse` | `deliverd/models/api_v1_reports_copy_response.py` |
| `PostApiV1ReportsByIdOrSlugCopyErrorBody` | `deliverd/errors/post_api_v1_reports_by_id_or_slug_copy_error.py` |

### client.reports.post_api_v1_reports_by_id_or_slug_revision_briefs

- **Route**: `POST /api/v1/reports/{idOrSlug}/revision-briefs`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_reports_by_id_or_slug_revision_briefs(id_or_slug: str, *, body: ApiV1ReportsRevisionBriefsRequest | ApiV1ReportsRevisionBriefsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_or_slug`
- **Params**: `id_or_slug` — path `idOrSlug` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ReportsRevisionBriefsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ReportsRevisionBriefsResponse, PostApiV1ReportsByIdOrSlugRevisionBriefsErrorBody]`
- **Error**: `PostApiV1ReportsByIdOrSlugRevisionBriefsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ReportsRevisionBriefsRequest` | `deliverd/models/api_v1_reports_revision_briefs_request.py` |
| `ApiV1ReportsRevisionBriefsRequestDict` | `deliverd/models/api_v1_reports_revision_briefs_request.py` |
| `ApiV1ReportsRevisionBriefsResponse` | `deliverd/models/api_v1_reports_revision_briefs_response.py` |
| `PostApiV1ReportsByIdOrSlugRevisionBriefsErrorBody` | `deliverd/errors/post_api_v1_reports_by_id_or_slug_revision_briefs_error.py` |

### client.reports.post_api_v1_reports_by_id_or_slug_rollback

- **Route**: `POST /api/v1/reports/{idOrSlug}/rollback`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_reports_by_id_or_slug_rollback(id_or_slug: str, *, body: ApiV1ReportsRollbackRequest | ApiV1ReportsRollbackRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_or_slug`
- **Params**: `id_or_slug` — path `idOrSlug` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ReportsRollbackResponse`
- **Returns (raw)**: `ApiResult[ApiV1ReportsRollbackResponse, PostApiV1ReportsByIdOrSlugRollbackErrorBody]`
- **Error**: `PostApiV1ReportsByIdOrSlugRollbackErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ReportsRollbackRequest` | `deliverd/models/api_v1_reports_rollback_request.py` |
| `ApiV1ReportsRollbackRequestDict` | `deliverd/models/api_v1_reports_rollback_request.py` |
| `ApiV1ReportsRollbackResponse` | `deliverd/models/api_v1_reports_rollback_response.py` |
| `PostApiV1ReportsByIdOrSlugRollbackErrorBody` | `deliverd/errors/post_api_v1_reports_by_id_or_slug_rollback_error.py` |

### client.reports.post_api_v1_reports_by_id_or_slug_send

- **Route**: `POST /api/v1/reports/{idOrSlug}/send`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_reports_by_id_or_slug_send(id_or_slug: str, *, body: ApiV1ReportsSendRequest | ApiV1ReportsSendRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_or_slug`
- **Params**: `id_or_slug` — path `idOrSlug` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ReportsSendResponse`
- **Returns (raw)**: `ApiResult[ApiV1ReportsSendResponse, PostApiV1ReportsByIdOrSlugSendErrorBody]`
- **Error**: `PostApiV1ReportsByIdOrSlugSendErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ReportsSendRequest` | `deliverd/models/api_v1_reports_send_request.py` |
| `ApiV1ReportsSendRequestDict` | `deliverd/models/api_v1_reports_send_request.py` |
| `ApiV1ReportsSendResponse` | `deliverd/models/api_v1_reports_send_response.py` |
| `PostApiV1ReportsByIdOrSlugSendErrorBody` | `deliverd/errors/post_api_v1_reports_by_id_or_slug_send_error.py` |

### client.reports.post_api_v1_reports_by_id_or_slug_share

- **Route**: `POST /api/v1/reports/{idOrSlug}/share`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_reports_by_id_or_slug_share(id_or_slug: str, *, body: ApiV1ReportsShareRequest | ApiV1ReportsShareRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_or_slug`
- **Params**: `id_or_slug` — path `idOrSlug` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ReportsShareResponse`
- **Returns (raw)**: `ApiResult[ApiV1ReportsShareResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV1ReportsShareRequest` | `deliverd/models/api_v1_reports_share_request.py` |
| `ApiV1ReportsShareRequestDict` | `deliverd/models/api_v1_reports_share_request.py` |
| `ApiV1ReportsShareResponse` | `deliverd/models/api_v1_reports_share_response.py` |

### client.reports.post_api_v1_reports_by_id_or_slug_versions

- **Route**: `POST /api/v1/reports/{idOrSlug}/versions`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_reports_by_id_or_slug_versions(id_or_slug: str, *, body: ApiV1ReportsVersionsRequest | ApiV1ReportsVersionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_or_slug`
- **Params**: `id_or_slug` — path `idOrSlug` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ReportsVersionsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ReportsVersionsResponse, PostApiV1ReportsByIdOrSlugVersionsErrorBody]`
- **Error**: `PostApiV1ReportsByIdOrSlugVersionsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1ReportsVersions409Error1` [409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ReportsVersionsRequest` | `deliverd/models/api_v1_reports_versions_request.py` |
| `ApiV1ReportsVersionsRequestDict` | `deliverd/models/api_v1_reports_versions_request.py` |
| `ApiV1ReportsVersionsResponse` | `deliverd/models/api_v1_reports_versions_response.py` |
| `PostApiV1ReportsByIdOrSlugVersionsErrorBody` | `deliverd/errors/post_api_v1_reports_by_id_or_slug_versions_error.py` |
| `ApiV1ReportsVersions409Error1` | `deliverd/models/api_v1_reports_versions409_error1.py` |

### client.reports.put_api_v1_reports_by_id_or_slug_data_by_name

- **Route**: `PUT /api/v1/reports/{idOrSlug}/data/{name}`
- **Auth**: `bearer_auth`
- **Signature**: `def put_api_v1_reports_by_id_or_slug_data_by_name(id_or_slug: str, name: str, *, body: dict[str, Any] | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_or_slug`, `name`
- **Params**: `id_or_slug` — path `idOrSlug` · `name` — path · `body` — JSON body
- **Returns (parsed)**: `ApiV1ReportsDataResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ReportsDataResponse1, PutApiV1ReportsByIdOrSlugDataByNameErrorBody]`
- **Error**: `PutApiV1ReportsByIdOrSlugDataByNameErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 409, 413, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ReportsDataResponse1` | `deliverd/models/api_v1_reports_data_response1.py` |
| `PutApiV1ReportsByIdOrSlugDataByNameErrorBody` | `deliverd/errors/put_api_v1_reports_by_id_or_slug_data_by_name_error.py` |

