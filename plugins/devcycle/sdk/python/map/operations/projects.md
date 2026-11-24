<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `dev_cycle/apis/projects.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.projects.projects_controller_create

- **Route**: `POST /v1/projects`
- **Server**: `default`
- **Signature**: `def projects_controller_create(body: CreateProjectDto | CreateProjectDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Project`
- **Returns (raw)**: `ApiResult[Project, ProjectsControllerCreateErrorBody]`
- **Error**: `ProjectsControllerCreateErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `ConflictErrorResponse` [409] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateProjectDto` | `dev_cycle/models/create_project_dto.py` |
| `CreateProjectDtoDict` | `dev_cycle/models/create_project_dto.py` |
| `Project` | `dev_cycle/models/project.py` |
| `ProjectsControllerCreateErrorBody` | `dev_cycle/errors/projects_controller_create_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |

### client.projects.projects_controller_find_all

- **Route**: `GET /v1/projects`
- **Server**: `default`
- **Signature**: `def projects_controller_find_all(*, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page` — query · `per_page` — query `perPage` · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `search` — query · `created_by` — query `createdBy`
- **Returns (parsed)**: `list[Project]`
- **Returns (raw)**: `ApiResult[list[Project], ProjectsControllerFindAllErrorBody]`
- **Error**: `ProjectsControllerFindAllErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `SortByOrStr` | `dev_cycle/models/enums/sort_by.py` |
| `SortOrderOrStr` | `dev_cycle/models/enums/sort_order.py` |
| `Project` | `dev_cycle/models/project.py` |
| `ProjectsControllerFindAllErrorBody` | `dev_cycle/errors/projects_controller_find_all_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |

### client.projects.projects_controller_find_one

- **Route**: `GET /v1/projects/{key}`
- **Server**: `default`
- **Signature**: `def projects_controller_find_one(key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`
- **Params**: `key` — path
- **Returns (parsed)**: `Project`
- **Returns (raw)**: `ApiResult[Project, ProjectsControllerFindOneErrorBody]`
- **Error**: `ProjectsControllerFindOneErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `Project` | `dev_cycle/models/project.py` |
| `ProjectsControllerFindOneErrorBody` | `dev_cycle/errors/projects_controller_find_one_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.projects.projects_controller_get_staleness

- **Route**: `GET /v1/projects/{key}/staleness`
- **Server**: `default`
- **Signature**: `def projects_controller_get_staleness(key: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, include_silenced: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`
- **Params**: `key` — path · `page` — query · `per_page` — query `perPage` · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `search` — query · `created_by` — query `createdBy` · `include_silenced` — query `includeSilenced`
- **Returns (parsed)**: `list[FeatureStalenessEntity]`
- **Returns (raw)**: `ApiResult[list[FeatureStalenessEntity], ProjectsControllerGetStalenessErrorBody]`
- **Error**: `ProjectsControllerGetStalenessErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `SortByOrStr` | `dev_cycle/models/enums/sort_by.py` |
| `SortOrderOrStr` | `dev_cycle/models/enums/sort_order.py` |
| `FeatureStalenessEntity` | `dev_cycle/models/feature_staleness_entity.py` |
| `ProjectsControllerGetStalenessErrorBody` | `dev_cycle/errors/projects_controller_get_staleness_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.projects.projects_controller_remove

- **Route**: `DELETE /v1/projects/{key}`
- **Server**: `default`
- **Signature**: `def projects_controller_remove(key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`
- **Params**: `key` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ProjectsControllerRemoveErrorBody]`
- **Error**: `ProjectsControllerRemoveErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `CannotDeleteLastItemErrorResponse` [405] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectsControllerRemoveErrorBody` | `dev_cycle/errors/projects_controller_remove_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |
| `CannotDeleteLastItemErrorResponse` | `dev_cycle/models/cannot_delete_last_item_error_response.py` |

### client.projects.projects_controller_update

- **Route**: `PATCH /v1/projects/{key}`
- **Server**: `default`
- **Signature**: `def projects_controller_update(key: str, body: UpdateProjectDto | UpdateProjectDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `body`
- **Params**: `key` — path · `body` — JSON body
- **Returns (parsed)**: `Project`
- **Returns (raw)**: `ApiResult[Project, ProjectsControllerUpdateErrorBody]`
- **Error**: `ProjectsControllerUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `NotFoundErrorResponse` [404] · `ConflictErrorResponse` [409] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateProjectDto` | `dev_cycle/models/update_project_dto.py` |
| `UpdateProjectDtoDict` | `dev_cycle/models/update_project_dto.py` |
| `Project` | `dev_cycle/models/project.py` |
| `ProjectsControllerUpdateErrorBody` | `dev_cycle/errors/projects_controller_update_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |

### client.projects.projects_controller_update_protected_settings

- **Route**: `PATCH /v1/projects/{key}/settings/protected`
- **Server**: `default`
- **Signature**: `def projects_controller_update_protected_settings(key: str, body: UpdateProtectedProjectSettingsDto | UpdateProtectedProjectSettingsDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `body`
- **Params**: `key` — path · `body` — JSON body
- **Returns (parsed)**: `Project`
- **Returns (raw)**: `ApiResult[Project, ProjectsControllerUpdateProtectedSettingsErrorBody]`
- **Error**: `ProjectsControllerUpdateProtectedSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `NotFoundErrorResponse` [404] · `ConflictErrorResponse` [409] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateProtectedProjectSettingsDto` | `dev_cycle/models/update_protected_project_settings_dto.py` |
| `UpdateProtectedProjectSettingsDtoDict` | `dev_cycle/models/update_protected_project_settings_dto.py` |
| `Project` | `dev_cycle/models/project.py` |
| `ProjectsControllerUpdateProtectedSettingsErrorBody` | `dev_cycle/errors/projects_controller_update_protected_settings_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |

### client.projects.projects_controller_update_settings

- **Route**: `PATCH /v1/projects/{key}/settings`
- **Server**: `default`
- **Signature**: `def projects_controller_update_settings(key: str, body: UpdateProjectSettingsDto | UpdateProjectSettingsDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `body`
- **Params**: `key` — path · `body` — JSON body
- **Returns (parsed)**: `Project`
- **Returns (raw)**: `ApiResult[Project, ProjectsControllerUpdateSettingsErrorBody]`
- **Error**: `ProjectsControllerUpdateSettingsErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `NotFoundErrorResponse` [404] · `ConflictErrorResponse` [409] · `RawError` [403, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateProjectSettingsDto` | `dev_cycle/models/update_project_settings_dto.py` |
| `UpdateProjectSettingsDtoDict` | `dev_cycle/models/update_project_settings_dto.py` |
| `Project` | `dev_cycle/models/project.py` |
| `ProjectsControllerUpdateSettingsErrorBody` | `dev_cycle/errors/projects_controller_update_settings_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |

