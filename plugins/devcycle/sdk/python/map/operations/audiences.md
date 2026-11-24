<!-- Generated file — do not edit; regenerated with the SDK. -->

# Audiences — operations

Accessor: `client.audiences` · Source: `dev_cycle/apis/audiences.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.audiences.audiences_controller_create

- **Route**: `POST /v1/projects/{project}/audiences`
- **Server**: `default`
- **Signature**: `def audiences_controller_create(project: str, body: CreateAudienceDto | CreateAudienceDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`, `body`
- **Params**: `project` — path · `body` — JSON body
- **Returns (parsed)**: `Audience`
- **Returns (raw)**: `ApiResult[Audience, AudiencesControllerCreateErrorBody]`
- **Error**: `AudiencesControllerCreateErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `ConflictErrorResponse` [409] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateAudienceDto` | `dev_cycle/models/create_audience_dto.py` |
| `CreateAudienceDtoDict` | `dev_cycle/models/create_audience_dto.py` |
| `Audience` | `dev_cycle/models/audience.py` |
| `AudiencesControllerCreateErrorBody` | `dev_cycle/errors/audiences_controller_create_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |

### client.audiences.audiences_controller_find_all

- **Route**: `GET /v1/projects/{project}/audiences`
- **Server**: `default`
- **Signature**: `def audiences_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, include_usage: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`
- **Params**: `project` — path · `page` — query · `per_page` — query `perPage` · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `search` — query · `created_by` — query `createdBy` · `include_usage` — query `includeUsage`
- **Returns (parsed)**: `list[Audience]`
- **Returns (raw)**: `ApiResult[list[Audience], AudiencesControllerFindAllErrorBody]`
- **Error**: `AudiencesControllerFindAllErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SortByOrStr` | `dev_cycle/models/enums/sort_by.py` |
| `SortOrderOrStr` | `dev_cycle/models/enums/sort_order.py` |
| `Audience` | `dev_cycle/models/audience.py` |
| `AudiencesControllerFindAllErrorBody` | `dev_cycle/errors/audiences_controller_find_all_error.py` |

### client.audiences.audiences_controller_find_one

- **Route**: `GET /v1/projects/{project}/audiences/{key}`
- **Server**: `default`
- **Signature**: `def audiences_controller_find_one(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `project`
- **Params**: `key` — path · `project` — path
- **Returns (parsed)**: `Audience`
- **Returns (raw)**: `ApiResult[Audience, AudiencesControllerFindOneErrorBody]`
- **Error**: `AudiencesControllerFindOneErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `Audience` | `dev_cycle/models/audience.py` |
| `AudiencesControllerFindOneErrorBody` | `dev_cycle/errors/audiences_controller_find_one_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.audiences.audiences_controller_find_usages

- **Route**: `GET /v1/projects/{project}/audiences/{key}/usage`
- **Server**: `default`
- **Signature**: `def audiences_controller_find_usages(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `project`
- **Params**: `key` — path · `project` — path
- **Returns (parsed)**: `AudienceUsage`
- **Returns (raw)**: `ApiResult[AudienceUsage, AudiencesControllerFindUsagesErrorBody]`
- **Error**: `AudiencesControllerFindUsagesErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `AudienceUsage` | `dev_cycle/models/audience_usage.py` |
| `AudiencesControllerFindUsagesErrorBody` | `dev_cycle/errors/audiences_controller_find_usages_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.audiences.audiences_controller_remove

- **Route**: `DELETE /v1/projects/{project}/audiences/{key}`
- **Server**: `default`
- **Signature**: `def audiences_controller_remove(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `project`
- **Params**: `key` — path · `project` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AudiencesControllerRemoveErrorBody]`
- **Error**: `AudiencesControllerRemoveErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [401, 412, anything unmapped]

| Type | Source |
| --- | --- |
| `AudiencesControllerRemoveErrorBody` | `dev_cycle/errors/audiences_controller_remove_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.audiences.audiences_controller_update

- **Route**: `PATCH /v1/projects/{project}/audiences/{key}`
- **Server**: `default`
- **Signature**: `def audiences_controller_update(key: str, project: str, body: UpdateAudienceDto | UpdateAudienceDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `project`, `body`
- **Params**: `key` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `Audience`
- **Returns (raw)**: `ApiResult[Audience, AudiencesControllerUpdateErrorBody]`
- **Error**: `AudiencesControllerUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `NotFoundErrorResponse` [404] · `ConflictErrorResponse` [409] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateAudienceDto` | `dev_cycle/models/update_audience_dto.py` |
| `UpdateAudienceDtoDict` | `dev_cycle/models/update_audience_dto.py` |
| `Audience` | `dev_cycle/models/audience.py` |
| `AudiencesControllerUpdateErrorBody` | `dev_cycle/errors/audiences_controller_update_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |

