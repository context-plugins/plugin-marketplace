<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccessKey — operations

Accessor: `client.access_key` · Source: `browser_stack/apis/access_key.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.access_key.recycle_access_key

- **Route**: `PUT /automate/recycle_key.json`
- **Auth**: `basic_auth`
- **Signature**: `def recycle_access_key(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `AutomateRecycleKeyJsonResponse`
- **Returns (raw)**: `ApiResult[AutomateRecycleKeyJsonResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `AutomateRecycleKeyJsonResponse` | `browser_stack/models/automate_recycle_key_json_response.py` |

