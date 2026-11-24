<!-- Generated file — do not edit; regenerated with the SDK. -->

# Searchanalytics — operations

Accessor: `client.searchanalytics` · Source: `google_search_console/apis/searchanalytics.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.searchanalytics.webmasters_searchanalytics_query

- **Route**: `POST /webmasters/v3/sites/{siteUrl}/searchAnalytics/query`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def webmasters_searchanalytics_query(site_url: str, body: SearchAnalyticsQueryRequest | SearchAnalyticsQueryRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `site_url`, `body`
- **Params**: `site_url` — path `siteUrl` · `body` — JSON body
- **Returns (parsed)**: `SearchAnalyticsQueryResponse`
- **Returns (raw)**: `ApiResult[SearchAnalyticsQueryResponse, WebmastersSearchanalyticsQueryErrorBody]`
- **Error**: `WebmastersSearchanalyticsQueryErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchAnalyticsQueryRequest` | `google_search_console/models/search_analytics_query_request.py` |
| `SearchAnalyticsQueryRequestDict` | `google_search_console/models/search_analytics_query_request.py` |
| `SearchAnalyticsQueryResponse` | `google_search_console/models/search_analytics_query_response.py` |
| `WebmastersSearchanalyticsQueryErrorBody` | `google_search_console/errors/webmasters_searchanalytics_query_error.py` |
| `GoogleRpcError` | `google_search_console/models/google_rpc_error.py` |

