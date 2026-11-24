<!-- Generated file — do not edit; regenerated with the SDK. -->

# Environments — operations

Accessor: `client.environments` · Source: `dev_cycle/apis/environments.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.environments.environments_controller_create

- **Route**: `POST /v1/projects/{project}/environments`
- **Server**: `default`
- **Signature**: `def environments_controller_create(project: str, body: CreateEnvironmentDto | CreateEnvironmentDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`, `body`
- **Params**: `project` — path · `body` — JSON body
- **Returns (parsed)**: `EnvironmentModel`
- **Returns (raw)**: `ApiResult[EnvironmentModel, EnvironmentsControllerCreateErrorBody]`
- **Error**: `EnvironmentsControllerCreateErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `ConflictErrorResponse` [409] · `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateEnvironmentDto` | `dev_cycle/models/create_environment_dto.py` |
| `CreateEnvironmentDtoDict` | `dev_cycle/models/create_environment_dto.py` |
| `EnvironmentModel` | `dev_cycle/models/environment_model.py` |
| `EnvironmentsControllerCreateErrorBody` | `dev_cycle/errors/environments_controller_create_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |

### client.environments.environments_controller_find_all

- **Route**: `GET /v1/projects/{project}/environments`
- **Server**: `default`
- **Signature**: `def environments_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, created_by: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`
- **Params**: `project` — path · `page` — query · `per_page` — query `perPage` · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `search` — query · `created_by` — query `createdBy`
- **Returns (parsed)**: `list[EnvironmentModel]`
- **Returns (raw)**: `ApiResult[list[EnvironmentModel], EnvironmentsControllerFindAllErrorBody]`
- **Error**: `EnvironmentsControllerFindAllErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SortByOrStr` | `dev_cycle/models/enums/sort_by.py` |
| `SortOrderOrStr` | `dev_cycle/models/enums/sort_order.py` |
| `EnvironmentModel` | `dev_cycle/models/environment_model.py` |
| `EnvironmentsControllerFindAllErrorBody` | `dev_cycle/errors/environments_controller_find_all_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |

### client.environments.environments_controller_find_one

- **Route**: `GET /v1/projects/{project}/environments/{key}`
- **Server**: `default`
- **Signature**: `def environments_controller_find_one(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `project`
- **Params**: `key` — path · `project` — path
- **Returns (parsed)**: `EnvironmentModel`
- **Returns (raw)**: `ApiResult[EnvironmentModel, EnvironmentsControllerFindOneErrorBody]`
- **Error**: `EnvironmentsControllerFindOneErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `EnvironmentModel` | `dev_cycle/models/environment_model.py` |
| `EnvironmentsControllerFindOneErrorBody` | `dev_cycle/errors/environments_controller_find_one_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.environments.environments_controller_remove

- **Route**: `DELETE /v1/projects/{project}/environments/{key}`
- **Server**: `default`
- **Signature**: `def environments_controller_remove(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `project`
- **Params**: `key` — path · `project` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, EnvironmentsControllerRemoveErrorBody]`
- **Error**: `EnvironmentsControllerRemoveErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `CannotDeleteLastItemErrorResponse` [405] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `EnvironmentsControllerRemoveErrorBody` | `dev_cycle/errors/environments_controller_remove_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |
| `CannotDeleteLastItemErrorResponse` | `dev_cycle/models/cannot_delete_last_item_error_response.py` |

### client.environments.environments_controller_update

- **Route**: `PATCH /v1/projects/{project}/environments/{key}`
- **Server**: `default`
- **Signature**: `def environments_controller_update(key: str, project: str, body: UpdateEnvironmentDto | UpdateEnvironmentDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `project`, `body`
- **Params**: `key` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `EnvironmentModel`
- **Returns (raw)**: `ApiResult[EnvironmentModel, EnvironmentsControllerUpdateErrorBody]`
- **Error**: `EnvironmentsControllerUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `NotFoundErrorResponse` [404] · `ConflictErrorResponse` [409] · `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateEnvironmentDto` | `dev_cycle/models/update_environment_dto.py` |
| `UpdateEnvironmentDtoDict` | `dev_cycle/models/update_environment_dto.py` |
| `EnvironmentModel` | `dev_cycle/models/environment_model.py` |
| `EnvironmentsControllerUpdateErrorBody` | `dev_cycle/errors/environments_controller_update_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |

### client.environments.sdk_keys_controller_generate

- **Route**: `POST /v1/projects/{project}/environments/{environment}/sdk-keys`
- **Server**: `default`
- **Signature**: `def sdk_keys_controller_generate(environment: str, project: str, body: GenerateSdkTokensDto | GenerateSdkTokensDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `environment`, `project`, `body`
- **Params**: `environment` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `EnvironmentModel`
- **Returns (raw)**: `ApiResult[EnvironmentModel, SdkKeysControllerGenerateErrorBody]`
- **Error**: `SdkKeysControllerGenerateErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `NotFoundErrorResponse` [404] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `GenerateSdkTokensDto` | `dev_cycle/models/generate_sdk_tokens_dto.py` |
| `GenerateSdkTokensDtoDict` | `dev_cycle/models/generate_sdk_tokens_dto.py` |
| `EnvironmentModel` | `dev_cycle/models/environment_model.py` |
| `SdkKeysControllerGenerateErrorBody` | `dev_cycle/errors/sdk_keys_controller_generate_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.environments.sdk_keys_controller_invalidate

- **Route**: `DELETE /v1/projects/{project}/environments/{environment}/sdk-keys/{key}`
- **Server**: `default`
- **Signature**: `def sdk_keys_controller_invalidate(key: str, environment: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `environment`, `project`
- **Params**: `key` — path · `environment` — path · `project` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SdkKeysControllerInvalidateErrorBody]`
- **Error**: `SdkKeysControllerInvalidateErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `CannotDeleteLastItemErrorResponse` [405] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `SdkKeysControllerInvalidateErrorBody` | `dev_cycle/errors/sdk_keys_controller_invalidate_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |
| `CannotDeleteLastItemErrorResponse` | `dev_cycle/models/cannot_delete_last_item_error_response.py` |

