<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiKeys — operations

Accessor: `client.api_keys` · Source: `audioscrape/apis/api_keys.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.api_keys.api_key_usage

- **Route**: `GET /api/keys/{id}/usage`
- **Auth**: `bearer_auth`
- **Signature**: `def api_key_usage(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiKeyUsage`
- **Returns (raw)**: `ApiResult[ApiKeyUsage, ApiKeyUsageErrorBody]`
- **Error**: `ApiKeyUsageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiKeyUsage` | `audioscrape/models/api_key_usage.py` |
| `ApiKeyUsageErrorBody` | `audioscrape/errors/api_key_usage_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.api_keys.create_api_key

- **Route**: `POST /api/keys`
- **Auth**: `bearer_auth`
- **Signature**: `def create_api_key(body: CreateApiKey | CreateApiKeyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiKey`
- **Returns (raw)**: `ApiResult[ApiKey, CreateApiKeyErrorBody]`
- **Error**: `CreateApiKeyErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateApiKey` | `audioscrape/models/create_api_key.py` |
| `CreateApiKeyDict` | `audioscrape/models/create_api_key.py` |
| `ApiKey` | `audioscrape/models/api_key.py` |
| `CreateApiKeyErrorBody` | `audioscrape/errors/create_api_key_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.api_keys.delete_api_key

- **Route**: `DELETE /api/keys/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_api_key(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteApiKeyErrorBody]`
- **Error**: `DeleteApiKeyErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteApiKeyErrorBody` | `audioscrape/errors/delete_api_key_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.api_keys.list_api_keys

- **Route**: `GET /api/keys`
- **Auth**: `bearer_auth`
- **Signature**: `def list_api_keys(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[ApiKey]`
- **Returns (raw)**: `ApiResult[list[ApiKey], ListApiKeysErrorBody]`
- **Error**: `ListApiKeysErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiKey` | `audioscrape/models/api_key.py` |
| `ListApiKeysErrorBody` | `audioscrape/errors/list_api_keys_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.api_keys.rotate_api_key

- **Route**: `POST /api/keys/{id}/rotate`
- **Auth**: `bearer_auth`
- **Signature**: `def rotate_api_key(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiKey`
- **Returns (raw)**: `ApiResult[ApiKey, RotateApiKeyErrorBody]`
- **Error**: `RotateApiKeyErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiKey` | `audioscrape/models/api_key.py` |
| `RotateApiKeyErrorBody` | `audioscrape/errors/rotate_api_key_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

