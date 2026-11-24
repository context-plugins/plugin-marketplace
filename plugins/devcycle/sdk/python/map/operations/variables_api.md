<!-- Generated file — do not edit; regenerated with the SDK. -->

# VariablesApi — operations

Accessor: `client.variables_api` · Source: `dev_cycle/apis/variables_api.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.variables_api.variables_controller_create

- **Route**: `POST /v1/projects/{project}/variables`
- **Server**: `default`
- **Signature**: `def variables_controller_create(project: str, body: CreateVariableDtoDevCycleManagementVariablesApi | CreateVariableDtoDevCycleManagementVariablesApiDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`, `body`
- **Params**: `project` — path · `body` — JSON body
- **Returns (parsed)**: `VariableDevCycleManagementVariablesApi`
- **Returns (raw)**: `ApiResult[VariableDevCycleManagementVariablesApi, VariablesControllerCreateErrorBody]`
- **Error**: `VariablesControllerCreateErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `ConflictErrorResponse` [409] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateVariableDtoDevCycleManagementVariablesApi` | `dev_cycle/models/create_variable_dto_dev_cycle_management_variables_api.py` |
| `CreateVariableDtoDevCycleManagementVariablesApiDict` | `dev_cycle/models/create_variable_dto_dev_cycle_management_variables_api.py` |
| `VariableDevCycleManagementVariablesApi` | `dev_cycle/models/variable_dev_cycle_management_variables_api.py` |
| `VariablesControllerCreateErrorBody` | `dev_cycle/errors/variables_controller_create_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |

### client.variables_api.variables_controller_find_all

- **Route**: `GET /v1/projects/{project}/variables`
- **Server**: `default`
- **Signature**: `def variables_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, feature: str | None = None, type_: Type3DevCycleManagementVariablesApiOrStr | None = None, status: Status2DevCycleManagementVariablesApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`
- **Params**: `project` — path · `page` — query · `per_page` — query `perPage` · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `search` — query · `feature` — query · `type_` — query `type` · `status` — query
- **Returns (parsed)**: `list[VariableDevCycleManagementVariablesApi]`
- **Returns (raw)**: `ApiResult[list[VariableDevCycleManagementVariablesApi], VariablesControllerFindAllErrorBody]`
- **Error**: `VariablesControllerFindAllErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SortByOrStr` | `dev_cycle/models/enums/sort_by.py` |
| `SortOrderOrStr` | `dev_cycle/models/enums/sort_order.py` |
| `Type3DevCycleManagementVariablesApiOrStr` | `dev_cycle/models/enums/type3_dev_cycle_management_variables_api.py` |
| `Status2DevCycleManagementVariablesApiOrStr` | `dev_cycle/models/enums/status2_dev_cycle_management_variables_api.py` |
| `VariableDevCycleManagementVariablesApi` | `dev_cycle/models/variable_dev_cycle_management_variables_api.py` |
| `VariablesControllerFindAllErrorBody` | `dev_cycle/errors/variables_controller_find_all_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |

### client.variables_api.variables_controller_find_one

- **Route**: `GET /v1/projects/{project}/variables/{key}`
- **Server**: `default`
- **Signature**: `def variables_controller_find_one(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `project`
- **Params**: `key` — path · `project` — path
- **Returns (parsed)**: `VariableDevCycleManagementVariablesApi`
- **Returns (raw)**: `ApiResult[VariableDevCycleManagementVariablesApi, VariablesControllerFindOneErrorBody]`
- **Error**: `VariablesControllerFindOneErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `VariableDevCycleManagementVariablesApi` | `dev_cycle/models/variable_dev_cycle_management_variables_api.py` |
| `VariablesControllerFindOneErrorBody` | `dev_cycle/errors/variables_controller_find_one_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.variables_api.variables_controller_remove

- **Route**: `DELETE /v1/projects/{project}/variables/{key}`
- **Server**: `default`
- **Signature**: `def variables_controller_remove(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `project`
- **Params**: `key` — path · `project` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, VariablesControllerRemoveErrorBody]`
- **Error**: `VariablesControllerRemoveErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `PreconditionFailedErrorResponse` [412] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `VariablesControllerRemoveErrorBody` | `dev_cycle/errors/variables_controller_remove_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |
| `PreconditionFailedErrorResponse` | `dev_cycle/models/precondition_failed_error_response.py` |

### client.variables_api.variables_controller_update

- **Route**: `PATCH /v1/projects/{project}/variables/{key}`
- **Server**: `default`
- **Signature**: `def variables_controller_update(key: str, project: str, body: UpdateVariableDto | UpdateVariableDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `project`, `body`
- **Params**: `key` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `VariableDevCycleManagementVariablesApi`
- **Returns (raw)**: `ApiResult[VariableDevCycleManagementVariablesApi, VariablesControllerUpdateErrorBody]`
- **Error**: `VariablesControllerUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `NotFoundErrorResponse` [404] · `ConflictErrorResponse` [409] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateVariableDto` | `dev_cycle/models/update_variable_dto.py` |
| `UpdateVariableDtoDict` | `dev_cycle/models/update_variable_dto.py` |
| `VariableDevCycleManagementVariablesApi` | `dev_cycle/models/variable_dev_cycle_management_variables_api.py` |
| `VariablesControllerUpdateErrorBody` | `dev_cycle/errors/variables_controller_update_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |

### client.variables_api.variables_controller_update_status

- **Route**: `PATCH /v1/projects/{project}/variables/{key}/status`
- **Server**: `default`
- **Signature**: `def variables_controller_update_status(key: str, project: str, body: UpdateVariableStatusDto | UpdateVariableStatusDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `project`, `body`
- **Params**: `key` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `VariableDevCycleManagementVariablesApi`
- **Returns (raw)**: `ApiResult[VariableDevCycleManagementVariablesApi, VariablesControllerUpdateStatusErrorBody]`
- **Error**: `VariablesControllerUpdateStatusErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `NotFoundErrorResponse` [404] · `PreconditionFailedErrorResponse` [412] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateVariableStatusDto` | `dev_cycle/models/update_variable_status_dto.py` |
| `UpdateVariableStatusDtoDict` | `dev_cycle/models/update_variable_status_dto.py` |
| `VariableDevCycleManagementVariablesApi` | `dev_cycle/models/variable_dev_cycle_management_variables_api.py` |
| `VariablesControllerUpdateStatusErrorBody` | `dev_cycle/errors/variables_controller_update_status_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |
| `PreconditionFailedErrorResponse` | `dev_cycle/models/precondition_failed_error_response.py` |

