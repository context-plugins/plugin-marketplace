<!-- Generated file — do not edit; regenerated with the SDK. -->

# Browsers — operations

Accessor: `client.browsers` · Source: `browser_stack/apis/browsers.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.browsers.get_browsers

- **Route**: `GET /automate/browsers.json`
- **Auth**: `basic_auth`
- **Signature**: `def get_browsers(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[Browser]`
- **Returns (raw)**: `ApiResult[list[Browser], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Browser` | `browser_stack/models/browser.py` |

