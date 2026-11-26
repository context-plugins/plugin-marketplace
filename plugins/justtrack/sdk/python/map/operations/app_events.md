<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppEvents — operations

Accessor: `client.app_events` · Source: `justtrack/apis/app_events.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.app_events.post_app_event_batch

- **Route**: `POST /appevents/v1`
- **Auth**: `api_key_auth`
- **Server**: `default`
- **Signature**: `def post_app_event_batch(body: list[AppEventBatch | AppEventBatchDict], *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[BatchErrorResponse]`
- **Returns (raw)**: `ApiResult[list[BatchErrorResponse], PostAppEventBatchErrorBody]`
- **Error**: `PostAppEventBatchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 500] · `RawError` [502, anything unmapped]

| Type | Source |
| --- | --- |
| `AppEventBatch` | `justtrack/models/app_event_batch.py` |
| `AppEventBatchDict` | `justtrack/models/app_event_batch.py` |
| `BatchErrorResponse` | `justtrack/models/batch_error_response.py` |
| `PostAppEventBatchErrorBody` | `justtrack/errors/post_app_event_batch_error.py` |
| `ErrorResponse` | `justtrack/models/error_response.py` |

