<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sites — operations

Accessor: `client.sites` · Source: `google_search_console/apis/sites.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sites.webmasters_sites_add

- **Route**: `PUT /webmasters/v3/sites/{siteUrl}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def webmasters_sites_add(site_url: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `site_url`
- **Params**: `site_url` — path `siteUrl`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, WebmastersSitesAddErrorBody]`
- **Error**: `WebmastersSitesAddErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebmastersSitesAddErrorBody` | `google_search_console/errors/webmasters_sites_add_error.py` |
| `GoogleRpcError` | `google_search_console/models/google_rpc_error.py` |

### client.sites.webmasters_sites_delete

- **Route**: `DELETE /webmasters/v3/sites/{siteUrl}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def webmasters_sites_delete(site_url: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `site_url`
- **Params**: `site_url` — path `siteUrl`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, WebmastersSitesDeleteErrorBody]`
- **Error**: `WebmastersSitesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WebmastersSitesDeleteErrorBody` | `google_search_console/errors/webmasters_sites_delete_error.py` |
| `GoogleRpcError` | `google_search_console/models/google_rpc_error.py` |

### client.sites.webmasters_sites_get

- **Route**: `GET /webmasters/v3/sites/{siteUrl}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def webmasters_sites_get(site_url: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `site_url`
- **Params**: `site_url` — path `siteUrl`
- **Returns (parsed)**: `WmxSite`
- **Returns (raw)**: `ApiResult[WmxSite, WebmastersSitesGetErrorBody]`
- **Error**: `WebmastersSitesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WmxSite` | `google_search_console/models/wmx_site.py` |
| `WebmastersSitesGetErrorBody` | `google_search_console/errors/webmasters_sites_get_error.py` |
| `GoogleRpcError` | `google_search_console/models/google_rpc_error.py` |

### client.sites.webmasters_sites_list

- **Route**: `GET /webmasters/v3/sites`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def webmasters_sites_list(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `SitesListResponse`
- **Returns (raw)**: `ApiResult[SitesListResponse, WebmastersSitesListErrorBody]`
- **Error**: `WebmastersSitesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SitesListResponse` | `google_search_console/models/sites_list_response.py` |
| `WebmastersSitesListErrorBody` | `google_search_console/errors/webmasters_sites_list_error.py` |
| `GoogleRpcError` | `google_search_console/models/google_rpc_error.py` |

