<!-- Generated file — do not edit; regenerated with the SDK. -->

# SourceGroups — operations

Accessor: `client.source_groups` · Source: `perigon/apis/source_groups.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.source_groups.create_source_group

- **Route**: `POST /v1/api/sourceGroups`
- **Auth**: `api_key_auth`
- **Signature**: `def create_source_group(body: CreateSourceGroupParams | CreateSourceGroupParamsDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SourceGroupResult`
- **Returns (raw)**: `ApiResult[SourceGroupResult, CreateSourceGroupErrorBody]`
- **Error**: `CreateSourceGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateSourceGroupParams` | `perigon/models/create_source_group_params.py` |
| `CreateSourceGroupParamsDict` | `perigon/models/create_source_group_params.py` |
| `SourceGroupResult` | `perigon/models/source_group_result.py` |
| `CreateSourceGroupErrorBody` | `perigon/errors/create_source_group_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.source_groups.delete_source_group

- **Route**: `DELETE /v1/api/sourceGroups/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def delete_source_group(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `SourceGroupResult`
- **Returns (raw)**: `ApiResult[SourceGroupResult, DeleteSourceGroupErrorBody]`
- **Error**: `DeleteSourceGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SourceGroupResult` | `perigon/models/source_group_result.py` |
| `DeleteSourceGroupErrorBody` | `perigon/errors/delete_source_group_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.source_groups.get_source_group

- **Route**: `GET /v1/api/sourceGroups/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_source_group(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `SourceGroupResult`
- **Returns (raw)**: `ApiResult[SourceGroupResult, GetSourceGroupErrorBody]`
- **Error**: `GetSourceGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SourceGroupResult` | `perigon/models/source_group_result.py` |
| `GetSourceGroupErrorBody` | `perigon/errors/get_source_group_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.source_groups.list_source_groups

- **Route**: `GET /v1/api/sourceGroups`
- **Auth**: `api_key_auth`
- **Signature**: `def list_source_groups(sort_by: SourceGroupSortByOrStr, sort_order: SortOrderOrStr, *, name: str | None = None, domain: str | None = None, page: int | None = 0, size: int | None = 10, nulls: NullsOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sort_by`, `sort_order`
- **Params**: `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `name` — query · `domain` — query · `page` — query · `size` — query · `nulls` — query
- **Returns (parsed)**: `SourceGroupListResult`
- **Returns (raw)**: `ApiResult[SourceGroupListResult, ListSourceGroupsErrorBody]`
- **Error**: `ListSourceGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SourceGroupSortByOrStr` | `perigon/models/enums/source_group_sort_by.py` |
| `SortOrderOrStr` | `perigon/models/enums/sort_order.py` |
| `NullsOrStr` | `perigon/models/enums/nulls.py` |
| `SourceGroupListResult` | `perigon/models/source_group_list_result.py` |
| `ListSourceGroupsErrorBody` | `perigon/errors/list_source_groups_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.source_groups.resolve_source_groups

- **Route**: `GET /v1/api/sourceGroups/resolve`
- **Auth**: `api_key_auth`
- **Signature**: `def resolve_source_groups(*, name: list[str] | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `name` — query
- **Returns (parsed)**: `SourceGroupResolveResult`
- **Returns (raw)**: `ApiResult[SourceGroupResolveResult, ResolveSourceGroupsErrorBody]`
- **Error**: `ResolveSourceGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SourceGroupResolveResult` | `perigon/models/source_group_resolve_result.py` |
| `ResolveSourceGroupsErrorBody` | `perigon/errors/resolve_source_groups_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.source_groups.update_source_group

- **Route**: `PATCH /v1/api/sourceGroups/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def update_source_group(id_: int, body: PatchSourceGroupParams | PatchSourceGroupParamsDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `SourceGroupResult`
- **Returns (raw)**: `ApiResult[SourceGroupResult, UpdateSourceGroupErrorBody]`
- **Error**: `UpdateSourceGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PatchSourceGroupParams` | `perigon/models/patch_source_group_params.py` |
| `PatchSourceGroupParamsDict` | `perigon/models/patch_source_group_params.py` |
| `SourceGroupResult` | `perigon/models/source_group_result.py` |
| `UpdateSourceGroupErrorBody` | `perigon/errors/update_source_group_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

