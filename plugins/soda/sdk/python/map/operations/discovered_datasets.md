<!-- Generated file — do not edit; regenerated with the SDK. -->

# DiscoveredDatasets — operations

Accessor: `client.discovered_datasets` · Source: `soda/apis/discovered_datasets.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.discovered_datasets.get_api_v1_discovered_datasets

- **Route**: `GET /api/v1/discoveredDatasets`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_discovered_datasets(*, datasource_id: str | None = None, page: int | None = None, search: str | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `datasource_id` — query `datasourceId` · `page` — query · `search` — query · `size` — query
- **Returns (parsed)**: `PublicApiDiscoveredDatasetsResponse`
- **Returns (raw)**: `ApiResult[PublicApiDiscoveredDatasetsResponse, GetApiV1DiscoveredDatasetsErrorBody]`
- **Error**: `GetApiV1DiscoveredDatasetsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDiscoveredDatasetsResponse` | `soda/models/public_api_discovered_datasets_response.py` |
| `GetApiV1DiscoveredDatasetsErrorBody` | `soda/errors/get_api_v1_discovered_datasets_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

