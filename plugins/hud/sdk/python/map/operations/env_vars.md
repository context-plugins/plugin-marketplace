<!-- Generated file — do not edit; regenerated with the SDK. -->

# EnvVars — operations

Accessor: `client.env_vars` · Source: `hud/apis/env_vars.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.env_vars.batch_replace_env_vars_v2_env_vars_batch_put

- **Route**: `PUT /v2/env-vars/batch`
- **Signature**: `def batch_replace_env_vars_v2_env_vars_batch_put(body: RegistryEnvVarBatchRequest | RegistryEnvVarBatchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `RegistryEnvVarBatchResponse`
- **Returns (raw)**: `ApiResult[RegistryEnvVarBatchResponse, BatchReplaceEnvVarsV2EnvVarsBatchPutErrorBody]`
- **Error**: `BatchReplaceEnvVarsV2EnvVarsBatchPutErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RegistryEnvVarBatchRequest` | `hud/models/registry_env_var_batch_request.py` |
| `RegistryEnvVarBatchRequestDict` | `hud/models/registry_env_var_batch_request.py` |
| `RegistryEnvVarBatchResponse` | `hud/models/registry_env_var_batch_response.py` |
| `BatchReplaceEnvVarsV2EnvVarsBatchPutErrorBody` | `hud/errors/batch_replace_env_vars_v2_env_vars_batch_put_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.env_vars.check_env_var_completeness_v2_env_vars_check_post

- **Route**: `POST /v2/env-vars/check`
- **Signature**: `def check_env_var_completeness_v2_env_vars_check_post(body: RegistryEnvVarCheckRequest | RegistryEnvVarCheckRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `RegistryEnvVarCheckResponse`
- **Returns (raw)**: `ApiResult[RegistryEnvVarCheckResponse, CheckEnvVarCompletenessV2EnvVarsCheckPostErrorBody]`
- **Error**: `CheckEnvVarCompletenessV2EnvVarsCheckPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RegistryEnvVarCheckRequest` | `hud/models/registry_env_var_check_request.py` |
| `RegistryEnvVarCheckRequestDict` | `hud/models/registry_env_var_check_request.py` |
| `RegistryEnvVarCheckResponse` | `hud/models/registry_env_var_check_response.py` |
| `CheckEnvVarCompletenessV2EnvVarsCheckPostErrorBody` | `hud/errors/check_env_var_completeness_v2_env_vars_check_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.env_vars.create_env_var_v2_env_vars_post

- **Route**: `POST /v2/env-vars`
- **Signature**: `def create_env_var_v2_env_vars_post(body: RegistryEnvVarCreateRequest | RegistryEnvVarCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `RegistryEnvVarItem`
- **Returns (raw)**: `ApiResult[RegistryEnvVarItem, CreateEnvVarV2EnvVarsPostErrorBody]`
- **Error**: `CreateEnvVarV2EnvVarsPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RegistryEnvVarCreateRequest` | `hud/models/registry_env_var_create_request.py` |
| `RegistryEnvVarCreateRequestDict` | `hud/models/registry_env_var_create_request.py` |
| `RegistryEnvVarItem` | `hud/models/registry_env_var_item.py` |
| `CreateEnvVarV2EnvVarsPostErrorBody` | `hud/errors/create_env_var_v2_env_vars_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.env_vars.delete_env_var_v2_env_vars_var_id_delete

- **Route**: `DELETE /v2/env-vars/{var_id}`
- **Signature**: `def delete_env_var_v2_env_vars_var_id_delete(var_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `var_id`
- **Params**: `var_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteEnvVarV2EnvVarsVarIdDeleteErrorBody]`
- **Error**: `DeleteEnvVarV2EnvVarsVarIdDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteEnvVarV2EnvVarsVarIdDeleteErrorBody` | `hud/errors/delete_env_var_v2_env_vars_var_id_delete_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.env_vars.list_env_vars_v2_env_vars_get

- **Route**: `GET /v2/env-vars`
- **Signature**: `def list_env_vars_v2_env_vars_get(registry_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `registry_id`
- **Params**: `registry_id` — query
- **Returns (parsed)**: `RegistryEnvVarsListResponse`
- **Returns (raw)**: `ApiResult[RegistryEnvVarsListResponse, ListEnvVarsV2EnvVarsGetErrorBody]`
- **Error**: `ListEnvVarsV2EnvVarsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RegistryEnvVarsListResponse` | `hud/models/registry_env_vars_list_response.py` |
| `ListEnvVarsV2EnvVarsGetErrorBody` | `hud/errors/list_env_vars_v2_env_vars_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.env_vars.update_env_var_v2_env_vars_var_id_patch

- **Route**: `PATCH /v2/env-vars/{var_id}`
- **Signature**: `def update_env_var_v2_env_vars_var_id_patch(var_id: UUID, body: RegistryEnvVarUpdateRequest | RegistryEnvVarUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `var_id`, `body`
- **Params**: `var_id` — path · `body` — JSON body
- **Returns (parsed)**: `RegistryEnvVarItem`
- **Returns (raw)**: `ApiResult[RegistryEnvVarItem, UpdateEnvVarV2EnvVarsVarIdPatchErrorBody]`
- **Error**: `UpdateEnvVarV2EnvVarsVarIdPatchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RegistryEnvVarUpdateRequest` | `hud/models/registry_env_var_update_request.py` |
| `RegistryEnvVarUpdateRequestDict` | `hud/models/registry_env_var_update_request.py` |
| `RegistryEnvVarItem` | `hud/models/registry_env_var_item.py` |
| `UpdateEnvVarV2EnvVarsVarIdPatchErrorBody` | `hud/errors/update_env_var_v2_env_vars_var_id_patch_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

