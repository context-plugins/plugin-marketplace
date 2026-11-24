<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.analytics` · Source: `read_me/apis/analytics.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.analytics.get_pageviews

- **Route**: `GET /pageviews`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def get_pageviews(*, start: Date | None = None, end: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `start` — query · `end` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.analytics.get_quality

- **Route**: `GET /quality`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def get_quality(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.analytics.get_search

- **Route**: `GET /search`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def get_search(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

