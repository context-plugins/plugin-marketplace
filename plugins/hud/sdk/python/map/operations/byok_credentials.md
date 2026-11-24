<!-- Generated file — do not edit; regenerated with the SDK. -->

# ByokCredentials — operations

Accessor: `client.byok_credentials` · Source: `hud/apis/byok_credentials.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.byok_credentials.create_byok_credential_v2_byok_credentials_post

- **Route**: `POST /v2/byok-credentials`
- **Signature**: `def create_byok_credential_v2_byok_credentials_post(body: ByokCredentialCreateRequest | ByokCredentialCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ByokCredentialItem`
- **Returns (raw)**: `ApiResult[ByokCredentialItem, CreateByokCredentialV2ByokCredentialsPostErrorBody]`
- **Error**: `CreateByokCredentialV2ByokCredentialsPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ByokCredentialCreateRequest` | `hud/models/byok_credential_create_request.py` |
| `ByokCredentialCreateRequestDict` | `hud/models/byok_credential_create_request.py` |
| `ByokCredentialItem` | `hud/models/byok_credential_item.py` |
| `CreateByokCredentialV2ByokCredentialsPostErrorBody` | `hud/errors/create_byok_credential_v2_byok_credentials_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.byok_credentials.delete_byok_credential_v2_byok_credentials_credential_id_delete

- **Route**: `DELETE /v2/byok-credentials/{credential_id}`
- **Signature**: `def delete_byok_credential_v2_byok_credentials_credential_id_delete(credential_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `credential_id`
- **Params**: `credential_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteErrorBody]`
- **Error**: `DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteErrorBody` | `hud/errors/delete_byok_credential_v2_byok_credentials_credential_id_delete_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.byok_credentials.list_byok_credentials_v2_byok_credentials_get

- **Route**: `GET /v2/byok-credentials`
- **Signature**: `def list_byok_credentials_v2_byok_credentials_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ByokCredentialsListResponse`
- **Returns (raw)**: `ApiResult[ByokCredentialsListResponse, ListByokCredentialsV2ByokCredentialsGetErrorBody]`
- **Error**: `ListByokCredentialsV2ByokCredentialsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ByokCredentialsListResponse` | `hud/models/byok_credentials_list_response.py` |
| `ListByokCredentialsV2ByokCredentialsGetErrorBody` | `hud/errors/list_byok_credentials_v2_byok_credentials_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |

### client.byok_credentials.update_byok_credential_v2_byok_credentials_credential_id_patch

- **Route**: `PATCH /v2/byok-credentials/{credential_id}`
- **Signature**: `def update_byok_credential_v2_byok_credentials_credential_id_patch(credential_id: UUID, body: ByokCredentialUpdateRequest | ByokCredentialUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `credential_id`, `body`
- **Params**: `credential_id` — path · `body` — JSON body
- **Returns (parsed)**: `ByokCredentialItem`
- **Returns (raw)**: `ApiResult[ByokCredentialItem, UpdateByokCredentialV2ByokCredentialsCredentialIdPatchErrorBody]`
- **Error**: `UpdateByokCredentialV2ByokCredentialsCredentialIdPatchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ByokCredentialUpdateRequest` | `hud/models/byok_credential_update_request.py` |
| `ByokCredentialUpdateRequestDict` | `hud/models/byok_credential_update_request.py` |
| `ByokCredentialItem` | `hud/models/byok_credential_item.py` |
| `UpdateByokCredentialV2ByokCredentialsCredentialIdPatchErrorBody` | `hud/errors/update_byok_credential_v2_byok_credentials_credential_id_patch_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

