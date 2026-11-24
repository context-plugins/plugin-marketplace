<!-- Generated file — do not edit; regenerated with the SDK. -->

# Labels — operations

Accessor: `client.labels` · Source: `doi_t/apis/labels.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.labels.assign_objects_to_label

- **Route**: `POST /analytics/v1/labels/{id}/assignments`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def assign_objects_to_label(id_: str, body: AssignObjectsToLabelRequest | AssignObjectsToLabelRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AssignObjectsToLabelErrorBody]`
- **Error**: `AssignObjectsToLabelErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AssignObjectsToLabelRequest` | `doi_t/models/assign_objects_to_label_request.py` |
| `AssignObjectsToLabelRequestDict` | `doi_t/models/assign_objects_to_label_request.py` |
| `AssignObjectsToLabelErrorBody` | `doi_t/errors/assign_objects_to_label_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.labels.create_label

- **Route**: `POST /analytics/v1/labels`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_label(body: CreateLabelRequest | CreateLabelRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `LabelListItem`
- **Returns (raw)**: `ApiResult[LabelListItem, CreateLabelErrorBody]`
- **Error**: `CreateLabelErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateLabelRequest` | `doi_t/models/create_label_request.py` |
| `CreateLabelRequestDict` | `doi_t/models/create_label_request.py` |
| `LabelListItem` | `doi_t/models/label_list_item.py` |
| `CreateLabelErrorBody` | `doi_t/errors/create_label_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.labels.delete_label

- **Route**: `DELETE /analytics/v1/labels/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_label(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteLabelErrorBody]`
- **Error**: `DeleteLabelErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteLabelErrorBody` | `doi_t/errors/delete_label_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.labels.get_label

- **Route**: `GET /analytics/v1/labels/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_label(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `LabelListItem`
- **Returns (raw)**: `ApiResult[LabelListItem, GetLabelErrorBody]`
- **Error**: `GetLabelErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LabelListItem` | `doi_t/models/label_list_item.py` |
| `GetLabelErrorBody` | `doi_t/errors/get_label_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.labels.get_label_assignments

- **Route**: `GET /analytics/v1/labels/{id}/assignments`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_label_assignments(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `LabelAssignmentsResponse`
- **Returns (raw)**: `ApiResult[LabelAssignmentsResponse, GetLabelAssignmentsErrorBody]`
- **Error**: `GetLabelAssignmentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LabelAssignmentsResponse` | `doi_t/models/label_assignments_response.py` |
| `GetLabelAssignmentsErrorBody` | `doi_t/errors/get_label_assignments_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.labels.list_labels

- **Route**: `GET /analytics/v1/labels`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_labels(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, name_contains: str | None = None, sort_by: SortByDoiTLabelsApiOrStr | None = None, sort_order: SortOrderOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_results` — query `maxResults` · `page_token` — query `pageToken` · `filter_` — query `filter` · `name_contains` — query `nameContains` · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder`
- **Returns (parsed)**: `LabelList`
- **Returns (raw)**: `ApiResult[LabelList, ListLabelsErrorBody]`
- **Error**: `ListLabelsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortByDoiTLabelsApiOrStr` | `doi_t/models/enums/sort_by_doi_t_labels_api.py` |
| `SortOrderOrStr` | `doi_t/models/enums/sort_order.py` |
| `LabelList` | `doi_t/models/label_list.py` |
| `ListLabelsErrorBody` | `doi_t/errors/list_labels_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.labels.update_label

- **Route**: `PATCH /analytics/v1/labels/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_label(id_: str, *, body: UpdateLabelRequest | UpdateLabelRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `LabelListItem`
- **Returns (raw)**: `ApiResult[LabelListItem, UpdateLabelErrorBody]`
- **Error**: `UpdateLabelErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateLabelRequest` | `doi_t/models/update_label_request.py` |
| `UpdateLabelRequestDict` | `doi_t/models/update_label_request.py` |
| `LabelListItem` | `doi_t/models/label_list_item.py` |
| `UpdateLabelErrorBody` | `doi_t/errors/update_label_error.py` |
| `Error` | `doi_t/models/error.py` |

