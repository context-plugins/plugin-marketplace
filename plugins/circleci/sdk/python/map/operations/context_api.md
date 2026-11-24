<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContextApi — operations

Accessor: `client.context_api` · Source: `circle_ci/apis/context_api.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.context_api.add_or_update_context_environment_variable

- **Route**: `PUT /context/{context-id}/environment-variable/{env-var-name}`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def add_or_update_context_environment_variable(context_id: UUID, env_var_name: str, body: ContextEnvironmentVariableRequest | ContextEnvironmentVariableRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `context_id`, `env_var_name`, `body`
- **Params**: `context_id` — path `context-id` · `env_var_name` — path `env-var-name` · `body` — JSON body
- **Returns (parsed)**: `EnvironmentVariable`
- **Returns (raw)**: `ApiResult[EnvironmentVariable, AddOrUpdateContextEnvironmentVariableErrorBody]`
- **Error**: `AddOrUpdateContextEnvironmentVariableErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ContextEnvironmentVariableRequest` | `circle_ci/models/context_environment_variable_request.py` |
| `ContextEnvironmentVariableRequestDict` | `circle_ci/models/context_environment_variable_request.py` |
| `EnvironmentVariable` | `circle_ci/models/environment_variable.py` |
| `AddOrUpdateContextEnvironmentVariableErrorBody` | `circle_ci/errors/add_or_update_context_environment_variable_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.context_api.create_context

- **Route**: `POST /context`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def create_context(body: CreateContextRequest | CreateContextRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Context`
- **Returns (raw)**: `ApiResult[Context, CreateContextErrorBody]`
- **Error**: `CreateContextErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateContextRequest` | `circle_ci/models/create_context_request.py` |
| `CreateContextRequestDict` | `circle_ci/models/create_context_request.py` |
| `Context` | `circle_ci/models/context.py` |
| `CreateContextErrorBody` | `circle_ci/errors/create_context_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.context_api.delete_context

- **Route**: `DELETE /context/{context-id}`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def delete_context(context_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `context_id`
- **Params**: `context_id` — path `context-id`
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, DeleteContextErrorBody]`
- **Error**: `DeleteContextErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageResponse` | `circle_ci/models/message_response.py` |
| `DeleteContextErrorBody` | `circle_ci/errors/delete_context_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.context_api.delete_context_environment_variable

- **Route**: `DELETE /context/{context-id}/environment-variable/{env-var-name}`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def delete_context_environment_variable(context_id: UUID, env_var_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `context_id`, `env_var_name`
- **Params**: `context_id` — path `context-id` · `env_var_name` — path `env-var-name`
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, DeleteContextEnvironmentVariableErrorBody]`
- **Error**: `DeleteContextEnvironmentVariableErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageResponse` | `circle_ci/models/message_response.py` |
| `DeleteContextEnvironmentVariableErrorBody` | `circle_ci/errors/delete_context_environment_variable_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.context_api.get_context

- **Route**: `GET /context/{context-id}`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def get_context(context_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `context_id`
- **Params**: `context_id` — path `context-id`
- **Returns (parsed)**: `Context`
- **Returns (raw)**: `ApiResult[Context, GetContextErrorBody]`
- **Error**: `GetContextErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Context` | `circle_ci/models/context.py` |
| `GetContextErrorBody` | `circle_ci/errors/get_context_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.context_api.list_context_environment_variables

- **Route**: `GET /context/{context-id}/environment-variable`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def list_context_environment_variables(context_id: UUID, *, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `context_id`
- **Params**: `context_id` — path `context-id` · `page_token` — query `page-token`
- **Returns (parsed)**: `EnvironmentVariableList`
- **Returns (raw)**: `ApiResult[EnvironmentVariableList, ListContextEnvironmentVariablesErrorBody]`
- **Error**: `ListContextEnvironmentVariablesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EnvironmentVariableList` | `circle_ci/models/environment_variable_list.py` |
| `ListContextEnvironmentVariablesErrorBody` | `circle_ci/errors/list_context_environment_variables_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.context_api.list_contexts

- **Route**: `GET /context`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def list_contexts(*, owner_id: UUID | None = None, owner_slug: str | None = None, owner_type: OwnerTypeOrStr | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `owner_id` — query `owner-id` · `owner_slug` — query `owner-slug` · `owner_type` — query `owner-type` · `page_token` — query `page-token`
- **Returns (parsed)**: `ContextList`
- **Returns (raw)**: `ApiResult[ContextList, ListContextsErrorBody]`
- **Error**: `ListContextsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OwnerTypeOrStr` | `circle_ci/models/enums/owner_type.py` |
| `ContextList` | `circle_ci/models/context_list.py` |
| `ListContextsErrorBody` | `circle_ci/errors/list_contexts_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

