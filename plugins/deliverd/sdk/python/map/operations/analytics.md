<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.analytics` · Source: `deliverd/apis/analytics.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.analytics.get_api_v1_analytics

- **Route**: `GET /api/v1/analytics`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_analytics(*, days: int | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `days` — query · `limit` — query
- **Returns (parsed)**: `ApiV1AnalyticsResponse`
- **Returns (raw)**: `ApiResult[ApiV1AnalyticsResponse, GetApiV1AnalyticsErrorBody]`
- **Error**: `GetApiV1AnalyticsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AnalyticsResponse` | `deliverd/models/api_v1_analytics_response.py` |
| `GetApiV1AnalyticsErrorBody` | `deliverd/errors/get_api_v1_analytics_error.py` |

