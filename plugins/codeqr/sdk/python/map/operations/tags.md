<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.tags` · Source: `code_qr/apis/tags.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.tags.create_tag

- **Route**: `POST /tags`
- **Auth**: `token`
- **Signature**: `def create_tag(*, body: TagsRequest | TagsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TagModel`
- **Returns (raw)**: `ApiResult[TagModel, CreateTagErrorBody]`
- **Error**: `CreateTagErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TagsRequest` | `code_qr/models/tags_request.py` |
| `TagsRequestDict` | `code_qr/models/tags_request.py` |
| `TagModel` | `code_qr/models/tag_model.py` |
| `CreateTagErrorBody` | `code_qr/errors/create_tag_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.tags.delete_tag

- **Route**: `DELETE /tags/{id}`
- **Auth**: `token`
- **Signature**: `def delete_tag(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `TagsResponse`
- **Returns (raw)**: `ApiResult[TagsResponse, DeleteTagErrorBody]`
- **Error**: `DeleteTagErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TagsResponse` | `code_qr/models/tags_response.py` |
| `DeleteTagErrorBody` | `code_qr/errors/delete_tag_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.tags.get_tags

- **Route**: `GET /tags`
- **Auth**: `token`
- **Signature**: `def get_tags(*, sort_by: SortByCodeqrIoTagsApiOrStr | None = SortByCodeqrIoTagsApi.NAME, sort_order: SortOrderOrStr | None = SortOrder.ASC, search: str | None = None, ids: Ids | IdsDict | None = None, page: float | None = 1.0, page_size: float | None = 100.0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `search` — query · `ids` — query · `page` — query · `page_size` — query `pageSize`
- **Returns (parsed)**: `list[TagModel]`
- **Returns (raw)**: `ApiResult[list[TagModel], GetTagsErrorBody]`
- **Error**: `GetTagsErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortByCodeqrIoTagsApiOrStr` | `code_qr/models/enums/sort_by_codeqr_io_tags_api.py` |
| `SortOrderOrStr` | `code_qr/models/enums/sort_order.py` |
| `Ids` | `code_qr/models/unions/ids.py` |
| `IdsDict` | `code_qr/models/unions/ids.py` |
| `TagModel` | `code_qr/models/tag_model.py` |
| `GetTagsErrorBody` | `code_qr/errors/get_tags_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

### client.tags.update_tag

- **Route**: `PUT /tags/{id}`
- **Auth**: `token`
- **Signature**: `def update_tag(id_: str, *, body: TagsRequest1 | TagsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `TagModel`
- **Returns (raw)**: `ApiResult[TagModel, UpdateTagErrorBody]`
- **Error**: `UpdateTagErrorBody` — **Case A (typed)**
- **Error arms**: `M4001` [400, 401, 403, 404, 409, 410, 422, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TagsRequest1` | `code_qr/models/tags_request1.py` |
| `TagsRequest1Dict` | `code_qr/models/tags_request1.py` |
| `TagModel` | `code_qr/models/tag_model.py` |
| `UpdateTagErrorBody` | `code_qr/errors/update_tag_error.py` |
| `M4001` | `code_qr/models/m4001.py` |

