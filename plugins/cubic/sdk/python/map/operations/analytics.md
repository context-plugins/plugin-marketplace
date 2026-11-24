<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.analytics` · Source: `cubic/apis/analytics.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.analytics.list_pull_request_analytics

- **Route**: `GET /api/analytics/v1/prs`
- **Auth**: `analytics_api_key`
- **Signature**: `def list_pull_request_analytics(org: str, *, repo: str | None = None, start_date: str | None = None, end_date: str | None = None, per_page: int | None = 100, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `org`
- **Params**: `org` — query · `repo` — query · `start_date` — query `startDate` · `end_date` — query `endDate` · `per_page` — query `perPage` · `cursor` — query
- **Returns (parsed)**: `AnalyticsPrPage`
- **Returns (raw)**: `ApiResult[AnalyticsPrPage, ListPullRequestAnalyticsErrorBody]`
- **Error**: `ListPullRequestAnalyticsErrorBody` — **Case A (typed)**
- **Error arms**: `AnalyticsError` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsPrPage` | `cubic/models/analytics_pr_page.py` |
| `ListPullRequestAnalyticsErrorBody` | `cubic/errors/list_pull_request_analytics_error.py` |
| `AnalyticsError` | `cubic/models/analytics_error.py` |

