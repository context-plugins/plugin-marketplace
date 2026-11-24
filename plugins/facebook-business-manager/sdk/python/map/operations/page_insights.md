<!-- Generated file — do not edit; regenerated with the SDK. -->

# PageInsights — operations

Accessor: `client.page_insights` · Source: `facebook_business_manager/apis/page_insights.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.page_insights.get_page_insights

- **Route**: `GET /{page_id}/insights`
- **Auth**: `bearer_auth`
- **Signature**: `def get_page_insights(page_id: str, metric: str, *, period: PeriodOrStr | None = None, since: str | None = None, until: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `page_id`, `metric`
- **Params**: `page_id` — path · `metric` — query · `period` — query · `since` — query · `until` — query
- **Returns (parsed)**: `PageInsightsResponse`
- **Returns (raw)**: `ApiResult[PageInsightsResponse, GetPageInsightsErrorBody]`
- **Error**: `GetPageInsightsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PeriodOrStr` | `facebook_business_manager/models/enums/period.py` |
| `PageInsightsResponse` | `facebook_business_manager/models/page_insights_response.py` |
| `GetPageInsightsErrorBody` | `facebook_business_manager/errors/get_page_insights_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

