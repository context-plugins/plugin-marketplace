<!-- Generated file — do not edit; regenerated with the SDK. -->

# KeyResults — operations

Accessor: `client.key_results` · Source: `shortcut/apis/key_results.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.key_results.get_key_result

- **Route**: `GET /api/v3/key-results/{key-result-public-id}`
- **Auth**: `api_token`
- **Signature**: `def get_key_result(key_result_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key_result_public_id`
- **Params**: `key_result_public_id` — path `key-result-public-id`
- **Returns (parsed)**: `KeyResult`
- **Returns (raw)**: `ApiResult[KeyResult, GetKeyResultErrorBody]`
- **Error**: `GetKeyResultErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `KeyResult` | `shortcut/models/key_result.py` |
| `GetKeyResultErrorBody` | `shortcut/errors/get_key_result_error.py` |

### client.key_results.update_key_result

- **Route**: `PUT /api/v3/key-results/{key-result-public-id}`
- **Auth**: `api_token`
- **Signature**: `def update_key_result(key_result_public_id: UUID, body: UpdateKeyResult | UpdateKeyResultDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key_result_public_id`, `body`
- **Params**: `key_result_public_id` — path `key-result-public-id` · `body` — JSON body
- **Returns (parsed)**: `KeyResult`
- **Returns (raw)**: `ApiResult[KeyResult, UpdateKeyResultErrorBody]`
- **Error**: `UpdateKeyResultErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 422, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateKeyResult` | `shortcut/models/update_key_result.py` |
| `UpdateKeyResultDict` | `shortcut/models/update_key_result.py` |
| `KeyResult` | `shortcut/models/key_result.py` |
| `UpdateKeyResultErrorBody` | `shortcut/errors/update_key_result_error.py` |

