<!-- Generated file — do not edit; regenerated with the SDK. -->

# History — operations

Accessor: `client.history` · Source: `dynamic_feed/apis/history.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.history.history_v1_history_get

- **Route**: `GET /v1/history`
- **Signature**: `def history_v1_history_get(*, tool: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `tool` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, HistoryV1HistoryGetErrorBody]`
- **Error**: `HistoryV1HistoryGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `HistoryV1HistoryGetErrorBody` | `dynamic_feed/errors/history_v1_history_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

