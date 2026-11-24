<!-- Generated file — do not edit; regenerated with the SDK. -->

# LimitsApi — operations

Accessor: `client.limits_api` · Source: `hud/apis/limits_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.limits_api.create_spend_limit_v2_limits_post

- **Route**: `POST /v2/limits`
- **Signature**: `def create_spend_limit_v2_limits_post(body: SpendLimitCreateRequest | SpendLimitCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SpendLimitItem`
- **Returns (raw)**: `ApiResult[SpendLimitItem, CreateSpendLimitV2LimitsPostErrorBody]`
- **Error**: `CreateSpendLimitV2LimitsPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SpendLimitCreateRequest` | `hud/models/spend_limit_create_request.py` |
| `SpendLimitCreateRequestDict` | `hud/models/spend_limit_create_request.py` |
| `SpendLimitItem` | `hud/models/spend_limit_item.py` |
| `CreateSpendLimitV2LimitsPostErrorBody` | `hud/errors/create_spend_limit_v2_limits_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.limits_api.delete_spend_limit_v2_limits_limit_id_delete

- **Route**: `DELETE /v2/limits/{limit_id}`
- **Signature**: `def delete_spend_limit_v2_limits_limit_id_delete(limit_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `limit_id`
- **Params**: `limit_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteSpendLimitV2LimitsLimitIdDeleteErrorBody]`
- **Error**: `DeleteSpendLimitV2LimitsLimitIdDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSpendLimitV2LimitsLimitIdDeleteErrorBody` | `hud/errors/delete_spend_limit_v2_limits_limit_id_delete_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.limits_api.list_spend_limits_v2_limits_get

- **Route**: `GET /v2/limits`
- **Signature**: `def list_spend_limits_v2_limits_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `SpendLimitListResponse`
- **Returns (raw)**: `ApiResult[SpendLimitListResponse, ListSpendLimitsV2LimitsGetErrorBody]`
- **Error**: `ListSpendLimitsV2LimitsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SpendLimitListResponse` | `hud/models/spend_limit_list_response.py` |
| `ListSpendLimitsV2LimitsGetErrorBody` | `hud/errors/list_spend_limits_v2_limits_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |

### client.limits_api.reset_spend_limit_v2_limits_limit_id_reset_post

- **Route**: `POST /v2/limits/{limit_id}/reset`
- **Signature**: `def reset_spend_limit_v2_limits_limit_id_reset_post(limit_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `limit_id`
- **Params**: `limit_id` — path
- **Returns (parsed)**: `SpendLimitItem`
- **Returns (raw)**: `ApiResult[SpendLimitItem, ResetSpendLimitV2LimitsLimitIdResetPostErrorBody]`
- **Error**: `ResetSpendLimitV2LimitsLimitIdResetPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SpendLimitItem` | `hud/models/spend_limit_item.py` |
| `ResetSpendLimitV2LimitsLimitIdResetPostErrorBody` | `hud/errors/reset_spend_limit_v2_limits_limit_id_reset_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.limits_api.update_spend_limit_v2_limits_limit_id_patch

- **Route**: `PATCH /v2/limits/{limit_id}`
- **Signature**: `def update_spend_limit_v2_limits_limit_id_patch(limit_id: UUID, body: SpendLimitUpdateRequest | SpendLimitUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `limit_id`, `body`
- **Params**: `limit_id` — path · `body` — JSON body
- **Returns (parsed)**: `SpendLimitItem`
- **Returns (raw)**: `ApiResult[SpendLimitItem, UpdateSpendLimitV2LimitsLimitIdPatchErrorBody]`
- **Error**: `UpdateSpendLimitV2LimitsLimitIdPatchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SpendLimitUpdateRequest` | `hud/models/spend_limit_update_request.py` |
| `SpendLimitUpdateRequestDict` | `hud/models/spend_limit_update_request.py` |
| `SpendLimitItem` | `hud/models/spend_limit_item.py` |
| `UpdateSpendLimitV2LimitsLimitIdPatchErrorBody` | `hud/errors/update_spend_limit_v2_limits_limit_id_patch_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

