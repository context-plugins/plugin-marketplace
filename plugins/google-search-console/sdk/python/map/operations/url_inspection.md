<!-- Generated file — do not edit; regenerated with the SDK. -->

# UrlInspection — operations

Accessor: `client.url_inspection` · Source: `google_search_console/apis/url_inspection.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.url_inspection.searchconsole_url_inspection_index_inspect

- **Route**: `POST /v1/urlInspection/index:inspect`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def searchconsole_url_inspection_index_inspect(body: InspectUrlIndexRequest | InspectUrlIndexRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `InspectUrlIndexResponse`
- **Returns (raw)**: `ApiResult[InspectUrlIndexResponse, SearchconsoleUrlInspectionIndexInspectErrorBody]`
- **Error**: `SearchconsoleUrlInspectionIndexInspectErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InspectUrlIndexRequest` | `google_search_console/models/inspect_url_index_request.py` |
| `InspectUrlIndexRequestDict` | `google_search_console/models/inspect_url_index_request.py` |
| `InspectUrlIndexResponse` | `google_search_console/models/inspect_url_index_response.py` |
| `SearchconsoleUrlInspectionIndexInspectErrorBody` | `google_search_console/errors/searchconsole_url_inspection_index_inspect_error.py` |
| `GoogleRpcError` | `google_search_console/models/google_rpc_error.py` |

