<!-- Generated file — do not edit; regenerated with the SDK. -->

# Keys — operations

Accessor: `client.keys` · Source: `statable/apis/keys.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.keys.create_api_key

- **Route**: `POST /keys`
- **Auth**: `bearer_auth`
- **Signature**: `def create_api_key(body: CreateApiKeyRequest | CreateApiKeyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CreatedApiKey`
- **Returns (raw)**: `ApiResult[CreatedApiKey, CreateApiKeyErrorBody]`
- **Error**: `CreateApiKeyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateApiKeyRequest` | `statable/models/create_api_key_request.py` |
| `CreateApiKeyRequestDict` | `statable/models/create_api_key_request.py` |
| `CreatedApiKey` | `statable/models/created_api_key.py` |
| `CreateApiKeyErrorBody` | `statable/errors/create_api_key_error.py` |
| `Error` | `statable/models/error.py` |

### client.keys.list_api_key_events

- **Route**: `GET /keys/{id}/events`
- **Auth**: `bearer_auth`
- **Signature**: `def list_api_key_events(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiKeyEventList`
- **Returns (raw)**: `ApiResult[ApiKeyEventList, ListApiKeyEventsErrorBody]`
- **Error**: `ListApiKeyEventsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiKeyEventList` | `statable/models/api_key_event_list.py` |
| `ListApiKeyEventsErrorBody` | `statable/errors/list_api_key_events_error.py` |
| `Error` | `statable/models/error.py` |

### client.keys.list_api_keys

- **Route**: `GET /keys`
- **Auth**: `bearer_auth`
- **Signature**: `def list_api_keys(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiKeyList`
- **Returns (raw)**: `ApiResult[ApiKeyList, ListApiKeysErrorBody]`
- **Error**: `ListApiKeysErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiKeyList` | `statable/models/api_key_list.py` |
| `ListApiKeysErrorBody` | `statable/errors/list_api_keys_error.py` |
| `Error` | `statable/models/error.py` |

### client.keys.revoke_api_key

- **Route**: `DELETE /keys/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def revoke_api_key(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RevokeApiKeyErrorBody]`
- **Error**: `RevokeApiKeyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 409, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RevokeApiKeyErrorBody` | `statable/errors/revoke_api_key_error.py` |
| `Error` | `statable/models/error.py` |

### client.keys.rotate_api_key

- **Route**: `POST /keys/{id}/rotate`
- **Auth**: `bearer_auth`
- **Signature**: `def rotate_api_key(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `CreatedApiKey`
- **Returns (raw)**: `ApiResult[CreatedApiKey, RotateApiKeyErrorBody]`
- **Error**: `RotateApiKeyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 409, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreatedApiKey` | `statable/models/created_api_key.py` |
| `RotateApiKeyErrorBody` | `statable/errors/rotate_api_key_error.py` |
| `Error` | `statable/models/error.py` |

