<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccessControl — operations

Accessor: `client.access_control` · Source: `archbee/apis/access_control.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.access_control.request_magic_link_access

- **Route**: `POST /access-control/request`
- **Auth**: `bearer_auth`
- **Signature**: `def request_magic_link_access(body: AccessControlRequestRequest | AccessControlRequestRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `AccessControlRequestResponse`
- **Returns (raw)**: `ApiResult[AccessControlRequestResponse, RequestMagicLinkAccessErrorBody]`
- **Error**: `RequestMagicLinkAccessErrorBody` — **Case A (typed)**
- **Error arms**: `AccessControlRequest400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccessControlRequestRequest` | `archbee/models/access_control_request_request.py` |
| `AccessControlRequestRequestDict` | `archbee/models/access_control_request_request.py` |
| `AccessControlRequestResponse` | `archbee/models/access_control_request_response.py` |
| `RequestMagicLinkAccessErrorBody` | `archbee/errors/request_magic_link_access_error.py` |
| `AccessControlRequest400Error1` | `archbee/models/access_control_request400_error1.py` |

