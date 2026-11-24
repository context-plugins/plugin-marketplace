<!-- Generated file — do not edit; regenerated with the SDK. -->

# Dimensions — operations

Accessor: `client.dimensions` · Source: `doi_t/apis/dimensions.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.dimensions.get_dimensions

- **Route**: `GET /analytics/v1/dimension`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_dimensions(type_: DimensionsTypesOrStr, id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `type_`, `id_`
- **Params**: `type_` — query `type` · `id_` — query `id`
- **Returns (parsed)**: `DimensionsExternalApiGetResponse`
- **Returns (raw)**: `ApiResult[DimensionsExternalApiGetResponse, GetDimensionsErrorBody]`
- **Error**: `GetDimensionsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DimensionsTypesOrStr` | `doi_t/models/enums/dimensions_types.py` |
| `DimensionsExternalApiGetResponse` | `doi_t/models/dimensions_external_api_get_response.py` |
| `GetDimensionsErrorBody` | `doi_t/errors/get_dimensions_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.dimensions.list_dimensions

- **Route**: `GET /analytics/v1/dimensions`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_dimensions(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, sort_by: SortByDoiTDimensionsApiOrStr | None = SortByDoiTDimensionsApi.ID, sort_order: SortOrderOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_results` — query `maxResults` · `page_token` — query `pageToken` · `filter_` — query `filter` · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder`
- **Returns (parsed)**: `DimensionsExternalApiListResponse`
- **Returns (raw)**: `ApiResult[DimensionsExternalApiListResponse, ListDimensionsErrorBody]`
- **Error**: `ListDimensionsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortByDoiTDimensionsApiOrStr` | `doi_t/models/enums/sort_by_doi_t_dimensions_api.py` |
| `SortOrderOrStr` | `doi_t/models/enums/sort_order.py` |
| `DimensionsExternalApiListResponse` | `doi_t/models/dimensions_external_api_list_response.py` |
| `ListDimensionsErrorBody` | `doi_t/errors/list_dimensions_error.py` |
| `Error` | `doi_t/models/error.py` |

