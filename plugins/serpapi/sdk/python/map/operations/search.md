<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `serp_api/apis/search.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.search.get_search

- **Route**: `GET /searches/{search_id}`
- **Auth**: `api_key`
- **Signature**: `def get_search(search_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `search_id`
- **Params**: `search_id` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.search.run_search

- **Route**: `GET /search`
- **Auth**: `api_key`
- **Signature**: `def run_search(engine: str, *, q: str | None = None, search_query: str | None = None, api_key: str | None = None, location: str | None = None, gl: str | None = None, hl: str | None = None, device: DeviceOrStr | None = None, no_cache: bool | None = None, async_: bool | None = None, output: OutputOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `engine`
- **Params**: `engine` — query · `q` — query · `search_query` — query · `api_key` — query · `location` — query · `gl` — query · `hl` — query · `device` — query · `no_cache` — query · `async_` — query `async` · `output` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `DeviceOrStr` | `serp_api/models/enums/device.py` |
| `OutputOrStr` | `serp_api/models/enums/output.py` |

