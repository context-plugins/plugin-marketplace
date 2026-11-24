<!-- Generated file — do not edit; regenerated with the SDK. -->

# Blob — operations

Accessor: `client.blob` · Source: `celestia/apis/blob.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.blob.post_root

- **Route**: `POST /`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def post_root(body: JsonRpcRequest | JsonRpcRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `JsonRpcResponse`
- **Returns (raw)**: `ApiResult[JsonRpcResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `JsonRpcRequest` | `celestia/models/json_rpc_request.py` |
| `JsonRpcRequestDict` | `celestia/models/json_rpc_request.py` |
| `JsonRpcResponse` | `celestia/models/json_rpc_response.py` |

