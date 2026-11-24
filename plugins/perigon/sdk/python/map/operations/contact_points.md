<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContactPoints — operations

Accessor: `client.contact_points` · Source: `perigon/apis/contact_points.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.contact_points.create_contact_point

- **Route**: `POST /v1/api/contactPoints`
- **Auth**: `api_key_auth`
- **Signature**: `def create_contact_point(body: ContactPointRequestBody | ContactPointRequestBodyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ContactPointResult`
- **Returns (raw)**: `ApiResult[ContactPointResult, CreateContactPointErrorBody]`
- **Error**: `CreateContactPointErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactPointRequestBody` | `perigon/models/contact_point_request_body.py` |
| `ContactPointRequestBodyDict` | `perigon/models/contact_point_request_body.py` |
| `ContactPointResult` | `perigon/models/contact_point_result.py` |
| `CreateContactPointErrorBody` | `perigon/errors/create_contact_point_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.contact_points.delete_contact_point

- **Route**: `DELETE /v1/api/contactPoints/{uuid}`
- **Auth**: `api_key_auth`
- **Signature**: `def delete_contact_point(uuid: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `uuid`
- **Params**: `uuid` — path
- **Returns (parsed)**: `ContactPointResult`
- **Returns (raw)**: `ApiResult[ContactPointResult, DeleteContactPointErrorBody]`
- **Error**: `DeleteContactPointErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactPointResult` | `perigon/models/contact_point_result.py` |
| `DeleteContactPointErrorBody` | `perigon/errors/delete_contact_point_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.contact_points.get_contact_point

- **Route**: `GET /v1/api/contactPoints/{uuid}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_contact_point(uuid: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `uuid`
- **Params**: `uuid` — path
- **Returns (parsed)**: `ContactPointResult`
- **Returns (raw)**: `ApiResult[ContactPointResult, GetContactPointErrorBody]`
- **Error**: `GetContactPointErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactPointResult` | `perigon/models/contact_point_result.py` |
| `GetContactPointErrorBody` | `perigon/errors/get_contact_point_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.contact_points.list_contact_points

- **Route**: `GET /v1/api/contactPoints`
- **Auth**: `api_key_auth`
- **Signature**: `def list_contact_points(sort_by: ContactPointSortByOrStr, sort_order: SortOrderOrStr, *, status: list[Status1OrStr] | None = None, type_: list[Type1OrStr] | None = None, page: int | None = 0, size: int | None = 10, nulls: NullsOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sort_by`, `sort_order`
- **Params**: `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `status` — query · `type_` — query `type` · `page` — query · `size` — query · `nulls` — query
- **Returns (parsed)**: `ContactPointListResult`
- **Returns (raw)**: `ApiResult[ContactPointListResult, ListContactPointsErrorBody]`
- **Error**: `ListContactPointsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactPointSortByOrStr` | `perigon/models/enums/contact_point_sort_by.py` |
| `SortOrderOrStr` | `perigon/models/enums/sort_order.py` |
| `Status1OrStr` | `perigon/models/enums/status1.py` |
| `Type1OrStr` | `perigon/models/enums/type1.py` |
| `NullsOrStr` | `perigon/models/enums/nulls.py` |
| `ContactPointListResult` | `perigon/models/contact_point_list_result.py` |
| `ListContactPointsErrorBody` | `perigon/errors/list_contact_points_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.contact_points.update_contact_point

- **Route**: `PATCH /v1/api/contactPoints/{uuid}`
- **Auth**: `api_key_auth`
- **Signature**: `def update_contact_point(uuid: UUID, body: ContactPointUpdateBody | ContactPointUpdateBodyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `uuid`, `body`
- **Params**: `uuid` — path · `body` — JSON body
- **Returns (parsed)**: `ContactPointResult`
- **Returns (raw)**: `ApiResult[ContactPointResult, UpdateContactPointErrorBody]`
- **Error**: `UpdateContactPointErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContactPointUpdateBody` | `perigon/models/contact_point_update_body.py` |
| `ContactPointUpdateBodyDict` | `perigon/models/contact_point_update_body.py` |
| `ContactPointResult` | `perigon/models/contact_point_result.py` |
| `UpdateContactPointErrorBody` | `perigon/errors/update_contact_point_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

