<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomProperties — operations

Accessor: `client.custom_properties` · Source: `dev_cycle/apis/custom_properties.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.custom_properties.custom_properties_controller_create

- **Route**: `POST /v1/projects/{project}/customProperties`
- **Server**: `default`
- **Signature**: `def custom_properties_controller_create(project: str, body: CreateCustomPropertyDto | CreateCustomPropertyDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`, `body`
- **Params**: `project` — path · `body` — JSON body
- **Returns (parsed)**: `CustomProperty`
- **Returns (raw)**: `ApiResult[CustomProperty, CustomPropertiesControllerCreateErrorBody]`
- **Error**: `CustomPropertiesControllerCreateErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `ConflictErrorResponse` [409] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateCustomPropertyDto` | `dev_cycle/models/create_custom_property_dto.py` |
| `CreateCustomPropertyDtoDict` | `dev_cycle/models/create_custom_property_dto.py` |
| `CustomProperty` | `dev_cycle/models/custom_property.py` |
| `CustomPropertiesControllerCreateErrorBody` | `dev_cycle/errors/custom_properties_controller_create_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |

### client.custom_properties.custom_properties_controller_find_all

- **Route**: `GET /v1/projects/{project}/customProperties`
- **Server**: `default`
- **Signature**: `def custom_properties_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, type_: Type3OrStr | None = None, include_usage: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`
- **Params**: `project` — path · `page` — query · `per_page` — query `perPage` · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `search` — query · `type_` — query `type` · `include_usage` — query `includeUsage`
- **Returns (parsed)**: `list[CustomProperty]`
- **Returns (raw)**: `ApiResult[list[CustomProperty], CustomPropertiesControllerFindAllErrorBody]`
- **Error**: `CustomPropertiesControllerFindAllErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SortByOrStr` | `dev_cycle/models/enums/sort_by.py` |
| `SortOrderOrStr` | `dev_cycle/models/enums/sort_order.py` |
| `Type3OrStr` | `dev_cycle/models/enums/type3.py` |
| `CustomProperty` | `dev_cycle/models/custom_property.py` |
| `CustomPropertiesControllerFindAllErrorBody` | `dev_cycle/errors/custom_properties_controller_find_all_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |

### client.custom_properties.custom_properties_controller_find_one

- **Route**: `GET /v1/projects/{project}/customProperties/{key}`
- **Server**: `default`
- **Signature**: `def custom_properties_controller_find_one(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `project`
- **Params**: `key` — path · `project` — path
- **Returns (parsed)**: `CustomProperty`
- **Returns (raw)**: `ApiResult[CustomProperty, CustomPropertiesControllerFindOneErrorBody]`
- **Error**: `CustomPropertiesControllerFindOneErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `CustomProperty` | `dev_cycle/models/custom_property.py` |
| `CustomPropertiesControllerFindOneErrorBody` | `dev_cycle/errors/custom_properties_controller_find_one_error.py` |

### client.custom_properties.custom_properties_controller_remove

- **Route**: `DELETE /v1/projects/{project}/customProperties/{key}`
- **Server**: `default`
- **Signature**: `def custom_properties_controller_remove(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `project`
- **Params**: `key` — path · `project` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CustomPropertiesControllerRemoveErrorBody]`
- **Error**: `CustomPropertiesControllerRemoveErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `CustomPropertiesControllerRemoveErrorBody` | `dev_cycle/errors/custom_properties_controller_remove_error.py` |

### client.custom_properties.custom_properties_controller_update

- **Route**: `PATCH /v1/projects/{project}/customProperties/{key}`
- **Server**: `default`
- **Signature**: `def custom_properties_controller_update(key: str, project: str, body: UpdateCustomPropertyDto | UpdateCustomPropertyDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `project`, `body`
- **Params**: `key` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `CustomProperty`
- **Returns (raw)**: `ApiResult[CustomProperty, CustomPropertiesControllerUpdateErrorBody]`
- **Error**: `CustomPropertiesControllerUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `ConflictErrorResponse` [409] · `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateCustomPropertyDto` | `dev_cycle/models/update_custom_property_dto.py` |
| `UpdateCustomPropertyDtoDict` | `dev_cycle/models/update_custom_property_dto.py` |
| `CustomProperty` | `dev_cycle/models/custom_property.py` |
| `CustomPropertiesControllerUpdateErrorBody` | `dev_cycle/errors/custom_properties_controller_update_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |

