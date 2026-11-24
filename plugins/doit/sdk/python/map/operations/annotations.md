<!-- Generated file — do not edit; regenerated with the SDK. -->

# Annotations — operations

Accessor: `client.annotations` · Source: `doi_t/apis/annotations.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.annotations.create_annotation

- **Route**: `POST /analytics/v1/annotations`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_annotation(body: CreateAnnotationRequest | CreateAnnotationRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `AnnotationListItem`
- **Returns (raw)**: `ApiResult[AnnotationListItem, CreateAnnotationErrorBody]`
- **Error**: `CreateAnnotationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateAnnotationRequest` | `doi_t/models/create_annotation_request.py` |
| `CreateAnnotationRequestDict` | `doi_t/models/create_annotation_request.py` |
| `AnnotationListItem` | `doi_t/models/annotation_list_item.py` |
| `CreateAnnotationErrorBody` | `doi_t/errors/create_annotation_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.annotations.delete_annotation

- **Route**: `DELETE /analytics/v1/annotations/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_annotation(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteAnnotationErrorBody]`
- **Error**: `DeleteAnnotationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteAnnotationErrorBody` | `doi_t/errors/delete_annotation_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.annotations.get_annotation

- **Route**: `GET /analytics/v1/annotations/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_annotation(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `AnnotationListItem`
- **Returns (raw)**: `ApiResult[AnnotationListItem, GetAnnotationErrorBody]`
- **Error**: `GetAnnotationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnnotationListItem` | `doi_t/models/annotation_list_item.py` |
| `GetAnnotationErrorBody` | `doi_t/errors/get_annotation_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.annotations.list_annotations

- **Route**: `GET /analytics/v1/annotations`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_annotations(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, sort_by: SortByDoiTAnnotationsApiOrStr | None = None, sort_order: SortOrderOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_results` — query `maxResults` · `page_token` — query `pageToken` · `filter_` — query `filter` · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder`
- **Returns (parsed)**: `AnalyticsV1AnnotationsResponse`
- **Returns (raw)**: `ApiResult[AnalyticsV1AnnotationsResponse, ListAnnotationsErrorBody]`
- **Error**: `ListAnnotationsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortByDoiTAnnotationsApiOrStr` | `doi_t/models/enums/sort_by_doi_t_annotations_api.py` |
| `SortOrderOrStr` | `doi_t/models/enums/sort_order.py` |
| `AnalyticsV1AnnotationsResponse` | `doi_t/models/analytics_v1_annotations_response.py` |
| `ListAnnotationsErrorBody` | `doi_t/errors/list_annotations_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.annotations.update_annotation

- **Route**: `PATCH /analytics/v1/annotations/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_annotation(id_: str, *, body: UpdateAnnotationRequest | UpdateAnnotationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `AnnotationListItem`
- **Returns (raw)**: `ApiResult[AnnotationListItem, UpdateAnnotationErrorBody]`
- **Error**: `UpdateAnnotationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateAnnotationRequest` | `doi_t/models/update_annotation_request.py` |
| `UpdateAnnotationRequestDict` | `doi_t/models/update_annotation_request.py` |
| `AnnotationListItem` | `doi_t/models/annotation_list_item.py` |
| `UpdateAnnotationErrorBody` | `doi_t/errors/update_annotation_error.py` |
| `Error` | `doi_t/models/error.py` |

