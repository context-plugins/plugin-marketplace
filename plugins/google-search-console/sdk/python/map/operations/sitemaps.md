<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sitemaps — operations

Accessor: `client.sitemaps` · Source: `google_search_console/apis/sitemaps.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sitemaps.webmasters_sitemaps_delete

- **Route**: `DELETE /webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def webmasters_sitemaps_delete(site_url: str, feedpath: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `site_url`, `feedpath`
- **Params**: `site_url` — path `siteUrl` · `feedpath` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, WebmastersSitemapsDeleteErrorBody]`
- **Error**: `WebmastersSitemapsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebmastersSitemapsDeleteErrorBody` | `google_search_console/errors/webmasters_sitemaps_delete_error.py` |
| `GoogleRpcError` | `google_search_console/models/google_rpc_error.py` |

### client.sitemaps.webmasters_sitemaps_get

- **Route**: `GET /webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def webmasters_sitemaps_get(site_url: str, feedpath: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `site_url`, `feedpath`
- **Params**: `site_url` — path `siteUrl` · `feedpath` — path
- **Returns (parsed)**: `WmxSitemap`
- **Returns (raw)**: `ApiResult[WmxSitemap, WebmastersSitemapsGetErrorBody]`
- **Error**: `WebmastersSitemapsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WmxSitemap` | `google_search_console/models/wmx_sitemap.py` |
| `WebmastersSitemapsGetErrorBody` | `google_search_console/errors/webmasters_sitemaps_get_error.py` |
| `GoogleRpcError` | `google_search_console/models/google_rpc_error.py` |

### client.sitemaps.webmasters_sitemaps_list

- **Route**: `GET /webmasters/v3/sites/{siteUrl}/sitemaps`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def webmasters_sitemaps_list(site_url: str, *, sitemap_index: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `site_url`
- **Params**: `site_url` — path `siteUrl` · `sitemap_index` — query `sitemapIndex`
- **Returns (parsed)**: `SitemapsListResponse`
- **Returns (raw)**: `ApiResult[SitemapsListResponse, WebmastersSitemapsListErrorBody]`
- **Error**: `WebmastersSitemapsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SitemapsListResponse` | `google_search_console/models/sitemaps_list_response.py` |
| `WebmastersSitemapsListErrorBody` | `google_search_console/errors/webmasters_sitemaps_list_error.py` |
| `GoogleRpcError` | `google_search_console/models/google_rpc_error.py` |

### client.sitemaps.webmasters_sitemaps_submit

- **Route**: `PUT /webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def webmasters_sitemaps_submit(site_url: str, feedpath: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `site_url`, `feedpath`
- **Params**: `site_url` — path `siteUrl` · `feedpath` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, WebmastersSitemapsSubmitErrorBody]`
- **Error**: `WebmastersSitemapsSubmitErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebmastersSitemapsSubmitErrorBody` | `google_search_console/errors/webmasters_sitemaps_submit_error.py` |
| `GoogleRpcError` | `google_search_console/models/google_rpc_error.py` |

