<!-- Generated file — do not edit; regenerated with the SDK. -->

# Stats — operations

Accessor: `client.stats` · Source: `statable/apis/stats.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.stats.current_visitors

- **Route**: `GET /current-visitors`
- **Auth**: `bearer_auth`
- **Signature**: `def current_visitors(*, site_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `site_id` — query
- **Returns (parsed)**: `CurrentVisitorsResponse`
- **Returns (raw)**: `ApiResult[CurrentVisitorsResponse, CurrentVisitorsErrorBody]`
- **Error**: `CurrentVisitorsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CurrentVisitorsResponse` | `statable/models/current_visitors_response.py` |
| `CurrentVisitorsErrorBody` | `statable/errors/current_visitors_error.py` |
| `Error` | `statable/models/error.py` |

### client.stats.get_subscription

- **Route**: `GET /subscription`
- **Auth**: `bearer_auth`
- **Signature**: `def get_subscription(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `SubscriptionResponse`
- **Returns (raw)**: `ApiResult[SubscriptionResponse, GetSubscriptionErrorBody]`
- **Error**: `GetSubscriptionErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SubscriptionResponse` | `statable/models/subscription_response.py` |
| `GetSubscriptionErrorBody` | `statable/errors/get_subscription_error.py` |
| `Error` | `statable/models/error.py` |

### client.stats.list_funnels

- **Route**: `GET /funnels`
- **Auth**: `bearer_auth`
- **Signature**: `def list_funnels(*, site_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `site_id` — query
- **Returns (parsed)**: `FunnelsResponse`
- **Returns (raw)**: `ApiResult[FunnelsResponse, ListFunnelsErrorBody]`
- **Error**: `ListFunnelsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FunnelsResponse` | `statable/models/funnels_response.py` |
| `ListFunnelsErrorBody` | `statable/errors/list_funnels_error.py` |
| `Error` | `statable/models/error.py` |

### client.stats.list_prop_keys

- **Route**: `GET /props`
- **Auth**: `bearer_auth`
- **Signature**: `def list_prop_keys(*, site_id: int | None = None, date_range: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `site_id` — query · `date_range` — query
- **Returns (parsed)**: `PropsResponse`
- **Returns (raw)**: `ApiResult[PropsResponse, ListPropKeysErrorBody]`
- **Error**: `ListPropKeysErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PropsResponse` | `statable/models/props_response.py` |
| `ListPropKeysErrorBody` | `statable/errors/list_prop_keys_error.py` |
| `Error` | `statable/models/error.py` |

### client.stats.list_sites

- **Route**: `GET /sites`
- **Auth**: `bearer_auth`
- **Signature**: `def list_sites(*, date_range: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date_range` — query
- **Returns (parsed)**: `SitesResponse`
- **Returns (raw)**: `ApiResult[SitesResponse, ListSitesErrorBody]`
- **Error**: `ListSitesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SitesResponse` | `statable/models/sites_response.py` |
| `ListSitesErrorBody` | `statable/errors/list_sites_error.py` |
| `Error` | `statable/models/error.py` |

### client.stats.query

- **Route**: `POST /query`
- **Auth**: `bearer_auth`
- **Signature**: `def query(body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `QueryResponse`
- **Returns (raw)**: `ApiResult[QueryResponse, QueryErrorBody]`
- **Error**: `QueryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QueryRequest` | `statable/models/query_request.py` |
| `QueryRequestDict` | `statable/models/query_request.py` |
| `QueryResponse` | `statable/models/query_response.py` |
| `QueryErrorBody` | `statable/errors/query_error.py` |
| `Error` | `statable/models/error.py` |

### client.stats.run_funnel_report

- **Route**: `POST /funnels/{id}/report`
- **Auth**: `bearer_auth`
- **Signature**: `def run_funnel_report(id_: int, body: FunnelReportRequest | FunnelReportRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `FunnelReportResponse`
- **Returns (raw)**: `ApiResult[FunnelReportResponse, RunFunnelReportErrorBody]`
- **Error**: `RunFunnelReportErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FunnelReportRequest` | `statable/models/funnel_report_request.py` |
| `FunnelReportRequestDict` | `statable/models/funnel_report_request.py` |
| `FunnelReportResponse` | `statable/models/funnel_report_response.py` |
| `RunFunnelReportErrorBody` | `statable/errors/run_funnel_report_error.py` |
| `Error` | `statable/models/error.py` |

