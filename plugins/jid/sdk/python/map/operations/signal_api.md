<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignalApi — operations

Accessor: `client.signal_api` · Source: `jid/apis/signal_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.signal_api.signal

- **Route**: `GET /v1/signal`
- **Signature**: `def signal(*, tz: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `tz` — query
- **Returns (parsed)**: `V1SignalResponse`
- **Returns (raw)**: `ApiResult[V1SignalResponse, SignalErrorBody]`
- **Error**: `SignalErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1SignalResponse` | `jid/models/v1_signal_response.py` |
| `SignalErrorBody` | `jid/errors/signal_error.py` |
| `Error` | `jid/models/error.py` |

