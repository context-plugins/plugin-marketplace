<!-- Generated file — do not edit; regenerated with the SDK. -->

# Signals — operations

Accessor: `client.signals` · Source: `paid/apis/signals.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.signals.create_signals

- **Route**: `POST /signals/bulk`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def create_signals(authorization: str, *, body: BulkSignalsRequest | BulkSignalsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `BulkSignalsResponse`
- **Returns (raw)**: `ApiResult[BulkSignalsResponse, CreateSignalsErrorBody]`
- **Error**: `CreateSignalsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkSignalsRequest` | `paid/models/bulk_signals_request.py` |
| `BulkSignalsRequestDict` | `paid/models/bulk_signals_request.py` |
| `BulkSignalsResponse` | `paid/models/bulk_signals_response.py` |
| `CreateSignalsErrorBody` | `paid/errors/create_signals_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

