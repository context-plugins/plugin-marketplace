<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.insights` · Source: `instagram/apis/insights.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.insights.get_media_insights

- **Route**: `GET /{media_id}/insights`
- **Server**: `default`
- **Signature**: `def get_media_insights(media_id: str, metric: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `media_id`, `metric`, `access_token`
- **Params**: `media_id` — path · `metric` — query · `access_token` — query
- **Returns (parsed)**: `InsightsResponse`
- **Returns (raw)**: `ApiResult[InsightsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `InsightsResponse` | `instagram/models/insights_response.py` |

### client.insights.get_user_insights

- **Route**: `GET /{user_id}/insights`
- **Server**: `default`
- **Signature**: `def get_user_insights(user_id: str, metric: str, period: PeriodOrStr, access_token: str, *, since: int | None = None, until: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `metric`, `period`, `access_token`
- **Params**: `user_id` — path · `metric` — query · `period` — query · `access_token` — query · `since` — query · `until` — query
- **Returns (parsed)**: `InsightsResponse`
- **Returns (raw)**: `ApiResult[InsightsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PeriodOrStr` | `instagram/models/enums/period.py` |
| `InsightsResponse` | `instagram/models/insights_response.py` |

