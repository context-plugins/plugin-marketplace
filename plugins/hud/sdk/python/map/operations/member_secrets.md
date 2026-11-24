<!-- Generated file — do not edit; regenerated with the SDK. -->

# MemberSecrets — operations

Accessor: `client.member_secrets` · Source: `hud/apis/member_secrets.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.member_secrets.create_member_secret_v2_member_secrets_post

- **Route**: `POST /v2/member-secrets`
- **Signature**: `def create_member_secret_v2_member_secrets_post(body: MemberSecretCreateRequest | MemberSecretCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `MemberSecretItem`
- **Returns (raw)**: `ApiResult[MemberSecretItem, CreateMemberSecretV2MemberSecretsPostErrorBody]`
- **Error**: `CreateMemberSecretV2MemberSecretsPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MemberSecretCreateRequest` | `hud/models/member_secret_create_request.py` |
| `MemberSecretCreateRequestDict` | `hud/models/member_secret_create_request.py` |
| `MemberSecretItem` | `hud/models/member_secret_item.py` |
| `CreateMemberSecretV2MemberSecretsPostErrorBody` | `hud/errors/create_member_secret_v2_member_secrets_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.member_secrets.delete_member_secret_v2_member_secrets_secret_id_delete

- **Route**: `DELETE /v2/member-secrets/{secret_id}`
- **Signature**: `def delete_member_secret_v2_member_secrets_secret_id_delete(secret_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `secret_id`
- **Params**: `secret_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteMemberSecretV2MemberSecretsSecretIdDeleteErrorBody]`
- **Error**: `DeleteMemberSecretV2MemberSecretsSecretIdDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteMemberSecretV2MemberSecretsSecretIdDeleteErrorBody` | `hud/errors/delete_member_secret_v2_member_secrets_secret_id_delete_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.member_secrets.list_member_secrets_v2_member_secrets_get

- **Route**: `GET /v2/member-secrets`
- **Signature**: `def list_member_secrets_v2_member_secrets_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `MemberSecretsListResponse`
- **Returns (raw)**: `ApiResult[MemberSecretsListResponse, ListMemberSecretsV2MemberSecretsGetErrorBody]`
- **Error**: `ListMemberSecretsV2MemberSecretsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MemberSecretsListResponse` | `hud/models/member_secrets_list_response.py` |
| `ListMemberSecretsV2MemberSecretsGetErrorBody` | `hud/errors/list_member_secrets_v2_member_secrets_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |

### client.member_secrets.update_member_secret_v2_member_secrets_secret_id_patch

- **Route**: `PATCH /v2/member-secrets/{secret_id}`
- **Signature**: `def update_member_secret_v2_member_secrets_secret_id_patch(secret_id: UUID, body: MemberSecretUpdateRequest | MemberSecretUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `secret_id`, `body`
- **Params**: `secret_id` — path · `body` — JSON body
- **Returns (parsed)**: `MemberSecretItem`
- **Returns (raw)**: `ApiResult[MemberSecretItem, UpdateMemberSecretV2MemberSecretsSecretIdPatchErrorBody]`
- **Error**: `UpdateMemberSecretV2MemberSecretsSecretIdPatchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MemberSecretUpdateRequest` | `hud/models/member_secret_update_request.py` |
| `MemberSecretUpdateRequestDict` | `hud/models/member_secret_update_request.py` |
| `MemberSecretItem` | `hud/models/member_secret_item.py` |
| `UpdateMemberSecretV2MemberSecretsSecretIdPatchErrorBody` | `hud/errors/update_member_secret_v2_member_secrets_secret_id_patch_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

