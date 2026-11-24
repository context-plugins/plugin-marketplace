<!-- Generated file — do not edit; regenerated with the SDK. -->

# Items — operations

Accessor: `client.items` · Source: `instacart/apis/items.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.items.submit_items

- **Route**: `POST /v2/data_ingestion/catalog/item/submission`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def submit_items(body: ItemSubmissionRequest | ItemSubmissionRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SubmissionResponse`
- **Returns (raw)**: `ApiResult[SubmissionResponse, SubmitItemsErrorBody]`
- **Error**: `SubmitItemsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ItemSubmissionRequest` | `instacart/models/item_submission_request.py` |
| `ItemSubmissionRequestDict` | `instacart/models/item_submission_request.py` |
| `SubmissionResponse` | `instacart/models/submission_response.py` |
| `SubmitItemsErrorBody` | `instacart/errors/submit_items_error.py` |
| `Error` | `instacart/models/error.py` |

