<!-- Generated file — do not edit; regenerated with the SDK. -->

# Allocations — operations

Accessor: `client.allocations` · Source: `doi_t/apis/allocations.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.allocations.create_allocation

- **Route**: `POST /analytics/v1/allocations`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_allocation(*, body: CreateAllocationRequest | CreateAllocationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Allocation`
- **Returns (raw)**: `ApiResult[Allocation, CreateAllocationErrorBody]`
- **Error**: `CreateAllocationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateAllocationRequest` | `doi_t/models/create_allocation_request.py` |
| `CreateAllocationRequestDict` | `doi_t/models/create_allocation_request.py` |
| `Allocation` | `doi_t/models/allocation.py` |
| `CreateAllocationErrorBody` | `doi_t/errors/create_allocation_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.allocations.delete_allocation

- **Route**: `DELETE /analytics/v1/allocations/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_allocation(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteAllocationErrorBody]`
- **Error**: `DeleteAllocationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `list[AllocationDeleteValidation]` [409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteAllocationErrorBody` | `doi_t/errors/delete_allocation_error.py` |
| `Error` | `doi_t/models/error.py` |
| `AllocationDeleteValidation` | `doi_t/models/allocation_delete_validation.py` |

### client.allocations.get_allocation

- **Route**: `GET /analytics/v1/allocations/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_allocation(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Allocation`
- **Returns (raw)**: `ApiResult[Allocation, GetAllocationErrorBody]`
- **Error**: `GetAllocationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Allocation` | `doi_t/models/allocation.py` |
| `GetAllocationErrorBody` | `doi_t/errors/get_allocation_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.allocations.list_allocations

- **Route**: `GET /analytics/v1/allocations`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_allocations(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, name_contains: str | None = None, sort_by: SortByDoiTAllocationsApiOrStr | None = None, sort_order: SortOrderOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_results` — query `maxResults` · `page_token` — query `pageToken` · `filter_` — query `filter` · `name_contains` — query `nameContains` · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder`
- **Returns (parsed)**: `AnalyticsV1AllocationsResponse`
- **Returns (raw)**: `ApiResult[AnalyticsV1AllocationsResponse, ListAllocationsErrorBody]`
- **Error**: `ListAllocationsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortByDoiTAllocationsApiOrStr` | `doi_t/models/enums/sort_by_doi_t_allocations_api.py` |
| `SortOrderOrStr` | `doi_t/models/enums/sort_order.py` |
| `AnalyticsV1AllocationsResponse` | `doi_t/models/analytics_v1_allocations_response.py` |
| `ListAllocationsErrorBody` | `doi_t/errors/list_allocations_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.allocations.update_allocation

- **Route**: `PATCH /analytics/v1/allocations/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_allocation(id_: str, *, body: UpdateAllocationRequest | UpdateAllocationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `Allocation`
- **Returns (raw)**: `ApiResult[Allocation, UpdateAllocationErrorBody]`
- **Error**: `UpdateAllocationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateAllocationRequest` | `doi_t/models/update_allocation_request.py` |
| `UpdateAllocationRequestDict` | `doi_t/models/update_allocation_request.py` |
| `Allocation` | `doi_t/models/allocation.py` |
| `UpdateAllocationErrorBody` | `doi_t/errors/update_allocation_error.py` |
| `Error` | `doi_t/models/error.py` |

