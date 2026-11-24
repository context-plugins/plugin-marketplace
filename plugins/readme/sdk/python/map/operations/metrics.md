<!-- Generated file — do not edit; regenerated with the SDK. -->

# Metrics — operations

Accessor: `client.metrics` · Source: `read_me/apis/metrics.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.metrics.post_request

- **Route**: `POST /request`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def post_request(*, body: list[MetricsRequest | MetricsRequestDict] | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PostRequestErrorBody]`
- **Error**: `PostRequestErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `MetricsRequest` | `read_me/models/metrics_request.py` |
| `MetricsRequestDict` | `read_me/models/metrics_request.py` |
| `PostRequestErrorBody` | `read_me/errors/post_request_error.py` |

