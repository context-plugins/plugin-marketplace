<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.analytics` · Source: `basiq/apis/analytics.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.analytics.get_connection_analytics

- **Route**: `GET /analytics/connections`
- **Auth**: `services_token`
- **Signature**: `def get_connection_analytics(interval: IntervalOrStr, *, from_date: Date | None = None, to_date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `interval`
- **Params**: `interval` — query · `from_date` — query `fromDate` · `to_date` — query `toDate`
- **Returns (parsed)**: `ConnectionAnalyticsResponse`
- **Returns (raw)**: `ApiResult[ConnectionAnalyticsResponse, GetConnectionAnalyticsErrorBody]`
- **Error**: `GetConnectionAnalyticsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorList` [400, 403] · `RawError` [401, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `IntervalOrStr` | `basiq/models/enums/interval.py` |
| `ConnectionAnalyticsResponse` | `basiq/models/connection_analytics_response.py` |
| `GetConnectionAnalyticsErrorBody` | `basiq/errors/get_connection_analytics_error.py` |
| `ErrorList` | `basiq/models/error_list.py` |

### client.analytics.get_user_analytics

- **Route**: `GET /analytics/users`
- **Auth**: `services_token`
- **Signature**: `def get_user_analytics(interval: IntervalOrStr, *, from_date: Date | None = None, to_date: Date | None = None, connection_type: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `interval`
- **Params**: `interval` — query · `from_date` — query `fromDate` · `to_date` — query `toDate` · `connection_type` — query `connectionType`
- **Returns (parsed)**: `AnalyticsResponse`
- **Returns (raw)**: `ApiResult[AnalyticsResponse, GetUserAnalyticsErrorBody]`
- **Error**: `GetUserAnalyticsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorList` [400, 403] · `RawError` [401, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `IntervalOrStr` | `basiq/models/enums/interval.py` |
| `AnalyticsResponse` | `basiq/models/analytics_response.py` |
| `GetUserAnalyticsErrorBody` | `basiq/errors/get_user_analytics_error.py` |
| `ErrorList` | `basiq/models/error_list.py` |

