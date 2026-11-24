<!-- Generated file — do not edit; regenerated with the SDK. -->

# RegistryApi — operations

Accessor: `client.registry_api` · Source: `hud/apis/registry_api.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.registry_api.get_registry_source_url_v2_registry_registry_id_source_url_get

- **Route**: `GET /v2/registry/{registry_id}/source-url`
- **Signature**: `def get_registry_source_url_v2_registry_registry_id_source_url_get(registry_id: UUID, *, build_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `registry_id`
- **Params**: `registry_id` — path · `build_id` — query
- **Returns (parsed)**: `RegistrySourceUrlResponse`
- **Returns (raw)**: `ApiResult[RegistrySourceUrlResponse, GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetErrorBody]`
- **Error**: `GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RegistrySourceUrlResponse` | `hud/models/registry_source_url_response.py` |
| `GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetErrorBody` | `hud/errors/get_registry_source_url_v2_registry_registry_id_source_url_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.registry_api.get_registry_v2_registry_registry_id_get

- **Route**: `GET /v2/registry/{registry_id}`
- **Signature**: `def get_registry_v2_registry_registry_id_get(registry_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `registry_id`
- **Params**: `registry_id` — path
- **Returns (parsed)**: `RegistryDetailResponse`
- **Returns (raw)**: `ApiResult[RegistryDetailResponse, GetRegistryV2RegistryRegistryIdGetErrorBody]`
- **Error**: `GetRegistryV2RegistryRegistryIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RegistryDetailResponse` | `hud/models/registry_detail_response.py` |
| `GetRegistryV2RegistryRegistryIdGetErrorBody` | `hud/errors/get_registry_v2_registry_registry_id_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.registry_api.list_registries_v2_registry_get

- **Route**: `GET /v2/registry`
- **Signature**: `def list_registries_v2_registry_get(*, limit: int | None = 50, offset: int | None = 0, search: str | None = None, match_templates: bool | None = False, include_latest_scenarios: bool | None = False, public_only: bool | None = False, featured_only: bool | None = False, owner_only: bool | None = False, project_id: UUID | None = None, sort_by: SortByOrStr | None = SortBy.STARRED, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `offset` — query · `search` — query · `match_templates` — query · `include_latest_scenarios` — query · `public_only` — query · `featured_only` — query · `owner_only` — query · `project_id` — query · `sort_by` — query
- **Returns (parsed)**: `PaginatedResponseRegistryDetailResponse`
- **Returns (raw)**: `ApiResult[PaginatedResponseRegistryDetailResponse, ListRegistriesV2RegistryGetErrorBody]`
- **Error**: `ListRegistriesV2RegistryGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortByOrStr` | `hud/models/enums/sort_by.py` |
| `PaginatedResponseRegistryDetailResponse` | `hud/models/paginated_response_registry_detail_response.py` |
| `ListRegistriesV2RegistryGetErrorBody` | `hud/errors/list_registries_v2_registry_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.registry_api.list_registry_scenarios_v2_registry_registry_id_scenarios_get

- **Route**: `GET /v2/registry/{registry_id}/scenarios`
- **Signature**: `def list_registry_scenarios_v2_registry_registry_id_scenarios_get(registry_id: UUID, *, build_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `registry_id`
- **Params**: `registry_id` — path · `build_id` — query
- **Returns (parsed)**: `list[ScenarioResponse]`
- **Returns (raw)**: `ApiResult[list[ScenarioResponse], ListRegistryScenariosV2RegistryRegistryIdScenariosGetErrorBody]`
- **Error**: `ListRegistryScenariosV2RegistryRegistryIdScenariosGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScenarioResponse` | `hud/models/scenario_response.py` |
| `ListRegistryScenariosV2RegistryRegistryIdScenariosGetErrorBody` | `hud/errors/list_registry_scenarios_v2_registry_registry_id_scenarios_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

