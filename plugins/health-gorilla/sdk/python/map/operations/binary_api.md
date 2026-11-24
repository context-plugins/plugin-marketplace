<!-- Generated file — do not edit; regenerated with the SDK. -->

# BinaryApi — operations

Accessor: `client.binary_api` · Source: `health_gorilla/apis/binary_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.binary_api.read_binary

- **Route**: `GET /Binary/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def read_binary(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Binary`
- **Returns (raw)**: `ApiResult[Binary, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Binary` | `health_gorilla/models/binary.py` |

