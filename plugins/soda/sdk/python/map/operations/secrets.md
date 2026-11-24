<!-- Generated file — do not edit; regenerated with the SDK. -->

# Secrets — operations

Accessor: `client.secrets` · Source: `soda/apis/secrets.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.secrets.delete_api_v1_secrets_secret_id

- **Route**: `DELETE /api/v1/secrets/{secretId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def delete_api_v1_secrets_secret_id(secret_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `secret_id`
- **Params**: `secret_id` — path `secretId`
- **Returns (parsed)**: `PublicApiDeleteSecretResponse`
- **Returns (raw)**: `ApiResult[PublicApiDeleteSecretResponse, DeleteApiV1SecretsSecretIdErrorBody]`
- **Error**: `DeleteApiV1SecretsSecretIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiDeleteSecretResponse` | `soda/models/public_api_delete_secret_response.py` |
| `DeleteApiV1SecretsSecretIdErrorBody` | `soda/errors/delete_api_v1_secrets_secret_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.secrets.get_api_v1_secrets

- **Route**: `GET /api/v1/secrets`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_secrets(*, page: int | None = None, search: str | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page` — query · `search` — query · `size` — query
- **Returns (parsed)**: `PublicApiListSecretsResponse`
- **Returns (raw)**: `ApiResult[PublicApiListSecretsResponse, GetApiV1SecretsErrorBody]`
- **Error**: `GetApiV1SecretsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiListSecretsResponse` | `soda/models/public_api_list_secrets_response.py` |
| `GetApiV1SecretsErrorBody` | `soda/errors/get_api_v1_secrets_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.secrets.get_api_v1_secrets_public_key

- **Route**: `GET /api/v1/secretsPublicKey`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_secrets_public_key(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `PublicApiGetEncryptionKeyResponse`
- **Returns (raw)**: `ApiResult[PublicApiGetEncryptionKeyResponse, GetApiV1SecretsPublicKeyErrorBody]`
- **Error**: `GetApiV1SecretsPublicKeyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiGetEncryptionKeyResponse` | `soda/models/public_api_get_encryption_key_response.py` |
| `GetApiV1SecretsPublicKeyErrorBody` | `soda/errors/get_api_v1_secrets_public_key_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.secrets.post_api_v1_secrets

- **Route**: `POST /api/v1/secrets`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_secrets(body: PublicApiCreateSecretRequestDto | PublicApiCreateSecretRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PublicApiCreateSecretResponse`
- **Returns (raw)**: `ApiResult[PublicApiCreateSecretResponse, PostApiV1SecretsErrorBody]`
- **Error**: `PostApiV1SecretsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiCreateSecretRequestDto` | `soda/models/public_api_create_secret_request_dto.py` |
| `PublicApiCreateSecretRequestDtoDict` | `soda/models/public_api_create_secret_request_dto.py` |
| `PublicApiCreateSecretResponse` | `soda/models/public_api_create_secret_response.py` |
| `PostApiV1SecretsErrorBody` | `soda/errors/post_api_v1_secrets_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.secrets.post_api_v1_secrets_secret_id

- **Route**: `POST /api/v1/secrets/{secretId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def post_api_v1_secrets_secret_id(secret_id: str, body: PublicApiUpdateSecretRequestDto | PublicApiUpdateSecretRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `secret_id`, `body`
- **Params**: `secret_id` — path `secretId` · `body` — JSON body
- **Returns (parsed)**: `PublicApiUpdateSecretResponse`
- **Returns (raw)**: `ApiResult[PublicApiUpdateSecretResponse, PostApiV1SecretsSecretIdErrorBody]`
- **Error**: `PostApiV1SecretsSecretIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiUpdateSecretRequestDto` | `soda/models/public_api_update_secret_request_dto.py` |
| `PublicApiUpdateSecretRequestDtoDict` | `soda/models/public_api_update_secret_request_dto.py` |
| `PublicApiUpdateSecretResponse` | `soda/models/public_api_update_secret_response.py` |
| `PostApiV1SecretsSecretIdErrorBody` | `soda/errors/post_api_v1_secrets_secret_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

