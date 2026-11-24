<!-- Generated file — do not edit; regenerated with the SDK. -->

# StatusApi — operations

Accessor: `client.status_api` · Source: `cosmic/apis/status_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.status_api.get_open_api_spec

- **Route**: `GET /openapi.json`
- **Signature**: `def get_open_api_spec(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `OpenapiJsonResponse`
- **Returns (raw)**: `ApiResult[OpenapiJsonResponse, GetOpenApiSpecErrorBody]`
- **Error**: `GetOpenApiSpecErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OpenapiJsonResponse` | `cosmic/models/openapi_json_response.py` |
| `GetOpenApiSpecErrorBody` | `cosmic/errors/get_open_api_spec_error.py` |
| `Error` | `cosmic/models/error.py` |

### client.status_api.get_status

- **Route**: `GET /status`
- **Signature**: `def get_status(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `StatusResponse`
- **Returns (raw)**: `ApiResult[StatusResponse, GetStatusErrorBody]`
- **Error**: `GetStatusErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StatusResponse` | `cosmic/models/status_response.py` |
| `GetStatusErrorBody` | `cosmic/errors/get_status_error.py` |
| `Error` | `cosmic/models/error.py` |

